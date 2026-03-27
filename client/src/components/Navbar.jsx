import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, User, ChevronDown } from 'lucide-react';
import logo from '../assets/logobms.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false); // Scrolling down
      } else {
        setIsVisible(true); // Scrolling up
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Academics', path: '/academics' },
    { name: 'Departments', path: '/departments' },
    { name: 'Facilities', path: '/facilities' },
    { name: 'Placement', path: '/placement' },
  ];

  return (
    <nav className={`fixed top-0 z-50 w-full bg-white/70 backdrop-blur-2xl border-b border-white/50 shadow-[0_4px_30px_rgba(0,0,0,0.03)] transition-transform duration-500 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="w-full mx-auto">
        <div className="flex justify-between h-20 md:h-24">
          {/* Logo Area */}
          <div className="flex items-center pl-4 sm:pl-8 lg:pl-16 relative z-20 w-auto">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img src={logo} alt="BMSIT Logo" className="h-12 md:h-16 w-auto mr-4" />
              <div className="flex flex-col leading-none">
                <span className="text-lg md:text-xl font-serif text-primary tracking-tight font-bold">BMSIT&M</span>
                <span className="text-[10px] md:text-xs font-sans text-gray-500 tracking-wider uppercase font-semibold">ESTD. 2002</span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu - Glass Integration */}
          <div className="hidden md:flex flex-shrink-0 items-center ml-auto pl-10 pr-10 lg:pl-12 h-full">
            <div className="flex items-center space-x-6 lg:space-x-12 h-full">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-[#6B6B6B] hover:text-[#FB6D39] transition-colors font-bold text-[11px] tracking-[0.15em] uppercase whitespace-nowrap"
                >
                  {link.name}
                </Link>
              ))}

              {/* Login Dropdown (Pure CSS Hover) */}
              <div className="relative group flex items-center h-full cursor-pointer">
                <div className="flex items-center text-[#111111] group-hover:text-[#FB6D39] transition-colors font-bold text-[11px] tracking-[0.15em] uppercase whitespace-nowrap">
                  <User className="h-4 w-4 mr-1.5" strokeWidth={2.5} />
                  Login
                  <ChevronDown className="h-3 w-3 ml-1 transition-transform duration-300 group-hover:-rotate-180" strokeWidth={3} />
                </div>

                {/* Dropdown Menu */}
                <div className="absolute top-[80px] md:top-[96px] right-0 w-52 bg-white/90 backdrop-blur-2xl rounded-[24px] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] border border-white py-4 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <Link to="/login?role=staff" className="block px-6 py-3 text-[11px] text-[#6B6B6B] hover:bg-black/5 hover:text-[#111111] transition-colors font-bold tracking-widest uppercase rounded-lg mx-2">
                    Staff Login
                  </Link>
                  <Link to="/login?role=student" className="block px-6 py-3 text-[11px] text-[#6B6B6B] hover:bg-black/5 hover:text-[#111111] transition-colors font-bold tracking-widest uppercase rounded-lg mx-2">
                    Student Login
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center pr-4">
            <div className="bg-[#111111] p-2 rounded-[14px]">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-white/80 focus:outline-none flex items-center justify-center relative"
              >
                {isOpen ? <X className="h-5 w-5" strokeWidth={2.5} /> : <Menu className="h-5 w-5" strokeWidth={2.5} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-3xl w-full shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] border-t border-white/50">
          <div className="px-4 pt-4 pb-8 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block px-4 py-3.5 text-[13px] font-bold text-[#111111] hover:text-[#FB6D39] hover:bg-black/5 rounded-[16px] tracking-wider uppercase transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="px-4 py-4 border-t border-gray-100 mt-2 space-y-4">
              <div className="flex flex-col space-y-4">
                <span className="text-[#6B6B6B] text-[10px] font-bold uppercase tracking-widest">Login Portal</span>
                <Link to="/login?role=staff" className="text-[#111111] text-[12px] font-bold uppercase tracking-widest hover:text-[#FB6D39]">Staff Login</Link>
                <Link to="/login?role=student" className="text-[#111111] text-[12px] font-bold uppercase tracking-widest hover:text-[#FB6D39]">Student Login</Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
