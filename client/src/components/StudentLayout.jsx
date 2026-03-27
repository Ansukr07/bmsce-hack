import React from 'react';
import { 
  LayoutGrid, Calendar, FileText, CheckSquare, BookOpen, 
  MessageSquare, Users, Bell, Settings, LogOut, Search, User, FileSpreadsheet
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { currentUser } from '../lib/mockData';

const StudentLayout = ({ children }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  const NavItem = ({ path, icon: Icon, label }) => {
    const isActive = currentPath === path;
    if (isActive) {
      return (
        <Link to={path} className="bg-[#111111] text-white rounded-[20px] shadow-[0_8px_20px_rgba(0,0,0,0.12)] flex items-center gap-3 px-5 py-3.5 text-[14px] font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_12px_24px_rgba(0,0,0,0.15)]">
          <Icon size={18} strokeWidth={2.5} />
          <span>{label}</span>
        </Link>
      );
    }
    return (
      <Link to={path} className="text-[#6B6B6B] hover:text-[#111111] hover:bg-white/60 flex items-center gap-3 px-5 py-3.5 text-[14px] font-medium transition-all duration-300 rounded-[20px] hover:scale-[1.02]">
        <Icon size={18} strokeWidth={2} />
        <span>{label}</span>
      </Link>
    );
  };

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
      <aside className="fixed left-6 top-6 bottom-6 w-[250px] bg-white/65 backdrop-blur-[40px] border border-white/70 rounded-[32px] shadow-[0_8px_32px_rgba(0,0,0,0.03)] flex flex-col p-6 z-50">
        <div className="mb-6 px-4 pt-2">
          <span className="text-2xl font-black tracking-tight text-[#111111] font-sans">BMSIT Portal</span>
        </div>

        <nav className="flex-1 flex flex-col gap-1 overflow-y-auto no-scrollbar pb-4 relative">
          <NavItem path="/student/dashboard" icon={LayoutGrid} label="Dashboard" />
          <NavItem path="/student/attendance" icon={CheckSquare} label="Attendance" />
          <NavItem path="/student/marks" icon={FileSpreadsheet} label="Marks" />
          <NavItem path="/student/timetable" icon={Calendar} label="Timetable" />
          <NavItem path="/student/tasks" icon={FileText} label="Tasks" />
          <NavItem path="/student/resources" icon={BookOpen} label="Resources" />

          <div className="my-2 px-5"><div className="border-t border-gray-200/40"></div></div>
          
          <NavItem path="/student/forum" icon={MessageSquare} label="Forum" />
          <NavItem path="/student/clubs" icon={Users} label="Clubs" />
          <NavItem path="/student/notices" icon={Bell} label="Notices" />
        </nav>
        
        <div className="mt-4 flex flex-col gap-1">
          <NavItem path="/student/profile" icon={User} label="Profile" />
          <Link to="/login" className="text-[#6B6B6B] hover:text-red-500 hover:bg-red-50/50 flex items-center gap-3 px-5 py-3.5 text-[14px] font-medium transition-all duration-300 rounded-[20px] hover:scale-[1.02]">
            <LogOut size={18} strokeWidth={2} className="rotate-180" />
            <span>Log out</span>
          </Link>
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
                placeholder="Search resources, notices, students..." 
                className="w-full bg-white/70 backdrop-blur-2xl border border-white/80 text-[#111111] rounded-full py-3.5 pl-12 pr-5 text-[14px] focus:ring-0 shadow-[0_2px_10px_rgba(0,0,0,0.02)] outline-none placeholder:text-gray-400 font-medium transition-all" 
              />
            </div>
          </div>
          
          <div className="flex items-center gap-5">
            <Link to="/student/profile" className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer">
              <p className="text-[14px] font-semibold text-[#111111]">{currentUser.name}</p>
              <img 
                src={currentUser.avatar} 
                alt="Profile" 
                className="w-10 h-10 rounded-full object-cover shadow-sm ring-2 ring-white"
              />
            </Link>
            <Link to="/student/notices" className="relative w-10 h-10 bg-white/70 backdrop-blur-2xl rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.03)] border border-white/80 flex items-center justify-center text-[#6B6B6B] hover:text-[#111111] hover:scale-105 transition-all duration-300">
              <Bell size={18} strokeWidth={2.5} />
              <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-[#111111] rounded-full ring-2 ring-white"></span>
            </Link>
          </div>
        </header>

        {/* Page Content passed as children */}
        {children}
        
      </div>
    </div>
  );
};

export default StudentLayout;
