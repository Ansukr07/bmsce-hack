import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import { ArrowUpRight, Check, X as XIcon, Plus, ChevronDown, CheckCircle, Clock, Megaphone, MoreHorizontal, FileEdit, FileSpreadsheet } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useQuery, useMutation } from 'convex/react';
import { api } from "../../../convex/_generated/api";

export default function TeacherDashboard() {
  const navigate = useNavigate();
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    if (!userId) navigate('/');
  }, [userId, navigate]);

  const [activeModal, setActiveModal] = useState(null);

  const stats = useQuery(api.faculty.getDashboardStats, userId ? { facultyId: userId } : "skip");
  const scheduleDay = new Date().toISOString().split("T")[0];
  const unformattedSchedule = useQuery(api.faculty.getSchedule, userId ? { facultyId: userId, date: scheduleDay } : "skip");
  const schedule = unformattedSchedule || [];
  const assignmentsList = useQuery(api.faculty.getAssignments, userId ? { facultyId: userId } : "skip") || [];
  
  // Modals state
  const [noteContent, setNoteContent] = useState("");
  const notes = useQuery(api.notes.getNotes, userId ? { userId } : "skip") || [];
  const saveNote = useMutation(api.notes.saveNote);

  const handleSaveNote = async (e) => {
    e.preventDefault();
    if(noteContent) {
      await saveNote({ userId, title: "Quick Note", content: noteContent });
      setNoteContent(""); setActiveModal(null);
    }
  };

  const attendanceGridData = useQuery(api.faculty.getAttendanceGrid, { courseId: schedule.length > 0 ? schedule[0]._id : undefined }) || [
    [1, 1, 1, 2, 0], // Week 1 fallback
    [1, 1, 1, 1, 1], // Week 2
    [2, 1, 1, 0, 1], // Week 3
    [1, 1, null, null, null], // Week 4
  ];
  
  const attendanceGrid = attendanceGridData.length === 4 ? attendanceGridData : [
    [null, null, null, null, null], [null, null, null, null, null], 
    [null, null, null, null, null], [null, null, null, null, null]
  ];

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

      <Sidebar setActiveModal={setActiveModal} />
      
      {/* Main Content Area */}
      <div className="ml-[280px] min-h-screen px-10 py-8 flex flex-col relative z-10 w-[calc(100%-280px)]">
        <TopBar setActiveModal={setActiveModal} />
        
        <main className="flex-1 max-w-[1200px]">
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 w-full">
            
            {/* Left Column (Stats + Assignments) */}
            <div className="col-span-12 xl:col-span-7 flex flex-col gap-6 w-full">
              
              {/* Stats Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Total Classes Today Card */}
                <div className="bg-white/70 backdrop-blur-2xl border border-white/80 p-7 rounded-[28px] shadow-[0_12px_40px_-10px_rgba(0,0,0,0.05)] flex flex-col justify-between transition-all duration-300 hover:shadow-[0_16px_50px_-12px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#B6FA82]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="flex justify-between items-start mb-6 relative z-10">
                    <span className="text-[16px] font-semibold text-[#111111]">Classes Today</span>
                    <button className="w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full shadow-sm border border-gray-100 flex items-center justify-center text-[#111111] hover:scale-110 transition-transform duration-300">
                      <ArrowUpRight size={18} strokeWidth={2.5} />
                    </button>
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-[3.5rem] leading-none font-medium tracking-tight text-[#111111]">{stats?.classesToday ?? '...'}</span>
                      <span className="bg-[#B6FA82] text-[#111111] px-3.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider shadow-sm">Busy</span>
                    </div>
                    <p className="text-[13px] text-[#6B6B6B] font-medium leading-relaxed max-w-[90%] mt-3">You have 4 back-to-back theory and lab sessions today.</p>
                  </div>
                </div>

                {/* Pending Assignments Card */}
                <div className="bg-white/70 backdrop-blur-2xl border border-white/80 p-7 rounded-[28px] shadow-[0_12px_40px_-10px_rgba(0,0,0,0.05)] flex flex-col justify-between transition-all duration-300 hover:shadow-[0_16px_50px_-12px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FB6D39]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="flex justify-between items-start mb-6 relative z-10">
                    <span className="text-[16px] font-semibold text-[#111111]">Assignments to Grade</span>
                    <button className="w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full shadow-sm border border-gray-100 flex items-center justify-center text-[#111111] hover:scale-110 transition-transform duration-300">
                      <ArrowUpRight size={18} strokeWidth={2.5} />
                    </button>
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-[3.5rem] leading-none font-medium tracking-tight text-[#111111]">{stats?.pendingAssignments ?? '...'}</span>
                      <span className="bg-[#FB6D39] text-white px-3.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider shadow-sm">Urgent</span>
                    </div>
                    <p className="text-[13px] text-[#6B6B6B] font-medium leading-relaxed max-w-[90%] mt-3">Web Technology lab records from CSE-5A need review.</p>
                  </div>
                </div>
                
              </div>

              {/* Stats Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                  {/* Avg Attendance */}
                  <div className="bg-white/70 backdrop-blur-2xl border border-white/80 p-7 rounded-[28px] shadow-[0_12px_40px_-10px_rgba(0,0,0,0.05)] w-full transition-all duration-300 hover:shadow-[0_16px_50px_-12px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 group relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#8ddbfe]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="flex justify-between items-start mb-6 relative z-10">
                      <h3 className="font-semibold text-[#111111] text-[16px]">Avg Class Attendance</h3>
                    </div>
                    <div className="flex items-center gap-4 mb-2 relative z-10">
                      <span className="text-[3.5rem] leading-none font-medium tracking-tight text-[#111111]">{stats?.avgAttendance ?? '...'}%</span>
                      <span className="bg-[#B6FA82] text-[#111111] px-3.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider shadow-sm">GOOD</span>
                    </div>
                  </div>

                  {/* Upcoming Exams */}
                  <div className="bg-white/70 backdrop-blur-2xl border border-white/80 p-7 rounded-[28px] shadow-[0_12px_40px_-10px_rgba(0,0,0,0.05)] w-full transition-all duration-300 hover:shadow-[0_16px_50px_-12px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 group relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#ffdecc]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="flex justify-between items-start mb-6 relative z-10">
                      <h3 className="font-semibold text-[#111111] text-[16px]">Upcoming Exams</h3>
                    </div>
                    <div className="flex items-center gap-4 mb-2 relative z-10">
                      <span className="text-[3.5rem] leading-none font-medium tracking-tight text-[#111111]">{stats?.upcomingExams ?? '...'}</span>
                      <span className="bg-[#8ddbfe] text-[#006e9c] px-3.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider shadow-sm">SOON</span>
                    </div>
                  </div>
              </div>


              {/* Assignments / Grading Panel */}
              <div className="bg-white/70 backdrop-blur-2xl border border-white/80 p-8 rounded-[28px] shadow-[0_12px_40px_-10px_rgba(0,0,0,0.05)] flex-1 flex flex-col transition-all duration-300 hover:shadow-[0_16px_50px_-12px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 w-full">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-[18px] font-semibold text-[#111111]">Assignments Panel</h2>
                  <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-sm border border-gray-100 flex items-center justify-center text-[#111111] hover:scale-110 transition-transform duration-300">
                    <Plus size={20} strokeWidth={2.5} />
                  </button>
                </div>
                
                <div className="flex gap-2 mb-8">
                  <button className="px-5 py-2 rounded-full text-[13px] font-semibold bg-[#111111] text-white shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:scale-105 transition-all duration-300">All</button>
                  <button className="px-5 py-2 rounded-full text-[13px] font-semibold text-[#6B6B6B] bg-white/60 border border-gray-200/50 hover:bg-white hover:text-[#111111] shadow-sm hover:shadow-md transition-all duration-300">Submitted</button>
                  <button className="px-5 py-2 rounded-full text-[13px] font-semibold text-[#6B6B6B] bg-white/60 border border-gray-200/50 hover:bg-white hover:text-[#111111] shadow-sm hover:shadow-md transition-all duration-300">Pending</button>
                  <button className="px-5 py-2 rounded-full text-[13px] font-semibold text-[#6B6B6B] bg-white/60 border border-gray-200/50 hover:bg-white hover:text-[#111111] shadow-sm hover:shadow-md transition-all duration-300">Graded</button>
                </div>

                <div className="space-y-6 flex-1 overflow-y-auto max-h-[300px] pr-2">
                  {assignmentsList.length > 0 ? assignmentsList.map((assignment, idx) => (
                    <div key={idx} className="group cursor-pointer border-b border-gray-100 pb-4 last:border-0 hover:bg-white/40 p-2 rounded-2xl transition">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-[14.5px] leading-snug max-w-[75%] text-[#111111] group-hover:text-[#FB6D39] transition-colors">{assignment.title}</h3>
                        <span className={`px-4 py-1.5 rounded-full text-[11px] font-bold shrink-0 shadow-sm ${assignment.status === 'Active' ? 'bg-[#FB6D39] text-white' : 'bg-[#B6FA82] text-[#111111]'}`}>{assignment.status}</span>
                      </div>
                      <div className="flex justify-between items-center text-[12.5px] text-[#6B6B6B] font-medium mt-3">
                        <span>{assignment.courseName} • CSE {assignment.section}</span>
                        <div className="flex items-center gap-1.5 px-4 py-1.5 bg-gray-100/80 hover:bg-gray-200 text-[#111111] rounded-full transition-colors font-semibold">
                          <CheckCircle size={14} className={assignment.status === 'Active' ? "text-[#FB6D39]" : "text-[#36ca49]"} /> <span>{assignment.status === 'Active' ? 'Grade' : 'View'}</span>
                        </div>
                      </div>
                    </div>
                  )) : (
                    <div className="text-center text-gray-400 py-10 font-medium">No assignments mapped to you!</div>
                  )}
                </div>
              </div>

            </div>

            {/* Right Column (Attendance + Schedule) */}
            <div className="col-span-12 xl:col-span-5 flex flex-col gap-6 w-full">
              
              {/* Class Attendance Widget */}
              <div className="bg-white/70 backdrop-blur-2xl border border-white/80 p-8 rounded-[28px] shadow-[0_12px_40px_-10px_rgba(0,0,0,0.05)] w-full transition-all duration-300 hover:shadow-[0_16px_50px_-12px_rgba(0,0,0,0.08)] hover:-translate-y-0.5">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-[18px] font-semibold text-[#111111]">Attendance Manager</h2>
                  <button className="px-3.5 py-1.5 rounded-full bg-[#111111] text-white text-[12px] font-semibold flex items-center gap-1.5 shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:scale-105 transition-transform duration-300">
                    Mark Today
                  </button>
                </div>
                
                <div className="mb-6 relative">
                  <select className="w-full bg-white/60 border border-gray-200 text-[#111111] text-[13px] font-semibold rounded-2xl focus:ring-2 focus:ring-[#B6FA82] focus:border-[#B6FA82] block px-4 py-3 appearance-none shadow-sm transition-all focus:bg-white outline-none">
                    <option>Web Technology - CSE 5A</option>
                    <option>Computer Networks - ISE 5B</option>
                    <option>Software Engineering - CSE 7A</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={16} strokeWidth={2.5} />
                </div>

                <div className="grid grid-cols-5 gap-y-5 gap-x-2 text-center items-center justify-items-center bg-white/40 rounded-[20px] p-5 border border-white/50 shadow-[inset_0_2px_10px_rgba(0,0,0,0.01)] w-full">
                  <div className="text-[12px] font-semibold text-[#6B6B6B] mb-2">Mon</div>
                  <div className="text-[12px] font-semibold text-[#6B6B6B] mb-2">Tue</div>
                  <div className="text-[12px] font-semibold text-[#6B6B6B] mb-2">Wed</div>
                  <div className="text-[12px] font-semibold text-[#6B6B6B] mb-2">Thu</div>
                  <div className="text-[12px] font-semibold text-[#6B6B6B] mb-2">Fri</div>

                  {attendanceGrid.map((row, rIdx) => 
                     row.map((day, cIdx) => (
                       <div key={`${rIdx}-${cIdx}`} className="flex justify-center flex-col items-center w-full">
                         {day === 1 && (
                            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#B6FA82] shadow-sm flex justify-center items-center hover:scale-110 transition-transform cursor-pointer"><Check size={16} strokeWidth={3} className="text-[#111111]" /></div>
                         )}
                         {day === 2 && (
                            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#FB6D39] shadow-sm flex justify-center items-center hover:scale-110 transition-transform cursor-pointer"><XIcon size={14} strokeWidth={3} className="text-white" /></div>
                         )}
                         {day === 0 && (
                            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-gray-100 flex justify-center items-center font-bold text-[#6B6B6B] text-[10px] hover:scale-110 transition-transform cursor-pointer">Hol</div>
                         )}
                         {day === null && (
                            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/5 border border-black/5 flex justify-center items-center hover:scale-110 transition-transform cursor-pointer"></div>
                         )}
                       </div>
                     ))
                   )}
                </div>
              </div>

              {/* My Schedule Card */}
              <div className="bg-white/70 backdrop-blur-2xl border border-white/80 p-8 rounded-[28px] shadow-[0_12px_40px_-10px_rgba(0,0,0,0.05)] flex-1 overflow-x-auto w-full transition-all duration-300 hover:shadow-[0_16px_50px_-12px_rgba(0,0,0,0.08)] hover:-translate-y-0.5">
                <div className="flex justify-between items-center mb-9 min-w-[360px]">
                  <h2 className="text-[18px] font-semibold text-[#111111]">Today's Schedule</h2>
                  <button className="px-3.5 py-1.5 rounded-full bg-[#111111] text-white text-[12px] font-semibold flex items-center gap-1.5 shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:scale-105 transition-transform duration-300">
                    today <ChevronDown size={14} strokeWidth={2.5} />
                  </button>
                </div>

                <div className="w-full min-w-[360px]">
                  <div className="grid grid-cols-12 text-[12px] font-semibold text-[#6B6B6B] mb-4 px-3">
                    <div className="col-span-3">Time</div>
                    <div className="col-span-4">Subject</div>
                    <div className="col-span-5 text-right">Location</div>
                  </div>
                  
                  <div className="space-y-0 text-[13px] font-semibold text-[#111111]">
                    {schedule.length > 0 ? schedule.map((cls, idx) => (
                      <div key={idx} className="grid grid-cols-12 items-center py-4 border-t border-gray-200/40 px-3 transition-colors hover:bg-white/80 rounded-[16px] cursor-pointer group">
                        <div className="col-span-3 group-hover:text-[#B6FA82] group-hover:mix-blend-multiply transition-colors">{cls.schedule.startTime}</div>
                        <div className="col-span-4 flex flex-col items-start gap-0.5 group-hover:text-[#B6FA82] group-hover:mix-blend-multiply transition-colors">
                          <span className="font-semibold text-[14px]">{cls.name}</span>
                          <span className="text-[11px] font-semibold text-[#6B6B6B]">{cls.section}</span>
                        </div>
                        <div className="col-span-5 text-right font-medium text-[13px] text-[#6B6B6B] group-hover:text-[#111111] transition-colors">{cls.schedule.location}</div>
                      </div>
                    )) : (
                      <div className="py-10 text-center text-gray-400 font-medium">No classes scheduled for today!</div>
                    )}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </main>
      </div>

      {/* Interactive Modals */}
      {activeModal && (
        <div className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white/90 backdrop-blur-xl border border-white p-8 rounded-[32px] w-full max-w-md shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold font-serif text-[#111111]">
                {activeModal === 'note' ? 'Write a Note' : 'Conversations'}
              </h2>
              <button onClick={() => setActiveModal(null)} className="p-2 hover:bg-gray-100 rounded-full transition"><XIcon size={20}/></button>
            </div>
            
            {activeModal === 'note' && (
              <form onSubmit={handleSaveNote} className="space-y-4">
                <textarea autoFocus required value={noteContent} onChange={e=>setNoteContent(e.target.value)} placeholder="Type your note here..." rows={4} className="w-full px-4 py-3 rounded-xl bg-white/60 border border-gray-200 outline-none focus:ring-2 focus:ring-[#B6FA82] resize-none text-[#111111] font-medium"></textarea>
                <button className="w-full py-3 bg-[#111111] text-white rounded-xl font-bold hover:bg-[#222]">Save to Scratchpad</button>
                <div className="mt-4 max-h-[30vh] overflow-y-auto space-y-2 pr-2">
                  {notes.map(n => (
                    <div key={n._id} className="p-4 bg-gray-50 rounded-2xl text-sm border border-gray-200 text-[#111111] font-medium shadow-sm">{n.content}</div>
                  ))}
                </div>
              </form>
            )}

            {activeModal === 'chat' && (
              <div className="text-center text-gray-500 py-8 font-medium">
                Live Chat interface building soon! Database is completely ready in convex/messages.ts!
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
