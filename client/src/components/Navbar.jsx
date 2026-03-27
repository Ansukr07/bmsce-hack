import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import logo from '../assets/logobms.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      if (!isScrolled) setIsScrolled(true);
    } else {
      if (isScrolled) setIsScrolled(false);
    }
  });

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
      {/* 2. FLOATING PILL NAVBAR (Sticky, appears on scroll in center) */}
      <AnimatePresence>
        {isScrolled && (
          <div className="fixed top-0 left-0 w-full z-50 pointer-events-none flex justify-center pt-4 lg:pt-6">
            <motion.nav
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="pointer-events-auto hidden md:flex items-center bg-[#0a0a0a]/80 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.8)] rounded-full pl-3 pr-2 py-2"
            >
              {/* Pill Logo Box */}
              <Link to="/" className="flex items-center gap-2 rounded-full px-2 py-1 hover:bg-white/5 transition-colors mr-6">
                <img src={logo} alt="Logo" className="h-4 filter brightness-0 invert opacity-100" />
                <div className="border border-white/20 rounded-full px-1.5 py-[2px]">
                  <span className="text-[8px] text-[#a0a0a0] font-ndot tracking-widest uppercase font-semibold leading-none pt-[1px]">Beta</span>
                </div>
              </Link>

              {/* Pill Links */}
              <div className="flex items-center space-x-6 mr-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="text-[#a0a0a0] hover:text-white transition-colors font-medium text-[12px] tracking-wide"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* Pill Actions */}
              <div className="flex items-center gap-1 ml-2">
                <Link to="/contact" className="px-4 py-1.5 rounded-full text-[12px] font-medium text-[#a0a0a0] hover:text-white hover:bg-white/5 transition-colors">
                  Submit
                </Link>
                <div className="relative group ml-1">
                  <div className="flex items-center cursor-pointer bg-white text-black px-5 py-1.5 rounded-full font-semibold text-[12px] transition-colors hover:bg-gray-200">
                    Log In
                  </div>
                  {/* Dropdown */}
                  <div className="absolute right-0 top-[calc(100%+12px)] w-36 bg-[#0a0a0a] backdrop-blur-xl rounded-2xl border border-white/10 py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-xl">
                    <Link to="/login?role=staff" className="block px-4 py-1.5 text-[11px] text-[#a0a0a0] hover:bg-white/5 hover:text-white transition-colors">Staff</Link>
                    <div className="h-[1px] w-full bg-white/5 my-1" />
                    <Link to="/login?role=student" className="block px-4 py-1.5 text-[11px] text-[#a0a0a0] hover:bg-white/5 hover:text-white transition-colors">Student</Link>
                  </div>
                </div>
              </div>
            </motion.nav>
          </div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed z-40 top-24 left-4 right-4 bg-[#0a0a0a] border border-white/10 shadow-2xl rounded-2xl md:hidden pointer-events-auto overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link key={link.name} to={link.path} className="block px-4 py-3 text-sm font-medium tracking-wide text-white/80 hover:text-white hover:bg-white/5 rounded-xl transition-colors" onClick={() => setIsOpen(false)}>
                  {link.name}
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t border-white/10 px-2 flex flex-col gap-2">
                <span className="text-[10px] text-[#888] font-bold uppercase tracking-widest pl-2 pb-1">Portal Login</span>
                <div className="flex gap-3">
                  <Link to="/login?role=staff" className="flex-1 text-center py-2.5 bg-white/5 hover:bg-white/10 transition-colors text-white text-xs tracking-wider rounded-xl border border-white/5">Staff</Link>
                  <Link to="/login?role=student" className="flex-1 text-center py-2.5 bg-white text-black hover:bg-gray-200 transition-colors text-xs font-bold tracking-wider rounded-xl shadow-[0_0_15px_rgba(255,255,255,0.2)]">Student</Link>
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
