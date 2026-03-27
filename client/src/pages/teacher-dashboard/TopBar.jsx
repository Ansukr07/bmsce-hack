import React, { useState } from 'react';
import { Search, Bell } from 'lucide-react';
import { useQuery, useMutation } from 'convex/react';
import { api } from "../../../convex/_generated/api";

export default function TopBar() {
  const userId = localStorage.getItem('userId');
  const alerts = useQuery(api.notifications.getAlerts, userId ? { userId } : "skip") || [];
  const unreadAlerts = alerts.filter(a => !a.isRead);
  const markAsRead = useMutation(api.notifications.markAsRead);
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <header className="flex justify-between items-center mb-8 relative z-20">
      <div className="w-[480px]">
        <div className="relative group focus-within:ring-4 focus-within:ring-[#B6FA82]/30 rounded-full transition-all duration-300 hover:shadow-[0_4px_12px_rgba(0,0,0,0.03)]">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={18} strokeWidth={2.5} />
          <input 
            type="text" 
            placeholder="Search classes, tasks, or students..." 
            className="w-full bg-white/70 backdrop-blur-2xl border border-white/80 text-[#111111] rounded-full py-3.5 pl-12 pr-5 text-[14px] focus:ring-0 shadow-[0_2px_10px_rgba(0,0,0,0.02)] outline-none placeholder:text-gray-400 font-medium transition-all" 
          />
        </div>
      </div>
      
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer">
          <p className="text-[14px] font-semibold text-[#111111]">Faculty</p>
          <img 
            src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop&q=80" 
            alt="Profile" 
            className="w-10 h-10 rounded-full object-cover shadow-sm ring-2 ring-white"
          />
        </div>
        <div className="relative">
          <button onClick={() => setShowNotifications(!showNotifications)} className="relative w-10 h-10 bg-white/70 backdrop-blur-2xl rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.03)] border border-white/80 flex items-center justify-center text-[#6B6B6B] hover:text-[#111111] hover:scale-105 transition-all duration-300">
            <Bell size={18} strokeWidth={2.5} />
            {unreadAlerts.length > 0 && <span className="absolute top-2.5 right-2.5 w-2.5 h-2.5 bg-[#FB6D39] rounded-full ring-2 ring-white"></span>}
          </button>
          {showNotifications && (
            <div className="absolute top-14 right-0 w-80 bg-white/90 backdrop-blur-2xl border border-gray-100 rounded-3xl shadow-xl p-5 z-50">
              <h3 className="font-bold text-[#111111] mb-4 text-lg">Notifications</h3>
              <div className="space-y-3 max-h-[300px] overflow-y-auto">
                {alerts.length > 0 ? alerts.map(a => (
                  <div key={a._id} onClick={() => { if(!a.isRead) markAsRead({ notificationId: a._id }) }} className={`p-4 rounded-2xl text-sm transition-all cursor-pointer ${a.isRead ? 'bg-gray-50 text-gray-500' : 'bg-[#B6FA82]/30 text-[#111111] font-semibold border border-[#B6FA82]/50 shadow-sm'}`}>
                    {a.message}
                  </div>
                )) : <p className="text-gray-400 text-sm font-medium">You are all caught up!</p>}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
