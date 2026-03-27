import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import frontImg from '../assets/front.jpg';

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Scale: starts at 1, goes up aggressively to cover the screen
  const scale = useTransform(scrollYProgress, [0, 0.5, 0.85, 1], [1, 3, 8, 15]);

  // Sequential Text Opacities (no overlap)
  const text1Opacity = useTransform(scrollYProgress, [0, 0.15, 0.3], [0, 1, 0]);
  const text3Opacity = useTransform(scrollYProgress, [0.35, 0.55, 1], [0, 1, 1]);

  return (
    <div className="bg-[#0a0a0a] text-[#e5e2e1] w-full selection:bg-[#ffb3b5] selection:text-[#0a0a0a]">
      {/* Scroll Interaction Area */}
      <div ref={containerRef} className="h-[250vh] relative">
        <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">

          {/* Background */}
          <div className="absolute inset-0 z-0">
            <img
              src={frontImg}
              className="w-full h-full object-cover"
              alt="BMSIT Campus"
            />
            <div className="absolute inset-0 bg-[#0a0a0a]/50" />
          </div>

          {/* Terminal Window Background (Scales) */}
          <motion.div
            style={{ scale }}
            className="relative z-10 w-[90vw] max-w-[1000px] h-[60vh] md:h-[70vh] bg-[#0a0a0a] rounded-xl border border-[#353534] shadow-[0_40px_80px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden origin-center"
          >
            {/* Terminal Header */}
            <div className="h-12 bg-[#131313] flex items-center px-6 border-b border-[#1c1b1b] shrink-0">
              <div className="flex gap-2">
                <div className="w-3.5 h-3.5 rounded-full bg-[#ff5f56]"></div>
                <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-3.5 h-3.5 rounded-full bg-[#27c93f]"></div>
              </div>
              <div className="flex-1 text-center text-xs text-[#a0a0a0] font-ndot tracking-wider" style={{ transform: "scale(1)" }}>save.design</div>
              <div className="w-14"></div>
            </div>

            {/* Terminal Body */}
            <div className="flex-1 bg-[#0a0a0a]"></div>
          </motion.div>

          {/* Terminal Content (Fixed size, only fades via opacity) */}
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none">
            <motion.div style={{ opacity: text1Opacity, fontFamily: "'Inter', sans-serif" }} className="absolute text-white text-3xl md:text-5xl tracking-tight">
              Welcome to
            </motion.div>
            <motion.div style={{ opacity: text3Opacity, fontFamily: "'Inter', sans-serif" }} className="absolute text-white text-4xl md:text-6xl lg:text-7xl font-bold text-center px-4 tracking-tight leading-tight">
              BMS Institute of Technology and Management
            </motion.div>

            {/* Keep scrolling hint */}
            <div className="absolute bottom-12 text-xs text-[#a0a0a0] font-ndot flex flex-col items-center gap-2">
              Keep scrolling
              <motion.span
                animate={{ y: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                ↓
              </motion.span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
