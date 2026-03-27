import React, { useState } from 'react';
import { currentUser } from '../../lib/mockData';
import { Camera, Mail, Phone, MapPin, ShieldCheck, Check } from 'lucide-react';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    email: 'saira.goodman@bmsit.in',
    phone: '+91 98765 43210',
    address: '142 Layout, Yelahanka, Bangalore - 560064',
    bio: 'Avid learner and coding club member. Passionate about full-stack development and open source.'
  });

  const [saving, setSaving] = useState(false);

  const handleSave = () => {
    setSaving(true);
    setTimeout(() => {
      setSaving(false);
      setIsEditing(false);
    }, 800);
  };

  return (
    <main className="flex-1 w-full max-w-[1150px] mx-auto animate-in fade-in duration-500 pb-12">
      
      <div className="bg-white/70 backdrop-blur-2xl border border-white/80 p-8 rounded-[32px] shadow-[0_12px_40px_-10px_rgba(0,0,0,0.05)] w-full mb-8 relative overflow-hidden">
        {/* Banner */}
        <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-r from-[#B6FA82]/20 via-[#ffdecc]/30 to-[#8ddbfe]/20 rounded-t-[32px] border-b border-black/5 pointer-events-none"></div>
        
        <div className="relative z-10 pt-24 px-4 flex flex-col md:flex-row items-start md:items-end gap-6 pb-4">
          <div className="relative group">
            <img 
              src={currentUser.avatar} 
              alt="Profile" 
              className="w-32 h-32 rounded-full object-cover shadow-[0_8px_30px_rgba(0,0,0,0.12)] border-4 border-white transition-transform group-hover:scale-105"
            />
            <button className="absolute bottom-1 right-1 w-9 h-9 bg-[#111111] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#FB6D39] transition-colors">
              <Camera size={16} strokeWidth={2.5} />
            </button>
          </div>
          
          <div className="flex-1">
            <h1 className="text-[28px] font-bold text-[#111111] tracking-tight">{currentUser.name}</h1>
            <div className="flex flex-wrap items-center gap-3 mt-2">
              <span className="bg-[#111111] text-white px-3 py-1 rounded-md text-[12px] font-bold uppercase tracking-wider">{currentUser.usn}</span>
              <span className="text-[14px] text-[#6B6B6B] font-semibold">{currentUser.branch}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
              <span className="text-[14px] text-[#6B6B6B] font-semibold">Semester {currentUser.semester}</span>
            </div>
          </div>

          {!isEditing ? (
            <button 
              onClick={() => setIsEditing(true)}
              className="mt-4 md:mt-0 px-6 py-2.5 bg-white border border-gray-200 text-[#111111] rounded-full text-[14px] font-semibold shadow-sm hover:shadow-md transition-all duration-300"
            >
              Edit Profile
            </button>
          ) : (
            <button 
              onClick={handleSave}
              disabled={saving}
              className="mt-4 md:mt-0 px-6 py-2.5 bg-[#B6FA82] text-green-950 rounded-full text-[14px] font-bold shadow-md hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              {saving ? 'Saving...' : <><Check size={16} strokeWidth={3} /> Save Details</>}
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Contact Info */}
        <div className="bg-white/70 backdrop-blur-2xl border border-white/80 p-8 rounded-[28px] shadow-sm flex flex-col gap-6">
          <h2 className="text-[18px] font-bold text-[#111111] flex items-center gap-2">
            <ShieldCheck size={20} className="text-[#FB6D39]" /> Contact Information
          </h2>
          
          <div className="space-y-5">
            <div>
              <label className="flex items-center gap-2 text-[13px] font-bold text-[#6B6B6B] mb-2 px-1">
                <Mail size={14} /> Official Email
              </label>
              {isEditing ? (
                <input 
                  type="email" 
                  value={profileData.email}
                  onChange={e => setProfileData({...profileData, email: e.target.value})}
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-[14px] font-medium outline-none focus:ring-2 focus:ring-[#B6FA82]" 
                />
              ) : (
                <div className="w-full bg-black/5 border border-transparent rounded-xl px-4 py-3 text-[14px] font-semibold text-[#111111]">
                  {profileData.email}
                </div>
              )}
            </div>

            <div>
              <label className="flex items-center gap-2 text-[13px] font-bold text-[#6B6B6B] mb-2 px-1">
                <Phone size={14} /> Phone Number
              </label>
              {isEditing ? (
                <input 
                  type="tel" 
                  value={profileData.phone}
                  onChange={e => setProfileData({...profileData, phone: e.target.value})}
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-[14px] font-medium outline-none focus:ring-2 focus:ring-[#B6FA82]" 
                />
              ) : (
                <div className="w-full bg-black/5 border border-transparent rounded-xl px-4 py-3 text-[14px] font-semibold text-[#111111]">
                  {profileData.phone}
                </div>
              )}
            </div>

            <div>
              <label className="flex items-center gap-2 text-[13px] font-bold text-[#6B6B6B] mb-2 px-1">
                <MapPin size={14} /> Residential Address
              </label>
              {isEditing ? (
                <textarea 
                  value={profileData.address}
                  onChange={e => setProfileData({...profileData, address: e.target.value})}
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-[14px] font-medium outline-none focus:ring-2 focus:ring-[#B6FA82] resize-none h-[80px]" 
                />
              ) : (
                <div className="w-full bg-black/5 border border-transparent rounded-xl px-4 py-3 text-[14px] font-semibold text-[#111111] leading-relaxed">
                  {profileData.address}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bio & Links */}
        <div className="bg-white/70 backdrop-blur-2xl border border-white/80 p-8 rounded-[28px] shadow-sm flex flex-col gap-6">
          <h2 className="text-[18px] font-bold text-[#111111]">About Me</h2>
          
          <div>
            <label className="block text-[13px] font-bold text-[#6B6B6B] mb-2 px-1">
              Short Bio
            </label>
            {isEditing ? (
              <textarea 
                value={profileData.bio}
                onChange={e => setProfileData({...profileData, bio: e.target.value})}
                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-[14px] font-medium outline-none focus:ring-2 focus:ring-[#B6FA82] resize-none h-[120px]" 
                placeholder="Write a few lines about your academic interests..."
              />
            ) : (
              <div className="w-full bg-black/5 border border-transparent rounded-xl px-4 py-4 text-[14.5px] font-medium text-[#111111] leading-relaxed min-h-[120px]">
                {profileData.bio}
              </div>
            )}
          </div>
        </div>

      </div>

    </main>
  );
};

export default Profile;
