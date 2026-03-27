import { Shield, FileText, Award, BookOpen, Scale, Users, CheckCircle } from 'lucide-react';
import FacilitiesLayout from '../layout/FacilitiesLayout';

const IPCell = () => {
  const services = [
    { title: 'Patent Filing Assistance', desc: 'End-to-end support for faculty and student patent applications, from prior art search to filing.', icon: FileText },
    { title: 'IP Awareness Programs', desc: 'Regular workshops, seminars, and guest lectures on intellectual property rights and their importance.', icon: BookOpen },
    { title: 'Copyright & Trademark', desc: 'Guidance on copyright registration for software, publications, and creative works developed on campus.', icon: Award },
    { title: 'Legal Advisory', desc: 'Access to legal experts for IP-related queries, licensing agreements, and technology transfer.', icon: Scale },
  ];

  const stats = [
    { value: '10+', label: 'Patents Filed' },
    { value: '25+', label: 'IP Workshops' },
    { value: '50+', label: 'Faculty Trained' },
    { value: '100+', label: 'Students Aware' },
  ];

  const activities = [
    'National IP Awareness Day celebrations',
    'Patent drafting workshops for research scholars',
    'Collaboration with KSCST for innovation grants',
    'Annual IP audit of departmental research output',
    'Student innovation disclosure program',
    'Technology transfer facilitation with industry',
  ];

  return (
    <FacilitiesLayout activeId="ipcell">
      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-black text-[#111111] mb-4 uppercase tracking-tight">Intellectual Property Cell</h2>
        <div className="w-16 h-1 bg-[#FB6D39] rounded-full" />
      </div>

      <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 mb-12 shadow-sm">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-3 text-[#111111]">
          <Shield className="w-6 h-6 text-[#FB6D39]" /> About the IP Cell
        </h3>
        <p className="text-[#6B6B6B] leading-relaxed text-sm">
          The Intellectual Property Cell at BMSIT&M is established to create awareness and facilitate the protection of intellectual property generated through research and innovation. The cell assists faculty, students, and researchers in securing patents, copyrights, and trademarks, fostering a culture of innovation and research excellence across all departments.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {stats.map((stat, i) => (
          <div key={i} className="bg-[#111111] text-white rounded-2xl p-6 text-center">
            <div className="text-3xl font-black text-[#FB6D39] mb-1">{stat.value}</div>
            <div className="text-[11px] font-bold uppercase tracking-widest text-white/60">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
        <div>
          <h2 className="text-2xl font-bold text-[#111111] mb-6 uppercase tracking-tight">Services</h2>
          <div className="flex flex-col gap-4">
            {services.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <div key={i} className="flex gap-4 p-5 bg-white border border-gray-100 rounded-2xl shadow-sm">
                  <Icon className="w-5 h-5 text-[#FB6D39] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-[#111111] mb-1">{svc.title}</h4>
                    <p className="text-[#6B6B6B] text-[13px] leading-relaxed">{svc.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-[#111111] mb-6 uppercase tracking-tight">Key Activities</h2>
          <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
            <ul className="space-y-4">
              {activities.map((act, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[#4A4A4A]">
                  <CheckCircle className="w-4 h-4 text-[#FB6D39] flex-shrink-0 mt-0.5" />
                  <span className="font-medium">{act}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <h4 className="font-bold flex items-center gap-2 mb-3 text-[#111111]">
              <Users className="w-5 h-5 text-[#FB6D39]" /> IP Cell Coordinator
            </h4>
            <p className="text-sm text-gray-600">For IP-related queries, contact the IP Cell through the respective department HOD or the Research & Development cell.</p>
          </div>
        </div>
      </div>
    </FacilitiesLayout>
  );
};

export default IPCell;
