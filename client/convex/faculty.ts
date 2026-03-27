import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// Mocking some internal logic for the dashboard stats
export const getDashboardStats = query({
  args: { facultyId: v.id("faculty") },
  handler: async (ctx, args) => {
    // Collect all courses
    const courses = await ctx.db
      .query("courses")
      .withIndex("by_faculty", (q) => q.eq("facultyId", args.facultyId))
      .collect();

    const courseIds = courses.map((c) => c._id);

    // Get assignments to grade and upcoming deadlines
    let pendingAssignments = 0;
    let upcomingExams = 0;
    for (const cid of courseIds) {
      const assignments = await ctx.db
        .query("assignments")
        .withIndex("by_course", (q) => q.eq("courseId", cid))
        .collect();

      for (const assign of assignments) {
        if (assign.status === "Active") upcomingExams++;
        const subs = await ctx.db
          .query("submissions")
          .withIndex("by_assignment", (q) => q.eq("assignmentId", assign._id))
          .filter((q) => q.eq(q.field("status"), "Submitted"))
          .collect();
        pendingAssignments += subs.length;
      }
    }

    // Calculate Average Attendance Across Classes
    let totalPresent = 0;
    let totalRecords = 0;
    for (const cid of courseIds) {
      const records = await ctx.db.query("attendance").withIndex("by_course_and_date", q => q.eq("courseId", cid)).collect();
      totalRecords += records.length;
      totalPresent += records.filter(r => r.status === "present").length;
    }
    const avgAttendance = totalRecords > 0 ? Math.round((totalPresent / totalRecords) * 100) : 0;

    return {
      classesToday: courses.length, 
      pendingAssignments: pendingAssignments,
      avgAttendance: avgAttendance,
      upcomingExams: upcomingExams,
    };
  },
});

export const getSchedule = query({
  args: { facultyId: v.id("faculty"), date: v.string() },
  handler: async (ctx, args) => {
    // Determine day of week
    const dateObj = new Date(args.date);
    const dayName = dateObj.toLocaleDateString("en-US", { weekday: "short" });

    const courses = await ctx.db
      .query("courses")
      .withIndex("by_faculty", (q) => q.eq("facultyId", args.facultyId))
      .collect();

    return courses.filter((c) => c.schedule.days.includes(dayName));
  },
});

export const markAttendance = mutation({
  args: {
    studentId: v.id("students"),
    studentName: v.string(),
    courseId: v.id("courses"),
    courseName: v.string(),
    date: v.string(),
    status: v.union(v.literal("present"), v.literal("absent"), v.literal("holiday"), v.literal("cancelled")),
  },
  handler: async (ctx, args) => {
    // Check if attendance already exists
    const existing = await ctx.db
      .query("attendance")
      .withIndex("by_course_and_date", (q) => q.eq("courseId", args.courseId).eq("date", args.date))
      .filter((q) => q.eq(q.field("studentId"), args.studentId))
      .first();

    if (existing) {
      return await ctx.db.patch(existing._id, { status: args.status });
    }

    return await ctx.db.insert("attendance", args);
  },
});

export const createAssignment = mutation({
  args: {
    courseId: v.id("courses"),
    title: v.string(),
    description: v.string(),
    dueDate: v.string(),
    createdBy: v.id("faculty"),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("assignments", {
      ...args,
      status: "Active",
    });
  },
});

export const gradeSubmission = mutation({
  args: {
    submissionId: v.id("submissions"),
    grade: v.number(),
    feedback: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    return await ctx.db.patch(args.submissionId, {
      grade: args.grade,
      feedback: args.feedback,
      status: "Graded",
    });
  },
});

export const getAssignments = query({
  args: { facultyId: v.id("faculty") },
  handler: async (ctx, args) => {
    const courses = await ctx.db.query("courses").withIndex("by_faculty", q => q.eq("facultyId", args.facultyId)).collect();
    let allAssigns = [];
    for(const c of courses) {
      const assigns = await ctx.db.query("assignments").withIndex("by_course", q => q.eq("courseId", c._id)).collect();
      const enriched = assigns.map(a => ({ ...a, courseName: c.name, section: c.section }));
      allAssigns.push(...enriched);
    }
    return allAssigns.sort((a,b) => b._creationTime - a._creationTime);
  }
});

export const getAttendanceGrid = query({
  args: { courseId: v.optional(v.id("courses")) },
  handler: async (ctx, args) => {
    const courseId = args.courseId;
    if (!courseId) return Array.from({ length: 4 }, () => Array(5).fill(null));

    const records = await ctx.db
      .query("attendance")
      .withIndex("by_course_and_date", q => q.eq("courseId", courseId as any))
      .collect();

    const markedDates = new Set(records.map(r => r.date));
    let markedCount = markedDates.size;
    
    const grid = [];
    for (let w = 0; w < 4; w++) {
      const week = [];
      for (let d = 0; d < 5; d++) {
        if (markedCount > 0) {
          week.push(1);
          markedCount--;
        } else if (w < 3) {
          week.push(2);
        } else {
          week.push(null);
        }
      }
      grid.push(week);
    }
    return grid;
  }
});
