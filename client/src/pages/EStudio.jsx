import { Play, PlayCircle, Video, Radio } from 'lucide-react';
import FacilitiesLayout from '../layout/FacilitiesLayout';

const EStudio = () => {
  const videos = [
    "C Programming & Python Intro",
    "Linear Algebra & Matrix Operations",
    "Particle in a box & Energy Eigen Values",
    "Design of RC Structural Elements",
    "Electromagnetic Waves",
    "Signals and Systems",
    "Network Theory & Basic Electronics"
  ];

  return (
    <FacilitiesLayout activeId="estudio">
      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-black text-[#111111] mb-4 uppercase tracking-tight">E-Studio</h2>
        <div className="w-16 h-1 bg-[#FB6D39] rounded-full" />
      </div>

      <div className="bg-[#111111] text-white rounded-3xl p-8 mb-12 shadow-sm flex flex-col md:flex-row items-center gap-8 justify-between">
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-3 text-white">
            <Video className="w-6 h-6 text-[#FB6D39]" /> Media Center
          </h3>
          <p className="text-gray-300 leading-relaxed text-sm">
            Our E-Studio is instrumental in creating structured video lectures for distance learning and revision. These high-quality sessions are hosted directly on our official BMSIT YouTube channel, providing students with round-the-clock access to educational material across multiple engineering branches.
          </p>
        </div>
        <a href="https://www.youtube.com/@bmsitmedia8115/videos" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#111111] rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-[#FB6D39] hover:text-white transition-all transform hover:-translate-y-1 shadow-md">
          <Play className="w-5 h-5 text-red-500 group-hover:text-white" /> Visit Channel
        </a>
      </div>

      <div>
        <div className="mb-8 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center">
            <Radio className="w-6 h-6 text-[#FB6D39]" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[#111111] uppercase tracking-tight">Recorded Series</h2>
            <p className="text-gray-500 font-medium text-[13px] mt-1">A sample of top-notch academic content produced.</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {videos.map((topic, idx) => (
            <div key={idx} className="flex items-center gap-4 p-5 bg-white border border-gray-100 rounded-2xl shadow-sm hover:border-[#FB6D39] transition-colors group cursor-default">
              <div className="p-2.5 bg-gray-50 rounded-xl group-hover:bg-[#FB6D39] transition-colors">
                <PlayCircle className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </div>
              <span className="font-semibold text-sm text-[#111111]">{topic}</span>
            </div>
          ))}
        </div>
      </div>
    </FacilitiesLayout>
  );
};

export default EStudio;
