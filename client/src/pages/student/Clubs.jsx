import React, { useState } from 'react';
import { mockClubs } from '../../lib/mockData';
import { Users, LogIn, LogOut, Check } from 'lucide-react';

const Clubs = () => {
  const [clubs, setClubs] = useState(mockClubs);

  const toggleJoin = (id) => {
    setClubs(clubs.map(c => {
      if (c.id === id) {
        return { 
          ...c, 
          joined: !c.joined, 
          members: c.joined ? c.members - 1 : c.members + 1 
        };
      }
      return c;
    }));
  };

  return (
    <main className="flex-1 w-full max-w-[1150px] mx-auto animate-in fade-in duration-500">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-[24px] font-bold text-[#111111]">Student Clubs</h1>
          <p className="text-[#6B6B6B] text-[14px] mt-1 font-medium">Discover and join campus communities.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {clubs.map((club) => (
          <div key={club.id} className="bg-white/70 backdrop-blur-2xl border border-white/80 p-8 rounded-[28px] shadow-[0_12px_40px_-10px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-[0_16px_50px_-12px_rgba(0,0,0,0.08)] hover:-translate-y-1 relative group overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#B6FA82]/20 to-[#8ddbfe]/20 rounded-full blur-3xl -mx-10 -my-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-4">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-black/5 flex items-center justify-center text-[#111111] group-hover:bg-[#111111] group-hover:text-white transition-colors duration-300">
                  <Users size={24} strokeWidth={2} />
                </div>
                {club.joined && (
                  <span className="bg-[#B6FA82] text-green-950 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider shadow-sm flex items-center gap-1">
                    <Check size={12} strokeWidth={3} /> Joined
                  </span>
                )}
              </div>
              
              <h3 className="font-bold text-[20px] text-[#111111] mb-2">{club.name}</h3>
              <p className="text-[13.5px] text-[#6B6B6B] leading-relaxed font-medium min-h-[60px]">
                {club.description}
              </p>
            </div>

            <div className="relative z-10 flex items-center justify-between pt-6 mt-2 border-t border-black/5">
              <span className="text-[13px] font-bold text-[#111111] bg-black/5 px-3 py-1.5 rounded-lg">
                {club.members} Members
              </span>
              
              <button 
                onClick={() => toggleJoin(club.id)}
                className={`px-5 py-2.5 rounded-full text-[13px] font-bold shadow-sm transition-all duration-300 hover:scale-105 flex items-center gap-2 ${
                  club.joined 
                    ? 'bg-white border border-gray-200 text-[#FB6D39] hover:bg-red-50 hover:border-red-100 hover:text-red-600' 
                    : 'bg-[#111111] text-white hover:bg-[#222222] hover:shadow-lg'
                }`}
              >
                {club.joined ? (
                  <><LogOut size={16} strokeWidth={2.5} /> Leave</>
                ) : (
                  <><LogIn size={16} strokeWidth={2.5} /> Join Club</>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Clubs;
