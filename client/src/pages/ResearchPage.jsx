import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ResearchPage = () => {
  return (
    <div className="w-full min-h-screen relative font-sans text-[#111111] bg-transparent">

      <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-16 max-w-7xl mx-auto space-y-32 relative z-10">
        
        {/* 1. Hero Section */}
        <section className="relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 max-w-4xl"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-[#111111] tracking-tighter leading-[1.05] uppercase">
              Research & Publications
            </h1>
            <p className="text-lg md:text-xl text-[#6B6B6B] font-medium leading-[1.6] max-w-2xl border-l-4 border-[#FB6D39] pl-6 py-2">
              Pushing the boundaries of engineering and technology. We treat engineering not just as a discipline, but as an art form.
            </p>
          </motion.div>
        </section>

        {/* 2. Featured Publications */}
        <section>
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 pb-6 border-b border-black/10">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#111111] tracking-tight uppercase">Featured Publications</h2>
            <span className="text-[#FB6D39] font-sans font-bold tracking-[0.05em] uppercase text-sm border-b-2 border-[#FB6D39] pb-1">Portfolio</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "AI-Driven Diagnostics in Rural Healthcare",
                abstract: "Exploring low-bandwidth edge computing solutions to bring advanced diagnostic capabilities to remote clinical settings.",
                date: "OCT 2025"
              },
              {
                title: "Sustainable Smart City Infrastructure",
                abstract: "A comprehensive framework for integrating decentralized energy grids with urban IoT sensors to optimize resource distribution in megacities.",
                date: "NOV 2025"
              },
              {
                title: "Advanced Graphene-Based Nanocomposites for Aerospace",
                abstract: "Synthesis of lightweight, high-tensile strength materials using chemical vapor deposition for next-generation satellite structural components.",
                date: "JAN 2026"
              }
            ].map((pub, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="bg-white/60 backdrop-blur-3xl px-8 py-10 rounded-[24px] flex flex-col justify-between group hover:bg-white transition-all duration-300 border border-black/5 hover:border-[#FB6D39] shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_40px_-10px_rgba(0,0,0,0.08)]"
              >
                <div>
                  <span className="text-[#FB6D39] text-xs font-bold tracking-widest uppercase mb-4 block">{pub.date}</span>
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-[#111111] mb-4 leading-snug group-hover:text-[#FB6D39] transition-colors">{pub.title}</h3>
                  <p className="text-[#6B6B6B] font-medium text-sm leading-[1.6]">{pub.abstract}</p>
                </div>
                <div className="mt-8 pt-6 border-t border-black/10">
                  <Link to={`/research/paper/${idx + 1}`} className="text-[#111111] text-xs font-bold uppercase tracking-widest flex items-center gap-2 group-hover:text-[#FB6D39] transition-colors">
                    Read Paper <span className="text-lg">›</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 3. Specialized Labs */}
        <section className="bg-white/60 backdrop-blur-3xl rounded-[40px] shadow-[0_12px_40px_-10px_rgba(0,0,0,0.05)] border border-white/80 p-8 md:p-16 relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#111111] tracking-tight uppercase mb-6">Specialized Labs</h2>
            <p className="text-[#6B6B6B] font-medium text-lg max-w-2xl mb-16 leading-[1.6]">
              Our labs are equipped with industry-standard hardware and software, fostering an environment where theoretical research meets practical application.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16">
              {[
                {
                  name: "Center of Excellence in IoT & Cloud Computing",
                  desc: "Focused on building secure edge devices and scalable cloud architectures for industrial automation and smart grid management."
                },
                {
                  name: "Advanced Robotics & Automation Lab",
                  desc: "Researching swarm intelligence, autonomous navigation, and human-robot collaboration for manufacturing environments."
                },
                {
                  name: "Microelectronics & VLSI Research Cell",
                  desc: "Pioneering work in sub-nanometer transistor modeling and low-power integrated circuit design for mobile computing."
                }
              ].map((lab, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="pl-6 border-l-4 w-full border-black/5 hover:border-[#FB6D39] transition-colors duration-500"
                >
                  <h3 className="text-2xl font-serif font-bold text-[#111111] mb-3">{lab.name}</h3>
                  <p className="text-[#6B6B6B] font-medium text-base leading-[1.6]">{lab.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Institutional Impact / Patents */}
        <section>
          <div className="flex flex-col mb-16 pb-6 border-b border-black/10">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#111111] tracking-tight uppercase mb-4">Patents & Grants</h2>
            <p className="text-[#FB6D39] font-sans font-bold tracking-[0.05em] uppercase text-sm">Institutional Impact</p>
          </div>

          <div className="space-y-6">
            {[
              {
                title: "US Patent: Adaptive Power Management for Electric Vehicles",
                desc: "A breakthrough algorithm that increases battery cycle life by 18% through predictive load balancing based on driver behavior patterns."
              },
              {
                title: "DRDO Research Grant for Under-Water Communication",
                desc: "Investigating acoustic signal propagation in high-turbidity environments for defense-related maritime surveillance applications."
              }
            ].map((impact, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white/60 backdrop-blur-3xl p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 group rounded-[24px] border border-black/5 hover:border-[#FB6D39] hover:bg-white transition-all duration-300 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_40px_-10px_rgba(0,0,0,0.08)]"
              >
                <div className="md:w-3/4">
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-[#111111] mb-3 group-hover:text-[#FB6D39] transition-colors">{impact.title}</h3>
                  <p className="text-[#6B6B6B] font-medium text-base leading-[1.6]">{impact.desc}</p>
                </div>
                <div>
                  <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-[#FB6D39] group-hover:border-[#FB6D39] transition-all bg-white shadow-sm">
                    <span className="text-[#111111] group-hover:text-white text-xl font-bold">›</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
};

export default ResearchPage;
