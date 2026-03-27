import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Calendar, FileText, Library, Award, MonitorPlay, Download, ChevronRight, FileArchive, ArrowUpRight } from 'lucide-react';

const categories = [
  { id: 'overview', title: 'Overview', icon: BookOpen },
  { id: 'timetables', title: 'Time Tables', icon: Calendar },
  { id: 'autonomous', title: 'Autonomous Syllabus', icon: FileArchive },
  { id: 'circulars', title: 'Circulars & CoE', icon: FileText },
  { id: 'library', title: 'Library Resource', icon: Library },
  { id: 'iqac', title: 'IQAC & NAAC', icon: Award },
  { id: 'nptel', title: 'NPTEL', icon: MonitorPlay },
];

const Academics = () => {
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // --- Content Renderers ---
  const renderOverview = () => (
    <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="space-y-8">
      <div className="bg-white/60 backdrop-blur-3xl p-10 rounded-[40px] shadow-[0_12px_40px_-10px_rgba(0,0,0,0.05)] border border-white/80">
        <h3 className="text-3xl font-serif font-bold mb-6 text-[#111111]">Academics Overview</h3>
        <p className="text-[#6B6B6B] leading-relaxed mb-6 text-lg">
          BMSIT&M strongly emphasizes <strong>Outcome-Based Engineering (OBE)</strong> education. Founded in 2002-03 with 3 engineering departments, the institute has scaled massively to include specialized branches like AI&ML, CSE, Cyber Security, and 11 VTU-recognized research centers.
        </p>
        <blockquote className="border-l-4 border-[#FB6D39] pl-6 italic text-gray-500 font-serif text-xl my-8">
          "Learning gives creativity, creativity leads to thinking, thinking provides knowledge, knowledge makes you great." <br/> — Dr. A.P.J. Abdul Kalam
        </blockquote>
        <p className="text-[#6B6B6B] leading-relaxed text-lg">
          We adopt a learner-centric, project-based philosophy supplemented by industrial visits and technical talks to expose students to cutting-edge technologies.
        </p>
      </div>
    </motion.div>
  );

  const renderTimeTables = () => {
    const branches = ['CSE', 'ECE', 'EEE', 'MECH', 'CIVIL', 'AI_ML', 'CSBS', 'MCA', 'MTech_CSE', 'MBA'];
    return (
      <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="space-y-8">
        <div className="bg-white/60 backdrop-blur-3xl p-10 rounded-[40px] shadow-[0_12px_40px_-10px_rgba(0,0,0,0.05)] border border-white/80">
          <h3 className="text-3xl font-serif font-bold mb-8 text-[#111111]">2025-26 Time Tables</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {branches.map(branch => (
              <div key={branch} className="group p-6 bg-white/40 rounded-[24px] border border-white/80 hover:border-[#FB6D39] flex justify-between items-center cursor-pointer transition-all hover:bg-white">
                <span className="font-bold text-[#111111]">{branch.replace('_', ' ')}</span>
                <Download className="w-5 h-5 text-[#FB6D39] group-hover:scale-110 transition-transform" />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    );
  };

  const renderAutonomous = () => {
    const schemes = ['2025 Scheme & Syllabus', '2024 Course Code Updates', '2023 CIE & SEE Pattern', '2022 VTU Regulations'];
    return (
      <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="space-y-8">
        <div className="bg-white/60 backdrop-blur-3xl p-10 rounded-[40px] shadow-[0_12px_40px_-10px_rgba(0,0,0,0.05)] border border-white/80">
          <h3 className="text-3xl font-serif font-bold mb-8 text-[#111111]">Autonomous Scheme</h3>
          <p className="text-[#6B6B6B] mb-8 border-l-2 border-[#FB6D39] pl-4">BMSIT&M operates under an autonomous framework, allowing for an agile and industry-relevant syllabus.</p>
          <div className="flex flex-col gap-4">
            {schemes.map((scheme, idx) => (
              <div key={idx} className="flex items-center justify-between p-6 bg-white/40 rounded-[20px] hover:bg-white border border-transparent hover:border-gray-200 transition-colors cursor-pointer group">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white border border-gray-100 rounded-xl shadow-sm"><FileArchive className="w-5 h-5 text-[#FB6D39]" /></div>
                  <span className="font-medium text-[#111111]">{scheme}</span>
                </div>
                <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-[#FB6D39] transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    );
  };

  const renderLibrary = () => (
    <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-[#111111] text-white p-10 rounded-[40px] shadow-[0_12px_40px_-10px_rgba(0,0,0,0.2)]">
          <Library className="w-12 h-12 text-[#FB6D39] mb-6" />
          <h3 className="text-3xl font-serif font-bold mb-6">Central Library</h3>
          <p className="text-white/80 leading-relaxed mb-8">
            Our two-floor state-of-the-art information center operates on the KOHA ILS. It is designed to be the ultimate lifelong learning hub for all stakeholders.
          </p>
          <div className="flex gap-4">
            <div className="bg-white/10 p-4 rounded-2xl flex-1 border border-white/20">
              <span className="block text-2xl font-bold">75,000+</span>
              <span className="text-xs text-white/50 uppercase tracking-widest font-bold">Volumes</span>
            </div>
            <div className="bg-white/10 p-4 rounded-2xl flex-1 border border-white/20">
              <span className="block text-2xl font-bold">15,700+</span>
              <span className="text-xs text-white/50 uppercase tracking-widest font-bold">Titles</span>
            </div>
          </div>
        </div>
        <div className="bg-white/60 backdrop-blur-3xl p-10 rounded-[40px] shadow-[0_12px_40px_-10px_rgba(0,0,0,0.05)] border border-white/80">
          <h4 className="text-xl font-bold mb-6 uppercase tracking-widest text-[#111111]">Facilities & Timings</h4>
          <ul className="space-y-4 mb-8 text-[#6B6B6B]">
            <li className="flex items-start gap-3"><ChevronRight className="w-5 h-5 text-[#FB6D39] flex-shrink-0" /> SC/ST Book Bank facility</li>
            <li className="flex items-start gap-3"><ChevronRight className="w-5 h-5 text-[#FB6D39] flex-shrink-0" /> DELNET resource sharing</li>
            <li className="flex items-start gap-3"><ChevronRight className="w-5 h-5 text-[#FB6D39] flex-shrink-0" /> 20 dedicated systems for IEEE E-journals</li>
          </ul>
          <div className="bg-white/80 p-6 rounded-2xl border border-white/80">
            <span className="block text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Reference Section</span>
            <span className="font-bold text-[#111111]">Mon-Sat: 8:30 AM – 8:30 PM</span>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const renderIQAC = () => (
    <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="space-y-8">
      <div className="bg-white/60 backdrop-blur-3xl p-10 rounded-[40px] shadow-[0_12px_40px_-10px_rgba(0,0,0,0.05)] border border-white/80">
        <div className="flex items-center gap-6 mb-8 pb-8 border-b border-gray-100">
          <div className="w-20 h-20 bg-white shadow-sm border border-gray-100 rounded-full flex items-center justify-center text-[#FB6D39]">
            <Award className="w-10 h-10" />
          </div>
          <div>
            <h3 className="text-3xl font-serif font-bold text-[#111111] mb-2">IQAC Cell</h3>
            <span className="inline-block px-4 py-1 bg-[#B6FA82]/20 text-green-900 border border-[#B6FA82] text-sm font-bold uppercase tracking-widest rounded-full">NAAC A Grade (3.21 CGPA)</span>
          </div>
        </div>
        <h4 className="text-lg font-bold mb-4">Roles & Responsibilities</h4>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
          <li className="flex items-start gap-3 p-4 bg-white/80 border border-white/80 rounded-2xl"><ChevronRight className="w-5 h-5 text-[#FB6D39] flex-shrink-0" /> Develop quality benchmarks for academic activities.</li>
          <li className="flex items-start gap-3 p-4 bg-white/80 border border-white/80 rounded-2xl"><ChevronRight className="w-5 h-5 text-[#FB6D39] flex-shrink-0" /> Monitor attainment of the institute's vision.</li>
          <li className="flex items-start gap-3 p-4 bg-white/80 border border-white/80 rounded-2xl"><ChevronRight className="w-5 h-5 text-[#FB6D39] flex-shrink-0" /> Prepare the Annual Quality Assurance Report (AQAR).</li>
          <li className="flex items-start gap-3 p-4 bg-white/80 border border-white/80 rounded-2xl"><ChevronRight className="w-5 h-5 text-[#FB6D39] flex-shrink-0" /> Collect stakeholder feedback on quality processes.</li>
        </ul>
      </div>
    </motion.div>
  );

  const renderCirculars = () => {
    const circulars = [
      "Revaluation and Photocopy of Answer Scripts of Higher Semesters",
      "1st Year College Miscellaneous Fees 2021-22",
      "Exam Application Form 1st Sem PG",
      "Transportation Schedule for VTU Examination"
    ];
    return (
      <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="space-y-8">
        <div className="bg-white/60 backdrop-blur-3xl p-10 rounded-[40px] border border-white/80 shadow-[0_12px_40px_-10px_rgba(0,0,0,0.05)]">
          <h3 className="text-3xl font-serif font-bold mb-8 text-[#111111]">Circulars & Controller of Exams</h3>
          <div className="space-y-4">
            {circulars.map((circ, idx) => (
              <div key={idx} className="flex justify-between items-center p-6 border-l-4 border-l-[#FB6D39] bg-white hover:bg-white/60 transition-colors rounded-r-2xl cursor-pointer shadow-sm">
                <span className="font-medium text-[#111111]">{circ}</span>
                <span className="text-sm font-bold text-[#FB6D39] uppercase">View</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    );
  };

  const renderNptel = () => (
    <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="space-y-8">
      <div className="bg-white/40 backdrop-blur-3xl border border-white/80 text-[#111111] p-10 lg:p-16 rounded-[40px] shadow-2xl flex flex-col items-center text-center">
        <MonitorPlay className="w-16 h-16 text-[#FB6D39] mb-6" />
        <h3 className="text-4xl font-serif font-bold mb-4">NPTEL Local Chapter</h3>
        <p className="text-[#6B6B6B] max-w-xl leading-relaxed mb-8">Access thousands of digital engineering courses certified by IITs. BMSIT maintains a dedicated digital library hub with 32 systems purely for NPTEL consumption.</p>
        <button className="px-8 py-4 bg-[#111111] text-white rounded-full font-bold uppercase tracking-widest hover:bg-[#FB6D39] transition-colors">Go to Portal</button>
      </div>
    </motion.div>
  );

  // Router Switch
  const renderContent = () => {
    switch(activeTab) {
      case 'overview': return renderOverview();
      case 'timetables': return renderTimeTables();
      case 'autonomous': return renderAutonomous();
      case 'library': return renderLibrary();
      case 'iqac': return renderIQAC();
      case 'circulars': return renderCirculars();
      case 'nptel': return renderNptel();
      default: return renderOverview();
    }
  };

  return (
    <div className="w-full min-h-screen relative font-sans pb-32">
      {/* Hero */}
      <section className="text-[#111111] pt-24 pb-20 px-6 rounded-bl-[60px] md:rounded-bl-[100px] mb-12">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-serif font-bold uppercase tracking-tight mb-6">Academics</h1>
          <p className="text-lg md:text-xl text-[#6B6B6B] font-serif italic max-w-2xl mx-auto">
            "Fostering an ecosystem of continuous learning and rigorous outcome-based education."
          </p>
        </div>
      </section>

      {/* Main Layout */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 flex flex-col lg:flex-row gap-12">
        
        {/* Sidebar Nav */}
        <div className="lg:w-1/3">
          <div className="sticky top-32 flex flex-col gap-2 bg-white/60 backdrop-blur-3xl p-6 rounded-[32px] shadow-[0_12px_40px_-10px_rgba(0,0,0,0.05)] border border-white/80">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`flex items-center gap-4 w-full p-4 rounded-2xl text-left transition-all duration-300 ${isActive ? 'bg-[#111111] text-white shadow-md' : 'text-gray-600 hover:bg-white/80 hover:text-[#111111]'}`}
                >
                  <Icon className={`w-5 h-5 ${isActive ? 'text-[#FB6D39]' : ''}`} />
                  <span className="font-bold tracking-wide">{cat.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content Area */}
        <div className="lg:w-2/3 min-h-[600px]">
          <AnimatePresence mode="wait">
            <motion.div key={activeTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
};

export default Academics;
