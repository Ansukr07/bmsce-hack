import { mutation } from "./_generated/server";

export const populate = mutation({
  args: {},
  handler: async (ctx) => {
    // 1. Create Faculty
    const f1 = await ctx.db.insert("faculty", {
      name: "Terry Melton",
      email: "faculty@bmsit.in", // The default test credentials
      password: "password",
      department: "Biology",
      imageUrl: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop&q=80",
      createdAt: Date.now()
    });

    const f2 = await ctx.db.insert("faculty", {
      name: "Olive Castillo",
      email: "olive@bmsit.in",
      password: "password",
      department: "Chemistry",
      imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&q=80",
      createdAt: Date.now()
    });

    // 2. Create Students
    const s1 = await ctx.db.insert("students", {
      name: "Saira Goodman",
      email: "student@bmsit.in", // The default test credentials
      password: "password",
      department: "Science",
      section: "A",
      createdAt: Date.now()
    });

    // 3. Create Courses
    const c1 = await ctx.db.insert("courses", {
      name: "Biology",
      code: "BIO101",
      facultyId: f1,
      credits: 4,
      section: "A",
      schedule: {
        days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], // For testing, appears every day
        startTime: "08:20",
        endTime: "09:00",
        location: "B2, room 120"
      }
    });

    const c2 = await ctx.db.insert("courses", {
      name: "Chemistry",
      code: "CHE101",
      facultyId: f2,
      credits: 4,
      section: "A",
      schedule: {
        days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], 
        startTime: "09:00",
        endTime: "10:00",
        location: "B2, room 124"
      }
    });

    // 4. Enrollments
    await ctx.db.insert("enrollments", { studentId: s1, courseId: c1 });
    await ctx.db.insert("enrollments", { studentId: s1, courseId: c2 });

    // 5. Assignments
    const a1 = await ctx.db.insert("assignments", {
      courseId: c2, // Chem
      title: "Conduct a virtual experiment on chemical reactions",
      description: "Prepare a report",
      dueDate: "Jun 8",
      createdBy: f2,
      status: "Active",
      commentsCount: 7
    });

    const a2 = await ctx.db.insert("assignments", {
      courseId: c1, // Bio
      title: "Complete a term-matching task in biology",
      description: "Match terms correctly",
      dueDate: "Jun 3",
      createdBy: f1,
      status: "Active",
      commentsCount: 0
    });

    // 6. Submissions
    await ctx.db.insert("submissions", {
      assignmentId: a2,
      studentId: s1,
      status: "Submitted",
      fileUrl: "http://example.com/file.pdf"
    });

    // 7. Attendance (Mock for today)
    await ctx.db.insert("attendance", {
      studentId: s1,
      studentName: "Saira Goodman",
      courseId: c1,
      courseName: "Biology",
      date: new Date().toISOString().split("T")[0],
      status: "present"
    });

    // 8. Phase 2 Features
    await ctx.db.insert("todos", {
      studentId: s1,
      title: "Review Biology textbook chapter 4",
      dueDate: "2024-06-10",
      status: "To do",
      createdAt: Date.now()
    });

    await ctx.db.insert("notifications", {
      userId: s1,
      message: "Terry Melton graded your assignment",
      type: "system",
      isRead: false,
      createdAt: Date.now()
    });

    await ctx.db.insert("notes", {
      userId: s1,
      title: "Chemistry Ideas",
      content: "Make sure to ask about the covalent bonds interaction.",
      lastUpdated: Date.now()
    });

    return "Database populated successfully!";
  }
});
