import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Phone, Mail, MapPin, BadgeIndianRupee, GraduationCap, Building2 } from 'lucide-react';

const eligibility = [
  { title: "Undergraduate (B.E.)", reqs: "Passed 2nd PUC or 12th with Physics & Mathematics and Chemistry/Bio/CS/Electronics, securing ≥45% aggregate in optional subjects. Management quota requires a minimum of 60%." },
  { title: "M.Tech Programs", reqs: "Graduates with B.E./B.Tech (or equivalent) degree with ≥50% aggregate in relevant subjects are eligible for admission." },
  { title: "MCA", reqs: "Graduates with ≥50% aggregate marks (45% for SC/ST) with Mathematics/Statistics/CS as an elective. Entrance exam (PGCET/KEA) is required." },
  { title: "Ph.D. & Research", reqs: "Full-Time and Part-Time applicants eligible. Distance-mode engineering graduates not eligible. M.Sc Engg Research requires B.E./B.Tech ≥60%." }
];

const feesUG = [
  { name: "Computer Science & Engineering", fee: "₹7,50,000" },
  { name: "Artificial Intelligence & ML", fee: "₹6,00,000" },
  { name: "Computer Science & Business", fee: "₹5,00,000" },
  { name: "Electronics & Communication", fee: "₹5,00,000" },
  { name: "Mechanical Engineering", fee: "₹2,00,000" },
  { name: "Civil Engineering", fee: "₹2,00,000" },
  { name: "Electrical & Electronics Engg", fee: "₹2,00,000" }
];

const feesPG = [
  { name: "Master of Business Admin (MBA)", fee: "₹2,75,000" },
  { name: "Master of Computer Apps (MCA)", fee: "₹2,75,000" },
  { name: "M.Tech (VLSI & Embedded Systems)", fee: "₹2,50,000" },
  { name: "M.Tech (Cyber Security)", fee: "₹1,50,000" },
  { name: "M.Tech (CSE)", fee: "₹1,25,000" }
];

const Admissions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full min-h-screen relative font-sans text-[#111111]">
      
      {/* Hero Section */}
      <section className="relative w-full text-[#111111] pt-24 pb-32 px-6 lg:px-16 overflow-hidden rounded-bl-[80px]">
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-[60%]">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-serif font-bold uppercase leading-tight mb-8"
            >
              Admissions <br/><span className="text-[#FB6D39]">2026-27</span>
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
              className="text-lg md:text-xl font-medium text-[#6B6B6B] leading-relaxed max-w-2xl font-serif italic"
            >
              "A Personalized Academic Experience."
            </motion.p>
          </div>
          
          <div className="lg:w-[40%] flex flex-col gap-6 w-full">
            <div className="bg-white/60 backdrop-blur-3xl p-8 md:p-12 rounded-[40px] border border-white/80 shadow-[0_12px_40px_-10px_rgba(0,0,0,0.05)]">
              <h3 className="text-3xl font-serif mb-4 flex items-center gap-4 text-[#111111]"><GraduationCap className="w-8 h-8 text-[#FB6D39]" /> Join BMSIT&M</h3>
              <p className="text-[#6B6B6B] leading-relaxed font-sans">
                Explore our undergraduate and postgraduate programmes, designed to foster exceptional engineering and scientific talent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 w-full relative z-10">
            <div className="mb-16">
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#111111] mb-6 uppercase tracking-tight">Minimum Qualifications</h2>
                <p className="text-sm font-bold text-[#FB6D39] uppercase tracking-widest border-l-4 border-[#FB6D39] pl-6 max-w-2xl">
                    Ensure you meet the essential eligibility requirements before proceeding with your application.
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {eligibility.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white/60 backdrop-blur-2xl p-8 md:p-10 rounded-[32px] border border-white/80 hover:border-[#FB6D39] transition-colors shadow-sm"
                >
                  <h3 className="text-2xl font-serif font-bold mb-4 text-[#111111] flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#FB6D39]" />
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.reqs}
                  </p>
                </motion.div>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-8 italic">*Relaxation of 5% in minimum requirements applies for reserved categories as per government norms.</p>
        </div>
      </section>

      {/* Management Quota Fees */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 w-full flex flex-col lg:flex-row gap-16 relative z-10">
            <div className="lg:w-1/3">
                <div className="sticky top-32">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#111111] mb-6 uppercase tracking-tight">Management Quota Fees</h2>
                    <p className="text-sm font-bold text-[#FB6D39] uppercase tracking-widest border-l-4 border-[#FB6D39] pl-6 mb-8">
                        Fee structure per annum for the 2026-27 academic session under the direct management quota.
                    </p>
                    <div className="bg-white/60 backdrop-blur-3xl text-[#111111] p-8 rounded-[32px] shadow-[0_12px_40px_-10px_rgba(0,0,0,0.05)] border border-white/80">
                        <BadgeIndianRupee className="w-12 h-12 text-[#FB6D39] mb-6" />
                        <h4 className="text-2xl font-serif mb-2">Notice</h4>
                        <p className="text-[#6B6B6B] leading-relaxed font-light text-sm">
                            Fees mentioned are applicable per annum. Additional university, hostel, and examination fees are not included in this listing.
                        </p>
                    </div>
                </div>
            </div>
            
            <div className="lg:w-2/3">
                <div className="bg-white/60 backdrop-blur-3xl rounded-[40px] p-8 md:p-12 shadow-[0_12px_40px_-10px_rgba(0,0,0,0.05)] border border-white/80">
                    <h3 className="text-2xl font-serif font-bold text-[#111111] mb-8 pb-4 border-b border-gray-100">Undergraduate (B.E.)</h3>
                    <div className="space-y-4 mb-12">
                        {feesUG.map((item, idx) => (
                            <div key={idx} className="flex justify-between items-center p-4 hover:bg-gray-50 rounded-xl transition-colors">
                                <span className="font-medium text-gray-700">{item.name}</span>
                                <span className="font-bold text-[#FB6D39]">{item.fee}</span>
                            </div>
                        ))}
                    </div>

                    <h3 className="text-2xl font-serif font-bold text-[#1b1d0e] mb-8 pb-4 border-b border-gray-100">Postgraduate (PG)</h3>
                    <div className="space-y-4">
                        {feesPG.map((item, idx) => (
                            <div key={idx} className="flex justify-between items-center p-4 hover:bg-gray-50 rounded-xl transition-colors">
                                <span className="font-medium text-gray-700">{item.name}</span>
                                <span className="font-bold text-[#FB6D39]">{item.fee}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Helpline & Contacts */}
      <section className="py-24 relative overflow-hidden border-t border-white/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 w-full relative z-10">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-16 uppercase tracking-tight text-[#111111] text-center">Important Contacts</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                
                {/* Admissions */}
                <div className="bg-white/60 backdrop-blur-3xl border border-white/80 p-8 rounded-[32px] hover:border-[#FB6D39] hover:shadow-xl transition-all">
                    <Building2 className="w-8 h-8 text-[#FB6D39] mb-6" />
                    <h3 className="text-xl font-bold uppercase tracking-widest text-[#111111] mb-4">Admissions Enquiries</h3>
                    <p className="text-lg mb-2">080-26146800</p>
                    <p className="text-lg mb-4">080-26146856</p>
                    <p className="text-sm text-gray-400">Trust Office: 080-26611636</p>
                    <p className="text-sm text-gray-400">Email: mgmt.admissions@bmsce.ac.in</p>
                </div>

                {/* General Office & Fees */}
                <div className="bg-white/60 backdrop-blur-3xl border border-white/80 p-8 rounded-[32px] hover:border-[#FB6D39] hover:shadow-xl transition-all">
                    <Phone className="w-8 h-8 text-[#FB6D39] mb-6" />
                    <h3 className="text-xl font-bold uppercase tracking-widest text-[#111111] mb-4">Campus & Fees</h3>
                    <p className="text-lg mb-2">BMSIT Office: 080-68730444</p>
                    <p className="text-lg mb-4">Fee Office: 080-26186828</p>
                    <p className="text-sm text-gray-400">Principal: principal@bmsit.in</p>
                </div>

                {/* Women's Helpline & Hostels */}
                <div className="bg-white/60 backdrop-blur-3xl border border-white/80 p-8 rounded-[32px] hover:border-[#FB6D39] hover:shadow-xl transition-all">
                    <Phone className="w-8 h-8 text-[#FB6D39] mb-6" />
                    <h3 className="text-xl font-bold uppercase tracking-widest text-[#111111] mb-4">Hostel & Helplines</h3>
                    <p className="text-lg mb-2 text-[#FB6D39] font-bold">Women's Helpline (24x7):</p>
                    <p className="text-lg mb-4">080-68730452</p>
                    <p className="text-sm text-gray-400 mb-1">Hostel Office:</p>
                    <p className="text-sm text-gray-400">9741590336 / 9739947120</p>
                </div>

            </div>

            {/* Address Footer */}
            <div className="mt-16 text-center border-t border-[#FB6D39]/20 pt-16">
                <p className="text-xl font-serif text-[#111111] font-bold">BMS Institute of Technology & Management</p>
                <p className="text-gray-400 mt-2">Doddaballapur Main Road, Avalahalli, Yelahanka, Bengaluru – 560119</p>
            </div>
        </div>
      </section>

    </div>
  );
};

export default Admissions;
