import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image & Soft Gradient */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="BMSIT Campus"
          className="w-full h-full object-cover object-center opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#111111]/10 via-[#FB6D39]/5 to-[#B6FA82]/10 backdrop-blur-[2px]" />
      </div>

      {/* Glassmorphic Container floating gracefully */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 mt-16 md:mt-24 pb-16">
        <div className="w-full md:w-[65%] lg:w-[55%]">
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-white/60 backdrop-blur-2xl border border-white/80 p-8 md:p-14 lg:p-16 rounded-[32px] shadow-[0_24px_60px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_30px_70px_-15px_rgba(0,0,0,0.12)] transition-all duration-500 relative overflow-hidden group"
          >
            {/* Subtle highlight effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#B6FA82]/20 via-transparent to-[#FB6D39]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="relative z-10 space-y-6">
              <span className="text-[#6B6B6B] font-bold tracking-[0.2em] uppercase text-[11px] block mb-2">Impact your world through study</span>
              <h1 className="text-4xl md:text-5xl lg:text-[56px] font-serif text-[#111111] leading-[1.05] tracking-tight mb-4 uppercase">
                BMS INSTITUTE OF<br />
                TECHNOLOGY AND<br />
                MANAGEMENT
              </h1>
              <div className="w-16 h-[5px] bg-[#FB6D39] rounded-full my-6"></div>
              <p className="text-[13px] md:text-[15px] font-medium text-[#6B6B6B] leading-relaxed uppercase tracking-[0.1em] max-w-xl">
                Encourage Students and Faculty to catalyze development of innovation-driven enterprises
              </p>
              
              <div className="pt-6 flex flex-wrap gap-4">
                <button className="px-8 py-3.5 bg-[#111111] text-white rounded-full hover:bg-[#222222] transition-colors shadow-[0_8px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.2)] hover:-translate-y-0.5 uppercase tracking-widest text-[11px] font-bold duration-300">
                  Enquire NOW
                </button>
                <button className="px-8 py-3.5 bg-white/60 border border-gray-200/50 text-[#111111] rounded-full hover:bg-white hover:text-[#111111] transition-colors shadow-sm hover:shadow-md hover:-translate-y-0.5 uppercase tracking-widest text-[11px] font-bold duration-300">
                  Circulars
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
