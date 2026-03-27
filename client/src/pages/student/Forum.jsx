import React, { useState } from 'react';
import { mockPosts, currentUser } from '../../lib/mockData';
import { MessageSquare, ArrowBigUp, MessageCircle, MoreHorizontal, X, Send } from 'lucide-react';

const Forum = () => {
  const [posts, setPosts] = useState(mockPosts);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTitle, setNewTitle] = useState('');

  const handleUpvote = (id) => {
    setPosts(posts.map(p => {
      if (p.id === id) {
        return { ...p, upvotes: p.upvotes + 1, upvoted: true };
      }
      return p;
    }));
  };

  const handleCreatePost = () => {
    if (!newTitle.trim()) return;
    const newPost = {
      id: Date.now(),
      title: newTitle,
      author: currentUser.name,
      authorAvatar: currentUser.avatar,
      upvotes: 1,
      comments: 0,
      date: 'Just now',
      upvoted: true
    };
    setPosts([newPost, ...posts]);
    setNewTitle('');
    setIsModalOpen(false);
  };

  return (
    <main className="flex-1 w-full max-w-[1150px] mx-auto animate-in fade-in duration-500 pb-12">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-[24px] font-bold text-[#111111]">Student Forum</h1>
          <p className="text-[#6B6B6B] text-[14px] mt-1 font-medium">Discuss coursework, ask questions, and share knowledge.</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-[#111111] text-white px-6 py-3 rounded-full text-[14px] font-semibold flex items-center gap-2 shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:bg-[#222222] hover:-translate-y-0.5 transition-all"
        >
          <MessageSquare size={18} strokeWidth={2.5} /> New Discussion
        </button>
      </div>

      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="bg-white/70 backdrop-blur-2xl border border-white/80 p-6 rounded-[24px] shadow-[0_12px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_16px_50px_-12px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-all duration-300 flex items-start gap-5 group">
            
            {/* Upvote Column */}
            <div className="flex flex-col items-center gap-1 bg-white/50 px-2 py-3 rounded-2xl border border-black/5">
              <button 
                onClick={() => handleUpvote(post.id)} 
                className={`p-1.5 rounded-md transition-colors ${post.upvoted ? 'text-[#FB6D39] bg-[#FB6D39]/10' : 'text-[#6B6B6B] hover:text-[#111111] hover:bg-black/5'}`}
              >
                <ArrowBigUp size={22} strokeWidth={post.upvoted ? 3 : 2} />
              </button>
              <span className={`text-[14px] font-bold ${post.upvoted ? 'text-[#FB6D39]' : 'text-[#111111]'}`}>{post.upvotes}</span>
            </div>

            {/* Content Column */}
            <div className="flex-1 pt-1">
              <div className="flex items-center gap-2 mb-2">
                <img src={post.authorAvatar} alt={post.author} className="w-5 h-5 rounded-full object-cover" />
                <span className="text-[12px] font-bold text-[#111111]">{post.author}</span>
                <span className="text-[12px] text-[#6B6B6B] font-medium">• {post.date}</span>
              </div>
              <h3 className="text-[16px] font-bold text-[#111111] leading-snug mb-4 group-hover:text-[#FB6D39] transition-colors cursor-pointer">
                {post.title}
              </h3>
              
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-1.5 text-[13px] font-semibold text-[#6B6B6B] hover:text-[#111111] hover:bg-black/5 px-3 py-1.5 rounded-lg transition-colors">
                  <MessageCircle size={16} strokeWidth={2.5} /> {post.comments} Comments
                </button>
                <button className="flex items-center justify-center w-8 h-8 text-[#6B6B6B] hover:text-[#111111] hover:bg-black/5 rounded-full transition-colors ml-auto">
                  <MoreHorizontal size={18} />
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Create Post Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}></div>
          <div className="bg-[#EFEDEE] border border-white p-6 rounded-[32px] shadow-2xl w-full max-w-2xl relative animate-in zoom-in-95 duration-200">
            
            <div className="flex justify-between items-center mb-6 px-2">
              <h3 className="text-[20px] font-bold text-[#111111]">Start a Discussion</h3>
              <button onClick={() => setIsModalOpen(false)} className="w-8 h-8 flex items-center justify-center bg-white/50 rounded-full text-gray-400 hover:text-[#111111] hover:bg-white shadow-sm transition-all">
                <X size={18} strokeWidth={3} />
              </button>
            </div>
            
            <div className="bg-white p-2 rounded-[24px] shadow-sm mb-4">
              <input 
                type="text" 
                placeholder="What's your question or topic?" 
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                className="w-full bg-transparent px-4 py-3 text-[16px] font-semibold outline-none placeholder:text-gray-400 text-[#111111]" 
                autoFocus
              />
              <textarea 
                placeholder="Add more details (optional)..." 
                className="w-full bg-transparent px-4 py-2 mt-2 text-[14px] outline-none placeholder:text-gray-400 text-[#111111] resize-none min-h-[120px]" 
              ></textarea>
            </div>

            <div className="flex justify-end pt-2">
              <button 
                onClick={handleCreatePost} 
                className={`py-3 px-6 rounded-full text-[14px] font-bold flex items-center gap-2 transition-all ${
                  newTitle.trim() ? 'bg-[#111111] text-white shadow-lg hover:scale-105 hover:-translate-y-0.5' : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                Post Discussion <Send size={16} strokeWidth={2.5} />
              </button>
            </div>

          </div>
        </div>
      )}
    </main>
  );
};

export default Forum;
