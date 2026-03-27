import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';
import video3d from '../assets/3d.mp4';

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-white py-16 mt-auto border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 grid grid-cols-2 lg:flex lg:flex-row lg:justify-between lg:items-start gap-8">
        
        {/* Brand + Map column (left on mobile) */}
        <div className="col-span-1 flex flex-col items-start text-left space-y-4">
          <div className="flex flex-col items-start gap-3">
            <div className="w-14 h-14 lg:w-20 lg:h-20 rounded-full overflow-hidden border border-white/20 shadow-lg flex-shrink-0">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="w-full h-full object-cover"
                >
                  <source src={video3d} type="video/mp4" />
                </video>
            </div>
            <div>
              <span className="text-xl lg:text-3xl font-serif font-bold tracking-tight uppercase block">BMSIT&M<span className="text-[#FB6D39]">.</span></span>
              <p className="text-gray-400 text-[10px] lg:text-sm font-sans tracking-widest uppercase mt-1">Excellence in Engineering</p>
            </div>
          </div>

          {/* Map — shown below logo on mobile */}
          <div className="w-full h-[130px] lg:hidden rounded-xl overflow-hidden shadow-xl border border-white/10 relative">
            <iframe 
              src="https://maps.google.com/maps?q=BMS+Institute+of+Technology+and+Management&t=&z=14&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'grayscale(0.7) contrast(1.1)' }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="BMSIT&M Campus Map"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Page Routes (right on mobile) */}
        <div className="col-span-1 flex flex-col items-start lg:w-1/4">
            <h3 className="text-[9px] lg:text-xs font-bold uppercase tracking-[0.2em] mb-4 text-white/50">
              Page Routes
            </h3>
            <ul className="space-y-2 font-sans text-left">
              {[
                { name: 'Home', path: '/' },
                { name: 'Admissions', path: '/admissions' },
                { name: 'Academics', path: '/academics' },
                { name: 'Departments', path: '/departments' },
                { name: 'Placements', path: '/placement' },
                { name: 'Campus Life', path: '/campus-life' },
                { name: 'Research', path: '/research' },
                { name: 'Student Portal', path: '/login' }
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="group inline-flex items-center text-gray-400 hover:text-white transition-colors text-[12px] lg:text-[15px] font-medium">
                    {item.name}
                    <ArrowUpRight className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-all duration-300 text-[#FB6D39]" />
                  </Link>
                </li>
              ))}
            </ul>
        </div>

        {/* Contact Info — hidden on mobile, shown on lg */}
        <div className="hidden lg:flex flex-col items-start lg:w-1/4">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-6 text-white/50">
              Contact Info
            </h3>
            <div className="flex flex-col gap-4 text-gray-400 text-[15px] font-sans">
                <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#FB6D39] flex-shrink-0 mt-0.5" />
                    <p className="leading-relaxed">Avalahalli, Yelahanka,<br/>Bengaluru - 560119</p>
                </div>
                <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#FB6D39] flex-shrink-0" />
                    <p>080-68730444</p>
                </div>
                <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-[#FB6D39] flex-shrink-0" />
                    <a href="mailto:principal@bmsit.in" className="hover:text-white transition-colors">principal@bmsit.in</a>
                </div>
            </div>
        </div>

        {/* Contact Info — mobile only (below routes col, spanning both cols) */}
        <div className="col-span-2 flex flex-col items-start lg:hidden">
            <h3 className="text-[9px] font-bold uppercase tracking-[0.2em] mb-3 text-white/50">Contact</h3>
            <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-gray-400 text-[11px] font-sans w-full">
                <div className="flex items-start gap-2">
                    <MapPin className="w-3 h-3 text-[#FB6D39] flex-shrink-0 mt-0.5" />
                    <p className="leading-relaxed">Avalahalli, Yelahanka, Bengaluru - 560119</p>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                        <Phone className="w-3 h-3 text-[#FB6D39] flex-shrink-0" />
                        <p>080-68730444</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Mail className="w-3 h-3 text-[#FB6D39] flex-shrink-0" />
                        <a href="mailto:principal@bmsit.in" className="hover:text-white transition-colors break-all">principal@bmsit.in</a>
                    </div>
                </div>
            </div>
        </div>

        {/* Right Side: Google Maps Embed — desktop only */}
        <div className="hidden lg:block w-full lg:w-[350px] h-[220px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 relative group bg-white/5 flex-shrink-0">
          <div className="absolute inset-0 bg-[#FB6D39]/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10" />
          <iframe 
            src="https://maps.google.com/maps?q=BMS+Institute+of+Technology+and+Management&t=&z=14&ie=UTF8&iwloc=&output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: 'grayscale(0.7) contrast(1.1)' }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="BMSIT&M Campus Map"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-16 mt-16 pt-6 border-t border-white/5 text-[11px] font-bold text-gray-600 uppercase tracking-[0.2em] w-full text-center lg:text-left flex flex-col md:flex-row justify-between items-center gap-4">
        <span>&copy; {new Date().getFullYear()} BMSIT&M. All Rights Reserved.</span>
        <div className="flex gap-6">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
