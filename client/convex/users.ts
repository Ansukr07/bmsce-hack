import { query } from "./_generated/server";
import { v } from "convex/values";

export const getStudentByEmail = query({
  args: { email: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("students")
      .withIndex("by_email", (q) => q.eq("email", args.email))
      .first();
  },
});

export const getFacultyByEmail = query({
  args: { email: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("faculty")
      .withIndex("by_email", (q) => q.eq("email", args.email))
      .first();
  },
});

export const authenticateUser = query({
  args: { 
    email: v.string(), 
    password: v.string(), 
    role: v.union(v.literal("student"), v.literal("faculty")) 
  },
  handler: async (ctx, args) => {
    const tableName = args.role === "student" ? "students" : "faculty";
    const user = await ctx.db
      .query(tableName)
      .withIndex("by_email", (q) => q.eq("email", args.email))
      .first();

    if (!user) {
      return { success: false, message: `No ${args.role} found with that email.` };
    }
    
    // Simple password check for manual local testing
    if (user.password !== args.password) {
      return { success: false, message: "Incorrect password." };
    }

    // Pass the role implicitly down to the client since it was validated
    return { success: true, user: { ...user, role: args.role } };
  },
});
