import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// Animated Counter Component
const Counter = ({ from = 0, to, duration = 2, suffix = '' }) => {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let startTime;
      let animationFrame;

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / (duration * 1000);
        
        if (progress < 1) {
          setCount(Math.floor(from + (to - from) * progress));
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(to);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => cancelAnimationFrame(animationFrame);
    }
  }, [from, to, duration, isInView]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
};

const Stats = () => {
  const stats = [
    { id: 1, label: 'Years of Excellence', value: 78, suffix: '+' },
    { id: 2, label: 'Global Alumni', value: 50, suffix: 'K+' },
    { id: 3, label: 'NBA Accredited Programs', value: 9, suffix: '' },
    { id: 4, label: 'Research Patents', value: 100, suffix: '+' },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-8 md:gap-x-12">
          {stats.map((stat, idx) => (
            <motion.div 
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: "easeOut" }}
              className="text-center md:text-left flex flex-col items-center md:items-start"
            >
              <div className="text-6xl lg:text-7xl xl:text-8xl font-serif font-medium text-[#111111] hover:text-[#FB6D39] transition-colors duration-500 mb-6 tracking-tighter">
                <Counter to={stat.value} duration={2.5} suffix={stat.suffix} />
              </div>
              <p className="text-[#6B6B6B] font-sans uppercase tracking-[0.2em] text-xs sm:text-[13px] font-bold border-l-2 border-[#FB6D39]/50 pl-4 py-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
