import React, { useState } from 'react';
import { mockNotices } from '../../lib/mockData';
import { Bell, CalendarIcon, ChevronRight, Pin } from 'lucide-react';

const Notices = () => {
  const [filter, setFilter] = useState('All');

  const filteredNotices = filter === 'All' ? mockNotices : mockNotices.filter(n => n.type === filter);

  return (
    <main className="flex-1 w-full max-w-[1150px] mx-auto animate-in fade-in duration-500 pb-12">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-[24px] font-bold text-[#111111]">Campus Notices</h1>
          <p className="text-[#6B6B6B] text-[14px] mt-1 font-medium">Official announcements and updates.</p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 items-start">
        
        {/* Main Feed */}
        <div className="w-full lg:w-[70%] bg-white/70 backdrop-blur-2xl border border-white/80 p-8 rounded-[28px] shadow-[0_12px_40px_-10px_rgba(0,0,0,0.05)] flex flex-col min-h-[600px]">
          
          <div className="flex gap-2 mb-8 border-b border-gray-200/50 pb-6 w-full overflow-x-auto no-scrollbar">
            {['All', 'Academic', 'Placement', 'General'].map(f => (
              <button 
                key={f}
                onClick={() => setFilter(f)}
                className={`px-6 py-2.5 rounded-full text-[13px] font-semibold whitespace-nowrap transition-all duration-300 ${
                  filter === f 
                    ? 'bg-[#111111] text-white shadow-[0_4px_12px_rgba(0,0,0,0.15)] scale-105' 
                    : 'text-[#6B6B6B] bg-white/60 border border-gray-200/50 hover:bg-white hover:text-[#111111] hover:shadow-md'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="space-y-5">
            {filteredNotices.length === 0 ? (
              <div className="text-center text-[#6B6B6B] pt-10 font-medium text-[15px]">No notices found for this category.</div>
            ) : (
              filteredNotices.map((notice) => (
                <div key={notice.id} className="group bg-white/50 hover:bg-white/90 border border-white/60 p-6 rounded-[24px] shadow-sm hover:shadow-[0_12px_30px_-10px_rgba(0,0,0,0.08)] transition-all duration-300 cursor-pointer">
                  <div className="flex justify-between items-start mb-3">
                    <span className={`px-3 py-1.5 rounded-md text-[11px] font-bold flex items-center gap-1.5 ${
                      notice.type === 'Academic' ? 'bg-[#B6FA82]/20 text-green-950' :
                      notice.type === 'Placement' ? 'bg-[#ffdecc]/40 text-[#b54620]' :
                      'bg-black/5 text-[#111111]'
                    }`}>
                      {notice.type === 'Academic' && <Pin size={12} strokeWidth={3} className="rotate-45" />}
                      {notice.type}
                    </span>
                    <span className="text-[12.5px] text-[#6B6B6B] font-semibold flex items-center gap-1.5">
                      <CalendarIcon size={14} /> {notice.date}
                    </span>
                  </div>
                  
                  <h3 className="font-bold text-[17px] text-[#111111] mb-2 group-hover:text-[#FB6D39] transition-colors leading-snug pr-4">
                    {notice.title}
                  </h3>
                  <p className="text-[13.5px] text-[#6B6B6B] leading-relaxed font-medium">
                    {notice.description}
                  </p>
                  
                  <div className="flex items-center gap-1.5 text-[13px] font-bold text-[#111111] mt-5 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300">
                    Read Full Notice <ChevronRight size={16} strokeWidth={2.5} />
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Info Sidebar */}
        <div className="w-full lg:w-[30%] flex flex-col gap-6">
          <div className="bg-[#111111] text-white p-8 rounded-[28px] shadow-lg relative overflow-hidden">
            <div className="absolute top-[-20%] right-[-20%] w-[60%] h-[70%] bg-gradient-to-br from-[#FB6D39]/30 to-[#B6FA82]/20 rounded-full blur-[40px] mix-blend-screen pointer-events-none"></div>
            
            <Bell size={32} strokeWidth={1.5} className="mb-6 opacity-80" />
            <h3 className="text-[18px] font-bold mb-2">Stay Updated</h3>
            <p className="text-[14px] text-gray-400 leading-relaxed font-medium mb-8">
              Enable push notifications to never miss crucial academic and placement announcements.
            </p>
            <button className="w-full py-3.5 bg-white text-[#111111] rounded-[16px] text-[14px] font-bold hover:bg-[#B6FA82] transition-colors">
              Enable Alerts
            </button>
          </div>
        </div>

      </div>
    </main>
  );
};

export default Notices;
