import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Cog, Microscope, Wrench, GraduationCap, Target } from 'lucide-react';

const IdeaLab = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    <div className="w-full min-h-screen relative font-sans text-[#111111]">
      
      {/* Hero Section */}
      <section className="relative w-full pt-24 pb-20 px-6 lg:px-16 overflow-hidden rounded-bl-[80px]">
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-[60%]">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-serif font-bold uppercase leading-tight mb-8"
            >
              AICTE <br/><span className="text-[#FB6D39]">IDEA Lab</span>
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
              "Idea Development, Evaluation & Application."
            </motion.p>
          </div>
          
          <div className="lg:w-[40%] flex flex-col gap-6 w-full">
            <div className="bg-white/60 backdrop-blur-3xl p-8 md:p-12 rounded-[40px] border border-white/80 shadow-[0_12px_40px_-10px_rgba(0,0,0,0.05)]">
              <h3 className="text-3xl font-serif mb-4 flex items-center gap-4 text-[#111111]">
                <Lightbulb className="w-8 h-8 text-[#FB6D39]" /> About the Lab
              </h3>
              <p className="text-[#6B6B6B] leading-relaxed font-sans">
                An initiative by AICTE to foster innovation and hands-on learning. The space transforms ideas into working prototypes aligned with National initiatives like Make In India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives & Facilities */}
      <section className="py-20 relative overflow-hidden bg-white/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 w-full relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-serif font-bold text-[#111111] mb-8 uppercase tracking-tight">Objectives</h2>
              <div className="flex flex-col gap-6">
                {objectives.map((obj, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex gap-4 p-6 bg-white/60 backdrop-blur-xl border border-white/80 rounded-[24px] shadow-sm hover:border-[#FB6D39] transition-colors"
                  >
                    <Target className="w-6 h-6 text-[#FB6D39] flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-lg text-[#111111] mb-2">{obj.title}</h4>
                      <p className="text-[#6B6B6B] text-sm leading-relaxed">{obj.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-serif font-bold text-[#111111] mb-8 uppercase tracking-tight">Infrastructure</h2>
              <div className="bg-[#111111] text-white p-8 md:p-10 rounded-[40px] shadow-xl relative overflow-hidden">
                <Cog className="absolute right-[-40px] bottom-[-40px] w-48 h-48 text-white/5 opacity-20 animate-[spin_20s_linear_infinite]" />
                <ul className="relative space-y-4 z-10">
                  {facilities.map((fac, i) => (
                    <li key={i} className="flex items-center gap-3 text-white/80 pb-4 border-b border-white/10 last:border-0 last:pb-0">
                      <Wrench className="w-5 h-5 text-[#FB6D39]" />
                      <span>{fac}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <h2 className="text-2xl font-serif font-bold text-[#111111] mt-12 mb-6 uppercase tracking-tight">Activities</h2>
              <ul className="space-y-3">
                <li className="flex items-center gap-3"><GraduationCap className="w-5 h-5 text-[#FB6D39]"/> Hackathons & Ideathons</li>
                <li className="flex items-center gap-3"><Microscope className="w-5 h-5 text-[#FB6D39]"/> Design Thinking Bootcamps</li>
                <li className="flex items-center gap-3"><Lightbulb className="w-5 h-5 text-[#FB6D39]"/> Faculty Development Programs (FDPs)</li>
              </ul>
            </div>
          </div>
          
        </div>
      </section>

    </div>
  );
};

export default IdeaLab;
