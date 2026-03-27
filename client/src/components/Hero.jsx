import { motion } from 'framer-motion';
import landingVideo from '../assets/landing.mp4';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <div className="relative w-full h-screen bg-[#0a0a0a] text-white overflow-hidden">
      {/* Fullscreen Looping Background Video */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover"
        >
          <source src={landingVideo} type="video/mp4" />
        </video>
        {/* Subtle edge gradient for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
      </div>

      {/* Main Content — Bottom Right */}
      <div className="absolute z-10 bottom-12 right-8 lg:right-16 max-w-xl">
        {/* Far Left 'Welcome' Indicator */}
        <div className="hidden md:flex absolute left-[-82vw] top-1/2 -translate-y-1/2 flex-row items-center gap-4">
          <div className="w-1.5 h-1.5 bg-white shadow-[0_0_10px_white]" />
          <span className="text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase text-white/90">
            {t('hero.welcome')}
          </span>
        </div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.15] tracking-tight text-right"
        >
          {t('hero.line1')}<br />
          {t('hero.line2')}<br />
          {t('hero.line3')}
        </motion.h1>
      </div>
    </div>
  );
};

export default Hero;
