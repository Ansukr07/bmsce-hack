import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const getTodos = query({
  args: { studentId: v.id("students") },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("todos")
      .withIndex("by_student", (q) => q.eq("studentId", args.studentId))
      .order("desc")
      .collect();
  },
});

export const createTodo = mutation({
  args: { studentId: v.id("students"), title: v.string(), dueDate: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db.insert("todos", {
      studentId: args.studentId,
      title: args.title,
      dueDate: args.dueDate,
      status: "To do",
      createdAt: Date.now()
    });
  },
});

export const updateStatus = mutation({
  args: { todoId: v.id("todos"), status: v.union(v.literal("To do"), v.literal("In progress"), v.literal("Done")) },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.todoId, { status: args.status });
    return true;
  },
});

export const deleteTodo = mutation({
  args: { todoId: v.id("todos") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.todoId);
    return true;
  },
});
