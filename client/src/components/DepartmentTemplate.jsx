import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft, GraduationCap, Users, CheckCircle2,
  ChevronRight, Mail, Phone, BookOpen, Layers, User, Calendar, Trophy, Activity, Briefcase, FlaskConical, Info
} from 'lucide-react';

const DepartmentTemplate = ({ meta, data, showBackLink = true, onBack }) => {
  const departmentTabs = [
    { id: 'about', label: 'About the Department', icon: Info },
    { id: 'syllabus', label: 'Autonomous Syllabus', icon: BookOpen },
    { id: 'faculty', label: 'Faculty Details', icon: Users },
    { id: 'timetable', label: 'Time Table', icon: Calendar },
    { id: 'achievements', label: 'Achievements', icon: Trophy },
    { id: 'activities', label: 'Student Activities', icon: Activity },
    { id: 'placements', label: 'Placements', icon: Briefcase },
    { id: 'rnd', label: 'R & D', icon: FlaskConical },
  ];

  const [activeTab, setActiveTab] = useState('about');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const accent = meta.color;

  return (
    <div className="w-full font-sans text-[#111111] bg-white">
      {/* Back Link */}
      {showBackLink && (
        <div className="max-w-7xl mx-auto px-6 lg:px-16 pt-6">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-sm font-medium text-[#6B6B6B] hover:text-[#111111] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> All Departments
          </button>
        </div>
      )}

      {/* Hero */}
      <section className="relative w-full px-6 lg:px-16 pt-12 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
          {/* Left Content */}
          <div className="lg:w-[60%]">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 mb-6"
            >
              <span
                className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full text-white"
                style={{ backgroundColor: accent }}
              >
                {data.accreditation}
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-[#6B6B6B]">
                Est. {data.established}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-tight mb-4"
            >
              {data.fullName}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.18 }}
              className="w-24 h-1 mb-6 rounded-full"
              style={{ backgroundColor: accent }}
            />

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22 }}
              className="text-base md:text-lg font-medium text-[#6B6B6B] max-w-2xl leading-relaxed italic"
            >
              "{data.tagline}"
            </motion.p>
          </div>

          {/* Stats */}
          <div className="lg:w-[40%] grid grid-cols-2 gap-4 w-full">
            {data.stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.12 + i * 0.07 }}
                className="bg-white/60 backdrop-blur-2xl border border-white/80 rounded-[28px] p-6 flex flex-col gap-1 shadow-sm"
              >
                <span className="text-3xl font-bold" style={{ color: accent }}>{s.value}</span>
                <span className="text-xs font-bold uppercase tracking-widest text-[#6B6B6B]">{s.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-12 flex flex-col lg:flex-row gap-8 lg:gap-12 relative items-start">
        
        {/* Mobile Dropdown Navigation */}
        <div className="lg:hidden w-full sticky top-20 z-30 mb-2">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 flex justify-between items-center shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
          >
            <div className="flex items-center gap-3">
              {(() => {
                const activeItem = departmentTabs.find(t => t.id === activeTab);
                const Icon = activeItem ? activeItem.icon : BookOpen;
                return <Icon className="w-5 h-5" style={{ color: accent }} />;
              })()}
              <span className="font-bold text-[#111111]">{departmentTabs.find(t => t.id === activeTab)?.label}</span>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#6B6B6B] bg-gray-50 px-3 py-1.5 rounded-full">Menu ▼</span>
          </button>
        </div>

        {/* Sidebar Navigation */}
        <div className={`lg:w-[320px] shrink-0 ${isMobileMenuOpen ? 'block' : 'hidden lg:block'}`}>
          <div className="sticky top-28 flex flex-col gap-1.5 bg-white p-3 rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.03)]">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 px-4 py-3">Department Menu</h3>
            {departmentTabs.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-2xl flex items-center gap-3.5 transition-all duration-200 group ${
                    isActive 
                      ? 'text-white shadow-md transform scale-[1.02]' 
                      : 'text-[#6B6B6B] hover:bg-gray-50 hover:text-[#111111]'
                  }`}
                  style={isActive ? { backgroundColor: '#111111' } : {}}
                >
                  <div className={`p-2 rounded-xl transition-colors ${isActive ? 'bg-white/10' : 'bg-gray-100 group-hover:bg-gray-200'}`}>
                    <Icon className={`w-4 h-4 ${isActive ? '' : 'text-gray-500 group-hover:text-[#111111]'}`} style={isActive ? { color: accent } : {}} />
                  </div>
                  <span className={`text-[13px] tracking-wide ${isActive ? 'font-bold' : 'font-semibold'}`}>
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Contact Card */}
          <div className="hidden lg:block mt-6 bg-[#111111] text-white rounded-3xl p-6 shadow-sm sticky top-[460px]">
            <h3 className="text-sm font-bold uppercase tracking-widest mb-4">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-gray-400 mt-1" />
                <a href={`mailto:${data.hod.email}`} className="text-sm text-gray-300 hover:text-white transition-colors break-all">{data.hod.email}</a>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-gray-400 mt-1" />
                <span className="text-sm text-gray-300">{data.hod.phone}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Content Area */}
        <div className="flex-1 w-full relative min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0,  filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -15, filter: 'blur(4px)' }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="bg-transparent pt-2 lg:pt-0"
            >
              
              {/* About Tab */}
              {activeTab === 'about' && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl md:text-3xl font-bold uppercase tracking-tight text-[#111111] mb-3">About the Department</h2>
                    <div className="w-12 h-1.5 rounded-full" style={{ backgroundColor: accent }} />
                  </div>
                  
                  <div className="bg-[#111111] text-white rounded-3xl p-8 md:p-10 shadow-sm relative overflow-hidden group hover:shadow-xl transition-all duration-500">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mx-20 -my-20 group-hover:bg-white/10 transition-colors duration-700" />
                    <div className="flex items-center gap-3 mb-4">
                      <BookOpen className="w-5 h-5" style={{ color: accent }} />
                      <h3 className="text-lg font-bold uppercase tracking-widest text-[#FFFFFF]">Vision</h3>
                    </div>
                    <p className="text-white/80 leading-relaxed italic text-[15px] relative z-10">"{data.vision}"</p>
                  </div>

                  <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-10 shadow-sm relative overflow-hidden group hover:border-[#FB6D39] transition-all duration-300">
                    <div className="flex items-center gap-3 mb-6">
                      <Layers className="w-5 h-5" style={{ color: accent }} />
                      <h3 className="text-lg font-bold uppercase tracking-widest text-[#111111]">Mission</h3>
                    </div>
                    <ul className="space-y-4">
                      {data.mission.map((m, i) => (
                        <li key={i} className="flex items-start gap-4">
                          <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: accent }} />
                          <span className="text-[#4A4A4A] leading-relaxed text-[15px]">{m}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Syllabus / Programs Tab */}
              {activeTab === 'syllabus' && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-bold uppercase tracking-tight text-[#111111] mb-3">Programs Offered</h2>
                    <div className="w-12 h-1.5 rounded-full" style={{ backgroundColor: accent }} />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {data.programs.map((prog, i) => (
                      <div key={i} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-4">
                          <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: accent }}>{prog.level}</span>
                          <span className="bg-[#111111] text-white text-[10px] font-bold px-3 py-1.5 rounded-full tracking-widest">{prog.duration}</span>
                        </div>
                        <h3 className="text-xl font-bold text-[#111111] leading-tight mb-6">{prog.degree}</h3>
                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                          <div>
                            <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Approved Intake</span>
                            <span className="text-2xl font-bold text-[#111111]">{prog.intake}</span>
                          </div>
                          <button className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-[#111111] hover:text-white transition-colors">
                            <ChevronRight className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Faculty Tab */}
              {activeTab === 'faculty' && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl md:text-3xl font-bold uppercase tracking-tight text-[#111111] mb-3">Faculty</h2>
                    <div className="w-12 h-1.5 rounded-full" style={{ backgroundColor: accent }} />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {data.faculty.map((member, i) => (
                      <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:border-[#FB6D39] transition-colors flex flex-col gap-4">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 shrink-0">
                            <User className="w-6 h-6" />
                          </div>
                          <div>
                            <h4 className="font-bold text-[#111111] leading-tight text-[15px]">{member.name}</h4>
                            <p className="text-[10px] font-bold uppercase tracking-widest mt-1 opacity-90" style={{ color: accent }}>{member.designation}</p>
                          </div>
                        </div>
                        <a href={`mailto:${member.email}`} className="text-[12px] text-gray-500 hover:text-[#111111] flex items-center gap-2 pt-4 border-t border-gray-100 transition-colors">
                          <Mail className="w-3.5 h-3.5" /> {member.email}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* R & D / Facilities Tab */}
              {activeTab === 'rnd' && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl md:text-3xl font-bold uppercase tracking-tight text-[#111111] mb-3">R & D and Facilities</h2>
                    <div className="w-12 h-1.5 rounded-full" style={{ backgroundColor: accent }} />
                  </div>
                  <div className="grid grid-cols-1 gap-4">
                    {data.facilities.map((fac, i) => (
                      <div key={i} className="flex items-start gap-4 p-5 bg-white border border-gray-100 rounded-2xl hover:shadow-md transition-shadow">
                        <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: accent }} />
                        <p className="text-[#111111] leading-relaxed font-medium text-[15px]">{fac}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Generic Fallback for empty tabs */}
              {['timetable', 'achievements', 'activities', 'placements'].includes(activeTab) && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl md:text-3xl font-bold uppercase tracking-tight text-[#111111] mb-3">
                      {departmentTabs.find(t => t.id === activeTab)?.label}
                    </h2>
                    <div className="w-12 h-1.5 rounded-full" style={{ backgroundColor: accent }} />
                  </div>
                  <div className="bg-gray-50 border border-gray-100 border-dashed rounded-3xl p-16 flex flex-col items-center justify-center text-center">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-4">
                      {(() => {
                        const Icon = departmentTabs.find(t => t.id === activeTab)?.icon;
                        return Icon ? <Icon className="w-8 h-8 text-gray-300" /> : <div />;
                      })()}
                    </div>
                    <h3 className="text-lg font-bold text-[#111111] mb-2">Content Unavailable</h3>
                    <p className="text-sm text-gray-500 max-w-sm">Detailed information for this section is currently being updated by the department.</p>
                  </div>
                </div>
              )}

            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};

export default DepartmentTemplate;
