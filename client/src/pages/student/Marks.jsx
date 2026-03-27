import React, { useState } from 'react';
import { mockMarks } from '../../lib/mockData';
import { ChevronDown, Search, ArrowDownToLine, Award, Calculator } from 'lucide-react';

const Marks = () => {
  const [semester, setSemester] = useState('Semester 6');
  
  // Fake GPA calculate
  const totalInternal = mockMarks.reduce((acc, curr) => acc + curr.internal, 0);
  const totalExternal = mockMarks.reduce((acc, curr) => acc + curr.external, 0);
  const maxPossible = mockMarks.length * 100;
  const totalAchieved = totalInternal + totalExternal;
  const percentage = ((totalAchieved / maxPossible) * 100).toFixed(1);

  return (
    <main className="flex-1 w-full max-w-[1150px] mx-auto animate-in fade-in duration-500">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-[24px] font-bold text-[#111111]">Academic Records</h1>
          <p className="text-[#6B6B6B] text-[14px] mt-1 font-medium">View your internal and external assessments.</p>
        </div>
        
        <div className="flex gap-4">
          <button className="bg-white/70 backdrop-blur-md border border-white/80 px-5 py-2.5 rounded-full text-[#111111] text-[13px] font-semibold flex items-center gap-2 shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-md transition-all">
            {semester} <ChevronDown size={16} strokeWidth={2.5} />
          </button>
          <button className="bg-[#111111] text-white px-5 py-2.5 rounded-full text-[13px] font-semibold flex items-center gap-2 shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:bg-[#222222] transition-colors">
            <ArrowDownToLine size={16} strokeWidth={2.5} /> Transcript
          </button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6 mb-8">
        
        {/* GPA Summary Card */}
        <div className="col-span-12 lg:col-span-4 bg-[#B6FA82]/90 backdrop-blur-2xl border border-white/80 p-8 rounded-[28px] shadow-[0_12px_40px_-10px_rgba(0,0,0,0.05)] relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/20 rounded-full blur-3xl -mx-10 -my-10 pointer-events-none"></div>
          
          <div className="flex items-center gap-3 mb-6 relative z-10">
            <div className="p-2.5 bg-[#111111] text-[#B6FA82] rounded-full shadow-sm">
              <Award size={22} strokeWidth={2.5} />
            </div>
            <span className="text-[16px] font-bold text-[#111111]">SGPA (Projected)</span>
          </div>

          <div className="relative z-10">
            <div className="text-[4rem] leading-none font-bold tracking-tight text-[#111111]">8.75</div>
            <div className="mt-4 inline-flex items-center gap-2 bg-white/40 border border-white/50 px-4 py-1.5 rounded-full text-[13px] font-bold text-[#111111]">
              <Calculator size={14} strokeWidth={2.5} /> {percentage}% Aggregate
            </div>
          </div>
        </div>

        {/* Detailed Marks Table */}
        <div className="col-span-12 lg:col-span-8 bg-white/70 backdrop-blur-2xl border border-white/80 p-8 rounded-[28px] shadow-[0_12px_40px_-10px_rgba(0,0,0,0.05)] overflow-hidden">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-[18px] font-semibold text-[#111111]">Course Breakdowns</h2>
            <div className="relative group w-[240px]">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} strokeWidth={2.5} />
              <input 
                type="text" 
                placeholder="Search subject..." 
                className="w-full bg-white/80 border border-black/5 text-[#111111] rounded-full py-2.5 pl-10 pr-4 text-[13px] focus:ring-0 outline-none placeholder:text-gray-400 font-medium transition-all" 
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-black/5">
                  <th className="pb-4 pt-2 font-semibold text-[13px] text-[#6B6B6B] pl-2">Subject Name</th>
                  <th className="pb-4 pt-2 font-semibold text-[13px] text-[#6B6B6B] text-center">CIE (50)</th>
                  <th className="pb-4 pt-2 font-semibold text-[13px] text-[#6B6B6B] text-center">SEE (50)</th>
                  <th className="pb-4 pt-2 font-semibold text-[13px] text-[#6B6B6B] text-center">Total (100)</th>
                  <th className="pb-4 pt-2 font-semibold text-[13px] text-[#6B6B6B] text-center">Grade</th>
                </tr>
              </thead>
              <tbody>
                {mockMarks.map((row, index) => (
                  <tr key={row.id} className="border-b border-black/[0.03] transition-colors hover:bg-white/60 group">
                    <td className="py-4 pl-2 font-semibold text-[14px] text-[#111111]">{row.subject}</td>
                    <td className="py-4 text-center font-medium text-[14px] text-[#6B6B6B] group-hover:text-[#111111] transition-colors">{row.internal}</td>
                    <td className="py-4 text-center font-medium text-[14px] text-[#6B6B6B] group-hover:text-[#111111] transition-colors">{row.external}</td>
                    <td className="py-4 text-center font-bold text-[14px] text-[#111111]">{row.total}</td>
                    <td className="py-4 text-center text-[14px] font-bold">
                      <span className={`px-3 py-1 rounded-full text-[12px] shadow-sm ${
                        row.grade === 'S' || row.grade === 'A' ? 'bg-[#B6FA82] text-green-950' :
                        row.grade === 'B' || row.grade === 'C' ? 'bg-[#ffdecc] text-[#FB6D39]' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {row.grade}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
      </div>

    </main>
  );
};

export default Marks;
