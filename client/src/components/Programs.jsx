import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { fetchPrograms } from '../services/api';

const Programs = () => {
  const [activeTab, setActiveTab] = useState('Engineering');
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fallback data reflecting actual BMSIT departments
  const fallbackPrograms = [
    { 
      id: '1', 
      name: 'Artificial Intelligence and Machine Learning', 
      type: 'Engineering',
      description: 'Learn intelligent systems, data modeling, deep learning, algorithms, automation, and real-world AI applications.'
    },
    { 
      id: '2', 
      name: 'Computer Science and Business Systems', 
      type: 'Engineering',
      description: 'Integrate computing technologies with business processes, analytics, management systems, and digital transformation strategies.'
    },
    { 
      id: '3', 
      name: 'Computer Science and Engineering', 
      type: 'Engineering',
      description: 'Develop software, algorithms, artificial intelligence, data systems, cybersecurity solutions, and scalable technologies for global industries.'
    },
    { 
      id: '4', 
      name: 'Electronics and Communication Engineering', 
      type: 'Engineering',
      description: 'Explore electronics, communication systems, embedded technologies, signal processing, networking, and innovations powering modern digital connectivity.'
    },
    { 
      id: '5', 
      name: 'Electrical and Electronics Engineering', 
      type: 'Engineering',
      description: 'Study power systems, electrical machines, renewable energy, control systems, electronics, and smart industrial automation technologies.'
    },
    { 
      id: '6', 
      name: 'Mechanical Engineering', 
      type: 'Engineering',
      description: 'Design, analyze, and manufacture mechanical systems focusing on innovation, sustainability, automation, and real-world engineering applications.'
    },
    { 
      id: '7', 
      name: 'Civil Engineering', 
      type: 'Engineering',
      description: 'Plan, design, and construct sustainable infrastructure including buildings, transportation systems, water resources, and environmental projects.'
    },
    { 
      id: '8', 
      name: 'Master of Computer Applications (MCA)', 
      type: 'Postgraduate',
      description: 'Advance expertise in software development, databases, cloud computing, programming, and enterprise application technologies.'
    },
    { 
      id: '9', 
      name: 'M.Tech in Cyber Security', 
      type: 'Postgraduate',
      description: 'Gain expertise in cybersecurity frameworks, ethical hacking, digital forensics, risk management, and secure system design.'
    },
    { 
      id: '10', 
      name: 'Master of Business Administration (MBA)', 
      type: 'Postgraduate',
      description: 'Develop leadership, management, strategy, finance, marketing, entrepreneurship, and decision-making skills for business excellence.'
    },
  ];

  useEffect(() => {
    const loadPrograms = async () => {
      try {
        const res = await fetchPrograms();
        setPrograms(res.data.length > 0 ? res.data : fallbackPrograms);
      } catch (err) {
        console.error('Failed to fetch programs:', err);
        setPrograms(fallbackPrograms);
      } finally {
        setLoading(false);
      }
    };
    loadPrograms();
  }, []);

  const tabs = ['Engineering', 'Postgraduate'];
  const filteredPrograms = programs.filter(p => p.type === activeTab);

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 w-full">
        {/* Header Section */}
        <div className="mb-10 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#111111] mb-4 md:mb-6 uppercase tracking-tight">
            Academics
          </h2>
          <p className="text-xs md:text-sm font-sans font-bold text-[#FB6D39] uppercase tracking-[0.2em] max-w-xl leading-relaxed border-l-4 border-[#FB6D39] pl-4 md:pl-6">
            BMSIT&M offers 10+ courses across various specialisations that provoke intellectual and intuitive learning.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex space-x-8 md:space-x-12 mb-10 md:mb-16 border-b border-gray-200 overflow-x-auto whitespace-nowrap scrollbar-hide pb-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-xl sm:text-2xl md:text-3xl font-serif pb-2 md:pb-4 relative transition-all duration-300 ${
                activeTab === tab ? 'text-black' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <motion.div 
                  layoutId="activeTab" 
                  className="absolute bottom-0 left-0 right-0 h-1 bg-[#111111]" 
                />
              )}
            </button>
          ))}
        </div>

        {/* Program Cards */}
        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-12 h-12 border-4 border-[#FB6D39] border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredPrograms.map((program, idx) => (
                <motion.div
                  key={program._id || program.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="group rounded-[24px] md:rounded-[40px] p-6 md:p-10 flex flex-col min-h-[320px] md:min-h-[420px] transition-all duration-500 bg-white/60 backdrop-blur-2xl text-[#111111] border border-white/50 hover:bg-white hover:border-white/80 hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.08)] hover:-translate-y-2 z-0 hover:z-10"
                >
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-serif leading-tight mb-4 md:mb-6 group-hover:text-[#111111] transition-colors duration-300">
                    {program.name || program.title}
                  </h3>
                  
                  <p className="text-[#6B6B6B] font-sans text-xs sm:text-sm md:text-base leading-relaxed mb-6 md:mb-8 transition-colors duration-300 line-clamp-4">
                    {program.description}
                  </p>
                  
                  <div className="mt-auto flex justify-between items-end">
                    <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-[#FB6D39] group-hover:text-[#111111] transition-colors duration-300">
                      Know More
                    </span>
                    <button className="p-4 rounded-full border border-gray-200 text-[#FB6D39] group-hover:border-gray-300 group-hover:text-[#111111] hover:!bg-[#111111] hover:!text-white transition-all duration-300">
                      <ArrowRight className="h-5 w-5 md:h-6 md:w-6 transform -rotate-45" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Programs;
