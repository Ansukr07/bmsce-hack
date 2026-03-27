import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const getDashboardStats = query({
  args: { studentId: v.id("students") },
  handler: async (ctx, args) => {
    // In a real app, calculate from `grades` and `submissions`
    // Returning dummy but matching data for the UI
    return {
      gpa: 4.7,
      gpaChangeText: "Your performance has increased by 2% compared to last semester",
      onTimeRate: 96,
      onTimeChangeText: "Your scores have increased by 12% compared to last semester"
    };
  },
});

export const getTasks = query({
  args: { studentId: v.id("students") },
  handler: async (ctx, args) => {
    const enrollments = await ctx.db
      .query("enrollments")
      .withIndex("by_student", (q) => q.eq("studentId", args.studentId))
      .collect();

    let allTasks = [];
    for (const enroll of enrollments) {
      const course = await ctx.db.get(enroll.courseId);
      if (!course) continue;

      const aligns = await ctx.db
        .query("assignments")
        .withIndex("by_course", (q) => q.eq("courseId", enroll.courseId))
        .collect();
      
      for (const assign of aligns) {
        // Find existing submission to determine status
        const sub = await ctx.db
          .query("submissions")
          .withIndex("by_assignment", (q) => q.eq("assignmentId", assign._id))
          .filter(q => q.eq(q.field("studentId"), args.studentId))
          .first();
        
        // Mock status based on whether there's a submission
        let taskStatus = "To do";
        let progress = 0;
        if (sub && sub.status === "Submitted") {
          taskStatus = "In progress";
          progress = 50;
        } else if (sub && sub.status === "Graded") {
          taskStatus = "Done";
          progress = 100;
        }

        allTasks.push({
          _id: assign._id,
          title: assign.title,
          courseName: course.name,
          dueDate: assign.dueDate,
          status: taskStatus,
          progress: progress,
          commentsCount: assign.commentsCount || 0
        });
      }
    }
    return allTasks;
  },
});

export const getSchedule = query({
  args: { studentId: v.id("students"), date: v.string() },
  handler: async (ctx, args) => {
    // Determine day of week
    const dateObj = new Date(args.date);
    const dayName = dateObj.toLocaleDateString("en-US", { weekday: "short" });

    const enrollments = await ctx.db
      .query("enrollments")
      .withIndex("by_student", (q) => q.eq("studentId", args.studentId))
      .collect();

    let schedule = [];
    for (const enroll of enrollments) {
      const course = await ctx.db.get(enroll.courseId);
      if (course && course.schedule && course.schedule.days.includes(dayName)) {
        
        let teacherName = "Unknown Teacher";
        let teacherImage = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&q=80";
        if (course.facultyId) {
          const faculty = await ctx.db.get(course.facultyId);
          if (faculty) {
            teacherName = faculty.name;
            if (faculty.imageUrl) teacherImage = faculty.imageUrl;
          }
        }

        schedule.push({
          time: course.schedule.startTime,
          lesson: course.name,
          teacherName,
          teacherImage,
          location: course.schedule.location,
        });
      }
    }
    // Sort logically by time
    schedule.sort((a, b) => a.time.localeCompare(b.time));
    return schedule;
  },
});

export const getAttendance = query({
  args: { studentId: v.id("students") },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("attendance")
      .withIndex("by_student", (q) => q.eq("studentId", args.studentId))
      .collect();
  },
});

export const submitAssignment = mutation({
  args: {
    assignmentId: v.id("assignments"),
    studentId: v.id("students"),
    fileUrl: v.string(),
  },
  handler: async (ctx, args) => {
    const existing = await ctx.db
      .query("submissions")
      .withIndex("by_assignment", (q) => q.eq("assignmentId", args.assignmentId))
      .filter((q) => q.eq(q.field("studentId"), args.studentId))
      .first();

    if (existing) {
      return await ctx.db.patch(existing._id, {
        fileUrl: args.fileUrl,
        status: "Submitted"
      });
    }

    return await ctx.db.insert("submissions", {
      ...args,
      status: "Submitted"
    });
  },
});
