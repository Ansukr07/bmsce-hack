import React, { useState } from 'react';
import { ArrowUpRight, Plus, ChevronDown, ChevronUp, Check, X, PlayCircle, BookOpen, MessageSquare } from 'lucide-react';
import { dashboardStats, allTasks, currentSchedule } from '../../lib/mockData';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [expandedClassId, setExpandedClassId] = useState(null);
  
  const toggleClass = (id) => {
    if (expandedClassId === id) {
      setExpandedClassId(null);
    } else {
      setExpandedClassId(id);
    }
  };

  return (
    <main className="flex-1 max-w-[1150px]">
      <div className="grid grid-cols-12 gap-6">
        
        {/* Left Column: GPA, On-time, My Tasks */}
        <div className="col-span-12 xl:col-span-7 flex flex-col gap-6">
          
          <div className="grid grid-cols-2 gap-6">
            {/* GPA Card */}
            <div className="bg-white/70 backdrop-blur-2xl border border-white/80 p-7 rounded-[28px] shadow-[0_12px_40px_-10px_rgba(0,0,0,0.05)] flex flex-col justify-between transition-all duration-300 hover:shadow-[0_16px_50px_-12px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#B6FA82]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="flex justify-between items-start mb-6 relative z-10">
                <span className="text-[16px] font-semibold text-[#111111]">Current Standing</span>
                <Link to="/student/marks" className="w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full shadow-sm border border-gray-100 flex items-center justify-center text-[#111111] hover:scale-110 transition-transform duration-300">
                  <ArrowUpRight size={18} strokeWidth={2.5} />
                </Link>
              </div>
              <div className="relative z-10">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[12px] font-bold text-[#6B6B6B] uppercase tracking-wider">SGPA</span>
                      <span className="bg-[#B6FA82] text-[#111111] px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider shadow-sm">High</span>
                    </div>
                    <div>
                      <span className="text-[3rem] leading-none font-medium tracking-tight text-[#111111]">{dashboardStats.sgpa}</span>
                      <span className="text-[1.25rem] font-medium tracking-tight text-[#6B6B6B]">/10</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[12px] font-bold text-[#6B6B6B] uppercase tracking-wider">CGPA</span>
                    </div>
                    <div>
                      <span className="text-[3rem] leading-none font-medium tracking-tight text-[#111111]">{dashboardStats.cgpa}</span>
                      <span className="text-[1.25rem] font-medium tracking-tight text-[#6B6B6B]">/10</span>
                    </div>
                  </div>
                </div>
                <p className="text-[13px] text-[#6B6B6B] font-medium leading-relaxed max-w-[90%] mt-3">Your performance has increased by 2% compared to last semester</p>
              </div>
            </div>
            
            {/* On-time rate Card */}
            <div className="bg-white/70 backdrop-blur-2xl border border-white/80 p-7 rounded-[28px] shadow-[0_12px_40px_-10px_rgba(0,0,0,0.05)] flex flex-col justify-between transition-all duration-300 hover:shadow-[0_16px_50px_-12px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#B6FA82]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="flex justify-between items-start mb-6 relative z-10">
                <span className="text-[16px] font-semibold text-[#111111]">On-time rate</span>
                <Link to="/student/tasks" className="w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full shadow-sm border border-gray-100 flex items-center justify-center text-[#111111] hover:scale-110 transition-transform duration-300">
                  <ArrowUpRight size={18} strokeWidth={2.5} />
                </Link>
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-[3.5rem] leading-none font-medium tracking-tight text-[#111111]">{dashboardStats.onTimeRate}%</span>
                  <span className="bg-[#B6FA82] text-[#111111] px-3.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider shadow-sm">High</span>
                </div>
                <p className="text-[13px] text-[#6B6B6B] font-medium leading-relaxed max-w-[90%] mt-3">Your scores have increased by 12% compared to last semester</p>
              </div>
            </div>
          </div>

          {/* My Tasks Card */}
          <div className="bg-white/70 backdrop-blur-2xl border border-white/80 p-8 rounded-[28px] shadow-[0_12px_40px_-10px_rgba(0,0,0,0.05)] flex-1 flex flex-col transition-all duration-300 hover:shadow-[0_16px_50px_-12px_rgba(0,0,0,0.08)] hover:-translate-y-0.5">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-[18px] font-semibold text-[#111111]">My tasks</h2>
              <Link to="/student/tasks" className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-sm border border-gray-100 flex items-center justify-center text-[#111111] hover:scale-110 transition-transform duration-300">
                <Plus size={20} strokeWidth={2.5} />
              </Link>
            </div>
            
            <div className="flex gap-2 mb-8">
              <button className="px-5 py-2 rounded-full text-[13px] font-semibold bg-[#111111] text-white shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:scale-105 transition-all duration-300">All tasks</button>
              <button className="px-5 py-2 rounded-full text-[13px] font-semibold text-[#6B6B6B] bg-white/60 border border-gray-200/50 hover:bg-white hover:text-[#111111] shadow-sm hover:shadow-md transition-all duration-300">To do</button>
              <button className="px-5 py-2 rounded-full text-[13px] font-semibold text-[#6B6B6B] bg-white/60 border border-gray-200/50 hover:bg-white hover:text-[#111111] shadow-sm hover:shadow-md transition-all duration-300">In progress</button>
              <button className="px-5 py-2 rounded-full text-[13px] font-semibold text-[#6B6B6B] bg-white/60 border border-gray-200/50 hover:bg-white hover:text-[#111111] shadow-sm hover:shadow-md transition-all duration-300">Done</button>
            </div>

            <div className="space-y-7 flex-1">
              {allTasks.slice(0, 3).map((task) => (
                <div key={task.id} className="group">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className={`font-semibold text-[14.5px] leading-snug max-w-[75%] text-[#111111] transition-colors ${task.status === 'Done' ? 'line-through text-[#6B6B6B]' : 'group-hover:text-[#FB6D39]'}`}>
                      {task.title}
                    </h3>
                    <span className={`px-4 py-1.5 rounded-full text-[11px] font-bold shrink-0 shadow-sm ${
                      task.status === 'To do' ? 'bg-[#8ddbfe] text-[#006e9c]' : 
                      task.status === 'In progress' ? 'bg-[#FB6D39] text-white' : 
                      'bg-[#B6FA82] text-green-950'
                    }`}>
                      {task.status}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-[12.5px] text-[#6B6B6B] font-medium mb-2.5 mt-3">
                    <span>{task.subject}</span>
                    <div className="flex items-center gap-1">
                      <span>{task.date}</span>
                      <span className={`ml-2 ${task.comments > 0 ? 'font-bold text-[#111111]' : ''}`}>
                        {task.comments > 0 ? `${task.comments} comments` : 'No comments'}
                      </span>
                    </div>
                  </div>
                  {task.status === 'In progress' && (
                    <div className="h-2.5 w-full bg-black/5 border border-black/5 rounded-full overflow-hidden flex items-center bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjgiIGZpbGw9InRyYW5zcGFyZW50Ij48L3JlY3Q+PHBhdGggZD0iTS0yIDEwTDEwIDJaTTEwIDEwTDIgLTJaIiBzdHJva2U9IiNlN2U3ZTciIHN0cm9rZS13aWR0aD0iMiI+PC9wYXRoPjwvc3ZnPg==')]">
                      <div className="h-full bg-[#FB6D39] rounded-full shadow-sm" style={{ width: `${task.progress}%` }}></div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <Link to="/student/tasks" className="block text-center w-full mt-7 py-3 bg-[#111111] text-white rounded-[16px] text-[14px] font-semibold hover:bg-[#222222] transition-all duration-300 shadow-[0_8px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.2)] hover:-translate-y-0.5">
              View all tasks
            </Link>
          </div>

        </div>

        {/* Right Column: Attendance, Schedule */}
        <div className="col-span-12 xl:col-span-5 flex flex-col gap-6 w-full">
          
          {/* Class Attendance Card */}
          <div className="bg-white/70 backdrop-blur-2xl border border-white/80 p-8 rounded-[28px] shadow-[0_12px_40px_-10px_rgba(0,0,0,0.05)] w-full transition-all duration-300 hover:shadow-[0_16px_50px_-12px_rgba(0,0,0,0.08)] hover:-translate-y-0.5">
            <div className="flex justify-between items-center mb-9">
              <h2 className="text-[18px] font-semibold text-[#111111]">Class attendance</h2>
              <button className="px-3.5 py-1.5 rounded-full bg-[#111111] text-white text-[12px] font-semibold flex items-center gap-1.5 shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:scale-105 transition-transform duration-300">
                month <ChevronDown size={14} strokeWidth={2.5} />
              </button>
            </div>
            
            <div className="grid grid-cols-7 gap-y-5 gap-x-2 text-center mb-5 w-full">
              <div className="text-[12px] font-semibold text-[#6B6B6B]">Mon</div>
              <div className="text-[12px] font-semibold text-[#6B6B6B]">Tue</div>
              <div className="text-[12px] font-semibold text-[#6B6B6B]">Wed</div>
              <div className="text-[12px] font-semibold text-[#6B6B6B]">Thu</div>
              <div className="text-[12px] font-semibold text-[#6B6B6B]">Fri</div>
              <div className="text-[12px] font-semibold text-[#6B6B6B]">Sat</div>
              <div className="text-[12px] font-semibold text-[#6B6B6B]">Sun</div>
            </div>
            
            <div className="grid grid-cols-7 gap-y-4 gap-x-1 sm:gap-x-2 place-items-center w-full">
              {/* Row 1 */}
              <div className="w-0"></div> 
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#B6FA82] shadow-sm flex justify-center items-center hover:scale-110 transition-transform cursor-pointer"><Check size={16} strokeWidth={3} className="text-[#111111]" /></div>
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#B6FA82] shadow-sm flex justify-center items-center hover:scale-110 transition-transform cursor-pointer"><Check size={16} strokeWidth={3} className="text-[#111111]" /></div>
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#B6FA82] shadow-sm flex justify-center items-center hover:scale-110 transition-transform cursor-pointer"><Check size={16} strokeWidth={3} className="text-[#111111]" /></div>
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#B6FA82] shadow-sm flex justify-center items-center hover:scale-110 transition-transform cursor-pointer"><Check size={16} strokeWidth={3} className="text-[#111111]" /></div>
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/5 shadow-sm border border-black/5 flex justify-center items-center hover:scale-110 transition-transform cursor-pointer"><X size={14} strokeWidth={3} className="text-[#6B6B6B]" /></div>
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/5 shadow-sm border border-black/5 flex justify-center items-center hover:scale-110 transition-transform cursor-pointer"><X size={14} strokeWidth={3} className="text-[#6B6B6B]" /></div>
              
              {/* Row 2 */}
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#FB6D39] shadow-sm flex justify-center items-center hover:scale-110 transition-transform cursor-pointer"><X size={14} strokeWidth={3} className="text-white" /></div>
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#B6FA82] shadow-sm flex justify-center items-center hover:scale-110 transition-transform cursor-pointer"><Check size={16} strokeWidth={3} className="text-[#111111]" /></div>
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#B6FA82] shadow-sm flex justify-center items-center hover:scale-110 transition-transform cursor-pointer"><Check size={16} strokeWidth={3} className="text-[#111111]" /></div>
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#B6FA82] shadow-sm flex justify-center items-center hover:scale-110 transition-transform cursor-pointer"><Check size={16} strokeWidth={3} className="text-[#111111]" /></div>
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#B6FA82] shadow-sm flex justify-center items-center hover:scale-110 transition-transform cursor-pointer"><Check size={16} strokeWidth={3} className="text-[#111111]" /></div>
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/5 shadow-sm border border-black/5 flex justify-center items-center hover:scale-110 transition-transform cursor-pointer"><X size={14} strokeWidth={3} className="text-[#6B6B6B]" /></div>
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/5 shadow-sm border border-black/5 flex justify-center items-center hover:scale-110 transition-transform cursor-pointer"><X size={14} strokeWidth={3} className="text-[#6B6B6B]" /></div>

              {/* Row 3 */}
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#B6FA82] shadow-sm flex justify-center items-center hover:scale-110 transition-transform cursor-pointer"><Check size={16} strokeWidth={3} className="text-[#111111]" /></div>
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#B6FA82] shadow-sm flex justify-center items-center hover:scale-110 transition-transform cursor-pointer"><Check size={16} strokeWidth={3} className="text-[#111111]" /></div>
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#B6FA82] shadow-sm flex justify-center items-center hover:scale-110 transition-transform cursor-pointer"><Check size={16} strokeWidth={3} className="text-[#111111]" /></div>
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#B6FA82] shadow-sm flex justify-center items-center hover:scale-110 transition-transform cursor-pointer"><Check size={16} strokeWidth={3} className="text-[#111111]" /></div>
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#B6FA82] shadow-sm flex justify-center items-center hover:scale-110 transition-transform cursor-pointer"><Check size={16} strokeWidth={3} className="text-[#111111]" /></div>
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/5 shadow-sm border border-black/5 flex justify-center items-center hover:scale-110 transition-transform cursor-pointer"><X size={14} strokeWidth={3} className="text-[#6B6B6B]" /></div>
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/5 shadow-sm border border-black/5 flex justify-center items-center hover:scale-110 transition-transform cursor-pointer"><X size={14} strokeWidth={3} className="text-[#6B6B6B]" /></div>

              {/* Row 4 */}
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#B6FA82] shadow-sm flex justify-center items-center hover:scale-110 transition-transform cursor-pointer"><Check size={16} strokeWidth={3} className="text-[#111111]" /></div>
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#B6FA82] shadow-sm flex justify-center items-center hover:scale-110 transition-transform cursor-pointer"><Check size={16} strokeWidth={3} className="text-[#111111]" /></div>
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#B6FA82] shadow-sm flex justify-center items-center hover:scale-110 transition-transform cursor-pointer"><Check size={16} strokeWidth={3} className="text-[#111111]" /></div>
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#B6FA82] shadow-sm flex justify-center items-center hover:scale-110 transition-transform cursor-pointer"><Check size={16} strokeWidth={3} className="text-[#111111]" /></div>
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#B6FA82] shadow-sm flex justify-center items-center hover:scale-110 transition-transform cursor-pointer"><Check size={16} strokeWidth={3} className="text-[#111111]" /></div>
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/5 shadow-sm border border-black/5 flex justify-center items-center hover:scale-110 transition-transform cursor-pointer"><X size={14} strokeWidth={3} className="text-[#6B6B6B]" /></div>
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/5 shadow-sm border border-black/5 flex justify-center items-center hover:scale-110 transition-transform cursor-pointer"><X size={14} strokeWidth={3} className="text-[#6B6B6B]" /></div>

              {/* Row 5 */}
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#B6FA82] shadow-sm flex justify-center items-center hover:scale-110 transition-transform cursor-pointer"><Check size={16} strokeWidth={3} className="text-[#111111]" /></div>
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#B6FA82] shadow-sm flex justify-center items-center hover:scale-110 transition-transform cursor-pointer"><Check size={16} strokeWidth={3} className="text-[#111111]" /></div>
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#B6FA82] shadow-sm flex justify-center items-center hover:scale-110 transition-transform cursor-pointer"><Check size={16} strokeWidth={3} className="text-[#111111]" /></div>
            </div>
          </div>

          {/* My Schedule Card */}
          <div className="bg-white/70 backdrop-blur-2xl border border-white/80 p-8 rounded-[28px] shadow-[0_12px_40px_-10px_rgba(0,0,0,0.05)] flex-1 overflow-x-auto w-full transition-all duration-300 hover:shadow-[0_16px_50px_-12px_rgba(0,0,0,0.08)] hover:-translate-y-0.5">
            <div className="flex justify-between items-center mb-9 min-w-[360px]">
              <h2 className="text-[18px] font-semibold text-[#111111]">My schedule</h2>
              <button className="px-3.5 py-1.5 rounded-full bg-[#111111] text-white text-[12px] font-semibold flex items-center gap-1.5 shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:scale-105 transition-transform duration-300">
                today <ChevronDown size={14} strokeWidth={2.5} />
              </button>
            </div>

            <div className="w-full min-w-[360px]">
              <div className="grid grid-cols-12 text-[12px] font-semibold text-[#6B6B6B] mb-4 px-3">
                <div className="col-span-2">Time</div>
                <div className="col-span-3">Lesson</div>
                <div className="col-span-4 pl-2">Teacher</div>
                <div className="col-span-3 text-right">Location</div>
              </div>
              
              <div className="space-y-0 text-[13px] font-semibold text-[#111111]">
                {currentSchedule.map((val) => (
                  <div key={val.id} className="flex flex-col border border-transparent rounded-[16px] transition-all duration-300 hover:bg-white/80 hover:border-gray-100 hover:shadow-sm">
                    <div 
                      className="grid grid-cols-12 items-center py-4 px-3 cursor-pointer group border-t border-gray-200/40"
                      onClick={() => toggleClass(val.id)}
                    >
                      <div className="col-span-2 group-hover:text-[#FB6D39] transition-colors flex items-center gap-2">
                        {expandedClassId === val.id ? <ChevronUp size={14} className="text-[#6B6B6B]" /> : <ChevronDown size={14} className="text-[#6B6B6B]" />}
                        {val.time}
                      </div>
                      <div className="col-span-3 group-hover:text-[#FB6D39] transition-colors">{val.subject}</div>
                      <div className="col-span-4 flex items-center gap-3">
                        <img src={val.teacherAvatar} className="w-7 h-7 rounded-full object-cover shadow-sm group-hover:scale-110 transition-transform" alt="Teacher" />
                        {val.teacher}
                      </div>
                      <div className="col-span-3 text-right font-medium text-[13px] text-[#6B6B6B] group-hover:text-[#111111] transition-colors">{val.location}</div>
                    </div>
                    
                    {/* Expanded Content */}
                    <div className={`overflow-hidden transition-all duration-300 ${expandedClassId === val.id ? 'max-h-[500px] opacity-100 pb-4 px-3' : 'max-h-0 opacity-0'}`}>
                      <div className="bg-white/60 border border-gray-100/50 rounded-2xl p-4 flex flex-col gap-4">
                        <div className="flex justify-between items-start gap-4">
                          <div>
                            <span className="text-[11px] font-bold text-[#6B6B6B] uppercase tracking-wider mb-1 block">Topic taught</span>
                            <h4 className="text-[14px] font-semibold text-[#111111]">{val.topic}</h4>
                          </div>
                          {val.completed && (
                            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FB6D39]/10 text-[#FB6D39] hover:bg-[#FB6D39] hover:text-white transition-colors text-[12px] font-semibold shadow-sm shrink-0">
                              <MessageSquare size={14} strokeWidth={2.5} />
                              Give Feedback
                            </button>
                          )}
                        </div>
                        
                        <div>
                          <span className="text-[11px] font-bold text-[#6B6B6B] uppercase tracking-wider mb-2 block">Catch-up Resources</span>
                          <div className="flex flex-col gap-2">
                            <a href={val.videoUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[12px] font-medium text-[#111111] hover:text-[#FB6D39] transition-colors bg-white/80 p-2 rounded-xl border border-gray-100/50 shadow-sm w-fit pr-4">
                              <div className="w-6 h-6 rounded-full bg-red-50 text-red-500 flex items-center justify-center shrink-0">
                                <PlayCircle size={12} strokeWidth={2.5} />
                              </div>
                              {val.videoTitle}
                            </a>
                            <div className="flex items-center gap-2 text-[12px] font-medium text-[#6B6B6B] bg-white/80 p-2 rounded-xl border border-gray-100/50 shadow-sm w-fit pr-4">
                              <div className="w-6 h-6 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center shrink-0">
                                <BookOpen size={12} strokeWidth={2.5} />
                              </div>
                              {val.textbook}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
          </div>
          
        </div>
        
      </div>
    </main>
  );
};

export default Dashboard;
