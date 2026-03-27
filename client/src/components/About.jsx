import { motion } from 'framer-motion';



import imgAcademic from '../assets/campus/academic_block.jpg';
import imgCampus from '../assets/campus/campus_view.png';
import imgLibrary from '../assets/campus/library.jpg';
import imgPathway from '../assets/campus/pathway.png';
const About = () => {
  return (
    <section className="py-24 relative overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-white/60 backdrop-blur-3xl border border-white/80 rounded-[40px] shadow-[0_12px_40px_-10px_rgba(0,0,0,0.05)] p-10 lg:p-16 relative z-10 w-full">
        {/* Top section: Title and Quote */}
        <div className="flex flex-col md:flex-row mb-20 gap-8 lg:gap-16">
          <div className="w-full md:w-1/4">
            <h3 className="text-[11px] font-bold tracking-[0.3em] text-[#FB6D39] uppercase">
              About US
            </h3>
          </div>
          <div className="w-full md:w-3/4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif font-medium leading-[1.05] tracking-tight text-[#111111] m-0 uppercase italic">
                BMS Institutions takes pride in educating students since 1946
              </h2>
              <p className="text-[15px] md:text-lg text-[#6B6B6B] font-sans leading-relaxed max-w-3xl">
                Establishing the first private engineering college in the country, the history of BMS Educational Trust rewinds back to the year 1946. BMSIT&M continues to provide world class education with an emphasis on research and development.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="w-full">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
            {[
              { title: 'Academic Block', img: imgAcademic },
              { title: 'Campus Overview', img: imgCampus },
              { title: 'Central Library', img: imgLibrary },
              { title: 'Campus Walk', img: imgPathway }
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative rounded-[20px] md:rounded-[40px] overflow-hidden aspect-[4/5] shadow-xl md:shadow-2xl"
              >
                <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 pr-4">
                  <span className="text-white/80 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-1 md:mb-2 block"></span>
                  <h4 className="text-white text-lg sm:text-2xl md:text-3xl font-serif italic leading-tight">{item.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
