import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const getNotes = query({
  args: { userId: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("notes")
      .withIndex("by_user", (q) => q.eq("userId", args.userId))
      .order("desc")
      .collect();
  },
});

export const saveNote = mutation({
  args: { userId: v.string(), title: v.string(), content: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db.insert("notes", {
      userId: args.userId,
      title: args.title,
      content: args.content,
      lastUpdated: Date.now(),
    });
  },
});
