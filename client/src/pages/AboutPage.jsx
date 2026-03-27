import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Building, Users, User, FileText, Target, Briefcase,
  Shield, UserCheck, GraduationCap, Network, ExternalLink
} from 'lucide-react';
import { adminNavItems, adminData } from '../constants/administration';

const iconMap = {
  Institution: Building,
  Target: Target,
  Users: Users,
  Briefcase: Briefcase,
  Shield: Shield,
  User: User,
  UserCheck: UserCheck,
  GraduationCap: GraduationCap,
  Network: Network,
  Building: Building,
  FileText: FileText,
};

const ContentRenderer = ({ content, isGrid }) => {
  return (
    <div className={isGrid ? "grid grid-cols-1 md:grid-cols-2 gap-4" : "space-y-8"}>
      {content.map((block, i) => {
        if (block.type === 'heading') {
          return (
            <h3 key={i} className={`text-2xl font-bold uppercase tracking-tight text-[#111111] ${isGrid ? 'col-span-1 md:col-span-2 mt-4 mb-2' : 'mt-8 mb-4'}`}>
              {block.text}
            </h3>
          );
        }
        if (block.type === 'paragraph') {
          return (
            <p key={i} className={`text-[15px] leading-relaxed text-[#4A4A4A] ${isGrid ? 'col-span-1 md:col-span-2' : ''}`}>
              {block.text}
            </p>
          );
        }
        if (block.type === 'profile') {
          return (
            <div key={i} className={`bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col gap-5 ${isGrid ? 'col-span-1 md:col-span-2' : ''}`}>
              {block.image && (
                <div className="w-full flex justify-center sm:justify-start">
                  <img
                    src={block.image}
                    alt={block.name}
                    className="w-44 h-52 object-cover rounded-2xl border border-gray-100 shadow-sm"
                    loading="lazy"
                  />
                </div>
              )}
              <h4 className="text-xl font-bold text-[#111111]">{block.name}</h4>
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-[#FB6D39]">{block.title}</p>
                {block.subtitle && <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mt-1">{block.subtitle}</p>}
              </div>
              {block.description && <p className="text-[14px] leading-relaxed text-[#6B6B6B] mt-2">{block.description}</p>}
            </div>
          );
        }
        if (block.type === 'list_item') {
          return (
            <div key={i} className="flex items-center gap-4 p-4 bg-white border border-gray-100 rounded-2xl">
              <div className="w-2 h-2 rounded-full bg-[#FB6D39] shrink-0" />
              <p className="font-semibold text-[#111111]">{block.name}</p>
            </div>
          );
        }
        if (block.type === 'profile_card') {
          return (
            <div key={i} className="flex flex-col sm:flex-row items-start sm:items-center gap-5 p-5 bg-white border border-gray-100 rounded-2xl hover:border-gray-200 transition-colors shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 border border-gray-100 shrink-0">
                <User className="w-6 h-6" />
              </div>
              <div className="space-y-1.5">
                <h4 className="font-bold text-[#111111] leading-tight">{block.name}</h4>
                <p className="text-xs font-bold uppercase tracking-wider text-[#FB6D39] opacity-90">{block.title}</p>
                {block.subtitle && <p className="text-sm text-[#4A4A4A] leading-relaxed">{block.subtitle}</p>}
              </div>
            </div>
          );
        }
        if (block.type === 'link_card') {
          return (
            <a key={i} href={block.url} target="_blank" rel="noopener noreferrer" className={`flex justify-between items-center p-6 bg-white border border-gray-100 rounded-2xl hover:border-[#FB6D39] hover:shadow-md transition-all group ${isGrid ? 'col-span-1 md:col-span-2' : ''}`}>
              <span className="font-bold text-[#111111]">{block.text}</span>
              <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-[#FB6D39] transition-colors" />
            </a>
          );
        }
        return null;
      })}
    </div>
  );
};

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState(adminNavItems[0].id);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  const activeData = adminData[activeTab];
  const isGridContent = ['hods', 'deans', 'section_heads', 'office_admin', 'governors', 'officials'].includes(activeTab);

  return (
    <div className={`w-full min-h-screen ${activeTab === 'founders' ? 'bg-[#F8FAFC]' : 'bg-transparent'} font-sans pb-24`}>
      
      {/* Hero Header */}
      <section className={`relative px-6 py-16 ${activeTab === 'founders' ? 'bg-white' : 'bg-transparent'} border-b border-gray-100 overflow-hidden`}>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-100 rounded-full mb-6">
            <Building className="w-4 h-4 text-[#FB6D39]" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#111111]">Administration</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-6xl font-black uppercase tracking-tight text-[#111111] mb-4">
            About BMSIT
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-base text-[#6B6B6B] max-w-xl leading-relaxed font-medium">
            Discover the legacy, leadership, and vision that drive our institution toward academic excellence.
          </motion.p>
        </div>
      </section>

      {/* Main Layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col lg:flex-row gap-8 lg:gap-12 relative items-start">
        
        {/* Mobile Dropdown Toggle */}
        <div className="lg:hidden w-full sticky top-20 z-30 mb-2">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 flex justify-between items-center shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
          >
            <div className="flex items-center gap-3">
              {(() => {
                const Icon = iconMap[adminNavItems.find(item => item.id === activeTab)?.iconName] || Users;
                return <Icon className="w-5 h-5 text-[#FB6D39]" />;
              })()}
              <span className="font-bold text-[#111111]">{adminNavItems.find(item => item.id === activeTab)?.label}</span>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#6B6B6B] bg-gray-50 px-3 py-1.5 rounded-full">Menu ▼</span>
          </button>
        </div>

        {/* Sidebar Nav */}
        <div className={`lg:w-[320px] shrink-0 ${isMobileMenuOpen ? 'block' : 'hidden lg:block'}`}>
          <div className="sticky top-28 flex flex-col gap-1.5 bg-white p-3 rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.03)]">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 px-4 py-3">Navigation</h3>
            {adminNavItems.map((item) => {
              const Icon = iconMap[item.iconName] || Users;
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
              key={activeTab}
              initial={{ opacity: 0, y: 15, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0,  filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -15, filter: 'blur(4px)' }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="bg-transparent pt-2 lg:pt-0"
            >
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-[#111111]">
                  {activeData.title}
                </h2>
                <div className="w-12 h-1.5 mt-5 rounded-full bg-[#FB6D39]" />
              </div>

              {activeTab === 'deans' ? (
                <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_340px] gap-6 items-start">
                  <ContentRenderer content={activeData.content} isGrid={false} />
                  <aside className="bg-white border border-gray-100 rounded-3xl p-4 shadow-sm lg:sticky lg:top-28">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 px-1 pb-3">Leadership Gallery</p>
                    <div className="grid grid-cols-2 gap-3">
                      {(activeData.gallery || []).map((photo, idx) => (
                        <div key={idx} className="overflow-hidden rounded-2xl border border-gray-100 bg-gray-50">
                          <img
                            src={photo.src}
                            alt={photo.alt}
                            className="w-full h-36 object-cover"
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </div>
                  </aside>
                </div>
              ) : (
                <ContentRenderer content={activeData.content} isGrid={isGridContent} />
              )}
            </motion.div>
          </AnimatePresence>
        </div>

      </section>
    </div>
  );
};

export default AboutPage;
