import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Research = () => {
  const publications = [
    {
      id: 1,
      title: 'Advancements in Quantum Computing Architectures',
      category: 'Technology',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=80',
      description: 'A breakthrough study presenting a new architecture that significantly reduces error rates in quantum operations.',
      date: 'Oct 12, 2025'
    },
    {
      id: 2,
      title: 'Sustainable Urban Planning Methodologies',
      category: 'Environment',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=800&q=80',
      description: 'Analyzing the long-term impact of green spaces in densely populated metropolitan areas.',
      date: 'Nov 05, 2025'
    },
    {
      id: 3,
      title: 'Machine Learning in Predictive Healthcare',
      category: 'Medical',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
      description: 'How modern AI algorithms are improving early detection rates for autoimmune diseases.',
      date: 'Dec 18, 2025'
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <span className="text-[#FB6D39] font-sans font-semibold tracking-widest uppercase text-[11px] mb-6 block border-l-2 border-[#FB6D39] pl-4">Innovation Hub</span>
            <h2 className="text-5xl md:text-6xl font-serif text-[#111111] mb-6 tracking-tight uppercase">Research & Publications</h2>
          </div>
          <Link to="/research" className="mt-6 md:mt-0 text-[#111111] font-sans uppercase tracking-widest text-sm font-semibold hover:text-[#FB6D39] transition-colors pb-1 border-b-2 border-transparent hover:border-[#FB6D39]">
            View Research Portal
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {publications.map((item, idx) => (
            <Link to={`/research/paper/${item.id}`} key={item.id} className={`h-full cursor-pointer focus:outline-none ${idx > 0 ? 'hidden md:block' : 'block'}`}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="group flex flex-col h-full bg-transparent"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[30px] mb-8 bg-gray-100">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out" 
                  />
                </div>
                
                <div className="flex flex-col flex-grow px-2">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] md:text-xs font-sans uppercase tracking-widest text-[#FB6D39] font-bold">
                      {item.category}
                    </span>
                    <p className="text-xs font-sans text-gray-400 font-medium">{item.date}</p>
                  </div>
                  
                  <h3 className="text-2xl font-serif text-[#111111] leading-tight group-hover:text-[#FB6D39] transition-colors">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
