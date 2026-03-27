import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Network, Lightbulb, Video, Tent, Shield, GraduationCap } from 'lucide-react';

export const facilitiesTabs = [
  { id: 'network', path: '/network-infrastructure', label: 'Network Infrastructure', icon: Network },
  { id: 'idea', path: '/idea-lab', label: 'Idea Lab', icon: Lightbulb },
  { id: 'estudio', path: '/e-studio', label: 'E-Studio', icon: Video },
  { id: 'bicep', path: '/bicep', label: 'BICEP - Incubation Centre', icon: Tent },
  { id: 'ipcell', path: '/ip-cell', label: 'Intellectual Property Cell', icon: Shield },
  { id: 'highered', path: '/higher-education', label: 'Higher Education Center', icon: GraduationCap },
];

const FacilitiesLayout = ({ children, activeId }) => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full min-h-screen bg-[#F8FAFC] font-sans pb-24">

      {/* Shared Facilities Hero */}
      <section className="relative px-6 py-16 bg-white border-b border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-100 rounded-full mb-6">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#111111]">Campus Resources</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-6xl font-black uppercase tracking-tight text-[#111111] mb-4">
            Facilities
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-base text-[#6B6B6B] max-w-xl leading-relaxed font-medium">
            Explore our state-of-the-art infrastructure designed to foster innovation and technical excellence.
          </motion.p>
        </div>
      </section>

      {/* Main Sidebar Layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col lg:flex-row gap-8 lg:gap-12 relative items-start">

        {/* Mobile Dropdown */}
        <div className="lg:hidden w-full sticky top-20 z-30 mb-2">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 flex justify-between items-center shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
          >
            <div className="flex items-center gap-3">
              {(() => {
                const activeItem = facilitiesTabs.find(t => t.id === activeId);
                const Icon = activeItem ? activeItem.icon : Network;
                return <Icon className="w-5 h-5 text-[#FB6D39]" />;
              })()}
              <span className="font-bold text-[#111111]">{facilitiesTabs.find(t => t.id === activeId)?.label}</span>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#6B6B6B] bg-gray-50 px-3 py-1.5 rounded-full">Menu ▼</span>
          </button>
        </div>

        {/* Sidebar Nav */}
        <div className={`lg:w-[320px] shrink-0 ${isMobileMenuOpen ? 'block' : 'hidden lg:block'}`}>
          <div className="sticky top-28 flex flex-col gap-1.5 bg-white p-3 rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.03)]">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 px-4 py-3">Navigation</h3>
            {facilitiesTabs.map((item) => {
              const Icon = item.icon;
              const isActive = activeId === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    navigate(item.path);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-2xl flex items-center gap-3.5 transition-all duration-200 group ${isActive
                      ? 'bg-[#111111] text-white shadow-md transform scale-[1.02]'
                      : 'text-[#6B6B6B] hover:bg-gray-50 hover:text-[#111111]'
                    }`}
                >
                  <div className={`p-2 rounded-xl transition-colors ${isActive ? 'bg-white/10' : 'bg-gray-100 group-hover:bg-gray-200'}`}>
                    <Icon className={`w-4 h-4 ${isActive ? 'text-[#FB6D39]' : 'text-gray-500 group-hover:text-[#111111]'}`} />
                  </div>
                  <span className={`text-[13px] tracking-wide ${isActive ? 'font-bold' : 'font-semibold'}`}>
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 w-full relative min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeId}
              initial={{ opacity: 0, y: 15, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -15, filter: 'blur(4px)' }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="bg-transparent pt-2 lg:pt-0"
            >
              <div className="bg-white rounded-[40px] p-8 md:p-12 border border-gray-100 shadow-sm relative overflow-hidden">
                {children}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </section>
    </div>
  );
};

export default FacilitiesLayout;
