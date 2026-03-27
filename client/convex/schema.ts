import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  students: defineTable({
    name: v.string(),
    email: v.string(),
    password: v.string(), // Required for local auth testing
    imageUrl: v.optional(v.string()), // For frontend profile pictures
    department: v.string(), // E.g., "CSE", "ECE"
    section: v.string(), // E.g., "5A", "3B" 
    createdAt: v.number(), // Timestamp
  })
    .index("by_email", ["email"]),

  faculty: defineTable({
    name: v.string(),
    email: v.string(),
    password: v.string(), // Required for local auth testing
    imageUrl: v.optional(v.string()), // For frontend profile pictures
    department: v.string(), // E.g., "CSE"
    createdAt: v.number(), // Timestamp
  })
    .index("by_email", ["email"]),

  courses: defineTable({
    name: v.string(),
    code: v.string(),
    facultyId: v.id("faculty"),
    credits: v.number(),
    section: v.string(), // E.g., "CSE 5A"
    schedule: v.object({
      days: v.array(v.string()), // E.g., ["Mon", "Wed", "Fri"]
      startTime: v.string(),
      endTime: v.string(),
      location: v.string()
    }),
  })
    .index("by_faculty", ["facultyId"]),

  enrollments: defineTable({
    studentId: v.id("students"),
    courseId: v.id("courses"),
  })
    .index("by_student", ["studentId"])
    .index("by_course", ["courseId"]),

  attendance: defineTable({
    studentId: v.id("students"),
    studentName: v.string(), 
    courseId: v.id("courses"),
    courseName: v.string(), 
    date: v.string(), // YYYY-MM-DD
    status: v.union(v.literal("present"), v.literal("absent"), v.literal("holiday"), v.literal("cancelled")),
  })
    .index("by_student", ["studentId"])
    .index("by_course_and_date", ["courseId", "date"]),

  assignments: defineTable({
    courseId: v.id("courses"),
    title: v.string(),
    description: v.string(),
    dueDate: v.string(), // ISO String or YYYY-MM-DD
    createdBy: v.id("faculty"),
    status: v.optional(v.union(v.literal("Active"), v.literal("Closed"))),
    commentsCount: v.optional(v.number()) // For student portal
  })
    .index("by_course", ["courseId"]),

  submissions: defineTable({
    assignmentId: v.id("assignments"),
    studentId: v.id("students"),
    fileUrl: v.optional(v.string()),
    grade: v.optional(v.number()),
    feedback: v.optional(v.string()),
    status: v.union(v.literal("Pending"), v.literal("Submitted"), v.literal("Graded")),
  })
    .index("by_assignment", ["assignmentId"])
    .index("by_student", ["studentId"]),

  grades: defineTable({
    studentId: v.id("students"),
    courseId: v.id("courses"),
    marks: v.number(),
    semester: v.string(),
  })
    .index("by_student", ["studentId"])
    .index("by_course", ["courseId"]),

  announcements: defineTable({
    title: v.string(),
    content: v.string(),
    audience: v.union(v.literal("public"), v.literal("students"), v.literal("faculty"), v.literal("course")),
    courseId: v.optional(v.id("courses")),
    createdAt: v.number(),
  })
    .index("by_audience", ["audience"]),

  exams: defineTable({
    courseId: v.id("courses"),
    name: v.string(), // E.g., "Midterm 1"
    date: v.string(), // YYYY-MM-DD
  })
    .index("by_course", ["courseId"]),

  // --- Phase 2: Interactive Widgets ---

  notifications: defineTable({
    userId: v.string(), // Polymorphic ID (Student | Faculty)
    message: v.string(),
    type: v.union(v.literal("alert"), v.literal("message"), v.literal("system")),
    isRead: v.boolean(),
    createdAt: v.number(),
  }).index("by_user", ["userId"]),

  todos: defineTable({
    studentId: v.id("students"),
    title: v.string(),
    dueDate: v.string(), // YYYY-MM-DD
    status: v.union(v.literal("To do"), v.literal("In progress"), v.literal("Done")),
    createdAt: v.number(),
  }).index("by_student", ["studentId"]),

  messages: defineTable({
    senderId: v.string(),
    receiverId: v.string(),
    content: v.string(),
    readStatus: v.boolean(),
    timestamp: v.number(),
  })
    .index("by_receiver", ["receiverId"])
    .index("by_conversation", ["senderId", "receiverId"]),

  notes: defineTable({
    userId: v.string(),
    title: v.string(),
    content: v.string(),
    lastUpdated: v.number(),
  }).index("by_user", ["userId"]),
});
