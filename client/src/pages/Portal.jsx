import React from 'react';
import {
  LayoutGrid, Calendar, FileText, CheckSquare, BookOpen,
  MessageSquare, Edit, Settings, LogOut, Search, Bell,
  ArrowUpRight, Plus, ChevronDown, Check, X
} from 'lucide-react';

const Portal = () => {
  return (
    <div className="min-h-screen font-sans text-[#111111] selection:bg-[#B6FA82] selection:text-[#111111] overflow-x-hidden relative">

      {/* Ambient Background Glow Layer */}
      <div className="fixed inset-0 -z-10 bg-[#EFEDEE] overflow-hidden pointer-events-none">
        {/* Top-left Green/Blue mix */}
        <div className="absolute top-[-10%] left-[-5%] w-[45%] h-[50%] bg-[#B6FA82] rounded-full mix-blend-multiply filter blur-[100px] opacity-[0.35]"></div>
        <div className="absolute top-[5%] left-[10%] w-[30%] h-[40%] bg-[#8ddbfe] rounded-full mix-blend-multiply filter blur-[120px] opacity-[0.25]"></div>

        {/* Top-right/Center Peach/Orange */}
        <div className="absolute top-[-5%] right-[-10%] w-[55%] h-[60%] bg-[#ffdecc] rounded-full mix-blend-multiply filter blur-[110px] opacity-[0.4]"></div>
        <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] bg-[#FB6D39] rounded-full mix-blend-multiply filter blur-[120px] opacity-[0.15]"></div>

        {/* Bottom Green overlay */}
        <div className="absolute bottom-[-15%] right-[15%] w-[60%] h-[50%] bg-[#B6FA82] rounded-full mix-blend-multiply filter blur-[120px] opacity-[0.25]"></div>

        {/* Center White highlight */}
        <div className="absolute top-[30%] left-[30%] w-[40%] h-[40%] bg-white rounded-full filter blur-[100px] opacity-[0.6]"></div>
      </div>

      {/* SideNavBar */}
      <aside className="fixed left-6 top-6 bottom-6 w-[250px] bg-white-[0.65] backdrop-blur-[40px] border border-white/70 rounded-[32px] shadow-[0_8px_32px_rgba(0,0,0,0.03)] flex flex-col p-6 z-50">
        <div className="mb-8 px-4 pt-2">
          <span className="text-2xl font-black tracking-tight text-[#111111] font-sans">BMSIT Portal</span>
        </div>

        <nav className="flex-1 flex flex-col gap-1.5 relative">
          <a href="#" className="bg-[#111111] text-white rounded-[20px] shadow-[0_8px_20px_rgba(0,0,0,0.12)] flex items-center gap-3 px-5 py-3.5 text-[14px] font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_12px_24px_rgba(0,0,0,0.15)]">
            <LayoutGrid size={18} strokeWidth={2.5} />
            <span>Dashboard</span>
          </a>

          <a href="#" className="text-[#6B6B6B] hover:text-[#111111] hover:bg-white/60 flex items-center gap-3 px-5 py-3.5 text-[14px] font-medium transition-all duration-300 rounded-[20px] hover:scale-[1.02]">
            <Calendar size={18} strokeWidth={2} />
            <span>Schedule</span>
          </a>

          <a href="#" className="text-[#6B6B6B] hover:text-[#111111] hover:bg-white/60 flex items-center gap-3 px-5 py-3.5 text-[14px] font-medium transition-all duration-300 rounded-[20px] hover:scale-[1.02]">
            <FileText size={18} strokeWidth={2} />
            <span>Tasks</span>
          </a>

          <a href="#" className="text-[#6B6B6B] hover:text-[#111111] hover:bg-white/60 flex items-center gap-3 px-5 py-3.5 text-[14px] font-medium transition-all duration-300 rounded-[20px] hover:scale-[1.02]">
            <CheckSquare size={18} strokeWidth={2} />
            <span>Tests</span>
          </a>

          <a href="#" className="text-[#6B6B6B] hover:text-[#111111] hover:bg-white/60 flex items-center gap-3 px-5 py-3.5 text-[14px] font-medium transition-all duration-300 rounded-[20px] hover:scale-[1.02]">
            <BookOpen size={18} strokeWidth={2} />
            <span>Reports</span>
          </a>

          <div className="my-2 px-5"><div className="border-t border-gray-200/40"></div></div>

          <a href="#" className="text-[#6B6B6B] hover:text-[#111111] hover:bg-white/60 flex items-center gap-3 px-5 py-3.5 text-[14px] font-medium transition-all duration-300 rounded-[20px] hover:scale-[1.02]">
            <MessageSquare size={18} strokeWidth={2} />
            <span>Chat</span>
          </a>

          <a href="#" className="text-[#6B6B6B] hover:text-[#111111] hover:bg-white/60 flex items-center gap-3 px-5 py-3.5 text-[14px] font-medium transition-all duration-300 rounded-[20px] hover:scale-[1.02]">
            <Edit size={18} strokeWidth={2} />
            <span>Notes</span>
          </a>
        </nav>

        <div className="mt-8 flex flex-col gap-1.5">
          <a href="#" className="text-[#6B6B6B] hover:text-[#111111] hover:bg-white/60 flex items-center gap-3 px-5 py-3.5 text-[14px] font-medium transition-all duration-300 rounded-[20px] hover:scale-[1.02]">
            <Settings size={18} strokeWidth={2} />
            <span>Settings</span>
          </a>
          <a href="#" className="text-[#6B6B6B] hover:text-red-500 hover:bg-red-50/50 flex items-center gap-3 px-5 py-3.5 text-[14px] font-medium transition-all duration-300 rounded-[20px] hover:scale-[1.02]">
            <LogOut size={18} strokeWidth={2} className="rotate-180" />
            <span>Log out</span>
          </a>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="ml-[280px] min-h-screen px-10 py-8 flex flex-col">

        {/* TopAppBar */}
        <header className="flex justify-between items-center mb-8">
          <div className="w-[480px]">
            <div className="relative group focus-within:ring-4 focus-within:ring-[#B6FA82]/30 rounded-full transition-all duration-300 hover:shadow-[0_4px_12px_rgba(0,0,0,0.03)]">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={18} strokeWidth={2.5} />
              <input
                type="text"
                placeholder="Search"
                className="w-full bg-white/70 backdrop-blur-2xl border border-white/80 text-[#111111] rounded-full py-3.5 pl-12 pr-5 text-[14px] focus:ring-0 shadow-[0_2px_10px_rgba(0,0,0,0.02)] outline-none placeholder:text-gray-400 font-medium transition-all"
              />
            </div>
          </div>

          <div className="flex items-center gap-5">
            <div className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer">
              <p className="text-[14px] font-semibold text-[#111111]">Saira Goodman</p>
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150"
                alt="Profile"
                className="w-10 h-10 rounded-full object-cover shadow-sm ring-2 ring-white"
              />
            </div>
            <button className="relative w-10 h-10 bg-white/70 backdrop-blur-2xl rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.03)] border border-white/80 flex items-center justify-center text-[#6B6B6B] hover:text-[#111111] hover:scale-105 transition-all duration-300">
              <Bell size={18} strokeWidth={2.5} />
              <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-[#111111] rounded-full ring-2 ring-white"></span>
            </button>
          </div>
        </header>

        {/* Dashboard Grid */}
        <main className="flex-1 max-w-[1150px]">
          <div className="grid grid-cols-12 gap-6">

            {/* Left Column: GPA, On-time, My Tasks */}
            <div className="col-span-12 xl:col-span-7 flex flex-col gap-6">

              <div className="grid grid-cols-2 gap-6">
                {/* GPA Card */}
                <div className="bg-white/70 backdrop-blur-2xl border border-white/80 p-7 rounded-[28px] shadow-[0_12px_40px_-10px_rgba(0,0,0,0.05)] flex flex-col justify-between transition-all duration-300 hover:shadow-[0_16px_50px_-12px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#B6FA82]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="flex justify-between items-start mb-6 relative z-10">
                    <span className="text-[16px] font-semibold text-[#111111]">GPA</span>
                    <button className="w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full shadow-sm border border-gray-100 flex items-center justify-center text-[#111111] hover:scale-110 transition-transform duration-300">
                      <ArrowUpRight size={18} strokeWidth={2.5} />
                    </button>
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-[3.5rem] leading-none font-medium tracking-tight text-[#111111]">4.7</span>
                      <span className="bg-[#B6FA82] text-[#111111] px-3.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider shadow-sm">High</span>
                    </div>
                    <p className="text-[13px] text-[#6B6B6B] font-medium leading-relaxed max-w-[90%] mt-3">Your performance has increased by 2% compared to last semester</p>
                  </div>
                </div>

                {/* On-time rate Card */}
                <div className="bg-white/70 backdrop-blur-2xl border border-white/80 p-7 rounded-[28px] shadow-[0_12px_40px_-10px_rgba(0,0,0,0.05)] flex flex-col justify-between transition-all duration-300 hover:shadow-[0_16px_50px_-12px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#B6FA82]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="flex justify-between items-start mb-6 relative z-10">
                    <span className="text-[16px] font-semibold text-[#111111]">On-time rate</span>
                    <button className="w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full shadow-sm border border-gray-100 flex items-center justify-center text-[#111111] hover:scale-110 transition-transform duration-300">
                      <ArrowUpRight size={18} strokeWidth={2.5} />
                    </button>
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-[3.5rem] leading-none font-medium tracking-tight text-[#111111]">96%</span>
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
                  <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-sm border border-gray-100 flex items-center justify-center text-[#111111] hover:scale-110 transition-transform duration-300">
                    <Plus size={20} strokeWidth={2.5} />
                  </button>
                </div>

                <div className="flex gap-2 mb-8">
                  <button className="px-5 py-2 rounded-full text-[13px] font-semibold bg-[#111111] text-white shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:scale-105 transition-all duration-300">All tasks</button>
                  <button className="px-5 py-2 rounded-full text-[13px] font-semibold text-[#6B6B6B] bg-white/60 border border-gray-200/50 hover:bg-white hover:text-[#111111] shadow-sm hover:shadow-md transition-all duration-300">To do</button>
                  <button className="px-5 py-2 rounded-full text-[13px] font-semibold text-[#6B6B6B] bg-white/60 border border-gray-200/50 hover:bg-white hover:text-[#111111] shadow-sm hover:shadow-md transition-all duration-300">In progress</button>
                  <button className="px-5 py-2 rounded-full text-[13px] font-semibold text-[#6B6B6B] bg-white/60 border border-gray-200/50 hover:bg-white hover:text-[#111111] shadow-sm hover:shadow-md transition-all duration-300">Done</button>
                </div>

                <div className="space-y-7 flex-1">
                  {/* Task 1 */}
                  <div className="group">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-[14.5px] leading-snug max-w-[75%] text-[#111111] group-hover:text-[#FB6D39] transition-colors">Conduct a virtual experiment on chemical reactions and prepare a report</h3>
                      <span className="bg-[#8ddbfe] px-4 py-1.5 rounded-full text-[11px] font-bold text-[#006e9c] shrink-0 shadow-sm">To do</span>
                    </div>
                    <div className="flex justify-between items-center text-[12.5px] text-[#6B6B6B] font-medium mt-3">
                      <span>Chemistry</span>
                      <div className="flex items-center gap-1">
                        <span>Jun 8</span>
                        <span className="ml-2 font-bold text-[#111111]">7 comments</span>
                      </div>
                    </div>
                  </div>

                  {/* Task 2 */}
                  <div className="group">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-[14.5px] leading-snug text-[#111111] group-hover:text-[#FB6D39] transition-colors">Complete a term-matching task in biology</h3>
                      <span className="bg-[#FB6D39] px-4 py-1.5 rounded-full text-[11px] font-bold text-white shrink-0 shadow-sm">In progress</span>
                    </div>
                    <div className="flex justify-between items-center text-[12.5px] text-[#6B6B6B] font-medium mb-2.5 mt-3">
                      <span>Biology</span>
                      <div className="flex items-center gap-1">
                        <span>Jun 3</span>
                        <span className="ml-2">No comments</span>
                      </div>
                    </div>
                    <div className="h-2.5 w-full bg-black/5 border border-black/5 rounded-full overflow-hidden flex items-center bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjgiIGZpbGw9InRyYW5zcGFyZW50Ij48L3JlY3Q+PHBhdGggZD0iTS0yIDEwTDEwIDJaTTEwIDEwTDIgLTJaIiBzdHJva2U9IiNlN2U3ZTciIHN0cm9rZS13aWR0aD0iMiI+PC9wYXRoPjwvc3ZnPg==')]">
                      <div className="h-full bg-[#FB6D39] rounded-full w-[35%] shadow-sm"></div>
                    </div>
                  </div>

                  {/* Task 3 */}
                  <div className="group">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-[14.5px] leading-snug max-w-[75%] text-[#111111] group-hover:text-[#B6FA82] transition-colors">Study the influence of cultural traditions on contemporary art</h3>
                      <span className="bg-[#FB6D39] px-4 py-1.5 rounded-full text-[11px] font-bold text-white shrink-0 shadow-sm">In progress</span>
                    </div>
                    <div className="flex justify-between items-center text-[12.5px] text-[#6B6B6B] font-medium mb-2.5 mt-3">
                      <span>Art History</span>
                      <div className="flex items-center gap-1">
                        <span>Jun 2</span>
                        <span className="ml-2">No comments</span>
                      </div>
                    </div>
                    <div className="h-2.5 w-full bg-black/5 border border-black/5 rounded-full overflow-hidden flex items-center bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjgiIGZpbGw9InRyYW5zcGFyZW50Ij48L3JlY3Q+PHBhdGggZD0iTS0yIDEwTDEwIDJaTTEwIDEwTDIgLTJaIiBzdHJva2U9IiNlN2U3ZTciIHN0cm9rZS13aWR0aD0iMiI+PC9wYXRoPjwvc3ZnPg==')]">
                      <div className="h-full bg-[#B6FA82] rounded-full w-[85%] shadow-sm"></div>
                    </div>
                  </div>
                </div>

                <button className="w-full mt-7 py-3 bg-[#111111] text-white rounded-[16px] text-[14px] font-semibold hover:bg-[#222222] transition-all duration-300 shadow-[0_8px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.2)] hover:-translate-y-0.5">
                  View all tasks
                </button>
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

                    <div className="grid grid-cols-12 items-center py-4 border-t border-gray-200/40 px-3 transition-colors hover:bg-white/80 rounded-[16px] cursor-pointer group">
                      <div className="col-span-2 group-hover:text-[#FB6D39] transition-colors">8:20</div>
                      <div className="col-span-3 group-hover:text-[#FB6D39] transition-colors">Biology</div>
                      <div className="col-span-4 flex items-center gap-3">
                        <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop&q=80" className="w-7 h-7 rounded-full object-cover shadow-sm group-hover:scale-110 transition-transform" alt="Teacher" />
                        Terry Melton
                      </div>
                      <div className="col-span-3 text-right font-medium text-[13px] text-[#6B6B6B] group-hover:text-[#111111] transition-colors">B2, room 120</div>
                    </div>

                    <div className="grid grid-cols-12 items-center py-4 border-t border-gray-200/40 px-3 transition-colors hover:bg-white/80 rounded-[16px] cursor-pointer group">
                      <div className="col-span-2 group-hover:text-[#B6FA82] group-hover:mix-blend-multiply transition-colors">9:00</div>
                      <div className="col-span-3 group-hover:text-[#B6FA82] group-hover:mix-blend-multiply transition-colors">Chemistry</div>
                      <div className="col-span-4 flex items-center gap-3">
                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&q=80" className="w-7 h-7 rounded-full object-cover shadow-sm group-hover:scale-110 transition-transform" alt="Teacher" />
                        Olive Castillo
                      </div>
                      <div className="col-span-3 text-right font-medium text-[13px] text-[#6B6B6B] group-hover:text-[#111111] transition-colors">B2, room 124</div>
                    </div>

                    <div className="grid grid-cols-12 items-center py-4 border-t border-gray-200/40 px-3 transition-colors hover:bg-white/80 rounded-[16px] cursor-pointer group">
                      <div className="col-span-2 group-hover:text-[#FB6D39] transition-colors">10:00</div>
                      <div className="col-span-3 group-hover:text-[#FB6D39] transition-colors">Literature</div>
                      <div className="col-span-4 flex items-center gap-3">
                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80" className="w-7 h-7 rounded-full object-cover shadow-sm group-hover:scale-110 transition-transform" alt="Teacher" />
                        Jeremy Curry
                      </div>
                      <div className="col-span-3 text-right font-medium text-[13px] text-[#6B6B6B] group-hover:text-[#111111] transition-colors">B5, room 223</div>
                    </div>

                    <div className="grid grid-cols-12 items-center py-4 border-t border-gray-200/40 px-3 transition-colors hover:bg-white/80 rounded-[16px] pb-1 cursor-pointer group">
                      <div className="col-span-2 group-hover:text-[#B6FA82] group-hover:mix-blend-multiply transition-colors">10:55</div>
                      <div className="col-span-3 group-hover:text-[#B6FA82] group-hover:mix-blend-multiply transition-colors">Art History</div>
                      <div className="col-span-4 flex items-center gap-3">
                        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&q=80" className="w-7 h-7 rounded-full object-cover shadow-sm group-hover:scale-110 transition-transform" alt="Teacher" />
                        Eleanor Padilla
                      </div>
                      <div className="col-span-3 text-right font-medium text-[13px] text-[#6B6B6B] group-hover:text-[#111111] transition-colors">B4, room 178</div>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </main>
      </div>
    </div>
  );
};

export default Portal;
