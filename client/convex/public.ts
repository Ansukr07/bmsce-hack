import { query } from "./_generated/server";
import { v } from "convex/values";

export const getCourses = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("courses").collect();
  },
});

export const getFacultyList = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("faculty")
      .collect();
  },
});

export const getAnnouncements = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("announcements")
      .withIndex("by_audience", (q) => q.eq("audience", "public"))
      .order("desc")
      .collect();
  },
});
