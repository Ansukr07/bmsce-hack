import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logobms.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Academics', path: '/academics' },
    { name: 'Departments', path: '/departments' },
    { name: 'Facilities', path: '/facilities' },
    { name: 'Placement', path: '/placement' },
    { name: 'Publications', path: '/research' },
  ];

  return (
    <>
      {/* FULL-WIDTH ULTRAGLASS TOP NAVBAR (Stitch MCP Synthetix Terminal Design) */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-2xl border-b border-black/[0.06] shadow-[0_4px_40px_rgba(0,0,0,0.08)]">
        <div className="w-full max-w-[1600px] mx-auto flex items-center justify-between px-6 lg:px-12 h-20">
          
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3 group">
            <img src={logo} alt="Logo" className="h-8 group-hover:opacity-80 transition-opacity" />
            <span className="text-[#0a0a0a] font-bold text-xl tracking-tight leading-none font-serif hidden sm:block">BMSIT&M</span>
          </Link>

          {/* Core Desktop Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => {
              if (link.name === 'Facilities') {
                return (
                  <div key={link.name} className="relative group/fac">
                    <span className="cursor-pointer relative text-gray-600 hover:text-[#0a0a0a] transition-colors font-medium text-[13px] tracking-wide group flex items-center gap-1">
                      {link.name}
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-70"><path d="m6 9 6 6 6-6"/></svg>
                      <span className="absolute -bottom-1.5 left-0 w-0 h-[1.5px] bg-[#0a0a0a] transition-all duration-300 group-hover:w-full"></span>
                    </span>
                    
                    <div className="absolute left-0 top-[calc(100%+8px)] w-56 bg-white/90 backdrop-blur-2xl rounded-2xl border border-black/10 py-2 z-50 opacity-0 invisible group-hover/fac:opacity-100 group-hover/fac:visible transition-all duration-300 shadow-xl origin-top-left transform group-hover/fac:scale-100 scale-95">
                      <Link to="/network-infrastructure" className="flex items-center gap-3 px-5 py-3 text-[12px] text-gray-600 hover:bg-black/5 hover:text-black transition-colors tracking-wide">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#FB6D39]" /> Network Infrastructure
                      </Link>
                      <Link to="/idea-lab" className="flex items-center gap-3 px-5 py-3 text-[12px] text-gray-600 hover:bg-black/5 hover:text-black transition-colors tracking-wide">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#FB6D39]" /> AICTE IDEA Lab
                      </Link>
                      <Link to="/e-studio" className="flex items-center gap-3 px-5 py-3 text-[12px] text-gray-600 hover:bg-black/5 hover:text-black transition-colors tracking-wide">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#FB6D39]" /> E-Studio
                      </Link>
                      <Link to="/bicep" className="flex items-center gap-3 px-5 py-3 text-[12px] text-gray-600 hover:bg-black/5 hover:text-black transition-colors tracking-wide">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#FB6D39]" /> BICEP Incubation
                      </Link>
                      <Link to="/ip-cell" className="flex items-center gap-3 px-5 py-3 text-[12px] text-gray-600 hover:bg-black/5 hover:text-black transition-colors tracking-wide">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#FB6D39]" /> IP Cell
                      </Link>
                      <Link to="/higher-education" className="flex items-center gap-3 px-5 py-3 text-[12px] text-gray-600 hover:bg-black/5 hover:text-black transition-colors tracking-wide">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#FB6D39]" /> Higher Education
                      </Link>
                    </div>
                  </div>
                );
              }
              
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className="relative text-gray-600 hover:text-[#0a0a0a] transition-colors font-medium text-[13px] tracking-wide group"
                >
                  {link.name}
                  <span className="absolute -bottom-1.5 left-0 w-0 h-[1.5px] bg-[#0a0a0a] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              );
            })}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            {/* Black 3D Tour Button */}
            <button
              onClick={() => navigate('/campus-tour')}
              className="px-5 py-2 rounded-full font-bold text-[11px] uppercase tracking-widest text-white bg-[#0a0a0a] hover:bg-black transition-all shadow-sm"
            >
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                3D Tour
              </span>
            </button>

            {/* Login Dropdown */}
            <div className="relative group">
              <div className="px-6 py-2 bg-[#0a0a0a] text-white text-[13px] font-bold rounded-full hover:bg-gray-800 transition-all shadow-sm cursor-pointer">
                Log In
              </div>
              
              {/* Dropdown Menu */}
              <div className="absolute right-0 top-[calc(100%+8px)] w-48 bg-white/90 backdrop-blur-2xl rounded-2xl border border-black/10 py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-xl origin-top-right transform group-hover:scale-100 scale-95">
                <Link to="/login?role=staff" className="flex items-center gap-3 px-5 py-3 text-[12px] text-gray-600 hover:bg-black/5 hover:text-black transition-colors tracking-wide">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00aab8]" /> Staff Portal
                </Link>
                <div className="h-[1px] w-full bg-black/5 my-1" />
                <Link to="/login?role=student" className="flex items-center gap-3 px-5 py-3 text-[12px] text-gray-600 hover:bg-black/5 hover:text-black transition-colors tracking-wide">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#39a020]" /> Student Portal
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-white bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 transition-colors">
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed z-40 top-24 left-4 right-4 bg-[#0a0a0a]/95 backdrop-blur-3xl border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.8)] rounded-2xl md:hidden overflow-hidden"
          >
            <div className="p-4 space-y-2">
              <button
                onClick={() => {
                  setIsOpen(false);
                  navigate('/campus-tour');
                }}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#0a0a0a] hover:bg-black text-white font-bold text-xs uppercase tracking-widest shadow-lg transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                Virtual 3D Tour
              </button>
              
              <div className="grid grid-cols-2 gap-2 pt-2">
                {navLinks.map((link) => {
                  if (link.name === 'Facilities') {
                    return (
                      <div key={link.name} className="col-span-2 flex flex-col gap-2 mt-2 border-t border-white/10 pt-2">
                        <span className="px-4 py-1 text-[11px] font-bold uppercase tracking-widest text-[#888]">Facilities</span>
                        <div className="grid grid-cols-2 gap-2">
                          <Link to="/network-infrastructure" className="px-4 py-2.5 text-[12px] font-medium tracking-wide text-[#a0a0a0] hover:text-white bg-white/5 hover:bg-white/10 rounded-xl transition-colors border border-white/[0.05]" onClick={() => setIsOpen(false)}>Network Info</Link>
                          <Link to="/idea-lab" className="px-4 py-2.5 text-[12px] font-medium tracking-wide text-[#a0a0a0] hover:text-white bg-white/5 hover:bg-white/10 rounded-xl transition-colors border border-white/[0.05]" onClick={() => setIsOpen(false)}>IDEA Lab</Link>
                          <Link to="/e-studio" className="px-4 py-2.5 text-[12px] font-medium tracking-wide text-[#a0a0a0] hover:text-white bg-white/5 hover:bg-white/10 rounded-xl transition-colors border border-white/[0.05]" onClick={() => setIsOpen(false)}>E-Studio</Link>
                          <Link to="/bicep" className="px-4 py-2.5 text-[12px] font-medium tracking-wide text-[#a0a0a0] hover:text-white bg-white/5 hover:bg-white/10 rounded-xl transition-colors border border-white/[0.05]" onClick={() => setIsOpen(false)}>BICEP</Link>
                          <Link to="/ip-cell" className="px-4 py-2.5 text-[12px] font-medium tracking-wide text-[#a0a0a0] hover:text-white bg-white/5 hover:bg-white/10 rounded-xl transition-colors border border-white/[0.05]" onClick={() => setIsOpen(false)}>IP Cell</Link>
                          <Link to="/higher-education" className="px-4 py-2.5 text-[12px] font-medium tracking-wide text-[#a0a0a0] hover:text-white bg-white/5 hover:bg-white/10 rounded-xl transition-colors border border-white/[0.05]" onClick={() => setIsOpen(false)}>Higher Ed.</Link>
                        </div>
                      </div>
                    );
                  }
                  
                  return (
                    <Link key={link.name} to={link.path} className="px-4 py-3 text-[13px] font-medium tracking-wide text-[#a0a0a0] hover:text-white bg-white/5 hover:bg-white/10 rounded-xl transition-colors border border-white/[0.05]" onClick={() => setIsOpen(false)}>
                      {link.name}
                    </Link>
                  );
                })}
              </div>

              <div className="mt-4 pt-4 border-t border-white/10 px-2 flex flex-col gap-3">
                <span className="text-[10px] text-[#888] font-bold uppercase tracking-widest pl-2">Portals</span>
                <div className="flex gap-3">
                  <Link to="/login?role=staff" className="flex-1 flex justify-center items-center gap-2 py-3 bg-white/5 hover:bg-white/10 transition-colors text-white text-[11px] font-medium tracking-wider rounded-xl border border-white/5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00dbe9]" /> Staff
                  </Link>
                  <Link to="/login?role=student" className="flex-1 flex justify-center items-center gap-2 py-3 bg-white text-black hover:bg-gray-200 transition-colors text-[11px] font-bold tracking-wider rounded-xl shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0a0a0a]" /> Student
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
