import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Users, Award, Cpu, MapPin, Phone, Mail, CheckCircle2, ChevronRight, BookOpen } from 'lucide-react';

const programs = [
  { degree: "B.E. in Computer Science & Engineering", level: "Undergraduate", duration: "4 Years", intake: 900, description: "Core CS topics including algorithms, databases, networks, AI/ML with heavy emphasis on project-based learning." },
  { degree: "M.Tech in Computer Science & Engineering", level: "Postgraduate", duration: "2 Years", intake: 18, description: "NBA-accredited PG program focusing on advanced networks, security, AI, and data science. Includes 8-week industry internships." },
  { degree: "M.Tech in Cyber Security", level: "Postgraduate", duration: "2 Years", intake: 18, description: "Industry-aligned curriculum (EC-Council partner) emphasizing network security, forensics, and modern cyber-defense techniques." },
  { degree: "M.Tech in VLSI System Design", level: "Postgraduate", duration: "2 Years", intake: 24, description: "In-depth training in chip design and embedded systems using industry-standard EDA tools." }
];

const highlights = [
  { title: "NBA Accredited", desc: "UG program accredited till 2025 reflecting strong academic quality.", icon: <Award className="w-8 h-8" /> },
  { title: "117+ Faculty", desc: "Including 43 Doctorates and 51 pursuing Ph.D.", icon: <Users className="w-8 h-8" /> },
  { title: "NVIDIA CoE", desc: "Center of Excellence for AI/ML with dedicated GPU servers.", icon: <Cpu className="w-8 h-8" /> }
];

const facilities = [
  "VTU-approved CSE Research Centre (since 2014) with 20+ lakhs in funded projects.",
  "NVIDIA Center of Excellence for Deep Learning and Graphics.",
  "BMSIT Incubation Center (BICEP) & Campus Idea Lab.",
  "High-performance computing and Embedded systems labs.",
  "Extensive engineering library and online IEEE journals."
];

const Departments = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full min-h-screen relative font-sans text-[#111111]">
      
      {/* Hero Section */}
      <section className="relative w-full text-[#111111] pt-24 pb-32 px-6 lg:px-16 overflow-hidden rounded-bl-[80px]">
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-[60%]">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-serif font-bold uppercase leading-tight mb-8"
            >
              Admissions & <br/><span className="text-[#FB6D39]">Programs</span>
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
              "To be a centre of excellence in Computer Science and Engineering education and research, nurturing technically competent, ethically responsible, and socially conscious professionals."
            </motion.p>
          </div>
          
          <div className="lg:w-[40%] flex flex-col gap-6 w-full">
            <div className="bg-white/60 backdrop-blur-3xl p-8 md:p-12 rounded-[40px] border border-white/80 shadow-[0_12px_40px_-10px_rgba(0,0,0,0.05)]">
              <h3 className="text-3xl font-serif mb-4 flex items-center gap-4 text-[#111111]"><BookOpen className="w-8 h-8 text-[#FB6D39]" /> Flagship Dept.</h3>
              <p className="text-[#6B6B6B] leading-relaxed font-sans">
                The Computer Science & Engineering department currently boasts an annual intake of 900 undergraduate scholars.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Department Highlights */}
      <section className="max-w-7xl mx-auto px-6 lg:px-16 -mt-16 relative z-20 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ y: 20, opacity: 0 }} 
              whileInView={{ y: 0, opacity: 1 }} 
              viewport={{ once:true }} 
              transition={{ delay: idx * 0.1 }} 
              className={`rounded-[32px] p-8 shadow-2xl flex flex-col items-center text-center ${idx === 1 ? 'bg-[#111111] text-white' : 'bg-white/60 backdrop-blur-2xl border border-white/80 text-[#111111]'}`}
            >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${idx === 1 ? 'bg-white/10 text-[#FB6D39]' : 'bg-white/80 text-[#FB6D39] border border-gray-100'}`}>
                    {item.icon}
                </div>
                <h4 className="text-2xl font-serif font-bold mb-4">{item.title}</h4>
                <p className={`text-sm leading-relaxed ${idx === 1 ? 'text-white/80' : 'text-[#6B6B6B]'}`}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Program Offerings */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 w-full relative z-10">
            <div className="mb-16">
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#111111] mb-6 uppercase tracking-tight">Academic Programs</h2>
                <p className="text-sm font-bold text-[#FB6D39] uppercase tracking-widest border-l-4 border-[#FB6D39] pl-6 max-w-2xl">
                    Comprehensive undergraduate and postgraduate programs designed with strict industry alignment.
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {programs.map((prog, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group bg-white/60 backdrop-blur-3xl rounded-[40px] p-8 md:p-12 shadow-sm hover:bg-white hover:border-[#FB6D39] transition-all duration-500 border border-white/80"
                >
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#FB6D39] group-hover:text-[#111111] transition-colors">{prog.level}</span>
                    <span className="bg-[#111111] text-white text-xs font-bold px-4 py-2 rounded-full shadow-sm">{prog.duration}</span>
                  </div>
                  <h3 className="text-3xl font-serif font-bold leading-tight mb-6 text-[#111111]">{prog.degree}</h3>
                  <p className="text-[#6B6B6B] group-hover:text-[#111111]/80 transition-colors leading-relaxed mb-10 h-20">
                    {prog.description}
                  </p>
                  
                  <div className="flex justify-between items-end border-t border-gray-200 group-hover:border-[#FB6D39]/20 pt-6 transition-colors">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-[#111111]/50 block mb-1">Approved Intake</span>
                      <span className="text-3xl font-serif font-bold py-1 inline-block text-[#111111]">{prog.intake} Seats</span>
                    </div>
                    <button className="w-12 h-12 rounded-full border border-gray-300 group-hover:border-[#111111] flex items-center justify-center group-hover:bg-[#111111] text-[#111111] group-hover:text-white transition-colors">
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
        </div>
      </section>

      {/* Facilities & Contact */}
      <section className="py-24 relative overflow-hidden text-[#111111] border-t border-white/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 w-full flex flex-col lg:flex-row gap-16 relative z-10">
          
          {/* Research & Facilities */}
          <div className="lg:w-[55%]">
            <h2 className="text-4xl font-serif font-bold mb-12 uppercase tracking-tight text-[#111111]">Research & Facilities</h2>
            <div className="space-y-6">
                {facilities.map((fac, idx) => (
                    <motion.div 
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-start gap-5 p-6 bg-white/60 backdrop-blur-2xl rounded-[24px] border border-white/80 hover:shadow-xl hover:border-[#FB6D39] transition-colors"
                    >
                        <CheckCircle2 className="w-6 h-6 text-[#FB6D39] flex-shrink-0 mt-0.5" />
                        <p className="text-lg font-medium text-[#111111] leading-relaxed">{fac}</p>
                    </motion.div>
                ))}
            </div>
          </div>

          {/* Contact & Enquiry */}
          <div className="lg:w-[45%]">
            <div className="bg-[#111111] p-10 md:p-14 rounded-[40px] shadow-[0_12px_40px_-10px_rgba(0,0,0,0.2)] sticky top-32 text-white">
              <h2 className="text-3xl font-serif font-bold mb-10 uppercase tracking-tight text-white">Admissions Enquiry</h2>
              
              <div className="space-y-8">
                  <div className="flex items-start gap-5 group">
                      <div className="p-3 bg-white/10 rounded-full group-hover:bg-[#FB6D39] transition-all">
                          <Mail className="w-6 h-6 text-[#FB6D39] group-hover:text-white" />
                      </div>
                      <div className="flex flex-col gap-1 pt-1.5">
                          <a href="mailto:principal@bmsit.in" className="text-lg font-medium text-white hover:text-[#FB6D39] transition-colors">principal@bmsit.in</a>
                      </div>
                  </div>
                  
                  <div className="flex items-start gap-5 group">
                      <div className="p-3 bg-white/10 rounded-full group-hover:bg-[#FB6D39] transition-all">
                          <Phone className="w-6 h-6 text-[#FB6D39] group-hover:text-white" />
                      </div>
                      <div className="flex flex-col gap-1 pt-1.5">
                          <span className="text-lg font-medium text-white">080-68730444 (Office)</span>
                      </div>
                  </div>

                  <div className="flex items-start gap-5 group">
                      <div className="p-3 bg-white/10 rounded-full group-hover:bg-[#FB6D39] transition-all">
                          <MapPin className="w-6 h-6 text-[#FB6D39] group-hover:text-white" />
                      </div>
                      <p className="text-lg font-medium text-white leading-relaxed pt-1.5">
                          BMS Institute of Technology & Management,<br/>
                          Doddaballapur Main Road,<br/>
                          Avalahalli, Yelahanka,<br/>
                          Bengaluru - 560119.
                      </p>
                  </div>
              </div>
              
            </div>
          </div>
          
        </div>
      </section>

    </div>
  );
};

export default Departments;
