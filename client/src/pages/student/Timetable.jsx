import React, { useState } from 'react';
import { currentSchedule } from '../../lib/mockData';
import { ChevronDown, Clock, MapPin } from 'lucide-react';

const Timetable = () => {
  const [activeDay, setActiveDay] = useState('Monday');
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  return (
    <main className="flex-1 w-full max-w-[1150px] mx-auto animate-in fade-in duration-500">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-[24px] font-bold text-[#111111]">Weekly Timetable</h1>
          <p className="text-[#6B6B6B] text-[14px] mt-1 font-medium">Your current semester schedule across all days.</p>
        </div>
      </div>

      <div className="bg-white/70 backdrop-blur-2xl border border-white/80 p-8 rounded-[28px] shadow-[0_12px_40px_-10px_rgba(0,0,0,0.05)] w-full">
        {/* Day Pills */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2 no-scrollbar">
          {days.map(day => (
            <button 
              key={day}
              onClick={() => setActiveDay(day)}
              className={`px-6 py-2.5 rounded-full text-[13px] font-semibold whitespace-nowrap transition-all duration-300 ${
                activeDay === day 
                  ? 'bg-[#111111] text-white shadow-[0_4px_12px_rgba(0,0,0,0.15)] scale-105' 
                  : 'text-[#6B6B6B] bg-white/60 border border-gray-200/50 hover:bg-white hover:text-[#111111] hover:shadow-md'
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Schedule View */}
        <div className="w-full min-w-[600px] overflow-x-auto">
          <div className="grid grid-cols-12 text-[12px] font-semibold text-[#6B6B6B] mb-4 px-4">
            <div className="col-span-2">Time</div>
            <div className="col-span-3">Lesson</div>
            <div className="col-span-4 pl-2">Teacher</div>
            <div className="col-span-3 text-right">Location</div>
          </div>
          
          <div className="space-y-0 text-[13px] font-semibold text-[#111111]">
            {activeDay === 'Monday' ? currentSchedule.map((val, index) => {
              const isCurrent = index === 1; // Faking Olive Castillo as current class
              
              return (
                <div 
                  key={val.id} 
                  className={`grid grid-cols-12 items-center py-5 border-t border-gray-200/40 px-4 transition-colors rounded-[20px] cursor-pointer group ${
                    isCurrent ? 'bg-[#B6FA82]/20 border-transparent relative hover:bg-[#B6FA82]/30' : 'hover:bg-white/80'
                  }`}
                >
                  {isCurrent && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-8 bg-[#B6FA82] rounded-r-md"></div>
                  )}
                  
                  <div className="col-span-2 flex items-center gap-2 group-hover:text-[#FB6D39] transition-colors">
                    <Clock size={14} className={isCurrent ? 'text-[#3E6F18]' : 'text-gray-400'} /> {val.time}
                  </div>
                  <div className="col-span-3 text-[14px] group-hover:text-[#FB6D39] transition-colors">{val.subject}</div>
                  <div className="col-span-4 flex items-center gap-3">
                    <img src={val.teacherAvatar} className="w-8 h-8 rounded-full object-cover shadow-sm group-hover:scale-110 transition-transform" alt="Teacher" />
                    {val.teacher}
                  </div>
                  <div className="col-span-3 flex items-center justify-end gap-1.5 text-right font-medium text-[13px] text-[#6B6B6B] group-hover:text-[#111111] transition-colors">
                    {val.location} <MapPin size={14} />
                  </div>
                </div>
              );
            }) : (
              <div className="py-20 text-center text-[#6B6B6B] font-medium text-[15px]">
                No classes scheduled for {activeDay} in the mock data. Try Monday.
              </div>
            )}
          </div>
        </div>
        
      </div>

    </main>
  );
};

export default Timetable;
