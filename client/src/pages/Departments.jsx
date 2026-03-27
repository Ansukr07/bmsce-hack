import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ArrowRight, ChevronRight, Award, Users, Cpu, CheckCircle2, GraduationCap, BookOpen, Terminal } from 'lucide-react';
import { allDepartments, departmentData } from '../constants/departments';

// ─────────────────────────────────────────────────────────────────────────────
// Data for restored sections
// ─────────────────────────────────────────────────────────────────────────────
const programStats = [
  { name: 'Undergraduate (B.E.)', count: '10 Branches', icon: <GraduationCap className="w-6 h-6" /> },
  { name: 'Postgraduate (M.Tech)', count: '4 Streams', icon: <BookOpen className="w-6 h-6" /> },
  { name: 'Management (MBA)', count: 'Research Center', icon: <Users className="w-6 h-6" /> },
  { name: 'Applications (MCA)', count: 'Top Placements', icon: <Terminal className="w-6 h-6" /> },
];

const highlights = [
  { title: "NBA Accredited", desc: "UG program accredited till 2025, reflecting strong academic quality.", icon: <Award className="w-7 h-7" /> },
  { title: "117+ Faculty", desc: "Including 43 Doctorates and 51 currently pursuing Ph.D.", icon: <Users className="w-7 h-7" /> },
  { title: "14 Research Centers", desc: "Recognized by VTU, fostering a deep culture of innovation and discovery.", icon: <Cpu className="w-7 h-7" /> },
  { title: "Top Placements", desc: "Strong industry links with 25 LPA+ highest packages for top branches.", icon: <CheckCircle2 className="w-7 h-7" /> },
];

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
    className="relative group bg-white rounded-[40px] p-8 pb-10 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 cursor-pointer flex flex-col min-h-[420px]"
  >
    {/* Top Badges */}
    <div className="flex justify-between items-start mb-8">
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
      <h3 className="text-[26px] font-bold leading-[1.2] text-[#111111] mb-5 group-hover:text-black transition-colors min-h-[3.6em]">
        {title}
      </h3>
      <p className="text-[#6B6B6B] leading-relaxed text-[15px] font-medium max-w-[95%]">
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
    <div className="w-full min-h-screen font-sans bg-[#F8FAFC]">

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 lg:px-16 overflow-hidden bg-white border-b border-gray-100">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#FB6D39]/5 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 text-center lg:text-left">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-20">
            <div className="flex-grow">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3 mb-8 justify-center lg:justify-start"
              >
                <div className="w-10 h-[2px] bg-[#FB6D39] rounded-full" />
                <span className="text-sm font-bold uppercase tracking-[0.3em] text-[#FB6D39]">
                  BMSIT Campus Portal
                </span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-6xl md:text-8xl font-bold uppercase tracking-tight text-[#111111] leading-[0.85]"
              >
                Find Your <br /> Future.
              </motion.h1>
            </div>

            {/* Search Box */}
            <div className="w-full lg:w-[450px] relative group mx-auto lg:mx-0">
              <div className={`flex items-center bg-[#F4F4F4] rounded-full px-8 py-5 transition-all duration-300 border-2 shadow-2xl shadow-black/5 ${showResults ? 'border-[#111111] bg-white' : 'border-transparent hover:border-gray-200'}`}>
                <Search className="w-6 h-6 text-[#A3A3A3]" />
                <input
                  type="text"
                  placeholder="Search departments..."
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
                    className="absolute top-full left-0 right-0 mt-3 bg-white rounded-[32px] shadow-[0_30px_60px_rgba(0,0,0,0.12)] border border-gray-100 overflow-hidden z-50 p-2 text-left"
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
                          <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-[#111111] transition-all" />
                        </button>
                      ))
                    ) : (
                      <div className="p-8 text-center text-gray-400 font-medium italic">No matches found</div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Grid Section - 3 COLUMNS */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-16 mt-20 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* Program Stats - Restored Dark Section */}
      <section className="py-24 bg-[#111111] mx-6 lg:mx-16 rounded-[60px] mb-32 overflow-hidden relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_#FB6D39_0%,_transparent_70%)] opacity-[0.03]" />

        <div className="max-w-7xl mx-auto px-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {programStats.map((prog, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col gap-4 text-center items-center group"
              >
                <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#FB6D39] group-hover:bg-[#FB6D39] group-hover:text-white transition-all duration-500">
                  {prog.icon}
                </div>
                <span className="text-3xl font-bold text-white tracking-tight">{prog.count}</span>
                <div className="w-8 h-[2px] bg-[#FB6D39]" />
                <span className="text-sm font-bold uppercase tracking-widest text-white/40">{prog.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Grid - Restored Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-16 mb-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {highlights.map((h, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white rounded-[40px] p-10 border border-gray-100 hover:border-[#FB6D39]/20 transition-all duration-500 shadow-sm"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#F4F4F4] flex items-center justify-center text-[#111111] mb-8 group-hover:bg-[#111111] group-hover:text-white transition-all duration-500">
                {h.icon}
              </div>
              <h3 className="text-2xl font-bold uppercase tracking-tight text-[#111111] mb-4">
                {h.title}
              </h3>
              <p className="text-[#6B6B6B] leading-relaxed font-medium">
                {h.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Departments;
