import { Link } from 'react-router-dom';
import { Search, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import landingImg from '../assets/front.jpg';
import logo from '../assets/logobms.png';

const Hero = () => {
  return (
    <div className="min-h-screen bg-white font-sans flex flex-col pb-6">
      {/* Top Navbar */}
      <nav className="w-full flex items-center justify-between px-6 lg:px-12 py-4 bg-white z-50">
        <div className="flex items-center gap-12">
          {/* Logo */}
          <Link to="/" className="flex items-center text-[#002147] font-bold text-2xl tracking-tight">
            <img src={logo} alt="Logo" className="h-10 mr-3 filter brightness-0" />
            <div className="flex flex-col leading-none">
              <span className="font-serif">BMSIT&M</span>
            </div>
          </Link>

          {/* Left Links */}
          <div className="hidden lg:flex items-center gap-6 text-[15px] text-gray-700 font-medium">
            <div className="flex items-center gap-1 cursor-pointer hover:text-[#002147] transition-colors">About <ChevronDown className="h-3 w-3 text-gray-400" /></div>
            <div className="flex items-center gap-1 cursor-pointer hover:text-[#002147] transition-colors">Research <ChevronDown className="h-3 w-3 text-gray-400" /></div>
            <div className="flex items-center gap-1 cursor-pointer hover:text-[#002147] transition-colors">Admissions <ChevronDown className="h-3 w-3 text-gray-400" /></div>
            <div className="flex items-center gap-1 cursor-pointer hover:text-[#002147] transition-colors">News <ChevronDown className="h-3 w-3 text-gray-400" /></div>
          </div>
        </div>

        {/* Right Side Nav */}
        <div className="flex items-center gap-8">
          {/* Right Links */}
          <div className="hidden xl:flex items-center gap-6 text-[15px] text-gray-700 border-r border-gray-200 pr-8">
            <div className="flex items-center gap-1 cursor-pointer hover:text-[#002147] transition-colors">Community <ChevronDown className="h-3 w-3 text-gray-400" /></div>
            <div className="flex items-center gap-1 cursor-pointer hover:text-[#002147] transition-colors">Colleges <ChevronDown className="h-3 w-3 text-gray-400" /></div>
            <div className="flex items-center gap-1 cursor-pointer hover:text-[#002147] transition-colors">Department <ChevronDown className="h-3 w-3 text-gray-400" /></div>
          </div>

          {/* Search & Login */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center text-gray-400 cursor-text group">
              <span className="text-[15px] mr-24 group-hover:text-gray-600 transition-colors">Search ..</span>
              <div className="h-10 w-10 bg-[#002147] rounded-lg flex items-center justify-center text-white cursor-pointer hover:bg-[#00152e] transition-colors shadow-sm">
                <Search className="h-4 w-4" />
              </div>
            </div>
            <Link to="/login" className="bg-[#002147] text-white px-8 py-2.5 rounded-lg text-[15px] font-medium hover:bg-[#00152e] transition-colors shadow-sm">
              Login
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Hero Container */}
      <div className="flex-1 flex flex-col">
        <div className="relative w-full flex-1 min-h-[75vh] overflow-hidden bg-white group">

          {/* Giant Typography Effect (Behind the transparent image) */}
          <div className="absolute inset-0 z-0 flex items-start justify-center pointer-events-none select-none overflow-hidden">
            <h1
              className="text-[18vw] xl:text-[22rem] font-serif font-bold tracking-tight text-black whitespace-nowrap leading-none"
            >
              BMSIT&M
            </h1>
          </div>

          {/* Foreground Image (Transparent PNG rendering over the text, anchored to bottom) */}
          <div className="absolute inset-0 z-10 pointer-events-none flex items-end justify-center">
            <img
              src={landingImg}
              alt="BMSIT Campus"
              className="w-full h-full object-contain object-bottom transition-transform duration-1000 group-hover:scale-[1.02]"
            />
          </div>

          {/* No Bottom Content as requested */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
