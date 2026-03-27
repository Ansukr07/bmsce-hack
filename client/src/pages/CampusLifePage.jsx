import { motion } from 'framer-motion';

const CampusLifePage = () => {
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
              Campus Life
            </h1>
            <p className="text-lg md:text-xl text-[#6B6B6B] font-medium leading-[1.6] max-w-2xl border-l-4 border-[#FB6D39] pl-6 py-2">
              Discover your passion beyond the classroom. A vibrant ecosystem of innovation, expression, and collaboration.
            </p>
          </motion.div>
        </section>

        {/* 2. Clubs & Societies */}
        <section>
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 pb-6">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#111111] tracking-tight uppercase">Clubs & Societies</h2>
            <span className="text-[#FB6D39] font-sans font-bold tracking-[0.05em] uppercase text-sm border-b-2 border-[#FB6D39] pb-1">Extracurriculars</span>
          </div>

          <div className="flex flex-wrap gap-4">
            {[
              { title: "Access Denied Club", link: "https://bmsit.ac.in/public/assets/pdf/clubs/new/Acessdenied.pdf" },
              { title: "Alterino Club", link: "https://bmsit.ac.in/public/assets/pdf/clubs/new/ALTERINO.pdf" },
              { title: "Anvaya Club", link: "https://bmsit.ac.in/public/assets/pdf/clubs/new/anvaya.pdf" },
              { title: "AR & VR Hub", link: "https://bmsit.ac.in/public/assets/pdf/clubs/new/ARVR.pdf" },
              { title: "ASTRA Club", link: "https://bmsit.ac.in/public/assets/pdf/clubs/new/ASTRA.pdf" },
              { title: "BIS Club", link: "https://bmsit.ac.in/public/assets/pdf/clubs/new/BIS_Standards club.pdf" },
              { title: "BR[AI]NIUM Club", link: "https://bmsit.ac.in/public/assets/pdf/clubs/new/Brainium.pdf" },
              { title: "BMESI Club", link: "https://bmsit.ac.in/public/assets/pdf/clubs/new/BMESI.pdf" },
              { title: "Coding Club", link: "https://bmsit.ac.in/public/assets/pdf/clubs/new/Coding.pdf" },
              { title: "Cultural Club", link: "https://bmsit.ac.in/public/assets/pdf/clubs/new/CulturalCell.pdf" },
              { title: "Drama Club", link: "https://bmsit.ac.in/public/assets/pdf/clubs/new/Drama.pdf" },
              { title: "Eco-Club (OIKOS)", link: "https://bmsit.ac.in/clubs-associations/eco-club" },
              { title: "Eyantra Club", link: "https://bmsit.ac.in/public/assets/pdf/clubs/new/Eyantra.pdf" },
              { title: "Epoch Society", link: "https://bmsit.ac.in/public/assets/pdf/clubs/new/epoch.pdf" },
              { title: "Gender Champion Cell", link: "https://bmsit.ac.in/public/assets/pdf/clubs/new/GCC.pdf" },
              { title: "GenAI Club", link: "https://bmsit.ac.in/public/assets/pdf/clubs/new/GENAI.pdf" },
              { title: "ICE Student Chapter", link: "https://bmsit.ac.in/public/assets/pdf/clubs/new/ICE.pdf" },
              { title: "HEADSPACE Podcast", link: "https://bmsit.ac.in/public/assets/pdf/clubs/new/HEADSPACE – The Podcast and Conversation Club.pdf" },
              { title: "Joy of Giving Club", link: "https://bmsit.ac.in/public/assets/pdf/clubs/new/Joy of Giving.pdf" },
              { title: "Melton Foundation", link: "https://bmsit.ac.in/public/assets/pdf/clubs/new/Melton.pdf" },
              { title: "Motorheads Club", link: "https://bmsit.ac.in/public/assets/pdf/clubs/new/Motorheads Club.pdf" },
              { title: "MUN Society", link: "https://bmsit.ac.in/public/assets/pdf/clubs/new/MUN.pdf" },
              { title: "NCC", link: "https://bmsit.ac.in/clubs-associations/ncc" },
              { title: "NSS", link: "https://bmsit.ac.in/clubs-associations/nss" },
              { title: "OSCode Club", link: "https://bmsit.ac.in/public/assets/pdf/clubs/new/OSCode.pdf" },
              { title: "Photography Club", link: "https://bmsit.ac.in/public/assets/pdf/clubs/new/Photography.pdf" },
              { title: "Quizcraft Club", link: "https://bmsit.ac.in/public/assets/pdf/clubs/new/Quizcraft.pdf" },
              { title: "Literary Society", link: "https://bmsit.ac.in/public/assets/pdf/clubs/new/LS.pdf" },
              { title: "RUSHANG Music Club", link: "https://bmsit.ac.in/public/assets/pdf/clubs/new/RUSHANG Music Club.pdf" },
              { title: "Rotaract Club", link: "https://bmsit.ac.in/public/assets/pdf/clubs/new/Rotaract.pdf" },
              { title: "SC/ST Cell", link: "https://bmsit.ac.in/public/assets/pdf/clubs/new/SCST.pdf" },
              { title: "UBA Club", link: "https://bmsit.ac.in/public/assets/pdf/clubs/new/UAB.pdf" },
              { title: "Women Empowerment Cell", link: "https://bmsit.ac.in/public/assets/pdf/clubs/new/WEC.pdf" }
            ].map((club, idx) => (
              <motion.a
                href={club.link}
                target="_blank"
                rel="noreferrer"
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: (idx % 10) * 0.05 }}
                className="bg-white/60 backdrop-blur-3xl px-6 py-4 rounded-[16px] group hover:bg-white transition-all duration-300 border border-black/5 hover:border-[#FB6D39] hover:shadow-[0_12px_40px_-10px_rgba(0,0,0,0.08)] flex items-center justify-between gap-4 flex-grow sm:flex-grow-0"
              >
                <h3 className="text-sm font-sans font-bold text-[#111111] uppercase tracking-wider leading-none">{club.title}</h3>
                <span className="text-[#6B6B6B] text-lg leading-none group-hover:text-[#FB6D39] transition-colors">↗</span>
              </motion.a>
            ))}
          </div>
        </section>

        {/* 3. Annual Fests & Events */}
        <section className="bg-white/60 backdrop-blur-3xl rounded-[40px] shadow-[0_12px_40px_-10px_rgba(0,0,0,0.05)] border border-white/80 p-8 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FB6D39]/5 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#111111] tracking-tight uppercase mb-6">Annual Fests & Events</h2>
            <p className="text-[#6B6B6B] font-medium text-lg max-w-2xl mb-16 leading-[1.6]">
              At BMSIT&M, we believe in celebrating scale. Our signature events are massive convergences of technology, art, and pure adrenaline.
            </p>

            <div className="space-y-12">
              {[
                {
                  title: "UTSAV",
                  subtitle: "The Flagship Cultural Fest",
                  desc: "A three-day massive cultural extravaganza attracting over 15,000 students from across the state. Featuring professional artist nights, fashion showcases, battle of bands, and intense inter-collegiate dance competitions. It's the heartbeat of our creative showcase.",
                  date: "March"
                },
                {
                  title: "PHASE SHIFT",
                  subtitle: "National Tech Symposium",
                  desc: "An intensive two-day technical festival uniting engineering students nationwide. Features 24-hour hackathons, structural design challenges, IoT expos, and keynote addresses from leading industry pioneers in deep tech and aerospace.",
                  date: "October"
                }
              ].map((fest, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative pl-8 md:pl-12 border-l border-gray-200 py-4 group hover:border-[#FB6D39] transition-colors"
                >
                  <div className="absolute -left-2 top-8 w-4 h-4 rounded-full border-2 border-[#111111] bg-white group-hover:bg-[#FB6D39] group-hover:border-[#FB6D39] transition-colors" />
                  
                  <div className="flex flex-col md:flex-row gap-8 justify-between items-start">
                    <div className="md:w-3/4">
                      <span className="text-[#FB6D39] text-xs font-bold uppercase tracking-[0.2em] block mb-2">{fest.date}</span>
                      <h3 className="text-4xl md:text-6xl font-serif font-bold text-[#111111] tracking-tighter uppercase mb-2">{fest.title}</h3>
                      <p className="text-lg text-[#111111] font-semibold mb-6 uppercase tracking-widest">{fest.subtitle}</p>
                      <p className="text-[#6B6B6B] text-base leading-[1.8] max-w-3xl font-medium">{fest.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </section>

      </main>
    </div>
  );
};

export default CampusLifePage;
