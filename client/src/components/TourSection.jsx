import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import campusImg from '../assets/images/campus.png';

const TourSection = () => {
  return (
    <section className="py-24 bg-[#fafafa] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Content Column */}
          <div className="w-full lg:w-1/2 space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <span className="text-[#FB6D39] font-bold uppercase tracking-[0.2em] text-[10px] lg:text-xs">
                Virtual Discovery
              </span>
              <h2 className="text-4xl lg:text-7xl font-serif font-bold text-[#111111] leading-[1.1] uppercase">
                Experience<br />
                BMSIT&M in 360°
              </h2>
            </div>
            
            <p className="text-[#6B6B6B] font-sans text-base lg:text-lg leading-relaxed max-w-lg">
              Step inside our world-class campus from anywhere in the world. Our immersive 3D tour lets you explore high-tech labs, our sprawling library, vibrant student spaces, and state-of-the-art infrastructure.
            </p>
            
            <motion.button
              onClick={() => window.open('/college360/Tour.html', '_blank')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center gap-4 px-8 py-5 bg-[#111111] text-white rounded-full font-bold uppercase tracking-widest text-[11px] lg:text-xs transition-all hover:bg-black shadow-xl"
            >
              Start 3D Tour
              <div className="w-8 h-8 rounded-full bg-[#FB6D39] flex items-center justify-center group-hover:bg-[#ff8c5e] transition-colors">
                <Play className="h-3 w-3 fill-current ml-0.5" />
              </div>
            </motion.button>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-8 pt-6 border-t border-gray-100">
              <div>
                <span className="block text-2xl lg:text-3xl font-serif font-bold text-[#111111] mb-1">25+</span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Labs to Explore</span>
              </div>
              <div>
                <span className="block text-2xl lg:text-3xl font-serif font-bold text-[#111111] mb-1">360°</span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Total Immersion</span>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group cursor-pointer"
              onClick={() => window.open('/college360/Tour.html', '_blank')}
            >
              {/* Image with overlay mask */}
              <div className="rounded-[32px] lg:rounded-[60px] overflow-hidden aspect-video lg:aspect-square relative shadow-2xl border border-white/20">
                <img 
                  src={campusImg} 
                  alt="BMSIT&M Campus Aerial View" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#111111]/40 to-transparent flex items-center justify-center">
                   {/* Center Pulse Button */}
                   <div className="relative">
                      <div className="absolute inset-0 rounded-full bg-[#FB6D39]/30 animate-ping" />
                      <div className="relative w-16 h-16 lg:w-24 lg:h-24 rounded-full bg-[#FB6D39] flex items-center justify-center text-white shadow-2xl transition-transform duration-500 group-hover:scale-110">
                        <Play className="h-6 w-6 lg:h-10 lg:w-10 fill-current ml-1" />
                      </div>
                   </div>
                </div>
              </div>
              
              {/* Floating Tag */}
              <div className="absolute -bottom-6 -left-6 lg:bottom-12 lg:-left-12 bg-white px-6 py-4 rounded-2xl shadow-2xl border border-gray-100 hidden sm:block">
                 <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-full bg-[#FB6D39]/10 flex items-center justify-center">
                     <div className="w-2 h-2 rounded-full bg-[#FB6D39] animate-pulse" />
                   </div>
                   <div>
                     <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-0.5">Live Now</p>
                     <p className="text-sm font-bold text-[#111111]">Virtual Open House</p>
                   </div>
                 </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TourSection;
