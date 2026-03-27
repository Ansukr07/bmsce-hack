import { Tent, Rocket, Users, Target, Lightbulb, Building, Handshake } from 'lucide-react';
import FacilitiesLayout from '../layout/FacilitiesLayout';

const BICEP = () => {
  const objectives = [
    { title: 'Nurture Startups', desc: 'Provide mentorship, resources, and infrastructure to turn student ideas into viable businesses.', icon: Rocket },
    { title: 'Industry Connect', desc: 'Bridge the gap between academia and industry through partnerships, workshops, and expert sessions.', icon: Handshake },
    { title: 'Skill Development', desc: 'Equip aspiring entrepreneurs with business planning, financial literacy, and leadership skills.', icon: Target },
    { title: 'Innovation Ecosystem', desc: 'Create a collaborative environment that fosters creativity, experimentation, and risk-taking.', icon: Lightbulb },
  ];

  const facilities = [
    'Dedicated co-working space with high-speed internet',
    'Meeting rooms and conference facilities',
    'Access to prototyping labs and fabrication tools',
    'Mentorship from industry professionals and alumni',
    'Seed funding assistance and investor networking',
    'Legal, IP, and compliance advisory support',
  ];

  const programs = [
    { title: 'Startup Bootcamps', desc: 'Intensive multi-day programs covering ideation, validation, and go-to-market strategies.' },
    { title: 'Pitch Competitions', desc: 'Regular events where student entrepreneurs pitch to panels of investors and mentors.' },
    { title: 'Entrepreneurship Workshops', desc: 'Hands-on sessions on business model canvas, lean startup methodology, and design thinking.' },
    { title: 'Industry Mentorship', desc: 'One-on-one guidance from successful entrepreneurs and domain experts from the BMS alumni network.' },
  ];

  return (
    <FacilitiesLayout activeId="bicep">
      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-black text-[#111111] mb-4 uppercase tracking-tight">BICEP - Incubation Centre</h2>
        <div className="w-16 h-1 bg-[#FB6D39] rounded-full" />
      </div>

      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <div className="flex-1 bg-gray-50 border border-gray-100 rounded-3xl p-8 shadow-sm">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-3 text-[#111111]">
            <Tent className="w-6 h-6 text-[#FB6D39]" /> About BICEP
          </h3>
          <p className="text-[#6B6B6B] leading-relaxed text-sm">
            The BMSIT&M Incubation Centre for Entrepreneurship and Placement (BICEP) is a dedicated platform to promote entrepreneurship among students and faculty. It provides end-to-end support for aspiring entrepreneurs — from ideation and prototyping to business planning and market entry — nurturing the next generation of innovators aligned with India's Startup India and Atmanirbhar Bharat initiatives.
          </p>
        </div>
        <div className="flex-1 h-64 md:h-auto rounded-3xl overflow-hidden shadow-sm">
          <img src="https://bmsit.ac.in/public/assets/images/gallery/facility/9.JPG" alt="BMSIT Campus" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
        <div>
          <h2 className="text-2xl font-bold text-[#111111] mb-6 uppercase tracking-tight">Objectives</h2>
          <div className="flex flex-col gap-4">
            {objectives.map((obj, i) => {
              const Icon = obj.icon;
              return (
                <div key={i} className="flex gap-4 p-5 bg-white border border-gray-100 rounded-2xl shadow-sm">
                  <Icon className="w-5 h-5 text-[#FB6D39] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-[#111111] mb-1">{obj.title}</h4>
                    <p className="text-[#6B6B6B] text-[13px] leading-relaxed">{obj.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-[#111111] mb-6 uppercase tracking-tight">Infrastructure</h2>
          <div className="bg-[#111111] text-white p-8 rounded-3xl shadow-sm relative overflow-hidden">
            <Building className="absolute -right-8 -bottom-8 w-40 h-40 text-white/5 opacity-50" />
            <ul className="relative space-y-3 z-10">
              {facilities.map((fac, i) => (
                <li key={i} className="flex items-center gap-3 text-white/80 pb-3 border-b border-white/10 last:border-0 last:pb-0 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FB6D39] flex-shrink-0" />
                  <span>{fac}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div>
        <div className="mb-8 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center">
            <Users className="w-6 h-6 text-[#FB6D39]" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[#111111] uppercase tracking-tight">Programs & Activities</h2>
            <p className="text-gray-500 font-medium text-[13px] mt-1">Initiatives to build the entrepreneurial ecosystem.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {programs.map((item, idx) => (
            <div key={idx} className="p-5 bg-white border border-gray-100 rounded-2xl shadow-sm hover:border-[#FB6D39] transition-colors">
              <h4 className="font-bold text-[#111111] mb-2">{item.title}</h4>
              <p className="text-[#6B6B6B] text-[13px] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </FacilitiesLayout>
  );
};

export default BICEP;
