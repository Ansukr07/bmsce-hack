import { Link } from 'react-router-dom';
import { Globe, MessageCircle, Camera, Share2, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-32 pb-12 mt-auto border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        
        {/* Top Section - Large Brand & Socials */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end border-b border-white/10 pb-16 mb-16 gap-12">
            <div className="max-w-xl">
                <span className="text-4xl md:text-5xl font-serif font-bold tracking-tight uppercase block mb-6">BMSIT&M<span className="text-[#FB6D39]">.</span></span>
                <p className="text-gray-400 leading-relaxed font-sans text-lg lg:text-[17px] font-light">
                Educating students since 1946. A premier institution dedicated to excellence in engineering and innovative research under the BMS Educational Trust.
                </p>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="h-12 w-12 flex items-center justify-center rounded-full border border-white/20 hover:border-[#FB6D39] hover:bg-[#FB6D39] transition-all duration-300 group">
                <Globe className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a href="#" className="h-12 w-12 flex items-center justify-center rounded-full border border-white/20 hover:border-[#FB6D39] hover:bg-[#FB6D39] transition-all duration-300 group">
                <MessageCircle className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a href="#" className="h-12 w-12 flex items-center justify-center rounded-full border border-white/20 hover:border-[#FB6D39] hover:bg-[#FB6D39] transition-all duration-300 group">
                <Camera className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a href="#" className="h-12 w-12 flex items-center justify-center rounded-full border border-white/20 hover:border-[#FB6D39] hover:bg-[#FB6D39] transition-all duration-300 group">
                <Share2 className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-24">
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 text-white/50">
              Quick Links
            </h3>
            <ul className="space-y-4 font-sans">
              {['Home', 'About Us', 'Admissions', 'Academic Programmes', 'Placement Cell', 'Library & Resources', 'Sports & Campus Life'].map((item) => (
                <li key={item}>
                  <Link to="#" className="group flex items-center text-gray-400 hover:text-white transition-colors text-base font-medium">
                    {item}
                    <ArrowUpRight className="h-4 w-4 ml-2 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Info */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 text-white/50">
              Important Info
            </h3>
            <ul className="space-y-4 font-sans">
              {['2026-27 Fee Structure', 'Autonomous Status Details', 'NBA Accreditation', 'NAAC (A Grade) Info', 'Transport & Bus Routes', 'Scholarship Details'].map((item) => (
                <li key={item}>
                  <Link to="#" className="group flex items-center text-gray-400 hover:text-white transition-colors text-base font-medium">
                    {item}
                    <ArrowUpRight className="h-4 w-4 ml-2 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 text-white/50">
              Reach Us
            </h3>
            <ul className="space-y-6 font-sans">
              <li className="flex items-start group">
                <MapPin className="h-6 w-6 text-white/30 group-hover:text-[#FB6D39] transition-colors mr-4 mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-[15px] leading-relaxed">Doddaballapur Main Road,<br />Avalahalli, Yelahanka,<br />Bengaluru - 560119.</span>
              </li>
              <li className="flex items-start group border-t border-white/5 pt-6">
                <Phone className="h-6 w-6 text-white/30 group-hover:text-[#FB6D39] transition-colors mr-4 mt-1 flex-shrink-0" />
                <div className="flex flex-col space-y-2">
                    <span className="text-gray-400 text-[15px]"><strong className="text-white font-medium">Enquiry:</strong> 080-26146800</span>
                    <span className="text-gray-400 text-[15px]"><strong className="text-white font-medium">Office:</strong> 080-68730444</span>
                </div>
              </li>
              <li className="flex items-center group border-t border-white/5 pt-6">
                <Mail className="h-6 w-6 text-white/30 group-hover:text-[#FB6D39] transition-colors mr-4 flex-shrink-0" />
                <a href="mailto:principal@bmsit.in" className="text-gray-400 hover:text-white transition-colors text-[15px]">principal@bmsit.in</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-bold uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} BMSIT&M. All Rights Reserved.</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
