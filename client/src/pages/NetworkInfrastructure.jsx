import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Wifi, Server, ShieldCheck, Activity, Users } from 'lucide-react';

const NetworkInfrastructure = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const equipments = [
    { title: "Core Switches", desc: "Extreme X590 (02 nos) at the data centre for lightning-fast routing." },
    { title: "POE Switches", desc: "13 Extreme Managed POE switches for advanced network distribution." },
    { title: "Wireless APs", desc: "161 Extreme Networks Access Points (AP 3935i, AP410i, etc.) covering blocks and hostels." },
    { title: "Security & UTM", desc: "Juniper Routers and FortiGATE UTM securing the primary data flow." }
  ];

  return (
    <div className="w-full min-h-screen relative font-sans text-[#111111]">
      
      {/* Hero Section */}
      <section className="relative w-full pt-24 pb-32 px-6 lg:px-16 overflow-hidden rounded-bl-[80px]">
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-[60%]">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-serif font-bold uppercase leading-tight mb-8"
            >
              Network <br/><span className="text-[#FB6D39]">Infrastructure</span>
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="w-24 h-1 bg-[#FB6D39] mb-8" 
            />
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl font-medium text-[#6B6B6B] leading-relaxed max-w-2xl font-serif italic"
            >
              "Reliable, high-speed connectivity powering the BMSIT&M campus."
            </motion.p>
          </div>
          
          <div className="lg:w-[40%] flex flex-col gap-6 w-full">
            <div className="bg-white/60 backdrop-blur-3xl p-8 md:p-12 rounded-[40px] border border-white/80 shadow-[0_12px_40px_-10px_rgba(0,0,0,0.05)]">
              <h3 className="text-3xl font-serif mb-4 flex items-center gap-4 text-[#111111]">
                <Server className="w-8 h-8 text-[#FB6D39]" /> The Data Center
              </h3>
              <p className="text-[#6B6B6B] leading-relaxed font-sans pb-4 border-b border-gray-200">
                BMSIT&M has built a modern, sophisticated Data Center equipped with Precision AC systems, Extreme NAS for authentication, and Optical Fiber Cable (OFC) wiring to securely service over 3500 users concurrently.
              </p>
              <div className="pt-4 flex gap-4 text-sm font-bold uppercase tracking-widest text-[#111111]">
                <div>
                  <span className="block text-2xl text-[#FB6D39]">700</span> Mbps Total Bandwidth
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-24 relative overflow-hidden bg-white/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 w-full relative z-10">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#111111] mb-6 uppercase tracking-tight">Key Equipment & Reach</h2>
            <p className="text-sm font-bold text-[#FB6D39] uppercase tracking-widest border-l-4 border-[#FB6D39] pl-6 max-w-2xl">
                Our infrastructure spans seamless Wi-Fi and wired LAN in all lab facilities, academic blocks, and hostels.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {equipments.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/60 backdrop-blur-2xl p-8 md:p-10 rounded-[32px] border border-white/80 hover:border-[#FB6D39] transition-colors shadow-sm"
              >
                <h3 className="text-2xl font-serif font-bold mb-4 text-[#111111] flex items-center gap-3">
                  <Wifi className="w-6 h-6 text-[#FB6D39]" />
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 bg-[#111111] text-white rounded-[40px] p-10 md:p-14 shadow-2xl">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1">
                <h3 className="text-3xl font-serif font-bold mb-6 flex items-center gap-3">
                  <Activity className="w-8 h-8 text-[#FB6D39]" /> ISPs & Authentication
                </h3>
                <p className="text-white/80 leading-relaxed text-lg mb-6">
                  Internet is provided by two ISPs: TATA Tele Services and SIFY Technologies (350+350=700 Mbps 1:1 Internet link). 
                  Access requires user authentication handled by Centralized Extreme NAC based on unique IDs.
                </p>
              </div>
              <div className="flex-1 bg-white/10 rounded-3xl p-8 border border-white/20">
                <h4 className="font-bold flex items-center gap-2 mb-4 text-xl"><Users className="w-5 h-5 text-[#FB6D39]"/> IT Support Team</h4>
                <ul className="space-y-4 text-white/80">
                  <li><strong>Dr. Arun Kumar B R</strong> - Head, Internet Facility</li>
                  <li className="pt-2 border-t border-white/20">Dedicated technical staff available on campus for O&M, and reliable 3rd-party tie-ups for comprehensive hardware management.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NetworkInfrastructure;
