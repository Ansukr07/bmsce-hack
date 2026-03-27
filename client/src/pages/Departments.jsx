import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ArrowRight, ChevronRight } from 'lucide-react';
import { allDepartments, departmentData } from '../constants/departments';

// ─────────────────────────────────────────────────────────────────────────────
// Sub-component: ProgramCard (matching user image)
// ─────────────────────────────────────────────────────────────────────────────
const ProgramCard = ({ level, duration, title, description, intake, color, onClick }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
    onClick={onClick}
    className="relative group bg-white/60 backdrop-blur-2xl rounded-[40px] p-8 pb-10 border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 cursor-pointer flex flex-col min-h-[400px]"
  >
    {/* Top Badges */}
    <div className="flex justify-between items-start mb-10">
      <span
        className="text-[11px] font-bold uppercase tracking-[0.15em] pt-1"
        style={{ color: color }}
      >
        {level}
      </span>
      <span className="bg-[#111111] text-white text-[11px] font-bold px-5 py-2.5 rounded-full tracking-wider">
        {duration}
      </span>
    </div>

    {/* Title & Description */}
    <div className="flex-grow">
      <h3 className="text-[28px] font-bold leading-[1.2] text-[#111111] mb-5 group-hover:text-black transition-colors min-h-[3.6em]">
        {title}
      </h3>
      <p className="text-[#6B6B6B] leading-relaxed text-[15px] font-medium max-w-[90%]">
        {description}
      </p>
    </div>

    {/* Bottom Footer */}
    <div className="pt-8 border-t border-[#EDEDED] flex justify-between items-end">
      <div>
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A3A3A3] mb-1.5">
          Approved Intake
        </p>
        <p className="text-3xl font-bold text-[#111111]">
          {intake} <span className="text-lg font-semibold text-[#6B6B6B] ml-1">Seats</span>
        </p>
      </div>

      <div
        className="w-14 h-14 rounded-full border border-[#E5E5E5] flex items-center justify-center group-hover:bg-[#111111] group-hover:border-[#111111] text-[#111111] group-hover:text-white transition-all duration-300"
      >
        <ChevronRight className="w-6 h-6" strokeWidth={2.5} />
      </div>
    </div>
  </motion.div>
);

// ─────────────────────────────────────────────────────────────────────────────
const Departments = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredItems = allDepartments.filter(dept =>
    dept.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full min-h-screen font-sans bg-transparent pb-32">
        {/* Header Section */}
        <section className="pt-24 pb-20 px-6 lg:px-16 bg-transparent border-b border-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="w-8 h-[2px] bg-[#FB6D39] rounded-full" />
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-[#A3A3A3]">
              BMSIT Campus Portal
            </span>
            <div className="w-8 h-[2px] bg-[#FB6D39] rounded-full" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-bold uppercase tracking-tighter text-[#111111] mb-12 leading-[0.85]"
          >
            DEPARTMENTS
          </motion.h1>

          {/* Search Box */}
          <div className="max-w-2xl mx-auto relative group">
            <div className={`flex items-center bg-[#F4F4F4] rounded-full px-8 py-5 transition-all duration-300 border-2 ${showResults ? 'border-[#111111] bg-white ring-4 ring-black/5' : 'border-transparent group-hover:bg-[#EAEAEA]'}`}>
              <Search className="w-6 h-6 text-[#A3A3A3]" />
              <input
                type="text"
                placeholder="Search for a department or program..."
                value={searchQuery}
                onFocus={() => setShowResults(true)}
                onBlur={() => setTimeout(() => setShowResults(false), 200)}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent outline-none px-4 text-lg font-medium text-[#111111] placeholder:text-[#A3A3A3]"
              />
            </div>

            {/* Dropdown Results */}
            <AnimatePresence>
              {showResults && searchQuery && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 right-0 mt-3 bg-white rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-gray-100 overflow-hidden z-50 p-2"
                >
                  {filteredItems.length > 0 ? (
                    filteredItems.map((dept) => (
                      <button
                        key={dept.slug}
                        onClick={() => navigate(`/departments/${dept.slug}`)}
                        className="w-full flex items-center justify-between p-5 hover:bg-[#F8F9FA] rounded-[24px] transition-all group"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: dept.color }} />
                          <span className="text-lg font-bold text-[#111111]">{dept.name}</span>
                        </div>
                        <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-[#111111] group-hover:translate-x-1 transition-all" />
                      </button>
                    ))
                  ) : (
                    <div className="p-8 text-center text-gray-400 font-medium italic">No results found matching your search</div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-16 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {allDepartments.map((dept) => {
            const data = departmentData[dept.slug];
            const primaryProgram = data.programs[0];

            return (
              <ProgramCard
                key={dept.slug}
                level={primaryProgram.level}
                duration={primaryProgram.duration}
                title={data.fullName}
                description={data.tagline}
                intake={primaryProgram.intake}
                color={dept.color}
                onClick={() => navigate(`/departments/${dept.slug}`)}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Departments;
