import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { MonitorPlay, Video, Radio, Play, PlayCircle } from 'lucide-react';

const EStudio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const videos = [
    "C Programming & Python Intro",
    "Linear Algebra & Matrix Operations",
    "Particle in a box & Energy Eigen Values",
    "Design of RC Structural Elements",
    "Electromagnetic Waves",
    "Signals and Systems",
    "Network Theory & Basic Electronics"
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
              The <br/><span className="text-[#FB6D39]">E-Studio</span>
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
              "A state-of-the-art video recording facility dedicated to modern e-learning."
            </motion.p>
          </div>
          
          <div className="lg:w-[40%] flex flex-col gap-6 w-full">
            <div className="bg-white/60 backdrop-blur-3xl p-8 md:p-12 rounded-[40px] border border-white/80 shadow-[0_12px_40px_-10px_rgba(0,0,0,0.05)]">
              <h3 className="text-3xl font-serif mb-6 flex items-center gap-4 text-[#111111]">
                <Video className="w-8 h-8 text-[#FB6D39]" /> Media Center
              </h3>
              <p className="text-[#6B6B6B] leading-relaxed font-sans mb-6">
                Our E-Studio is instrumental in creating structured video lectures for distance learning and revision. These high-quality sessions are hosted directly on our official BMSIT YouTube channel.
              </p>
              <a href="https://www.youtube.com/@bmsitmedia8115/videos" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-[#111111] text-white rounded-full font-bold uppercase tracking-widest text-xs hover:bg-[#FB6D39] transition-colors">
                <Play className="w-4 h-4 text-red-500" /> Visit Channel
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 relative overflow-hidden bg-white/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 w-full relative z-10">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <Radio className="w-12 h-12 text-[#FB6D39] mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#111111] mb-6 uppercase tracking-tight">Recorded Series</h2>
            <p className="text-[#6B6B6B] font-medium text-lg leading-relaxed">
                Faculty members across various departments leverage the E-Studio to produce top-notch academic content for challenging modules and base concepts.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((topic, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-4 p-6 bg-white/80 backdrop-blur-xl border border-white rounded-[24px] shadow-sm hover:shadow-md transition-shadow group cursor-default"
              >
                <div className="p-3 bg-red-50 rounded-xl group-hover:bg-[#FB6D39] group-hover:text-white transition-colors">
                  <PlayCircle className="w-6 h-6 text-[#FB6D39] group-hover:text-white" />
                </div>
                <span className="font-bold text-[#111111] group-hover:text-[#FB6D39] transition-colors">{topic}</span>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};

export default EStudio;
