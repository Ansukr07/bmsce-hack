import { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  BadgeIndianRupee,
  CheckCircle2,
  FileText,
  GraduationCap,
  Microscope,
  Phone,
} from 'lucide-react';

const ugRoutes = [
  'KCET / Diploma CET (KEA) / AICTE J&K',
  'COMEDK (Consortium of Medical, Engineering and Dental Colleges of Karnataka)',
  'Management Quota through BMS Educational Trust (forms usually issued in June/July)',
];

const ugCETDocs = [
  'KEA admission order (4 copies)',
  'SSLC / 10th marks card (DOB proof)',
  '2nd PUC / 12th marks card',
  'Study certificate (total 7 years)',
  'Caste certificate for reserved category and income certificate for SNQ (mandatory)',
  'Transfer certificate',
  'Migration certificate for non-Karnataka / non-PU Board students',
  'Special category originals (Rural, Kannada Medium, NCC, Sports, PH, Defence, etc.)',
  'Hyderabad Karnataka originals (Annexure A and B)',
  '2 recent passport photos',
  'Aadhaar copy and additional required documents',
  'Soft copy scan in pen drive: each doc/photo/sign in JPEG, <2MB, 200 DPI',
];

const ugComedkDocs = [
  'COMEDK seat allotment letter + fee receipt (4 copies)',
  'For management seats: provisional allotment letter + fee receipt (4 copies)',
  'Candidate and parent name must match SSLC / 10th records',
  'SSLC / 10th marks card',
  '2nd PUC / 12th marks card',
  'Study certificate + caste certificate if qualifying marks are below 45%',
  'Transfer certificate',
  'Migration certificate (non-Karnataka / non-PU Board)',
  'Hyderabad Karnataka originals (Annexure A and B)',
  'Current-year CET / COMEDK / JEE rank card for management quota',
  '2 recent passport photos',
  'Aadhaar copy + additional required documents',
  'Soft copy scan in pen drive: each doc/photo/sign in JPEG, <2MB, 200 DPI',
];

const ugManagementDocs = [
  'Allotment order + endorsement letter from BMSET',
  'Trust fee payment pink receipt copy',
  '12th marks card (original + 2 xerox copies)',
  '10th marks card (original + 2 xerox copies)',
  'Transfer certificate',
  'Migration certificate (if not PUC background)',
  'Study certificate from last institution (original + 2 xerox copies)',
  'CET / COMEDK / JEE rank card xerox (2 copies)',
  'Parent PAN card xerox',
  'Student Aadhaar copy',
  '3 latest passport size photos',
];

const ugPioGulfDocs = [
  'Allotment order + endorsement letter from ICD',
  'ICD fee payment receipt copy',
  '12th marks card (original + 2 xerox copies)',
  '10th marks card (original + 2 xerox copies)',
  'Transfer certificate + migration certificate',
  'Study certificate from last institution',
  'Citizenship card / passport copy',
  'Parents and student passport + visa copies (Gulf quota)',
  'Employment certification (Gulf quota)',
  'NRI certificate from embassy (Gulf quota)',
  '3 latest passport size photos',
];

const ugPmsssDocs = [
  'PMSSS admission order',
  '12th marks card (original + 2 xerox copies)',
  '10th marks card (original + 2 xerox copies)',
  'Transfer certificate',
  'Migration certificate',
  'Study certificate from last institution',
  'Student Aadhaar copy',
  '3 latest passport size photos',
  'Original income certificate',
];

const researchCenters = [
  'Mechanical Engineering',
  'Mathematics',
  'Electronics & Communication Engineering',
  'Electrical & Electronics Engineering',
  'Computer Science & Engineering',
  'Information Science & Engineering',
  'Electronics & Telecommunication Engineering',
  'Master of Computer Applications',
  'Physics',
  'Chemistry',
];

const mscResearchEligibility = [
  'B.E. / B.Tech with at least 60% aggregate (10% relaxation for SC/ST and notified categories)',
  'Teaching/research staff in AICTE-recognized colleges/polytechnics with minimum 1 year experience and sponsorship',
  'Government/quasi-government/public/private industry employees with minimum 1 year experience and sponsorship',
  'National fellowship awardees (for example CSIR) with B.E. / B.Tech and minimum 1 year experience',
  'NRI/FN/PIO candidates with VTU-recognized UG equivalence and English proficiency (TOEFL/IELTS where applicable)',
  'Candidate must qualify GATE/equivalent (within preceding 5 years) or University Research Aptitude Test (valid 3 years)',
];

const SectionTitle = ({ icon: Icon, title, subtitle }) => (
  <div className="mb-10">
    <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#111111] mb-4 flex items-center gap-3 uppercase tracking-tight">
      <Icon className="w-8 h-8 text-[#FB6D39]" />
      {title}
    </h2>
    <p className="text-sm font-bold text-[#FB6D39] uppercase tracking-[0.18em] border-l-4 border-[#FB6D39] pl-4 max-w-4xl">
      {subtitle}
    </p>
  </div>
);

const BulletCard = ({ title, items }) => (
  <div className="bg-white/65 backdrop-blur-2xl p-6 md:p-8 rounded-[28px] border border-white/80 shadow-sm">
    <h3 className="text-xl md:text-2xl font-serif font-bold text-[#111111] mb-4">{title}</h3>
    <ul className="space-y-2 text-[#4b5563] text-sm md:text-base leading-relaxed">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2">
          <CheckCircle2 className="w-4 h-4 text-[#FB6D39] mt-1 shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Admissions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full min-h-screen text-[#111111]">
      <section className="pt-24 pb-20 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-serif font-bold uppercase leading-tight"
          >
            Admissions Guide
            <br />
            <span className="text-[#FB6D39]">Undergraduate, PG & Research</span>
          </motion.h1>
          <p className="mt-6 max-w-4xl text-[#6B6B6B] text-base md:text-lg leading-relaxed">
            Comprehensive admissions information for BMSIT&M including eligibility, application routes, quota-wise document checklists, and research programme requirements.
          </p>
        </div>
      </section>

      <section className="pb-16 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto space-y-16">
          <div>
            <SectionTitle
              icon={GraduationCap}
              title="Undergraduate Programmes"
              subtitle="Eligibility criteria, admission routes, and first-year B.E. document checklists."
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <BulletCard
                title="Eligibility Criteria"
                items={[
                  '2nd PUC / 12th pass with Physics and Mathematics as compulsory subjects and one optional subject (Chemistry / Biotechnology / Computer Science / Biology / Electronics).',
                  'Minimum 45% aggregate marks in optional subjects with English as one language for engineering admissions.',
                  'For Management Quota at BMSIT&M, expected minimum marks are 60% as per current management norms.',
                ]}
              />

              <BulletCard
                title="Application Routes"
                items={ugRoutes}
              />
            </div>
          </div>

          <div>
            <SectionTitle
              icon={FileText}
              title="UG Document Checklist"
              subtitle="Bring originals and required copies as per your quota at the time of admission."
            />

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              <BulletCard title="CET Quota" items={ugCETDocs} />
              <BulletCard title="COMEDK Quota" items={ugComedkDocs} />
              <BulletCard title="Management Quota" items={ugManagementDocs} />
              <BulletCard title="PIO / Gulf Quota" items={ugPioGulfDocs} />
            </div>

            <div className="mt-6">
              <BulletCard title="PMSSS Quota" items={ugPmsssDocs} />
            </div>

            <p className="mt-4 text-sm text-gray-500 italic">
              Note: Keep sufficient attested copies of certificates. Originals are generally returned only after approval of admission from VTU, Belagavi.
            </p>
          </div>

          <div>
            <SectionTitle
              icon={BadgeIndianRupee}
              title="PG Eligibility"
              subtitle="Master of Technology and Master of Computer Applications admission requirements."
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <BulletCard
                title="M.Tech Eligibility"
                items={[
                  'Bachelor degree (B.E. / B.Tech) with not less than 50% aggregate.',
                  'Candidate who has passed one specified pre-university subject with 50% marks is eligible as per applicable norms.',
                  'Apply through: PGCET (KEA) / GATE / AICTE J&K / PGET (COMEDK).',
                ]}
              />
              <BulletCard
                title="MCA Eligibility"
                items={[
                  'Bachelor degree with not less than 50% aggregate marks (45% for SC/ST).',
                  'Must have Mathematics / Statistics / Computer Science / Programming / Applications / Business Statistics as optional/elective, or equivalent qualifying path.',
                  'Entrance pathway applies; for government seats and VTU-affiliated admissions, PGCET process is used.',
                  'Apply through: PGCET (KEA).',
                ]}
              />
            </div>
          </div>

          <div>
            <SectionTitle
              icon={Microscope}
              title="Research Programmes"
              subtitle="Ph.D and M.Sc. (Engineering by Research) structure, centers, and minimum qualifications."
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <BulletCard
                title="Ph.D Categories"
                items={[
                  'Full-Time',
                  'Part-Time (in-service candidates with minimum 1 year experience after UG)',
                  'Full-Time/Part-Time (Special) for NRI/FN/PIO with English proficiency and thesis submission in English',
                  'Dual Degree upgradation path from M.Sc.(Engg.) by Research / M.Tech as applicable',
                  'Distance-mode PG in Engineering/Science is not eligible (MBA/MCA distance mode may be considered as per UGC/AICTE norms).',
                ]}
              />
              <BulletCard
                title="Recognized Research Centers"
                items={researchCenters}
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
              <BulletCard
                title="Minimum Qualification - Faculty of Engineering"
                items={[
                  'Master degree in Engineering/Technology (or equivalent) with minimum CGPA 6.75/10.',
                  'Or first class at either Bachelor or Master level in Engineering/Technology.',
                  'M.Tech upgradation to integrated M.Tech + Ph.D may be considered with outstanding merit (minimum CGPA 7.75/10 or 70%) and committee approval.',
                ]}
              />
              <BulletCard
                title="Minimum Qualification - Faculty of Science"
                items={[
                  'M.Sc in Physics/Chemistry/Mathematics/Nano-Technology/Library Science/Physical Education or MCA from recognized university.',
                  'Minimum CGPA 6.75/10 or first class at either Bachelor or Master level.',
                  'Relaxation up to 5% or equivalent grade for SC/ST/Category-I/Physically challenged and notified reserved categories.',
                ]}
              />
            </div>

            <div className="mt-6">
              <BulletCard
                title="M.Sc. (Engineering) by Research - Eligibility"
                items={mscResearchEligibility}
              />
            </div>
          </div>

          <div>
            <SectionTitle
              icon={Phone}
              title="Admissions Contacts"
              subtitle="Reach the right office for UG/PG management admissions and support."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              <BulletCard
                title="Admissions Office"
                items={[
                  'Director (Admn): 080-26611636',
                  'Admissions Enquiry: 080-26146800 / 080-26146856',
                  'Email: mgmt.admissions@bmsce.ac.in',
                ]}
              />
              <BulletCard
                title="Campus Office"
                items={[
                  'BMSIT Office: 080-68730444',
                  'Fee Office: 080-26186828',
                  'Principal: principal@bmsit.in',
                ]}
              />
              <BulletCard
                title="Hostel and Helplines"
                items={[
                  'Hostel: 9741590336 / 9739947120 / 8792347320',
                  'Women Helpline: 080-68730452',
                  'Address: Doddaballapur Main Road, Avalahalli, Yelahanka, Bengaluru - 560119',
                ]}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;
