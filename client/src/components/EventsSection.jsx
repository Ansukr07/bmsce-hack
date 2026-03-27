import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const EventsSection = () => {
  const mockEvents = [
    {
      id: 1,
      title: 'Utsav 2026 - Annual Cultural Fest',
      date: '2026-04-12T09:00:00Z',
      category: 'Culture',
      description: 'The biggest cultural extravaganza of the year featuring music, dance, fashion shows, and celebrity performances.',
      location: 'Main Campus Ground'
    },
    {
      id: 2,
      title: 'Phase Shift - Tech Symposium',
      date: '2026-05-20T10:00:00Z',
      category: 'Seminar',
      description: 'A national-level technical symposium bringing together the brightest minds to showcase AI, Robotics, and IoT innovations.',
      location: 'CFL Auditorium'
    },
    {
      id: 3,
      title: 'Inter-Departmental Sports Meet',
      date: '2026-06-05T16:00:00Z',
      category: 'Sports',
      description: 'Cheer for your department as athletes compete in basketball, football, athletics, and indoor games for the championship cup.',
      location: 'Indoor Stadium'
    },
    {
      id: 4,
      title: 'Kalaakriti - Fine Arts Exhibition',
      date: '2026-06-15T10:00:00Z',
      category: 'Arts',
      description: 'Explore the incredible works of our students, featuring painting, sculpting, and digital arts galleries spanning the campus.',
      location: 'Creative Arts Center'
    },
    {
      id: 5,
      title: 'Global Alumni Meet 2026',
      date: '2026-07-10T18:00:00Z',
      category: 'Culture',
      description: 'Reconnect with old friends and expand your professional network at our annual global alumni reunion dinner.',
      location: 'Narayan Bhavan'
    }
  ];

  const [activeCategory, setActiveCategory] = useState('All');
  const [events, setEvents] = useState(mockEvents);

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
                className={`text-sm font-sans font-semibold tracking-wider uppercase pb-1 border-b-2 transition-all duration-300 ${activeCategory === cat
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
                className="group flex flex-col md:flex-row items-start md:items-center justify-between py-6 md:py-10 border-b border-gray-200 hover:bg-gray-50 transition-colors px-4 -mx-4 cursor-pointer"
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
