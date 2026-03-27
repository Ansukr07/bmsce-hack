import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft, GraduationCap, Users, CheckCircle2,
  ChevronRight, Mail, Phone, MapPin, BookOpen, Layers, User
} from 'lucide-react';
import { allDepartments, departmentData } from '../constants/departments';

// ─────────────────────────────────────────────────────────────────────────────
const DepartmentPage = () => {
  const { slug }  = useParams();
  const navigate  = useNavigate();
  const meta      = allDepartments.find(d => d.slug === slug);
  const data      = departmentData[slug];

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!meta || !data) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6 text-[#111111] font-sans">
        <h1 className="text-4xl font-bold">Department Not Found</h1>
        <button
          onClick={() => navigate('/departments')}
          className="flex items-center gap-2 text-[#FB6D39] font-medium hover:underline"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Departments
        </button>
      </div>
    );
  }

  const accent = meta.color;

  return (
    <div className="w-full min-h-screen font-sans text-[#111111] bg-white">

      {/* Back */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 pt-6">
        <button
          onClick={() => navigate('/departments')}
          className="flex items-center gap-2 text-sm font-medium text-[#6B6B6B] hover:text-[#111111] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> All Departments
        </button>
      </div>

      {/* Hero */}
      <section className="relative w-full px-6 lg:px-16 pt-12 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start">

          {/* Left */}
          <div className="lg:w-[60%]">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 mb-6"
            >
              <span
                className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full text-white"
                style={{ backgroundColor: accent }}
              >
                {data.accreditation}
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-[#6B6B6B]">
                Est. {data.established}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl font-bold uppercase leading-tight mb-4"
            >
              {data.fullName}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.18 }}
              className="w-24 h-1 mb-6 rounded-full"
              style={{ backgroundColor: accent }}
            />

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22 }}
              className="text-lg md:text-xl font-medium text-[#6B6B6B] max-w-2xl leading-relaxed italic"
            >
              "{data.tagline}"
            </motion.p>
          </div>

          {/* Stats */}
          <div className="lg:w-[40%] grid grid-cols-2 gap-4 w-full">
            {data.stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.12 + i * 0.07 }}
                className="bg-white/60 backdrop-blur-2xl border border-white/80 rounded-[28px] p-6 flex flex-col gap-1 shadow-sm"
              >
                <span className="text-3xl font-bold" style={{ color: accent }}>{s.value}</span>
                <span className="text-xs font-bold uppercase tracking-widest text-[#6B6B6B]">{s.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 flex flex-col lg:flex-row gap-8">

          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 bg-[#111111] text-white rounded-[40px] p-10 md:p-14"
          >
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="w-6 h-6" style={{ color: accent }} />
              <h2 className="text-xl font-bold uppercase tracking-tight">Vision</h2>
            </div>
            <p className="text-white/75 leading-relaxed italic text-base">"{data.vision}"</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 bg-white border border-gray-100 rounded-[40px] p-10 md:p-14 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <Layers className="w-6 h-6" style={{ color: accent }} />
              <h2 className="text-xl font-bold uppercase tracking-tight text-[#111111]">Mission</h2>
            </div>
            <ul className="space-y-4">
              {data.mission.map((m, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: accent }} />
                  <span className="text-[#111111] leading-relaxed text-sm">{m}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Academic Programs */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-[#111111] mb-4">
              Academic Programs
            </h2>
            <p
              className="text-sm font-bold uppercase tracking-widest border-l-4 pl-6 text-[#FB6D39]"
              style={{ borderColor: accent }}
            >
              Offered by the {data.fullName} department
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.programs.map((prog, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group bg-white rounded-[32px] p-8 md:p-10 border border-gray-100 hover:border-[#FB6D39] hover:bg-white transition-all duration-300 shadow-sm"
              >
                <div className="flex justify-between items-start mb-5">
                  <span className="text-xs font-bold uppercase tracking-widest" style={{ color: accent }}>{prog.level}</span>
                  <span className="bg-[#111111] text-white text-xs font-bold px-4 py-2 rounded-full">{prog.duration}</span>
                </div>
                <h3 className="text-2xl font-bold mb-6 text-[#111111] leading-snug">{prog.degree}</h3>
                <div className="flex justify-between items-end border-t border-gray-100 pt-5">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-400 block mb-1">Approved Intake</span>
                    <span className="text-3xl font-bold text-[#111111]">{prog.intake} Seats</span>
                  </div>
                  <button className="w-11 h-11 rounded-full border border-gray-100 flex items-center justify-center group-hover:bg-[#111111] group-hover:border-[#111111] text-[#111111] group-hover:text-white transition-all shadow-sm">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Department Faculty Section */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="mb-16 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-[#111111] mb-4">
              Expert Faculty
            </h2>
            <div className="flex items-center gap-3 justify-center lg:justify-start">
              <div className="w-10 h-[2px]" style={{ backgroundColor: accent }} />
              <p className="text-sm font-bold uppercase tracking-widest text-[#6B6B6B]">
                Learning from industry veterans
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.faculty.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-[32px] p-8 border border-gray-100 hover:shadow-xl hover:border-transparent transition-all duration-500 group"
              >
                <div className="flex items-center gap-5 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#F4F4F4] flex items-center justify-center text-[#A3A3A3] group-hover:bg-[#111111] group-hover:text-white transition-all duration-500">
                    <User className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-[#111111] leading-tight mb-1">{member.name}</h3>
                    <p className="text-xs font-bold uppercase tracking-widest text-[#FB6D39]" style={{ color: accent }}>
                      {member.designation}
                    </p>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-gray-100">
                  <a 
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-3 text-sm font-medium text-[#6B6B6B] hover:text-[#111111] transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    {member.email}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Labs & Contact */}
      <section className="py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 flex flex-col lg:flex-row gap-14">

          {/* Labs */}
          <div className="lg:w-[55%]">
            <h2 className="text-4xl font-bold uppercase tracking-tight text-[#111111] mb-10">
              Labs &amp; Facilities
            </h2>
            <div className="space-y-4">
              {data.facilities.map((fac, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -14 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-4 p-5 bg-white border border-gray-100 rounded-2xl hover:shadow-md hover:border-[#FB6D39] transition-all"
                >
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: accent }} />
                  <p className="text-[#111111] leading-relaxed font-medium text-sm">{fac}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="lg:w-[45%]">
            <div className="bg-[#111111] text-white rounded-[40px] p-10 md:p-14 sticky top-32">
              <h2 className="text-2xl font-bold uppercase mb-10 tracking-tight">Contact</h2>
              <div className="space-y-7">

                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-white/10 rounded-full group-hover:bg-[#FB6D39] transition-all flex-shrink-0">
                    <GraduationCap className="w-5 h-5" style={{ color: accent }} />
                  </div>
                  <div className="pt-1">
                    <p className="text-white/50 text-xs uppercase tracking-widest mb-0.5">Head of Department</p>
                    <p className="text-white font-medium">{data.hod.name}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-white/10 rounded-full group-hover:bg-[#FB6D39] transition-all flex-shrink-0">
                    <Mail className="w-5 h-5" style={{ color: accent }} />
                  </div>
                  <div className="pt-1">
                    <a href={`mailto:${data.hod.email}`} className="text-white hover:text-[#FB6D39] font-medium transition-colors">
                      {data.hod.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-white/10 rounded-full group-hover:bg-[#FB6D39] transition-all flex-shrink-0">
                    <Phone className="w-5 h-5" style={{ color: accent }} />
                  </div>
                  <div className="pt-1">
                    <span className="text-white font-medium">{data.hod.phone}</span>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-white/10 rounded-full group-hover:bg-[#FB6D39] transition-all flex-shrink-0">
                    <MapPin className="w-5 h-5" style={{ color: accent }} />
                  </div>
                  <p className="text-white font-medium leading-relaxed pt-1 text-sm">
                    BMS Institute of Technology &amp; Management,<br />
                    Doddaballapur Main Road, Avalahalli,<br />
                    Yelahanka, Bengaluru — 560119.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default DepartmentPage;
