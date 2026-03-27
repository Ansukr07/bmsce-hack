// All BMSIT departments — official list
export const allDepartments = [
  { name: 'Artificial Intelligence and Machine Learning', slug: 'aiml',       color: '#0891B2' },
  { name: 'Computer Science and Engineering',             slug: 'cse',        color: '#FB6D39' },
  { name: 'Computer Science and Business Systems',        slug: 'csbs',       color: '#7C3AED' },
  { name: 'Electronics and Communication Engineering',    slug: 'ece',        color: '#059669' },
  { name: 'Electrical and Electronics Engineering',       slug: 'eee',        color: '#D97706' },
  { name: 'Mechanical Engineering',                       slug: 'mech',       color: '#DC2626' },
  { name: 'Civil Engineering',                            slug: 'civil',      color: '#4F46E5' },
  { name: 'Master of Business Administration (MBA)',      slug: 'mba',        color: '#9333EA' },
  { name: 'Master of Computer Applications (MCA)',        slug: 'mca',        color: '#E11D48' },
  { name: 'M.Tech in Cyber Security',                     slug: 'cyber-security', color: '#1E293B' },
  { name: 'M.Tech in VLSI System Design',                 slug: 'vlsi',           color: '#7C3AED' },
];

export const departmentData = {
  aiml: {
    fullName: 'Artificial Intelligence and Machine Learning',
    tagline: 'Preparing skilled professionals for the AI-driven future.',
    established: '2020',
    accreditation: 'NBA Visit Scheduled',
    vision: 'To emerge as a leading department in AI and ML by preparing skilled, responsible, and eco-friendly professionals who use technology to improve society.',
    mission: [
      'Equip students with in-depth knowledge in AI and ML built upon a robust foundation in CSE through industry-focused curriculum.',
      'Encourage research and innovation through industry partnerships and sustainable technology practices.',
      'Inspire students toward ethical leadership and entrepreneurship through student-led activities.',
    ],
    stats: [
      { label: 'Faculty', value: '18+' },
      { label: 'Ph.D. Holders', value: '8' },
      { label: 'Annual Intake', value: '180' },
      { label: 'R&D Projects', value: '5+' },
    ],
    programs: [
      { degree: 'B.E. in Artificial Intelligence & ML', level: 'Undergraduate', duration: '4 Years', intake: 180 },
    ],
    facilities: [
      'Advanced AI/ML Computing Lab with NVIDIA GPUs',
      'Industry Supported Lab for Deep Learning',
      'Collaborative Research Centre for Intelligent Systems',
    ],
    faculty: [
      { name: 'Dr. Anupama H S', designation: 'Professor & HOD', email: 'hod_aiml@bmsit.in' },
      { name: 'Dr. Sanjay H A', designation: 'Professor & Principal', email: 'principal@bmsit.in' },
      { name: 'Dr. Bharathi M A', designation: 'Professor', email: 'bharathima@bmsit.in' },
      { name: 'Dr. Pradeep K R', designation: 'Associate Professor', email: 'pradeepkr@bmsit.in' },
      { name: 'Dr. Hemamalini B H', designation: 'Associate Professor', email: 'hemamalinibh@bmsit.in' },
    ],
    hod: { name: 'Dr. Anupama H S', email: 'hod_aiml@bmsit.in', phone: '080-68730429' },
  },

  cse: {
    fullName: 'Computer Science and Engineering',
    tagline: 'Nurturing technically competent, ethically responsible professionals.',
    established: '1986',
    accreditation: 'NBA Accredited',
    vision: 'To be a centre of excellence in Computer Science and Engineering education and research, nurturing technically competent, ethically responsible, and socially conscious professionals to meet global challenges.',
    mission: [
      'Impart quality education by integrating fundamental knowledge with emerging technologies.',
      'Foster innovation and research aptitude through project-based learning and collaborative initiatives.',
      'Develop graduates with strong ethical values, leadership qualities, and a commitment to lifelong learning.',
    ],
    stats: [
      { label: 'Faculty Strength', value: '55+' },
      { label: 'Ph.D. Holders', value: '28' },
      { label: 'Annual UG Intake', value: '180' },
      { label: 'Research Scholars', value: '14+' },
    ],
    programs: [
      { degree: 'B.E. in Computer Science & Engineering', level: 'Undergraduate', duration: '4 Years', intake: 180 },
      { degree: 'M.Tech in Computer Science & Engineering', level: 'Postgraduate', duration: '2 Years', intake: 18 },
    ],
    facilities: [
      'NVidia Center of Excellence for Deep Learning',
      'CSE Research Centre (since 2014)',
      'High-Performance Computing Laboratory',
      'Wipro and Mindtree Training Partnership Hub',
    ],
    faculty: [
      { name: 'Dr. Satish Kumar T', designation: 'Professor & HOD', email: 'hod_cse@bmsit.in' },
      { name: 'Dr. Anil G N', designation: 'Professor', email: 'anilgn@bmsit.in' },
      { name: 'Dr. Surekha K B', designation: 'Professor', email: 'surekhakb@bmsit.in' },
      { name: 'Dr. Mahesh G', designation: 'Professor', email: 'maheshg@bmsit.in' },
      { name: 'Dr. N Rakesh', designation: 'Associate Professor', email: 'nrakesh@bmsit.in' },
    ],
    hod: { name: 'Dr. Satish Kumar T', email: 'hod_cse@bmsit.in', phone: '080-68730429' },
  },

  csbs: {
    fullName: 'Computer Science and Business Systems',
    tagline: 'Bridging computing technology with business intelligence.',
    established: '2020',
    accreditation: 'Industry Partnered',
    vision: 'To produce career-ready graduates by combining academic rigor with practical insights from industry professionals in computing and business.',
    mission: [
      'Impart technical knowledge in computing alongside essential business understanding.',
      'Align curriculum with current corporate practices through TCS expert partnership.',
      'Emphasize hands-on exposure through real projects and industry internships.',
    ],
    stats: [
      { label: 'Faculty', value: '12+' },
      { label: 'Industry Support', value: 'TCS' },
      { label: 'Annual Intake', value: '60' },
      { label: 'Project-focused', value: '100%' },
    ],
    programs: [
      { degree: 'B.E. in Computer Science & Business Systems', level: 'Undergraduate', duration: '4 Years', intake: 60 },
    ],
    facilities: [
      'TCS Monitored Learning Environment',
      'Business Analytics and Computing Lab',
      'Collaborative Project Workspaces',
    ],
    faculty: [
      { name: 'Dr. Vishwa Kiran S', designation: 'Professor & HOD', email: 'hod_csbs@bmsit.in' },
      { name: 'Dr. Archana R A', designation: 'Associate Professor', email: 'archanara@bmsit.in' },
      { name: 'Prof. Pradeep Kumar G M', designation: 'Assistant Professor', email: 'pradeepkumargm@bmsit.in' },
      { name: 'Prof. Udayaprasad P K', designation: 'Assistant Professor', email: 'udayaprasadpk@bmsit.in' },
      { name: 'Dr. R Jennie Bharathi', designation: 'Assistant Professor', email: 'rjenniebharathi@bmsit.in' },
    ],
    hod: { name: 'Dr. Vishwa Kiran S', email: 'hod_csbs@bmsit.in', phone: '080-68730429' },
  },

  ece: {
    fullName: 'Electronics and Communication Engineering',
    tagline: 'Pioneering quality education in electronics and allied fields.',
    established: '1986',
    accreditation: 'NBA Accredited',
    vision: 'Be a pioneer in providing quality education in electronics, communication and allied engineering fields to serve as a valuable resource for industry and society.',
    mission: [
      'Nurture students with strong foundation in theoretical and practical concepts through innovative pedagogy.',
      'Foster interdisciplinary research, entrepreneurship skills and instill professional ethics.',
      'Provide experiential learning opportunities through industry interface.',
    ],
    stats: [
      { label: 'Faculty Strength', value: '35+' },
      { label: 'Ph.D. Holders', value: '15' },
      { label: 'Annual UG Intake', value: '180' },
      { label: 'Labs', value: '12' },
    ],
    programs: [
      { degree: 'B.E. in Electronics & Communication', level: 'Undergraduate', duration: '4 Years', intake: 180 },
      { degree: 'M.Tech in VLSI System Design', level: 'Postgraduate', duration: '2 Years', intake: 24 },
    ],
    facilities: [
      'Texas Instruments Center of Excellence',
      'VLSI Design and Simulation Lab (Cadence/Mentor Graphics)',
      'Communication and Networking Laboratory',
    ],
    faculty: [
      { name: 'Dr. Jayadeva G S', designation: 'Professor & HOD', email: 'hod_ece@bmsit.in' },
      { name: 'Dr. Shobharani A', designation: 'Professor', email: 'shobharania@bmsit.in' },
      { name: 'Dr. M C Hanumantharaju', designation: 'Professor', email: 'mchanumantharaju@bmsit.in' },
      { name: 'Dr. Ambika R', designation: 'Professor', email: 'ambikar@bmsit.in' },
      { name: 'Dr. Seema Singh', designation: 'Professor', email: 'seemasingh@bmsit.in' },
    ],
    hod: { name: 'Dr. Jayadeva G S', email: 'hod_ece@bmsit.in', phone: '080-68730429' },
  },

  eee: {
    fullName: 'Electrical and Electronics Engineering',
    tagline: 'Facilitating development of competent electrical professionals.',
    established: '1986',
    accreditation: 'NBA Accredited',
    vision: 'To emerge as one of the finest Electrical & Electronics Engineering Departments facilitating the development of competent professionals, contributing to the betterment of society.',
    mission: [
      'Create a motivating environment for learning Electrical Sciences through teaching and research.',
      'Effective use of state of the art facilities and co-curricular activities.',
      'Foster professional ethics and social responsibility.',
    ],
    stats: [
      { label: 'Faculty', value: '18+' },
      { label: 'Ph.D. Holders', value: '10' },
      { label: 'Annual Intake', value: '60' },
      { label: 'Research Scholars', value: '6+' },
    ],
    programs: [
      { degree: 'B.E. in Electrical & Electronics', level: 'Undergraduate', duration: '4 Years', intake: 60 },
    ],
    facilities: [
      'Electrical Machines and Control Systems Lab',
      'Power Electronics and Drive Systems Lab',
      'High Voltage and Relay Testing Laboratory',
    ],
    faculty: [
      { name: 'Dr. Rajesh Gopinath', designation: 'Professor & HOD', email: 'hod_eee@bmsit.in' },
      { name: 'Dr. Prashant Athavale', designation: 'Professor', email: 'prashantai@bmsit.in' },
      { name: 'Dr. G Raghavendra', designation: 'Associate Professor', email: 'graghavendra@bmsit.in' },
      { name: 'Dr. Narapareddy Ramarao', designation: 'Associate Professor', email: 'nramarao@bmsit.in' },
      { name: 'Dr. Suma Umesh', designation: 'Associate Professor', email: 'sumaumesh@bmsit.in' },
    ],
    hod: { name: 'Dr. Rajesh Gopinath', email: 'hod_eee@bmsit.in', phone: '080-68730429' },
  },

  mech: {
    fullName: 'Mechanical Engineering',
    tagline: 'A hub of excellence for research and innovation.',
    established: '1986',
    accreditation: 'NBA Accredited',
    vision: 'To establish a hub of excellence in diverse field of Mechanical Engineering for Research and Innovation to meet the industrial and societal challenges.',
    mission: [
      'Impart quality education through effective Teaching-Learning Process and State-of-the-Art Infrastructure.',
      'Provide a conducive environment to excel in Research and Innovation for sustainable solutions.',
      'Collaborate with industries for experiential learning and skill development.',
    ],
    stats: [
      { label: 'Faculty', value: '25+' },
      { label: 'Ph.D. Holders', value: '12' },
      { label: 'Annual Intake', value: '60' },
      { label: 'Patents Filed', value: '10+' },
    ],
    programs: [
      { degree: 'B.E. in Mechanical Engineering', level: 'Undergraduate', duration: '4 Years', intake: 60 },
    ],
    facilities: [
      'Advanced Manufacturing and Robotics Lab',
      'Thermal Engineering and Heat Transfer Lab',
      'CAD/CAM/CAE Computational Center',
    ],
    faculty: [
      { name: 'Dr. K M Sathish Kumar', designation: 'Professor & HOD', email: 'hod_mech@bmsit.in' },
      { name: 'Dr. Madhu M C', designation: 'Associate Professor', email: 'madhumc@bmsit.in' },
      { name: 'Prof. Praveen Kumar T N', designation: 'Assistant Professor', email: 'praveenkumartn@bmsit.in' },
      { name: 'Dr. G L Anantha Krishna', designation: 'Associate Professor', email: 'glananthakrishna@bmsit.in' },
      { name: 'Dr. Shripad Diwakar', designation: 'Associate Professor', email: 'shripaddiwakar@bmsit.in' },
    ],
    hod: { name: 'Dr. K M Sathish Kumar', email: 'hod_mech@bmsit.in', phone: '080-68730429' },
  },

  civil: {
    fullName: 'Civil Engineering',
    tagline: 'Developing technically competent engineers with professional integrity.',
    established: '2010',
    accreditation: 'NBA Accredited',
    vision: 'To be an Exemplary Centre, disseminating quality education and developing technically competent civil engineers with professional integrity for the betterment of society.',
    mission: [
      'Impart technical proficiency through quality education.',
      'Motivate entrepreneurship through enhanced industry interaction and skill-based training.',
      'Inculcate human values through outreach activities.',
    ],
    stats: [
      { label: 'Faculty', value: '16+' },
      { label: 'Ph.D. Holders', value: '7' },
      { label: 'Annual Intake', value: '60' },
      { label: 'NABL Labs', value: 'Yes' },
    ],
    programs: [
      { degree: 'B.E. in Civil Engineering', level: 'Undergraduate', duration: '4 Years', intake: 60 },
    ],
    facilities: [
      'NABL Accredited Material Testing Lab',
      'Environmental Engineering Laboratory',
      'Surveying and Geotechnical Engineering Lab',
      'Sustainable Concrete Technology Centre',
    ],
    faculty: [
      { name: 'Dr. Rajakumara H N', designation: 'Professor & HOD', email: 'hod_civil@bmsit.in' },
      { name: 'Dr. G Aruna', designation: 'Professor', email: 'arung@bmsit.in' },
      { name: 'Dr. Rajesh Gopinath', designation: 'Associate Professor', email: 'rajeshgopinath@bmsit.in' },
      { name: 'Prof. Shobha R', designation: 'Assistant Professor', email: 'shobhar@bmsit.in' },
      { name: 'Prof. Archana K', designation: 'Assistant Professor', email: 'archanak@bmsit.in' },
    ],
    hod: { name: 'Dr. Rajakumara H N', email: 'hod_civil@bmsit.in', phone: '080-68730429' },
  },

  mba: {
    fullName: 'Master of Business Administration (MBA)',
    tagline: 'Imparting value-based education to develop future leaders.',
    established: '2008',
    accreditation: 'Recognized by VTU',
    vision: 'To be a prominent management institute imparting value-based education and research to develop leaders and entrepreneurs.',
    mission: [
      'Impart management education that integrates theoretical foundations with practical applications.',
      'Develop the passion for innovation, entrepreneurship, and social responsibility.',
      'Foster a culture of research excellence.',
    ],
    stats: [
      { label: 'Faculty', value: '10+' },
      { label: 'Ph.D. Holders', value: '6' },
      { label: 'Annual Intake', value: '60' },
      { label: 'Alumni Network', value: '500+' },
    ],
    programs: [
      { degree: 'Master of Business Administration', level: 'Postgraduate', duration: '2 Years', intake: 60 },
    ],
    facilities: [
      'Management Simulation and Case Study Center',
      'Corporate Interaction and Placement Cell',
      'Entrepreneurship Development Hub',
    ],
    faculty: [
      { name: 'Dr. Balabhadra Kishore', designation: 'Professor & HoD', email: 'hod_mba@bmsit.in' },
      { name: 'Dr. Jyothi E Singh', designation: 'Associate Professor', email: 'jyothiesingh@bmsit.in' },
      { name: 'Dr. Nethravathi N', designation: 'Associate Professor', email: 'nethravathin@bmsit.in' },
      { name: 'Dr. Vinay H V', designation: 'Associate Professor', email: 'vinayhv@bmsit.in' },
      { name: 'Dr. Vishwanatha M R', designation: 'Associate Professor', email: 'vishwanathamr@bmsit.in' },
    ],
    hod: { name: 'Dr. Balabhadra Kishore', email: 'hod_mba@bmsit.in', phone: '080-68730429' },
  },

  mca: {
    fullName: 'Master of Computer Applications (MCA)',
    tagline: 'Producing skilled professionals for sustainable IT solutions.',
    established: '2001',
    accreditation: 'NBA Accredited',
    vision: 'To emerge as a leading department in computer applications, producing skilled professionals equipped to deliver sustainable solutions.',
    mission: [
      'Facilitate effective learning environment through quality education.',
      'Industry interaction with orientation towards research.',
      'Critical thinking and entrepreneurial skills development.',
    ],
    stats: [
      { label: 'Faculty', value: '15+' },
      { label: 'Ph.D. Holders', value: '5' },
      { label: 'Annual Intake', value: '60' },
      { label: 'Internships', value: '100%' },
    ],
    programs: [
      { degree: 'Master of Computer Applications', level: 'Postgraduate', duration: '2 Years', intake: 60 },
    ],
    facilities: [
      'Software Development and Web Tech Lab',
      'Cloud Computing and Virtualization Center',
      'Mobile Application Development Lab',
    ],
    faculty: [
      { name: 'Dr. M Sridevi', designation: 'Assistant Professor & HOD', email: 'hod_mca@bmsit.in' },
      { name: 'Dr. P Ganesh', designation: 'Professor', email: 'ganeshp@bmsit.in' },
      { name: 'Dr. Aparna K', designation: 'Professor', email: 'aparnak@bmsit.in' },
      { name: 'Dr. G Drakshaveni', designation: 'Associate Professor', email: 'drakshavenig@bmsit.in' },
      { name: 'Prof. Dwarakanath G V', designation: 'Assistant Professor', email: 'dwarakanathgv@bmsit.in' },
    ],
    hod: { name: 'Dr. M Sridevi', email: 'hod_mca@bmsit.in', phone: '080-68730429' },
  },

  'cyber-security': {
    fullName: 'M.Tech in Cyber Security',
    tagline: 'Securing the digital frontier.',
    established: '2014',
    accreditation: 'NBA Accredited',
    vision: 'To be a center of excellence in Cybersecurity, creating experts who can protect global digital infrastructure.',
    mission: [
      'Impart advanced knowledge in security protocols and forensics.',
      'Foster research in cryptographic systems and network security.',
      'Develop ethical hackers for national security support.',
    ],
    stats: [
      { label: 'Specialized Labs', value: '3' },
      { label: 'Research Papers', value: '50+' },
      { label: 'Industry Tie-ups', value: 'Wipro/CISCO' },
      { label: 'Intake', value: '18' },
    ],
    programs: [
      { degree: 'M.Tech in Cyber Security', level: 'Postgraduate', duration: '2 Years', intake: 18 },
    ],
    facilities: [
      'Cyber Forensics and Digital Security Lab',
      'Network Security Mock-Drill Center',
      'Ethical Hacking Workshop Space',
    ],
    faculty: [
      { name: 'Dr. Satish Kumar T', designation: 'Professor & HOD', email: 'hod_cse@bmsit.in' },
      { name: 'Dr. Anil G N', designation: 'Professor', email: 'anilgn@bmsit.in' },
      { name: 'Dr. N Rakesh', designation: 'Associate Professor', email: 'nrakesh@bmsit.in' },
    ],
    hod: { name: 'Dr. Satish Kumar T', email: 'hod_cse@bmsit.in', phone: '080-68730429' },
  },

  vlsi: {
    fullName: 'M.Tech in VLSI System Design',
    tagline: 'Designing the chips of tomorrow.',
    established: '2004',
    accreditation: 'NBA Accredited',
    vision: 'To excel in VLSI design education and research, fostering innovation in semiconductor technology.',
    mission: [
      'Provide hands-on experience with industry-standard EDA tools.',
      'Encourage research in low-power and high-performance VLSI.',
      'Collaborate with semiconductor giants for skill development.',
    ],
    stats: [
      { label: 'EDA Tools', value: 'Cadence/Mentor' },
      { label: 'Chip Tape-outs', value: '2+' },
      { label: 'Placement Rate', value: '95%' },
      { label: 'Intake', value: '24' },
    ],
    programs: [
      { degree: 'M.Tech in VLSI System Design', level: 'Postgraduate', duration: '2 Years', intake: 24 },
    ],
    facilities: [
      'Texas Instruments Center of Excellence',
      'Advanced VLSI Design Lab',
      'Embedded Systems Integration Lab',
    ],
    faculty: [
      { name: 'Dr. Jayadeva G S', designation: 'Professor & HOD', email: 'hod_ece@bmsit.in' },
      { name: 'Dr. M C Hanumantharaju', designation: 'Professor', email: 'mchanumantharaju@bmsit.in' },
      { name: 'Dr. Ambika R', designation: 'Professor', email: 'ambikar@bmsit.in' },
    ],
    hod: { name: 'Dr. Jayadeva G S', email: 'hod_ece@bmsit.in', phone: '080-68730429' },
  },
};
