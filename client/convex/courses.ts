import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const getCourse = query({
  args: { id: v.id("courses") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});

export const getCoursesByFaculty = query({
  args: { facultyId: v.id("faculty") },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("courses")
      .withIndex("by_faculty", (q) => q.eq("facultyId", args.facultyId))
      .collect();
  },
});
