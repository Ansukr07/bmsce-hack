import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// Hidden Admin Logic

export const createUsersBulk = mutation({
  args: {
    users: v.array(
      v.object({
        name: v.string(),
        email: v.string(),
        password: v.string(),
        role: v.union(v.literal("student"), v.literal("faculty")),
        department: v.string(),
        section: v.optional(v.string())
      })
    )
  },
  handler: async (ctx, args) => {
    const insertedIds = [];
    for (const u of args.users) {
      const table = u.role === "student" ? "students" : "faculty";
      const existing = await ctx.db.query(table).withIndex("by_email", q => q.eq("email", u.email)).first();
      
      if (!existing) {
        if (u.role === "student") {
          const id = await ctx.db.insert("students", {
            name: u.name,
            email: u.email,
            password: u.password,
            department: u.department,
            section: u.section || "A",
            createdAt: Date.now()
          });
          insertedIds.push(id);
        } else {
          const id = await ctx.db.insert("faculty", {
            name: u.name,
            email: u.email,
            password: u.password,
            department: u.department,
            createdAt: Date.now()
          });
          insertedIds.push(id);
        }
      }
    }
    return insertedIds;
  }
});

export const deleteUser = mutation({
  args: { 
    id: v.string(), // Send raw string and check which table to delete from
    role: v.union(v.literal("student"), v.literal("faculty"))
  },
  handler: async (ctx, args) => {
    const table = args.role === "student" ? "students" : "faculty";
    await ctx.db.delete(args.id as any);
    return true;
  }
});

export const manageCourse = mutation({
  args: {
    id: v.optional(v.id("courses")),
    name: v.string(),
    code: v.string(),
    facultyId: v.id("faculty"),
    credits: v.number(),
    section: v.string(),
    schedule: v.object({
      days: v.array(v.string()),
      startTime: v.string(),
      endTime: v.string(),
      location: v.string()
    })
  },
  handler: async (ctx, args) => {
    const { id, ...data } = args;
    if (id) {
      await ctx.db.patch(id, data);
      return id;
    } else {
      return await ctx.db.insert("courses", data);
    }
  }
});
