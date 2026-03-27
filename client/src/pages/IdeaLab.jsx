import { motion } from 'framer-motion';
import { Lightbulb, Cog, Microscope, Wrench, GraduationCap, Target } from 'lucide-react';
import FacilitiesLayout from '../layout/FacilitiesLayout';

const IdeaLab = () => {
  const facilities = [
    "Rapid prototyping and fabrication tools",
    "Electronics and embedded systems workstations",
    "3D printers and design software",
    "IoT and AI-based development platforms",
    "Mechanical and electrical toolkits",
    "Collaborative workspaces for ideation"
  ];

  const objectives = [
    { title: "Promote Innovation", desc: "Foster innovation and problem-solving skills among students." },
    { title: "Hands-on Exposure", desc: "Provide hands-on exposure to emerging technologies." },
    { title: "Prototype Development", desc: "Support full prototype development and product design from ideation." },
    { title: "Startup Culture", desc: "Bridge the gap between academia & industry to nurture an entrepreneurial mindset." }
  ];

  return (
    <FacilitiesLayout activeId="idea">
      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-black text-[#111111] mb-4 uppercase tracking-tight">AICTE IDEA Lab</h2>
        <div className="w-16 h-1 bg-[#FB6D39] rounded-full" />
      </div>

      <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 mb-12 shadow-sm">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-3 text-[#111111]">
          <Lightbulb className="w-6 h-6 text-[#FB6D39]" /> About the Lab
        </h3>
        <p className="text-[#6B6B6B] leading-relaxed text-sm">
          An initiative by AICTE to foster innovation and hands-on learning. The space transforms ideas into working prototypes aligned with National initiatives like Make In India, serving as an incubation ground for student-led technological advancements.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-bold text-[#111111] mb-6 uppercase tracking-tight">Objectives</h2>
          <div className="flex flex-col gap-4">
            {objectives.map((obj, i) => (
              <div key={i} className="flex gap-4 p-5 bg-white border border-gray-100 rounded-2xl shadow-sm">
                <Target className="w-5 h-5 text-[#FB6D39] flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-[#111111] mb-1">{obj.title}</h4>
                  <p className="text-[#6B6B6B] text-[13px] leading-relaxed">{obj.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-[#111111] mb-6 uppercase tracking-tight">Infrastructure</h2>
          <div className="bg-[#111111] text-white p-8 rounded-3xl shadow-sm relative overflow-hidden mb-8">
            <Cog className="absolute -right-8 -bottom-8 w-40 h-40 text-white/5 opacity-50 animate-[spin_20s_linear_infinite]" />
            <ul className="relative space-y-3 z-10">
              {facilities.map((fac, i) => (
                <li key={i} className="flex items-center gap-3 text-white/80 pb-3 border-b border-white/10 last:border-0 last:pb-0 text-sm">
                  <Wrench className="w-4 h-4 text-[#FB6D39]" />
                  <span>{fac}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <h2 className="text-xl font-bold text-[#111111] mb-4 uppercase tracking-tight">Activities</h2>
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
            <ul className="space-y-4 text-sm font-medium text-[#4A4A4A]">
              <li className="flex items-center gap-3"><GraduationCap className="w-4 h-4 text-[#FB6D39]"/> Hackathons & Ideathons</li>
              <li className="flex items-center gap-3"><Microscope className="w-4 h-4 text-[#FB6D39]"/> Design Thinking Bootcamps</li>
              <li className="flex items-center gap-3"><Lightbulb className="w-4 h-4 text-[#FB6D39]"/> Faculty Development Programs (FDPs)</li>
            </ul>
          </div>
        </div>
      </div>
    </FacilitiesLayout>
  );
};

export default IdeaLab;
