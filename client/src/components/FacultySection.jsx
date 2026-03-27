import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const FacultySection = () => {
  // Fallback data
  const fallbackFaculty = [
    { id: '1', name: 'Dr. Anupama H S', department: 'AI & Machine Learning', image: '/pictures/teachers/dranupama.jpg', description: 'Expert in Artificial Intelligence and Machine Learning with a focus on sustainable tech.' },
    { id: '2', name: 'Dr. Satish Kumar T', department: 'Computer Science', image: '/pictures/teachers/3154.JPG', description: 'Leading research in high-performance computing and robust software architectures.' },
    { id: '3', name: 'Dr. Jayadeva G S', department: 'Electronics & Comm.', image: '/pictures/teachers/6436.JPG', description: 'Pioneer in VLSI design and advanced communication systems.' },
  ];

  const [faculty, setFaculty] = useState(fallbackFaculty);

  return (
    <section className="py-32 relative px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-white/60 backdrop-blur-3xl border border-white/80 rounded-[40px] shadow-[0_12px_40px_-10px_rgba(0,0,0,0.05)] p-10 lg:p-16">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-6xl font-serif text-[#111111] mb-6 uppercase tracking-tight">Distinctive Faculty</h2>
            <p className="text-[15px] md:text-lg text-[#6B6B6B] font-sans font-medium leading-relaxed max-w-lg">
              Learn from distinguished professors and industry leaders who are passionate about teaching and research.
            </p>
          </div>
          <button className="hidden md:inline-flex px-8 py-3.5 bg-[#111111] text-white rounded-full hover:bg-[#222222] transition-colors shadow-[0_8px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.2)] hover:-translate-y-0.5 uppercase tracking-widest text-[11px] font-bold duration-300">
            Meet the Faculty
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
          {faculty.map((member, index) => (
            <motion.div
              key={member._id || member.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
              className="group cursor-pointer flex flex-col"
            >
              <div className="relative overflow-hidden rounded-[40px] mb-8 aspect-[3/4] shadow-[0_12px_40px_-10px_rgba(0,0,0,0.1)] border border-white/50">
                <img
                  src={member.image}
                  alt={member.name}
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/90 via-[#111111]/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

                <div className="absolute bottom-0 left-0 w-full p-8 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-white/90 text-sm md:text-base font-light italic leading-relaxed">
                    "{member.description}"
                  </p>
                </div>
              </div>

              <div className="px-2">
                <p className="text-[#FB6D39] font-sans uppercase tracking-widest text-[10px] font-bold mb-2">{member.department}</p>
                <h3 className="text-2xl md:text-3xl font-serif text-[#111111]">{member.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile button */}
        <div className="mt-16 md:hidden text-center">
          <button className="px-8 py-3.5 bg-[#111111] text-white rounded-full hover:bg-[#222222] transition-colors shadow-[0_8px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.2)] hover:-translate-y-0.5 uppercase tracking-widest text-[11px] font-bold duration-300 w-full">
            Meet the Faculty
          </button>
        </div>
      </div>
    </section>
  );
};

export default FacultySection;
