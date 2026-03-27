import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import clubImg from '../assets/images/club.png';
import facilitiesImg from '../assets/images/facilities.png';

const CampusLife = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Large Text */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="text-[#FB6D39] font-sans font-semibold tracking-widest uppercase text-xs mb-6 block border-l-2 border-[#FB6D39] pl-4">Beyond the Classroom</span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-serif text-black leading-[1.1] tracking-tight mb-8 uppercase"
            >
              VIBRANT<br />
              CAMPUS<br />
              LIFE
            </motion.h2>
            <p className="text-lg text-[#6B6B6B] font-sans leading-relaxed mb-10 max-w-md">
              Experience a rich environment that fosters creativity, collaboration, and personal growth. From high-tech laboratories to thriving cultural centers, we provide an ecosystem where ideas flourish.
            </p>
            <div>
              <Link to="/campus-life" className="text-[#111111] font-semibold font-sans uppercase tracking-widest text-sm pb-2 border-b-2 border-transparent hover:border-[#111111] transition-colors">
                Explore Campus Life
              </Link>
            </div>
          </div>

          {/* Right Images (Asymmetrical) */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-12 lg:mt-24"
            >
              <div className="rounded-[40px] overflow-hidden aspect-[4/5] shadow-2xl relative group bg-gray-100">
                <img
                  src={clubImg}
                  alt="Student association"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-2xl">
                  <h3 className="text-xl font-serif text-black m-0 leading-tight">120+ Clubs</h3>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="rounded-[40px] overflow-hidden aspect-[4/5] shadow-xl relative group bg-gray-100">
                <img
                  src={facilitiesImg}
                  alt="Modern Library"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-2xl">
                  <h3 className="text-xl font-serif text-black m-0 leading-tight">World-Class Facilities</h3>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CampusLife;
