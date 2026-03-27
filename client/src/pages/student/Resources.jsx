import React from 'react';
import { mockResources } from '../../lib/mockData';
import { FileText, Download, ChevronRight, BookOpen } from 'lucide-react';

const Resources = () => {
  return (
    <main className="flex-1 w-full max-w-[1150px] mx-auto animate-in fade-in duration-500">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-[24px] font-bold text-[#111111]">Study Resources</h1>
          <p className="text-[#6B6B6B] text-[14px] mt-1 font-medium">Access lecture notes, past papers, and reference materials.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockResources.map((subject, index) => {
          // Determine color scheme based on index
          const colors = [
            'from-[#B6FA82]/20 to-transparent border-[#B6FA82]/30 text-green-950 bg-[#B6FA82]',
            'from-[#8ddbfe]/20 to-transparent border-[#8ddbfe]/30 text-[#006e9c] bg-[#8ddbfe]',
            'from-[#ffdecc]/20 to-transparent border-[#ffdecc]/30 text-[#b54620] bg-[#ffdecc]',
            'from-purple-200/20 to-transparent border-purple-200/30 text-purple-900 bg-purple-200',
            'from-pink-200/20 to-transparent border-pink-200/30 text-pink-900 bg-pink-200',
          ];
          const colorClass = colors[index % colors.length];
          const [bgGrad, , borderColor, textColor, badgeBg] = colorClass.split(' ');

          return (
            <div key={index} className="group bg-white/70 backdrop-blur-2xl border border-white/80 p-7 rounded-[28px] shadow-[0_12px_40px_-10px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-[0_16px_50px_-12px_rgba(0,0,0,0.08)] hover:-translate-y-1 relative overflow-hidden flex flex-col justify-between h-[220px]">
              <div className={`absolute inset-0 bg-gradient-to-br ${bgGrad} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center mb-5 border border-black/5 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className={textColor} size={22} strokeWidth={2.5} />
                </div>
                <h3 className="font-bold text-[18px] text-[#111111] leading-tight mb-2 group-hover:text-black transition-colors">{subject.subject}</h3>
                <div className="flex items-center gap-2">
                  <span className={`px-2.5 py-0.5 rounded-md text-[11px] font-bold ${textColor} ${badgeBg}`}>
                    {subject.count} files
                  </span>
                  <span className="text-[12px] text-[#6B6B6B] font-medium">Updated recently</span>
                </div>
              </div>

              <div className="relative z-10 flex items-center justify-between mt-4 pt-4 border-t border-black/5 group-hover:border-black/10 transition-colors">
                <span className="text-[13px] font-semibold text-[#111111] flex items-center gap-1.5 cursor-pointer hover:underline">
                  View Folder
                </span>
                <button className="w-8 h-8 bg-white/80 rounded-full shadow-sm flex items-center justify-center text-[#111111] hover:scale-110 hover:bg-[#111111] hover:text-white transition-all">
                  <ChevronRight size={16} strokeWidth={2.5} />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recommended Resource Section */}
      <h2 className="text-[18px] font-bold text-[#111111] mt-12 mb-6">Recently Added</h2>
      <div className="bg-white/70 backdrop-blur-2xl border border-white/80 rounded-[28px] shadow-[0_12px_40px_-10px_rgba(0,0,0,0.05)] overflow-hidden">
        {[
          { name: "Mathematics III - Module 4 Notes.pdf", subject: "Mathematics III", size: "2.4 MB" },
          { name: "Biology Midterm Question Paper 2025.pdf", subject: "Biology", size: "1.1 MB" },
          { name: "Art History Cultural Traditions Presentation.pptx", subject: "Art History", size: "5.8 MB" }
        ].map((file, idx) => (
          <div key={idx} className="flex items-center justify-between p-5 border-b border-black/5 last:border-0 hover:bg-white/60 transition-colors cursor-pointer group">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#F0F0F0] flex items-center justify-center text-[#6B6B6B] group-hover:bg-[#111111] group-hover:text-white transition-colors">
                <FileText size={18} strokeWidth={2.5} />
              </div>
              <div>
                <h4 className="text-[14px] font-semibold text-[#111111] group-hover:text-[#FB6D39] transition-colors">{file.name}</h4>
                <p className="text-[12px] text-[#6B6B6B] font-medium">{file.subject} • {file.size}</p>
              </div>
            </div>
            <button className="w-9 h-9 border border-gray-200 rounded-full flex items-center justify-center text-[#6B6B6B] hover:text-[#111111] hover:bg-white shadow-sm hover:scale-110 transition-all">
              <Download size={16} strokeWidth={2.5} />
            </button>
          </div>
        ))}
      </div>

    </main>
  );
};

export default Resources;
