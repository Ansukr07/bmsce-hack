import { motion } from 'framer-motion';
import { Wifi, Server, Activity, Users } from 'lucide-react';
import FacilitiesLayout from '../layout/FacilitiesLayout';

const NetworkInfrastructure = () => {
  const equipments = [
    { title: "Core Switches", desc: "Extreme X590 (02 nos) at the data centre for lightning-fast routing." },
    { title: "POE Switches", desc: "13 Extreme Managed POE switches for advanced network distribution." },
    { title: "Wireless APs", desc: "161 Extreme Networks Access Points (AP 3935i, AP410i, etc.) covering blocks and hostels." },
    { title: "Security & UTM", desc: "Juniper Routers and FortiGATE UTM securing the primary data flow." }
  ];

  return (
    <FacilitiesLayout activeId="network">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-black text-[#111111] mb-4 uppercase tracking-tight">Network Infrastructure</h2>
        <div className="w-16 h-1 bg-[#FB6D39] rounded-full" />
      </div>

      <div className="bg-[#111111] text-white p-8 md:p-10 rounded-[32px] border border-white/10 shadow-lg mb-12">
        <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
          <Server className="w-6 h-6 text-[#FB6D39]" /> The Data Center
        </h3>
        <p className="text-gray-300 leading-relaxed font-sans pb-4 border-b border-gray-800">
          BMSIT&M has built a modern, sophisticated Data Center equipped with Precision AC systems, Extreme NAS for authentication, and Optical Fiber Cable (OFC) wiring to securely service over 3500 users concurrently.
        </p>
        <div className="pt-4 flex gap-4 text-sm font-bold uppercase tracking-widest text-white">
          <div><span className="block text-2xl text-[#FB6D39]">700</span> Mbps Total Bandwidth</div>
        </div>
      </div>

      <div className="mb-10">
        <h3 className="text-xl font-bold text-[#111111] mb-6 uppercase tracking-tight">Key Equipment & Reach</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {equipments.map((item, idx) => (
            <div key={idx} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:border-[#FB6D39] transition-colors">
              <h4 className="text-lg font-bold mb-2 text-[#111111] flex items-center gap-3">
                <Wifi className="w-5 h-5 text-[#FB6D39]" />
                {item.title}
              </h4>
              <p className="text-gray-600 leading-relaxed text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-50 rounded-[32px] p-8 md:p-10 border border-gray-100 flex flex-col md:flex-row gap-10 items-start">
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Activity className="w-5 h-5 text-[#FB6D39]" /> ISPs & Authentication
          </h3>
          <p className="text-gray-600 leading-relaxed text-sm">
            Internet is provided by two ISPs: TATA Tele Services and SIFY Technologies (350+350=700 Mbps 1:1 Internet link). 
            Access requires user authentication handled by Centralized Extreme NAC based on unique IDs.
          </p>
        </div>
        <div className="flex-1 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm w-full">
          <h4 className="font-bold flex items-center gap-2 mb-4 text-[#111111]">
            <Users className="w-5 h-5 text-[#FB6D39]" /> IT Support Team
          </h4>
          <ul className="space-y-3 text-sm text-gray-600">
            <li><strong>Dr. Arun Kumar B R</strong> - Head, Internet Facility</li>
            <li className="pt-2 border-t border-gray-100">Dedicated technical staff available on campus for O&M, and reliable 3rd-party tie-ups for comprehensive hardware management.</li>
          </ul>
        </div>
      </div>
    </FacilitiesLayout>
  );
};

export default NetworkInfrastructure;
