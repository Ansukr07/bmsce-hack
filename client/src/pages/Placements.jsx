import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, LineChart, Line } from 'recharts';
import { Briefcase, TrendingUp, Award, CheckCircle2, Phone, Mail, MapPin } from 'lucide-react';

const industryReadiness = [
  "1st Year - Aptitude Training - 72 Hours - Assessments",
  "2nd Year - Technical/Soft Skills Training - 72 Hours - Assessments",
  "3rd Year - Technical/Domain Training - 36 Hours - Assessments",
  "Elite Training on Advanced IT Topics",
  "Alumni Interaction",
  "Senior to Junior Mentoring",
  "Mock Interviews and Group Discussions",
  "Grading the students – Based on Diagnostic Assessments",
  "Hackerearth Assessments (unlimited) for pre final & final years",
  "Industry-Institute Meets & Conclaves"
];

const placementStats = [
  { year: '2023', offers: 1144, placed: 786, highestSalary: 33, percentage: 93.23 },
  { year: '2024', offers: 1049, placed: 792, highestSalary: 26, percentage: 82.24 },
  { year: '2025', offers: 1044, placed: 841, highestSalary: 33, percentage: 76.66 }
];

const branchwiseStats = [
  { branch: "AIML", "2023": 98.24, "2024": 82.08, "2025": 88.88 },
  { branch: "CSE", "2023": 91.26, "2024": 93.33, "2025": 91.50 },
  { branch: "Civil", "2023": 79.69, "2024": 80.77, "2025": 79.41 },
  { branch: "ECE", "2023": 85.57, "2024": 78.68, "2025": 81.88 },
  { branch: "EEE", "2023": 95.45, "2024": 63.64, "2025": 82.76 },
  { branch: "ETE", "2023": 92.31, "2024": 70.83, "2025": 68.00 },
  { branch: "ISE", "2023": 85.39, "2024": 94.27, "2025": 86.60 },
  { branch: "Mech", "2023": 76.92, "2024": 67.85, "2025": 87.80 },
  { branch: "MCA", "2023": 77.59, "2024": 91.07, "2025": 53.33 },
  { branch: "MBA", "2023": null, "2024": 66.67, "2025": 70.09 },
  { branch: "M.Tech", "2023": 83.33, "2024": 100.00, "2025": 70.83 }
];

const recruiters = [
  "Accorian", "Act Fibernet", "Amazon", "Amagi", "Atkins Realis", "Airbus", "ANZ", "Alstom", "Axiscades",
  "Blackhawk Network", "Wipro", "Baker Tilly", "BT", "Burns McDonnell", "B.L. Kashyap", "Zopsmart",
  "Booking Holdings", "Cognizant", "Commcope", "Capgemini", "Dell", "Epicor", "Eurofins", "Exeevo",
  "EY", "Fidelity", "Fatherlite", "Greenway Health", "Galaxe Solutions", "Google", "GE Health Care",
  "In Time Tec", "Infosys", "Indium", "IBM", "Kyndryl", "KPMG", "Lowes", "LTM", "Microsoft", "Mathco",
  "Morgan Stanley", "Nokia", "Oracle", "PhonePe", "PWC", "Publicis Sapient", "Rapido", "SAP Labs",
  "Siemens Healthineers", "Tata Technologies", "TCS", "Tata Elxsi", "Toyota Kirloskar Motor", "Walmart"
];

const Placements = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full min-h-screen relative font-sans text-[#111111]">
      
      {/* Hero Section */}
      <section className="relative w-full text-[#111111] pt-24 pb-32 px-6 lg:px-16 overflow-hidden rounded-bl-[80px]">
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-serif font-bold uppercase leading-tight mb-8"
            >
              Training & <br/><span className="text-[#FB6D39]">Placement Cell</span>
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="w-24 h-1 bg-[#FB6D39] mb-8" 
            />
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl font-medium text-[#6B6B6B] leading-relaxed max-w-xl"
            >
              Established in 2004, the PT Cell provides complete placement solutions. From our first graduating class in 2005-06, we've built a legacy among Bengaluru's top-ranked engineering colleges.
            </motion.p>
          </div>
          
          <div className="lg:w-1/2 flex flex-col gap-6 w-full">
            <div className="bg-white/60 backdrop-blur-3xl p-8 md:p-12 rounded-[40px] border border-white/80 shadow-[0_12px_40px_-10px_rgba(0,0,0,0.05)] text-[#111111]">
              <h3 className="text-3xl font-serif mb-4 flex items-center gap-4"><Briefcase className="w-8 h-8 text-[#FB6D39]" /> 300+ Partners</h3>
              <p className="text-[#6B6B6B] leading-relaxed font-sans">
                Steady growth in recruiting organizations where BMSIT&M alumni make a difference globally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Stats Highlights */}
      <section className="max-w-7xl mx-auto px-6 lg:px-16 -mt-16 relative z-20 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once:true }} className="bg-white/60 backdrop-blur-3xl rounded-[32px] p-8 shadow-[0_12px_40px_-10px_rgba(0,0,0,0.05)] border border-white/80 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-white/80 border border-gray-100 rounded-full flex items-center justify-center mb-6 text-[#111111]">
                    <TrendingUp className="w-8 h-8 text-[#FB6D39]" />
                </div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-[#6B6B6B] mb-2">Highest Salary</h4>
                <p className="text-5xl font-serif font-bold text-[#111111]">33 LPA</p>
                <span className="text-xs text-gray-400 mt-4 uppercase tracking-widest">Recorded in 2025</span>
            </motion.div>
            
            <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once:true }} transition={{ delay: 0.1 }} className="bg-[#111111] text-white rounded-[32px] p-8 shadow-[0_12px_40px_-10px_rgba(0,0,0,0.2)] flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6 text-[#FB6D39]">
                    <Briefcase className="w-8 h-8" />
                </div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-white/70 mb-2">Total Job Offers</h4>
                <p className="text-5xl font-serif font-bold text-white">1,144</p>
                <span className="text-xs text-white/50 mt-4 uppercase tracking-widest">Achieved in 2023</span>
            </motion.div>

            <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once:true }} transition={{ delay: 0.2 }} className="bg-white/60 backdrop-blur-3xl rounded-[32px] p-8 shadow-[0_12px_40px_-10px_rgba(0,0,0,0.05)] border border-white/80 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-white/80 border border-gray-100 rounded-full flex items-center justify-center mb-6 text-[#111111]">
                    <Award className="w-8 h-8 text-[#FB6D39]" />
                </div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-[#6B6B6B] mb-2">Placement Rate</h4>
                <p className="text-5xl font-serif font-bold text-[#111111]">93.2%</p>
                <span className="text-xs text-gray-400 mt-4 uppercase tracking-widest">Peak Placement Rate</span>
            </motion.div>
        </div>
      </section>

      {/* Branchwise Analytics */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 w-full relative z-10">
            <div className="mb-16">
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#111111] mb-6 uppercase tracking-tight">Branch-Wise Analytics</h2>
                <p className="text-sm font-bold text-[#FB6D39] uppercase tracking-widest border-l-4 border-[#FB6D39] pl-6 max-w-2xl">
                    Consistent performance across all major engineering and postgraduate disciplines spanning 2023 to 2025.
                </p>
            </div>
            
            <div className="w-full h-[500px] bg-white/60 backdrop-blur-3xl border border-white/80 rounded-[40px] p-4 md:p-8 shadow-[0_12px_40px_-10px_rgba(0,0,0,0.05)]">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={branchwiseStats} margin={{ top: 20, right: 30, left: 0, bottom: 50 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e4e4cc" vertical={false} />
                        <XAxis dataKey="branch" tick={{ fill: '#111111', fontSize: 12, fontWeight: 600 }} angle={-45} textAnchor="end" />
                        <YAxis tick={{ fill: '#111111', fontWeight: 600 }} domain={[0, 100]} />
                        <Tooltip cursor={{ fill: 'rgba(251, 109, 57, 0.05)' }} contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
                        <Legend wrapperStyle={{ paddingTop: '40px', fontWeight: 600 }} />
                        <Bar dataKey="2023" fill="#B6FA82" radius={[4, 4, 0, 0]} name="2023 %" />
                        <Bar dataKey="2024" fill="#FB6D39" radius={[4, 4, 0, 0]} name="2024 %" />
                        <Bar dataKey="2025" fill="#111111" radius={[4, 4, 0, 0]} name="2025 %" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
      </section>

      {/* Industry Readiness Timeline */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 w-full flex flex-col lg:flex-row gap-16 relative z-10">
            <div className="lg:w-1/3">
                <div className="sticky top-32">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#111111] mb-6 uppercase tracking-tight">Industry<br/>Readiness</h2>
                    <p className="text-sm font-bold text-[#FB6D39] uppercase tracking-widest border-l-4 border-[#FB6D39] pl-6 mb-8">
                        A structured approach to transforming students into global engineering professionals.
                    </p>
                    <div className="bg-white/60 backdrop-blur-3xl border border-white/80 p-8 rounded-[32px] shadow-[0_12px_40px_-10px_rgba(0,0,0,0.05)]">
                        <p className="text-gray-600 font-medium leading-relaxed italic">
                            "A complete training solution is provided involving in-house faculty members, outsourced training partners, and industry interactions."
                        </p>
                    </div>
                </div>
            </div>
            <div className="lg:w-2/3">
                <div className="space-y-6">
                    {industryReadiness.map((item, idx) => (
                        <motion.div 
                            key={idx}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                            className="bg-white/60 backdrop-blur-3xl p-6 md:p-8 rounded-[24px] shadow-sm flex items-start gap-6 border border-white/80 hover:border-[#FB6D39] hover:shadow-xl transition-all duration-300"
                        >
                            <div className="w-12 h-12 flex-shrink-0 bg-white border border-gray-100 shadow-sm rounded-full flex items-center justify-center text-[#FB6D39] font-serif font-bold text-xl">
                                {idx + 1}
                            </div>
                            <p className="text-lg font-medium text-[#111111] pt-2">{item}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
      </section>

      {/* Top Recruiters Grid */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 w-full relative z-10">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-[#111111] mb-16 uppercase tracking-tight">Our Top Recruiters</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
                {recruiters.map((company, idx) => (
                    <div key={idx} className="bg-white/60 backdrop-blur-3xl p-6 rounded-2xl flex items-center justify-center text-center aspect-video hover:bg-[#111111] hover:text-white transition-colors duration-300 cursor-default border border-white/80 hover:border-[#111111] shadow-sm">
                        <span className="font-sans font-bold text-sm tracking-wider uppercase">{company}</span>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Placement Team & Contact */}
      <section className="py-24 relative overflow-hidden border-t border-white/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 w-full relative z-10">
            <div className="flex flex-col lg:flex-row gap-16 justify-between">
                
                {/* Team Leaders */}
                <div className="lg:w-1/2">
                    <h2 className="text-4xl font-serif font-bold mb-12 uppercase tracking-tight text-[#111111]">Placement Team</h2>
                    <div className="space-y-12">
                        <div>
                            <span className="text-xs font-bold uppercase tracking-widest text-[#FB6D39] block mb-2">Dean - Career Guidance</span>
                            <h3 className="text-3xl font-serif text-[#111111]">Dr. Ganesh P</h3>
                        </div>
                        <div>
                            <span className="text-xs font-bold uppercase tracking-widest text-[#FB6D39] block mb-2">Training and Placement Officer</span>
                            <h3 className="text-3xl font-serif text-[#111111]">Mrs. Ambika R Subhash</h3>
                        </div>
                        <div>
                            <span className="text-xs font-bold uppercase tracking-widest text-[#FB6D39] block mb-4">Deputy Placement Officers</span>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-lg font-medium text-[#6B6B6B]"><CheckCircle2 className="w-5 h-5 text-[#FB6D39]" /> Dr. Dankan Gowda V</li>
                                <li className="flex items-center gap-3 text-lg font-medium text-[#6B6B6B]"><CheckCircle2 className="w-5 h-5 text-[#FB6D39]" /> Dr. Chandrashekharappa Agasnalli</li>
                                <li className="flex items-center gap-3 text-lg font-medium text-[#6B6B6B]"><CheckCircle2 className="w-5 h-5 text-[#FB6D39]" /> Dr. Keerthi Kumar N</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Contact Info */}
                <div className="lg:w-5/12">
                    <div className="bg-[#111111] p-10 md:p-14 rounded-[40px] shadow-[0_12px_40px_-10px_rgba(0,0,0,0.2)] text-white">
                        <h2 className="text-3xl font-serif font-bold mb-10 uppercase tracking-tight text-white">Contact T&P Cell</h2>
                        
                        <div className="space-y-8">
                            <div className="flex items-start gap-5 group">
                                <div className="p-3 bg-white/10 rounded-full group-hover:bg-[#FB6D39] transition-all">
                                    <Mail className="w-6 h-6 text-[#FB6D39] group-hover:text-white" />
                                </div>
                                <div className="flex flex-col gap-1 pt-1">
                                    <a href="mailto:placement@bmsit.in" className="text-lg font-medium text-white/90 hover:text-[#FB6D39] transition-colors">placement@bmsit.in</a>
                                    <a href="mailto:bmsit.placements@gmail.com" className="text-lg font-medium text-white/90 hover:text-[#FB6D39] transition-colors">bmsit.placements@gmail.com</a>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-5 group">
                                <div className="p-3 bg-white/10 rounded-full group-hover:bg-[#FB6D39] transition-all">
                                    <Phone className="w-6 h-6 text-[#FB6D39] group-hover:text-white" />
                                </div>
                                <div className="flex flex-col gap-1 pt-1">
                                    <span className="text-lg font-medium text-white/90">080-68730426 / 080-68730450</span>
                                    <span className="text-lg font-medium text-white/90">+91-9980432684 / +91-9148735707</span>
                                </div>
                            </div>

                            <div className="flex items-start gap-5 group">
                                <div className="p-3 bg-white/10 rounded-full group-hover:bg-[#FB6D39] transition-all">
                                    <MapPin className="w-6 h-6 text-[#FB6D39] group-hover:text-white" />
                                </div>
                                <p className="text-lg font-medium text-white/90 leading-relaxed pt-1">
                                    BMS Institute of Technology & Management,<br/>
                                    Doddaballapur Main Road,<br/>
                                    Avalahalli, Yelahanka,<br/>
                                    Bengaluru - 560119.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
      </section>

    </div>
  );
};

export default Placements;
