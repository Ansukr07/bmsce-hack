import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ResearchPage = () => {
  return (
    <div className="bg-[#131313] min-h-screen text-[#e5e2e1] font-sans selection:bg-[#B9F600] selection:text-[#141F00]">

      <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-32">
        
        {/* 1. Hero Section */}
        <section className="relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 max-w-4xl"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-[#ffffff] tracking-tighter leading-[1.05] uppercase">
              Research & Publications
            </h1>
            <p className="text-lg md:text-xl text-[#c3caac] font-sans leading-[1.6] max-w-2xl border-l-2 border-[#B9F600] pl-6">
              Pushing the boundaries of engineering and technology. We treat engineering not just as a discipline, but as an art form.
            </p>
          </motion.div>
        </section>

        {/* 2. Featured Publications */}
        <section>
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <h2 className="text-3xl md:text-5xl font-serif text-[#ffffff] tracking-tight uppercase">Featured Publications</h2>
            <span className="text-[#B9F600] font-sans font-bold tracking-[0.05em] uppercase text-sm">Portfolio</span>
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
                className="bg-[#201F1F] p-8 rounded flex flex-col justify-between group hover:bg-[#2a2a2a] transition-colors border border-transparent hover:border-[#434933]/30"
              >
                <div>
                  <span className="text-[#B9F600] text-xs font-bold tracking-widest uppercase mb-4 block">{pub.date}</span>
                  <h3 className="text-xl md:text-2xl font-serif text-white mb-4 leading-snug group-hover:text-[#AFD35D] transition-colors">{pub.title}</h3>
                  <p className="text-[#c3caac] text-sm leading-[1.6]">{pub.abstract}</p>
                </div>
                <div className="mt-8 pt-6 border-t border-[#1c1b1b]">
                  <Link to={`/research/paper/${idx + 1}`} className="text-[#ffffff] text-xs font-bold uppercase tracking-widest flex items-center gap-2 group-hover:text-[#B9F600] transition-colors">
                    Read Paper <span className="text-lg">›</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 3. Specialized Labs */}
        <section className="bg-[#1C1B1B] -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif text-[#ffffff] tracking-tight uppercase mb-6">Specialized Labs</h2>
            <p className="text-[#c3caac] font-sans text-lg max-w-2xl mb-16 leading-[1.6]">
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
                  className="pl-6 border-l w-full border-[#353534] hover:border-[#B9F600] transition-colors duration-500"
                >
                  <h3 className="text-2xl font-serif text-white mb-3">{lab.name}</h3>
                  <p className="text-[#8d9479] text-base leading-[1.6]">{lab.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Institutional Impact / Patents */}
        <section>
          <div className="flex flex-col mb-16">
            <h2 className="text-3xl md:text-5xl font-serif text-[#ffffff] tracking-tight uppercase mb-4">Patents & Grants</h2>
            <p className="text-[#B9F600] font-sans font-bold tracking-[0.05em] uppercase text-sm">Institutional Impact</p>
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
                className="bg-[#201F1F] p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 group"
              >
                <div className="md:w-3/4">
                  <h3 className="text-xl md:text-2xl font-serif text-white mb-3 group-hover:text-[#B9F600] transition-colors">{impact.title}</h3>
                  <p className="text-[#8d9479] text-base leading-[1.6]">{impact.desc}</p>
                </div>
                <div>
                  <div className="w-12 h-12 rounded-sm border border-[#434933] flex items-center justify-center group-hover:bg-[#B9F600] group-hover:border-[#B9F600] transition-all">
                    <span className="text-[#e5e2e1] group-hover:text-[#141F00] text-xl font-bold">›</span>
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
