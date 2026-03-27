import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Scale: starts at 1, goes up aggressively to cover the screen
  const scale = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [1, 3, 8, 15]);

  // Sequential Text Opacities
  const text1Opacity = useTransform(scrollYProgress, [0, 0.15, 0.25], [0, 1, 0]);
  const text2Opacity = useTransform(scrollYProgress, [0.25, 0.35, 0.45], [0, 1, 0]);
  const text3Opacity = useTransform(scrollYProgress, [0.45, 0.6, 1], [0, 1, 1]);

  return (
    <div className="bg-[#0a0a0a] text-[#e5e2e1] w-full selection:bg-[#ffb3b5] selection:text-[#0a0a0a]">
      {/* Top Section - Quarter page height */}
      <div className="min-h-[25vh] py-16 flex flex-col items-center justify-center px-4 text-center border-b border-[#1c1b1b]">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-6xl font-sans tracking-tight font-bold text-white leading-[1.1]">
            BMS Institute of Technology and mng.
          </h1>
          <p className="text-[#a0a0a0] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Save references. Experiment with code. Document your process and grow your skills with the community.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button className="px-6 py-2.5 bg-white text-black font-medium rounded-sm hover:bg-gray-200 transition-colors w-full sm:w-auto">
              Sign Up
            </button>
            <button className="px-6 py-2.5 border border-[#353534] bg-[#131313] text-white font-medium rounded-sm hover:bg-[#201f1f] transition-colors w-full sm:w-auto">
              Explore
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Interaction Area */}
      <div ref={containerRef} className="h-[400vh] relative">
        <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">

          {/* Landscape Background */}
          <div className="absolute inset-0 z-0">
            {/* High-contrast surreal landscape image */}
            <img
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
              className="w-full h-full object-cover saturate-[1.5] hue-rotate-[45deg] opacity-90"
              alt="Surreal Landscape"
            />
            <div className="absolute inset-0 bg-[#0a0a0a]/20 mix-blend-multiply" />
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
              <div className="flex-1 text-center text-xs text-[#a0a0a0] font-mono tracking-wider" style={{ transform: "scale(1)" }}>save.design</div>
              <div className="w-14"></div> {/* Spacer to center the title */}
            </div>

            {/* Terminal Body Background */}
            <div className="flex-1 bg-[#0a0a0a]"></div>
          </motion.div>

          {/* Terminal Content (Fixed size, only fades via opacity) */}
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none">
            <motion.div style={{ opacity: text1Opacity }} className="absolute text-white text-3xl md:text-5xl font-sans tracking-tight">
              Welcome to
            </motion.div>
            <motion.div style={{ opacity: text2Opacity }} className="absolute text-white text-3xl md:text-5xl font-sans tracking-tight">
              the platform for
            </motion.div>
            <motion.div style={{ opacity: text3Opacity }} className="absolute text-white text-4xl md:text-6xl lg:text-7xl font-sans font-bold text-center px-4 tracking-tight leading-tight">
              BMS Institute of Tech and Management
            </motion.div>

            {/* Keep scrolling hint */}
            <div className="absolute bottom-12 text-xs text-[#a0a0a0] font-mono flex flex-col items-center gap-2">
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
