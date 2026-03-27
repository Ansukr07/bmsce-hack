import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { fetchEvents } from '../services/api';

const EventsSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [events, setEvents] = useState([]);

  const fallbackEvents = [
    {
      id: 1,
      title: 'Annual Tech Symposium 2026',
      date: '2026-04-15T09:00:00Z',
      category: 'Seminar',
      description: 'A gathering of minds to discuss the future of AI and sustainable technologies.',
      location: 'Main Auditorium'
    },
    {
      id: 2,
      title: 'Spring Art Exhibition',
      date: '2026-04-20T10:00:00Z',
      category: 'Arts',
      description: 'Showcasing the incredible works of our Fine Arts graduating class.',
      location: 'Creative Arts Center'
    },
    {
      id: 3,
      title: 'Inter-College Basketball Finals',
      date: '2026-05-02T16:00:00Z',
      category: 'Sports',
      description: 'Cheer for our team in the highly anticipated championship match.',
      location: 'Indoor Stadium'
    },
    {
      id: 4,
      title: 'Global Cultural Festival',
      date: '2026-05-10T12:00:00Z',
      category: 'Culture',
      description: 'Celebrate diversity with food, music, and performances from around the world.',
      location: 'Campus Ground'
    }
  ];

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const res = await fetchEvents();
        setEvents(res.data.length > 0 ? res.data : fallbackEvents);
      } catch (err) {
        setEvents(fallbackEvents);
      }
    };
    loadEvents();
  }, []);

  const categories = ['All', 'Arts', 'Culture', 'Sports', 'Seminar'];

  const filteredEvents = activeCategory === 'All' 
    ? events 
    : events.filter(e => e.category === activeCategory);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl text-left">
            <span className="text-[#FB6D39] font-sans font-semibold tracking-widest uppercase text-[11px] mb-6 block border-l-2 border-[#FB6D39] pl-4">Community</span>
            <h2 className="text-4xl md:text-5xl font-serif text-[#111111] mb-6 uppercase tracking-tight">Upcoming Events</h2>
          </div>
          
          <div className="mt-8 md:mt-0 flex flex-wrap gap-4 justify-end">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-sm font-sans font-semibold tracking-wider uppercase pb-1 border-b-2 transition-all duration-300 ${
                  activeCategory === cat 
                    ? 'border-black text-black' 
                    : 'border-transparent text-gray-400 hover:text-black hover:border-black/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col space-y-0 border-t border-gray-200">
          <AnimatePresence mode="popLayout">
            {filteredEvents.map((event, idx) => (
              <motion.div
                key={event._id || event.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group flex flex-col md:flex-row items-start md:items-center justify-between py-10 border-b border-gray-200 hover:bg-gray-50 transition-colors px-4 -mx-4 cursor-pointer"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12 w-full md:w-3/4">
                  <div className="min-w-[100px]">
                    <span className="block text-3xl font-serif text-[#111111] mb-1">
                      {new Date(event.date).getDate().toString().padStart(2, '0')}
                    </span>
                    <span className="block text-sm font-sans font-bold text-black uppercase tracking-widest">
                      {new Date(event.date).toLocaleString('default', { month: 'short' })} '{new Date(event.date).getFullYear().toString().slice(2)}
                    </span>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl md:text-3xl font-serif text-[#111111] mb-2 group-hover:text-[#FB6D39] transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-[#6B6B6B] font-sans text-sm md:text-base pr-4 line-clamp-2 max-w-2xl">
                        {event.description}
                    </p>
                  </div>
                </div>

                <div className="mt-6 md:mt-0 flex flex-row md:flex-col items-center justify-between w-full md:w-auto">
                    <span className="text-[11px] font-sans font-semibold uppercase tracking-widest text-[#6B6B6B] mb-0 md:mb-4">
                        {event.location}
                    </span>
                    <div className="h-12 w-12 rounded-full border border-gray-300 flex items-center justify-center group-hover:bg-[#111111] group-hover:border-[#111111] group-hover:text-white transition-all duration-300">
                        <ArrowRight className="h-5 w-5 transform -rotate-45" />
                    </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
