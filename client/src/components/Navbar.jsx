import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, User, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logobms.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Academics', path: '/academics' },
    { name: 'Departments', path: '/departments' },
    { name: 'Facilities', path: '/facilities' },
    { name: 'Placement', path: '/placement' },
  ];

  return (
    <>
      {/* Desktop Animated Navbar Container */}
      <div className="fixed top-0 left-0 w-full z-50 pointer-events-none flex justify-center pt-2 sm:pt-4 transition-all duration-300">
        <motion.nav
          initial={false}
          animate={{
            width: isScrolled ? "auto" : "100%",
            borderRadius: isScrolled ? "9999px" : "0px",
            y: isScrolled ? 10 : 0,
            paddingLeft: isScrolled ? "2rem" : "3rem",
            paddingRight: isScrolled ? "1.5rem" : "3rem",
            paddingTop: isScrolled ? "0.75rem" : "1.5rem",
            paddingBottom: isScrolled ? "0.75rem" : "1.5rem",
            backgroundColor: isScrolled ? "rgba(15, 15, 17, 0.95)" : "transparent",
            borderColor: isScrolled ? "rgba(255, 255, 255, 0.1)" : "transparent",
            borderWidth: isScrolled ? "1px" : "0px",
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
          className="pointer-events-auto hidden md:flex items-center backdrop-blur-3xl shadow-2xl overflow-visible"
        >
          {/* Logo Group */}
          <motion.div layout className="flex items-center flex-shrink-0 z-50 relative bg-transparent">
            <Link to="/" className="flex items-center">
              <motion.img 
                layout
                src={logo} 
                alt="BMSIT Logo" 
                animate={{
                  height: isScrolled ? "28px" : "48px",
                  marginRight: isScrolled ? "8px" : "16px",
                }}
                className="w-auto"
                style={{ mixBlendMode: 'normal' }}
              />
              <motion.div layout className="flex flex-col leading-none justify-center">
                <motion.span 
                  animate={{
                    color: isScrolled ? "#ffffff" : "#FB6D39",
                    fontSize: isScrolled ? "0.875rem" : "1.25rem"
                  }}
                  className="font-serif tracking-tight font-bold"
                >
                  BMSIT&M
                </motion.span>
                <AnimatePresence>
                  {!isScrolled && (
                    <motion.span 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-[10px] md:text-xs font-sans text-gray-500 tracking-wider uppercase font-semibold mt-1 block overflow-hidden"
                    >
                      ESTD. 2002
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            </Link>
          </motion.div>

          {/* Links Group */}
          <motion.div 
            layout 
            className={`flex items-center ${isScrolled ? 'ml-6 space-x-6' : 'flex-1 justify-start ml-12 lg:ml-20 space-x-8 lg:space-x-12'}`}
          >
            <AnimatePresence mode="popLayout">
              {navLinks.map((link) => (
                <motion.div
                  layout
                  key={link.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    to={link.path}
                    className={`transition-colors font-bold uppercase whitespace-nowrap
                      ${isScrolled 
                        ? 'text-[#888888] hover:text-white text-[10px] tracking-[0.1em]' 
                        : 'text-[#6B6B6B] hover:text-[#111111] text-[11px] tracking-[0.15em]'
                      }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Login Actions Group */}
          <motion.div layout className={`flex items-center flex-shrink-0 relative group cursor-pointer ${isScrolled ? 'ml-6 border-l border-white/20 pl-6' : 'ml-auto'}`}>
            {/* The dropdown wrapper */}
            <div className={`flex flex-shrink-0 items-center transition-colors font-bold uppercase whitespace-nowrap
              ${isScrolled 
                ? 'text-white hover:text-[#FB6D39] text-[10px] tracking-[0.1em] px-5 py-2.5 bg-white/10 rounded-full hover:bg-white/20'
                : 'text-white bg-[#111111] hover:bg-black px-6 py-3 rounded-[12px] text-[11px] tracking-[0.15em] shadow-md transition-all group-hover:shadow-xl'
              }`}
            >
              {!isScrolled && <User className="h-4 w-4 mr-1.5" strokeWidth={2.5} />}
              {isScrolled ? 'Log In' : 'Login'}
              <ChevronDown className={`ml-1 transition-transform duration-300 group-hover:-rotate-180 ${isScrolled ? 'h-3 w-3' : 'h-3 w-3'}`} strokeWidth={3} />
            </div>

            {/* Dropdown Menu */}
            <div className={`absolute right-0 w-48 bg-white/95 backdrop-blur-2xl rounded-[20px] shadow-2xl border border-gray-100 py-3 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-4 group-hover:translate-y-0
              ${isScrolled ? 'top-[44px]' : 'top-[54px]'}
            `}>
              <Link to="/login?role=staff" className="block px-5 py-2.5 text-[10px] text-[#6B6B6B] hover:bg-black/5 hover:text-[#111111] transition-colors font-bold tracking-widest uppercase rounded-lg mx-2">
                Staff Login
              </Link>
              <Link to="/login?role=student" className="block px-5 py-2.5 text-[10px] text-[#6B6B6B] hover:bg-black/5 hover:text-[#111111] transition-colors font-bold tracking-widest uppercase rounded-lg mx-2">
                Student Login
              </Link>
            </div>
          </motion.div>
        </motion.nav>
      </div>

      {/* Mobile Nav (Simplified) */}
      <div className="fixed top-0 left-0 w-full z-50 pointer-events-none flex justify-center pt-2 px-4 transition-all duration-300 md:hidden">
        <nav
           className={`pointer-events-auto w-full flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
             ${isScrolled 
               ? 'bg-[#0f0f11]/90 backdrop-blur-2xl border border-white/5 shadow-2xl rounded-[24px] px-4 h-14' 
               : 'bg-white/70 backdrop-blur-lg shadow-sm h-20 px-4'
             }
           `}
        >
          <Link to="/" className="flex flex-shrink-0 items-center">
            <img 
              src={logo} 
              alt="BMSIT Logo" 
              className={`w-auto transition-all duration-500 ${isScrolled ? 'h-8 mr-2 filter brightness-0 invert' : 'h-12 mr-3'}`}
            />
            <div className={`flex flex-col leading-none transition-colors duration-500 ${isScrolled ? 'text-white text-sm' : 'text-primary text-lg'}`}>
              <span className="font-serif tracking-tight font-bold">BMSIT&M</span>
            </div>
          </Link>

          {/* Mobile Menu Button */}
          <div className="flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`focus:outline-none flex items-center justify-center p-2 rounded-[12px] transition-colors duration-500 ${isScrolled ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-[#111111] text-white hover:bg-[#111111]/80'}`}
            >
              {isOpen ? <X className="h-4 w-4" strokeWidth={2.5} /> : <Menu className="h-4 w-4" strokeWidth={2.5} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed z-40 top-[90px] left-4 right-4 bg-white/95 backdrop-blur-3xl shadow-2xl rounded-[24px] border border-gray-100 overflow-hidden md:hidden"
          >
            <div className="px-3 pt-3 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block px-4 py-3 text-[12px] font-bold text-[#111111] hover:text-[#FB6D39] hover:bg-black/5 rounded-[12px] tracking-wider uppercase transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="px-4 py-3 border-t border-gray-100 mt-2 space-y-3">
                <span className="text-[#6B6B6B] text-[9px] font-bold uppercase tracking-widest block pb-1">Login Portal</span>
                <div className="grid grid-cols-2 gap-2">
                  <Link onClick={() => setIsOpen(false)} to="/login?role=staff" className="flex items-center justify-center py-2.5 bg-black/5 rounded-[10px] text-[#111111] text-[10px] font-bold uppercase tracking-widest hover:bg-[#111111] hover:text-white transition-colors">Staff</Link>
                  <Link onClick={() => setIsOpen(false)} to="/login?role=student" className="flex items-center justify-center py-2.5 bg-black/5 rounded-[10px] text-[#111111] text-[10px] font-bold uppercase tracking-widest hover:bg-[#111111] hover:text-white transition-colors">Student</Link>
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
