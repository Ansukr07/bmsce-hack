import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Users, CalendarCheck, FileEdit, FileSpreadsheet, MessageSquare, BellRing, Settings, LogOut, BookOpen } from 'lucide-react';

const menuItems = [
  { name: 'Dashboard', to: '/teacher-dashboard', icon: LayoutDashboard },
  { name: 'My Classes', to: '/teacher-dashboard/classes', icon: BookOpen },
  { name: 'Attendance', to: '/teacher-dashboard/attendance', icon: CalendarCheck },
  { name: 'Assignments', to: '/teacher-dashboard/assignments', icon: FileEdit },
  { name: 'Exams & Results', to: '/teacher-dashboard/exams', icon: FileSpreadsheet },
  { name: 'Students', to: '/teacher-dashboard/students', icon: Users },
  { name: 'Messages', to: '/teacher-dashboard/messages', icon: MessageSquare },
  { name: 'Notices', to: '/teacher-dashboard/notices', icon: BellRing },
];

export default function Sidebar({ setActiveModal }) {
  return (
    <aside className="fixed left-6 top-6 bottom-6 w-[250px] bg-white/[0.65] backdrop-blur-[40px] border border-white/70 rounded-[32px] shadow-[0_8px_32px_rgba(0,0,0,0.03)] flex flex-col p-6 z-50">
      <div className="mb-8 px-4 pt-2">
        <span className="text-2xl font-black tracking-tight text-[#111111] font-sans">BMSIT Portal</span>
      </div>

      <nav className="flex-1 flex flex-col gap-1.5 overflow-y-auto custom-scrollbar pr-2 relative">
        <NavLink to="/teacher-dashboard" end className={({ isActive }) => `flex items-center gap-3 px-5 py-3.5 text-[14px] transition-all duration-300 rounded-[20px] hover:scale-[1.02] ${isActive ? 'bg-[#111111] text-white font-semibold shadow-[0_8px_20px_rgba(0,0,0,0.12)]' : 'text-[#6B6B6B] font-medium hover:text-[#111111] hover:bg-white/60'}`}>
          <LayoutDashboard size={18} strokeWidth={2} /> <span>Dashboard</span>
        </NavLink>
        <button className="text-[#6B6B6B] font-medium hover:text-[#111111] hover:bg-white/60 flex items-center gap-3 px-5 py-3.5 text-[14px] transition-all duration-300 rounded-[20px] hover:scale-[1.02]">
          <BookOpen size={18} strokeWidth={2} /> <span>My Classes</span>
        </button>
        <button className="text-[#6B6B6B] font-medium hover:text-[#111111] hover:bg-white/60 flex items-center gap-3 px-5 py-3.5 text-[14px] transition-all duration-300 rounded-[20px] hover:scale-[1.02]">
          <CalendarCheck size={18} strokeWidth={2} /> <span>Attendance</span>
        </button>
        <button className="text-[#6B6B6B] font-medium hover:text-[#111111] hover:bg-white/60 flex items-center gap-3 px-5 py-3.5 text-[14px] transition-all duration-300 rounded-[20px] hover:scale-[1.02]">
          <FileEdit size={18} strokeWidth={2} /> <span>Assignments</span>
        </button>

        <div className="my-2 px-5"><div className="border-t border-gray-200/40"></div></div>

        <button onClick={() => setActiveModal('chat')} className="text-[#6B6B6B] font-medium hover:text-[#111111] hover:bg-white/60 flex items-center gap-3 px-5 py-3.5 text-[14px] transition-all duration-300 rounded-[20px] hover:scale-[1.02]">
          <MessageSquare size={18} strokeWidth={2} /> <span>Messages</span>
        </button>
        <button onClick={() => setActiveModal('note')} className="text-[#6B6B6B] font-medium hover:text-[#111111] hover:bg-white/60 flex items-center gap-3 px-5 py-3.5 text-[14px] transition-all duration-300 rounded-[20px] hover:scale-[1.02]">
          <FileSpreadsheet size={18} strokeWidth={2} /> <span>Notes</span>
        </button>
      </nav>

      <div className="mt-8 flex flex-col gap-1.5 pt-4 border-t border-gray-200/40">
        <button className="text-[#6B6B6B] hover:text-[#111111] hover:bg-white/60 flex items-center gap-3 px-5 py-3.5 text-[14px] font-medium transition-all duration-300 rounded-[20px] hover:scale-[1.02]">
          <Settings size={18} strokeWidth={2} /> <span>Settings</span>
        </button>
        <button onClick={() => { localStorage.clear(); window.location.href='/'; }} className="text-[#6B6B6B] hover:text-red-500 hover:bg-red-50/50 flex items-center gap-3 px-5 py-3.5 text-[14px] font-medium transition-all duration-300 rounded-[20px] hover:scale-[1.02]">
          <LogOut size={18} strokeWidth={2} className="rotate-180" /> <span>Log out</span>
        </button>
      </div>
    </aside>
  );
}
