import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logobms.png';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t, languageOptions } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  const navLinks = [
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.admissions'), path: '/admissions' },
    { name: t('nav.academics'), path: '/academics' },
    { name: t('nav.departments'), path: '/departments' },
    { name: t('nav.facilities'), path: '/network-infrastructure' },
    { name: t('nav.campusLife'), path: '/campus-life' },
    { name: t('nav.placement'), path: '/placement' },
    { name: t('nav.publications'), path: '/research' },
  ];

  return (
    <>
      {/* FULL-WIDTH ULTRAGLASS TOP NAVBAR (Stitch MCP Synthetix Terminal Design) */}
      <nav className={`fixed top-0 left-0 w-full z-50 backdrop-blur-2xl border-b shadow-[0_4px_40px_rgba(0,0,0,0.08)] ${isDark ? 'bg-[#0f172a]/85 border-white/10' : 'bg-white/70 border-black/[0.06]'}`}>
        <div className="w-full max-w-[1600px] mx-auto flex items-center justify-between px-6 lg:px-12 h-20">
          
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3 group">
            <img src={logo} alt="Logo" className="h-8 group-hover:opacity-80 transition-opacity" />
            <span className={`font-bold text-xl tracking-tight leading-none font-serif hidden sm:block ${isDark ? 'text-white' : 'text-[#0a0a0a]'}`}>BMSIT&M</span>
          </Link>

          {/* Core Desktop Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative transition-colors font-medium text-[13px] tracking-wide group ${isDark ? 'text-slate-300 hover:text-white' : 'text-gray-600 hover:text-[#0a0a0a]'}`}
              >
                {link.name}
                <span className={`absolute -bottom-1.5 left-0 w-0 h-[1.5px] transition-all duration-300 group-hover:w-full ${isDark ? 'bg-white' : 'bg-[#0a0a0a]'}`}></span>
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button
              type="button"
              onClick={toggleTheme}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-bold text-[11px] uppercase tracking-widest transition-all shadow-sm border ${isDark ? 'bg-[#1e293b] text-white border-white/20 hover:bg-[#273449]' : 'bg-white text-[#0a0a0a] border-black/15 hover:border-black/35'}`}
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun size={13} /> : <Moon size={13} />}
              {isDark ? 'Light' : 'Dark'}
            </button>

            <div className="relative">
              <select
                value={language}
                onChange={(event) => setLanguage(event.target.value)}
                aria-label="Select language"
                className={`appearance-none pr-8 pl-3 py-2 rounded-full font-bold text-[11px] uppercase tracking-widest transition-all shadow-sm border ${isDark ? 'text-white bg-[#1e293b] border-white/20 hover:bg-[#273449]' : 'text-[#0a0a0a] bg-white border-black/15 hover:border-black/35'}`}
              >
                {languageOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <span className={`pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[10px] ${isDark ? 'text-white' : 'text-[#0a0a0a]'}`}>▼</span>
            </div>

            {/* Black 3D Tour Button */}
            <button
              onClick={() => window.open('/college360/Tour.html', '_blank')}
              className="px-5 py-2 rounded-full font-bold text-[11px] uppercase tracking-widest text-white bg-[#0a0a0a] hover:bg-black transition-all shadow-sm"
            >
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                {t('nav.tour3d')}
              </span>
            </button>

            {/* Login Dropdown */}
            <div className="relative group">
              <div className="px-6 py-2 bg-[#0a0a0a] text-white text-[13px] font-bold rounded-full hover:bg-gray-800 transition-all shadow-sm cursor-pointer">
                {t('nav.login')}
              </div>
              
              {/* Dropdown Menu */}
              <div className="absolute right-0 top-[calc(100%+8px)] w-48 bg-white/90 backdrop-blur-2xl rounded-2xl border border-black/10 py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-xl origin-top-right transform group-hover:scale-100 scale-95">
                <Link to="/login?role=staff" className="flex items-center gap-3 px-5 py-3 text-[12px] text-gray-600 hover:bg-black/5 hover:text-black transition-colors tracking-wide">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00aab8]" /> {t('nav.staffPortal')}
                </Link>
                <div className="h-[1px] w-full bg-black/5 my-1" />
                <Link to="/login?role=student" className="flex items-center gap-3 px-5 py-3 text-[12px] text-gray-600 hover:bg-black/5 hover:text-black transition-colors tracking-wide">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#39a020]" /> {t('nav.studentPortal')}
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button onClick={() => setIsOpen(!isOpen)} className={`md:hidden p-2 rounded-xl border transition-colors ${isDark ? 'text-white bg-white/10 hover:bg-white/20 border-white/20' : 'text-[#0a0a0a] bg-black/5 hover:bg-black/10 border-black/10'}`}>
            {isOpen ? <X className={`h-5 w-5 ${isDark ? 'text-white' : 'text-[#0a0a0a]'}`} /> : <Menu className={`h-5 w-5 ${isDark ? 'text-white' : 'text-[#0a0a0a]'}`} />}
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
            className="fixed z-40 top-20 left-3 right-3 bg-[#0a0a0a]/95 backdrop-blur-3xl border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.8)] rounded-2xl md:hidden overflow-hidden"
          >
            <div className="p-3 space-y-1.5">
              <button
                onClick={() => {
                  window.open('/college360/Tour.html', '_blank');
                  setIsOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#0a0a0a] hover:bg-black text-white font-bold text-[10px] uppercase tracking-widest shadow-lg transition-colors"
              >
                <span className="w-1 h-1 rounded-full bg-white animate-pulse" />
                {t('nav.tour3dCampus')}
              </button>

              <div className="mt-1.5 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                <button
                  type="button"
                  onClick={toggleTheme}
                  className="mb-2 w-full flex items-center justify-center gap-2 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-[10px] font-bold tracking-wider"
                >
                  {isDark ? <Sun size={12} /> : <Moon size={12} />}
                  {isDark ? 'Light Mode' : 'Dark Mode'}
                </button>
                <select
                  value={language}
                  onChange={(event) => setLanguage(event.target.value)}
                  aria-label="Select language"
                  className="w-full bg-transparent text-white text-[11px] font-bold tracking-wider outline-none"
                >
                  {languageOptions.map((option) => (
                    <option key={option.value} value={option.value} className="text-black">
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="grid grid-cols-3 gap-1.5">
                {navLinks.map((link) => {
                  return (
                    <Link key={link.name} to={link.path} className="px-3 py-2 text-[11px] font-medium tracking-wide text-[#a0a0a0] hover:text-white bg-white/5 hover:bg-white/10 rounded-lg transition-colors border border-white/[0.05] text-center" onClick={() => setIsOpen(false)}>
                      {link.name}
                    </Link>
                  );
                })}
              </div>

              <div className="mt-1.5 pt-2 border-t border-white/10 px-1 flex flex-col gap-1.5">
                <span className="text-[9px] text-[#888] font-bold uppercase tracking-widest pl-1">{t('nav.portals')}</span>
                <div className="flex gap-2">
                  <Link to="/login?role=staff" className="flex-1 flex justify-center items-center gap-1.5 py-2 bg-white/5 hover:bg-white/10 transition-colors text-white text-[10px] font-medium tracking-wider rounded-lg border border-white/5">
                    <div className="w-1 h-1 rounded-full bg-[#00dbe9]" /> {t('nav.staffPortal')}
                  </Link>
                  <Link to="/login?role=student" className="flex-1 flex justify-center items-center gap-1.5 py-2 bg-white text-black hover:bg-gray-200 transition-colors text-[10px] font-bold tracking-wider rounded-lg shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                    <div className="w-1 h-1 rounded-full bg-[#0a0a0a]" /> {t('nav.studentPortal')}
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
