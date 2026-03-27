import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const getConversation = query({
  args: { user1: v.string(), user2: v.string() },
  handler: async (ctx, args) => {
    const sent = await ctx.db
      .query("messages")
      .withIndex("by_conversation", (q) => q.eq("senderId", args.user1).eq("receiverId", args.user2))
      .collect();
      
    const received = await ctx.db
      .query("messages")
      .withIndex("by_conversation", (q) => q.eq("senderId", args.user2).eq("receiverId", args.user1))
      .collect();

    const conversation = [...sent, ...received].sort((a, b) => a.timestamp - b.timestamp);
    return conversation;
  },
});

export const sendMessage = mutation({
  args: { senderId: v.string(), receiverId: v.string(), content: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db.insert("messages", {
      senderId: args.senderId,
      receiverId: args.receiverId,
      content: args.content,
      readStatus: false,
      timestamp: Date.now(),
    });
  },
});
