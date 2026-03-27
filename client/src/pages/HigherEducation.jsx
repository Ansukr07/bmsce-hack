import { GraduationCap, BookOpen, Globe, Award, Target, Users, ArrowUpRight } from 'lucide-react';
import FacilitiesLayout from '../layout/FacilitiesLayout';

const HigherEducation = () => {
  const programs = [
    { degree: 'M.Tech in Computer Science & Engineering', dept: 'CSE', intake: 18 },
    { degree: 'M.Tech in Cyber Security', dept: 'CSE', intake: 18 },
    { degree: 'M.Tech in VLSI System Design', dept: 'ECE', intake: 24 },
    { degree: 'Master of Computer Applications (MCA)', dept: 'MCA', intake: 60 },
    { degree: 'Master of Business Administration (MBA)', dept: 'MBA', intake: 60 },
  ];

  const objectives = [
    { title: 'Academic Excellence', desc: 'Encourage students to pursue advanced research degrees and contribute to knowledge creation.', icon: Award },
    { title: 'Global Exposure', desc: 'Facilitate international collaborations, exchange programs, and research partnerships.', icon: Globe },
    { title: 'Research Orientation', desc: 'Promote research culture through funded Ph.D. programs and publication incentives.', icon: BookOpen },
    { title: 'Career Advancement', desc: 'Guide students towards competitive exams like GATE, GRE, CAT, and GMAT for higher studies.', icon: Target },
  ];

  const examSupport = [
    { name: 'GATE', desc: 'Coaching and study material for Graduate Aptitude Test in Engineering.' },
    { name: 'GRE', desc: 'Preparation support for students aspiring for MS programs abroad.' },
    { name: 'CAT / GMAT', desc: 'Guidance for management entrance examinations.' },
    { name: 'Civil Services', desc: 'Awareness sessions and mentoring for UPSC aspirants.' },
  ];

  return (
    <FacilitiesLayout activeId="highered">
      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-black text-[#111111] mb-4 uppercase tracking-tight">Higher Education Center</h2>
        <div className="w-16 h-1 bg-[#FB6D39] rounded-full" />
      </div>

      <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 mb-12 shadow-sm">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-3 text-[#111111]">
          <GraduationCap className="w-6 h-6 text-[#FB6D39]" /> About the Center
        </h3>
        <p className="text-[#6B6B6B] leading-relaxed text-sm">
          The Higher Education Center at BMSIT&M is dedicated to guiding students towards advanced academic pursuits. It offers support for competitive exam preparation, facilitates international university collaborations, and promotes a research-driven culture. The center serves as a launchpad for students aspiring for postgraduate studies, doctoral programs, and global academic careers.
        </p>
      </div>

      {/* PG Programs Table */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-[#111111] mb-6 uppercase tracking-tight">Postgraduate Programs Offered</h2>
        <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm">
          <div className="hidden sm:grid grid-cols-3 gap-4 px-6 py-4 bg-[#111111] text-white text-[11px] font-bold uppercase tracking-widest">
            <span>Program</span>
            <span>Department</span>
            <span>Annual Intake</span>
          </div>
          {programs.map((prog, i) => (
            <div key={i} className={`grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 px-6 py-5 items-center ${i !== programs.length - 1 ? 'border-b border-gray-100' : ''}`}>
              <span className="font-bold text-sm text-[#111111]">{prog.degree}</span>
              <span className="text-sm text-[#6B6B6B]">
                <span className="sm:hidden font-semibold text-[#111111]">Dept: </span>
                {prog.dept}
              </span>
              <span className="text-sm text-[#6B6B6B]">
                <span className="sm:hidden font-semibold text-[#111111]">Intake: </span>
                {prog.intake} seats
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
        <div>
          <h2 className="text-2xl font-bold text-[#111111] mb-6 uppercase tracking-tight">Objectives</h2>
          <div className="flex flex-col gap-4">
            {objectives.map((obj, i) => {
              const Icon = obj.icon;
              return (
                <div key={i} className="flex gap-4 p-5 bg-white border border-gray-100 rounded-2xl shadow-sm">
                  <Icon className="w-5 h-5 text-[#FB6D39] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-[#111111] mb-1">{obj.title}</h4>
                    <p className="text-[#6B6B6B] text-[13px] leading-relaxed">{obj.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-[#111111] mb-6 uppercase tracking-tight">Exam Preparation Support</h2>
          <div className="flex flex-col gap-4">
            {examSupport.map((exam, i) => (
              <div key={i} className="flex items-start gap-4 p-5 bg-white border border-gray-100 rounded-2xl shadow-sm hover:border-[#FB6D39] transition-colors group">
                <div className="p-2.5 bg-gray-50 rounded-xl group-hover:bg-[#FB6D39] transition-colors">
                  <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="font-bold text-[#111111] mb-1">{exam.name}</h4>
                  <p className="text-[#6B6B6B] text-[13px] leading-relaxed">{exam.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-[#111111] text-white rounded-2xl p-6 shadow-sm">
            <h4 className="font-bold flex items-center gap-2 mb-3">
              <Users className="w-5 h-5 text-[#FB6D39]" /> Contact
            </h4>
            <p className="text-sm text-gray-300">For guidance on higher education opportunities, reach out to the Higher Education Center coordinator through your department office.</p>
          </div>
        </div>
      </div>
    </FacilitiesLayout>
  );
};

export default HigherEducation;
