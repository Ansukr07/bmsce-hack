import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fetchTestimonials } from '../services/api';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  const fallbackTestimonials = [
    {
      id: 1,
      name: 'Wade Warren',
      role: 'Student',
      message: 'At Present, There Are Five Departments Within The Faculty: Department Of Geography And Environment.',
      image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 2,
      name: 'Sarah Williams',
      role: 'Alumni',
      message: 'My experience here transformed my understanding of global markets. The networking opportunities provided were unparalleled.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 3,
      name: 'David Chen',
      role: 'Student',
      message: 'The research facilities are truly world-class. Being able to work alongside pioneers in the field has been the highlight of my academic career.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 4,
      name: 'Emily Carter',
      role: 'Alumni',
      message: 'The hands-on projects and incredible faculty support at BMSIT&M have given me the confidence to step directly into a senior engineering role.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80'
    }
  ];

  useEffect(() => {
    const loadTestimonials = async () => {
      try {
        const res = await fetchTestimonials();
        setTestimonials(res.data.length > 0 ? res.data : fallbackTestimonials);
      } catch (err) {
        setTestimonials(fallbackTestimonials);
      }
    };
    loadTestimonials();
  }, []);

  if (testimonials.length === 0) return null;

  return (
    <section className="py-24 lg:py-32 bg-black overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 relative z-10 w-full">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* Left Title Section - Sticky on large screens */}
          <div className="w-full lg:w-1/3 lg:sticky lg:top-32">
            <h4 className="text-[#FB6D39] font-sans font-bold tracking-[0.2em] uppercase text-xs md:text-sm mb-6">
              TESTIMONIAL
            </h4>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif text-gray-500 leading-[1.1] tracking-tight mb-2">
              Students
            </h2>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-[1.1] tracking-tight">
              Feedback
            </h2>
          </div>

          {/* Right Cards Section */}
          <div className="w-full lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              {/* Column 1 - standard margin */}
              <div className="flex flex-col gap-6">
                {testimonials.filter((_, i) => i % 2 === 0).map((t, idx) => (
                  <motion.div
                    key={t.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: idx * 0.2 }}
                    className="bg-white rounded-[40px] p-10 lg:p-12 shadow-2xl flex flex-col"
                  >
                    <p className="text-gray-800 font-sans text-lg lg:text-xl font-medium leading-relaxed mb-10">
                      {t.message}
                    </p>
                    <div className="mt-auto flex items-center">
                      <div className="w-14 h-14 rounded-full overflow-hidden mr-4 shadow-sm">
                        <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h5 className="font-sans font-semibold text-gray-900">{t.name}</h5>
                        <p className="font-sans text-sm text-gray-500">{t.role}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Column 2 - Staggered down slightly on desktop */}
              <div className="flex flex-col gap-6 md:mt-24">
                {testimonials.filter((_, i) => i % 2 !== 0).map((t, idx) => (
                  <motion.div
                    key={t.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: (idx + 0.5) * 0.2 }}
                    className="bg-white rounded-[40px] p-10 lg:p-12 shadow-2xl flex flex-col"
                  >
                    <p className="text-gray-800 font-sans text-lg lg:text-xl font-medium leading-relaxed mb-10">
                      {t.message}
                    </p>
                    <div className="mt-auto flex items-center">
                      <div className="w-14 h-14 rounded-full overflow-hidden mr-4 shadow-sm">
                        <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h5 className="font-sans font-semibold text-gray-900">{t.name}</h5>
                        <p className="font-sans text-sm text-gray-500">{t.role}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;

