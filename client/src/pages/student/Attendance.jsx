import React, { useState } from 'react';
import { mockAttendance } from '../../lib/mockData';
import { ArrowUpRight, BarChart3, AlertCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Attendance = () => {
  const [expandedHistoryId, setExpandedHistoryId] = useState(null);

  const toggleHistory = (id) => {
    setExpandedHistoryId(expandedHistoryId === id ? null : id);
  };

  // Calculate aggregate
  const totalAttended = mockAttendance.reduce((acc, curr) => acc + curr.attended, 0);
  const totalClasses = mockAttendance.reduce((acc, curr) => acc + curr.total, 0);
  const overallPercentage = ((totalAttended / totalClasses) * 100).toFixed(1);

  const chartData = mockAttendance.map(item => ({
    name: item.subject,
    Present: item.attended,
    Absent: item.total - item.attended,
  }));

  return (
    <main className="flex-1 w-full max-w-[1150px] mx-auto animate-in fade-in duration-500">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-[24px] font-bold text-[#111111]">Attendance Overview</h1>
        <div className="bg-white/70 backdrop-blur-2xl px-5 py-2.5 rounded-full border border-white/80 shadow-sm flex items-center gap-3">
          <span className="text-[#6B6B6B] text-[13px] font-medium">Overall Semester</span>
          <span className="text-[#111111] font-bold text-[16px]">{overallPercentage}%</span>
        </div>
      </div>

      <div className="bg-white/70 backdrop-blur-2xl border border-white/80 p-7 rounded-[28px] shadow-[0_12px_40px_-10px_rgba(0,0,0,0.05)] mb-8 w-full transition-all duration-300 hover:shadow-[0_16px_50px_-12px_rgba(0,0,0,0.08)]">
        <h2 className="text-[18px] font-semibold text-[#111111] mb-6">Subject-wise Class Statistics</h2>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              margin={{ top: 20, right: 30, left: -20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
              <XAxis 
                dataKey="name" 
                tick={{ fontSize: 11, fill: '#6B6B6B', fontWeight: 600 }} 
                tickLine={false} 
                axisLine={false} 
              />
              <YAxis 
                tick={{ fontSize: 12, fill: '#6B6B6B', fontWeight: 600 }} 
                tickLine={false} 
                axisLine={false} 
              />
              <Tooltip 
                cursor={{ fill: 'rgba(0,0,0,0.02)' }}
                contentStyle={{ borderRadius: '16px', border: '1px solid rgba(255,255,255,0.8)', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)', backgroundColor: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(10px)' }}
              />
              <Legend 
                wrapperStyle={{ fontSize: '13px', fontWeight: 600, color: '#111111', paddingTop: '20px' }} 
                iconType="circle"
              />
              <Bar dataKey="Present" stackId="a" fill="#B6FA82" radius={[0, 0, 4, 4]} barSize={40} />
              <Bar dataKey="Absent" stackId="a" fill="#FB6D39" radius={[4, 4, 0, 0]} barSize={40} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {mockAttendance.map((item) => {
          const isDanger = item.percentage < 75;
          const barColor = isDanger ? 'bg-[#FB6D39]' : 'bg-[#B6FA82]';
          const badgeColor = isDanger ? 'bg-[#FB6D39] text-white' : 'bg-[#B6FA82] text-green-950';

          return (
            <div key={item.id} className="bg-white/70 backdrop-blur-2xl border border-white/80 p-7 rounded-[28px] shadow-[0_12px_40px_-10px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-[0_16px_50px_-12px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 relative group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#B6FA82]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="font-semibold text-[16px] text-[#111111] leading-tight mb-1">{item.subject}</h3>
                  <span className="text-[13px] text-[#6B6B6B] font-medium">{item.attended} / {item.total} Classes</span>
                </div>
                <div className={`px-3 py-1 rounded-full text-[12px] font-bold shadow-sm flex items-center gap-1.5 ${badgeColor}`}>
                  {isDanger && <AlertCircle size={14} strokeWidth={2.5} />}
                  {item.percentage}%
                </div>
              </div>

              <div className="h-3 w-full bg-black/5 border border-black/5 rounded-full overflow-hidden flex items-center relative">
                <div 
                  className={`h-full rounded-full shadow-sm transition-all duration-1000 ease-out ${barColor}`} 
                  style={{ width: `${item.percentage}%` }}
                ></div>
              </div>
              
              {isDanger && (
                <p className="text-[12px] font-semibold text-[#FB6D39] mt-4 flex items-center gap-1.5">
                  <AlertCircle size={14} /> Action Required: Below 75%
                </p>
              )}

              <button 
                onClick={() => toggleHistory(item.id)} 
                className="mt-5 flex items-center gap-1 text-[13px] font-semibold text-[#111111] hover:text-[#FB6D39] transition-colors"
              >
                View History {expandedHistoryId === item.id ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </button>

              <div className={`overflow-hidden transition-all duration-300 ${expandedHistoryId === item.id ? 'max-h-[300px] mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="bg-white/50 border border-gray-100/50 rounded-xl p-4 flex flex-col gap-2.5">
                  <h4 className="text-[11px] font-bold text-[#6B6B6B] uppercase tracking-wider mb-1">Recent Classes</h4>
                  {item.recentClasses && item.recentClasses.map((cls, idx) => (
                    <div key={idx} className="flex justify-between items-center text-[13px]">
                      <span className="font-medium text-[#111111]">{cls.date}</span>
                      <span className={`font-bold px-2 py-0.5 rounded-full text-[10px] uppercase tracking-wider ${cls.status === 'Present' ? 'bg-[#B6FA82] text-green-950' : 'bg-[#FB6D39] text-white'}`}>{cls.status}</span>
                    </div>
                  ))}
                  <button className="text-[11px] font-bold text-[#6B6B6B] hover:text-[#111111] mt-2 text-left underline underline-offset-2 transition-colors">Report Discrepancy</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Disclaimer Card */}
      <div className="bg-white/50 backdrop-blur-xl border border-white/60 p-6 rounded-[24px] shadow-sm flex items-start gap-4">
        <div className="p-3 bg-white rounded-full shadow-sm text-[#111111]">
          <BarChart3 size={20} strokeWidth={2.5} />
        </div>
        <div>
          <h4 className="font-semibold text-[15px] text-[#111111]">Attendance Policy Reminder</h4>
          <p className="text-[13px] text-[#6B6B6B] mt-1.5 leading-relaxed max-w-3xl">
            A minimum of 75% attendance in each subject is strictly required to be eligible for the Semester End Examinations (SEE). Discrepancies should be reported to the respective HoD within 3 days of the monthly update.
          </p>
        </div>
      </div>

    </main>
  );
};

export default Attendance;
