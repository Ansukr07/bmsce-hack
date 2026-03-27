// Administration data scraped from BMSIT official website

export const adminNavItems = [
  { id: 'founders', label: 'Our Founders', iconName: 'Institution' },
  { id: 'vision_mission', label: 'Vision and Mission', iconName: 'Target' },
  { id: 'trustees', label: 'Council of Trustees', iconName: 'Users' },
  { id: 'governors', label: 'Board of Governors', iconName: 'Briefcase' },
  { id: 'officials', label: 'BMSET Officials', iconName: 'Shield' },
  { id: 'chairman', label: 'About our Chairman', iconName: 'User' },
  { id: 'principal', label: 'Principal', iconName: 'UserCheck' },
  { id: 'deans', label: 'Vice Principal & Deans', iconName: 'Users' },
  { id: 'hods', label: 'Head of Departments', iconName: 'GraduationCap' },
  { id: 'section_heads', label: 'Section Heads', iconName: 'Network' },
  { id: 'office_admin', label: 'Office Administration', iconName: 'Building' },
  { id: 'disclosure', label: 'Mandatory Disclosure', iconName: 'FileText' },
];

export const adminData = {
  founders: {
    title: 'Our Founders',
    content: [
      {
        type: 'paragraph',
        text: 'Established in 2002, BMS Institute of Technology and Management traces its roots to BMSET, the same trust that set up the first private technical institute, BMS College of Engineering. BMSIT&M is governed by BMS educational trust founded by Sri B M Sreenivasaiah and his illustrious son, Sri B S Narayan.'
      },
      {
        type: 'profile',
        name: 'LATE SRI. B.M. SREENIVASAIAH',
        title: 'Founder, B.M.S. Educational Trust',
        subtitle: 'Dharmaprakasha Rajakarya Prasakta',
        image: '/pictures/founders/bm-sreenivasaiah.jpg',
      },
      {
        type: 'profile',
        name: 'LATE SRI. B. S. NARAYAN',
        title: 'Donor Trustee, B.M.S. Educational Trust',
        subtitle: '',
        image: '/pictures/founders/bs-narayan.jpg',
      },
      {
        type: 'paragraph',
        text: 'The history of BMS institutions rewinds back to the year 1946 with the establishment of the first private engineering college in the country, BMS College of Engineering (BMSCE), by late Sri B.M Sreenivasaiah. He was a philanthropist and a great visionary who realised the necessity of technical education even before the country got independence.'
      },
      {
        type: 'paragraph',
        text: 'He was honoured by the Maharaja of Mysore with the title “Dharma Prakasha Raja Karya Prasaktha” for his extraordinary service in the field of education. The legacy he once began is being upheld with the same zeal by his inheritors and they continue to cherish his vision and ideals.'
      },
      {
        type: 'paragraph',
        text: 'After the sad demise of Sri B.M Sreenivasaiah, his renowned son, Sri B.S Narayan, a vibrant and ingenious personality, moulded BMS College of Engineering into one of the finest engineering colleges. Apart from BMS College of Engineering, he had also established other institutions that promoted higher education which includes BMS College of Law, BMS College of Women and BMS Evening College of Engineering.'
      },
      {
        type: 'paragraph',
        text: 'BMS Institute of Technology & Management (BMSIT&M), established in the year 2002 under BMS Educational Trust, being managed by a council of trustees appointed by Dr. B.S. Ragini Narayan, the successor of Late Sri B.S Narayan and the Donor Trustee and Member Secretary of BMS Educational Trust and it is one of the best engineering colleges in Bangalore.'
      }
    ]
  },
  vision_mission: {
    title: 'Vision and Mission',
    content: [
      {
        type: 'heading',
        text: 'Vision'
      },
      {
        type: 'paragraph',
        text: 'To emerge as one of the finest technical institutions of higher learning, to develop engineering professionals who are technically competent, ethical and environment friendly for betterment of the society.'
      },
      {
        type: 'heading',
        text: 'Mission'
      },
      {
        type: 'paragraph',
        text: 'Accomplish stimulating learning environment through high quality academic instruction, innovation and industry-institute interface.'
      }
    ]
  },
  trustees: {
    title: 'Council of Trustees',
    content: [
      {
        type: 'profile',
        name: 'Dr. B S Ragini Narayan',
        title: 'Donor Trustee and Member Secretary',
        description: 'Dr. B. S. Ragini Narayan, W/o. Late Sri B. S. Narayan, is the Donor Trustee and Member Secretary of B.M.S. Educational Trust. She is also the life Trustee of BMS Hospital Trust. She is also the Chairperson of B.M.S. College for Women and International Cooperation Division, BMSET. Dr. Ragini Narayan has been the driving force behind all the developmental and welfare activities undertaken by B.M.S. Educational Trust.'
      },
      {
        type: 'profile',
        name: 'Dr. P Dayananda Pai',
        title: 'Trustee',
        description: 'Dr. P. Dayananda Pai is one of the Trustees in B.M.S. Educational Trust and presently Chairman of BMS College of Engineering. He is Chairman and Managing Director of Century Group a large Real Estate business and one of the leading Builders in the State of Karnataka. Dr. Pai is a co-founder of the renowned Vidyasagar and Vidyashilp Schools in Bangalore.'
      },
      {
        type: 'profile',
        name: 'Sri. Aviram Sharma',
        title: 'Trustee',
        description: 'Sri. Aviram Sharma is one of the Trustees in B.M.S. Educational Trust. He is an MBA graduate and has a wide range of experience in the banking sector and an IT Industry. He has played a significant role in implementing new technologies in leading and mentoring successful project teams.'
      },
      {
        type: 'profile',
        name: 'Dr. Thirumalachari Ramasami',
        title: 'Trustee',
        description: 'Dr. Thirumalachari Ramasami Sharma is one of the Trustees in B.M.S. Educational Trust. He is a former Indian Science and Technology Secretary. He is a distinguished researcher and leather scientist. He was awarded India\'s National Civilian Honour the Padma Shri for excellence in Science and Engineering in 2001 and the Padma Bhushan in 2014.'
      },
      {
        type: 'profile',
        name: 'State Government Nominee',
        title: 'Trustee',
        description: ''
      }
    ]
  },
  governors: {
    title: 'Board of Governors',
    content: [
      { type: 'list_item', name: 'Sri. Aviram Sharma' },
      { type: 'list_item', name: 'Dr. B S Ragini Narayan' },
      { type: 'list_item', name: 'Dr. P Dayananda Pai' },
      { type: 'list_item', name: 'Dr. Thirumalachari Ramasami' },
      { type: 'list_item', name: 'Prof. Giridhar U. Kulkani' },
      { type: 'list_item', name: 'State Government Nominee' },
      { type: 'list_item', name: 'Dr. N C Shivaprakash' },
      { type: 'list_item', name: 'Dr. Satya Gupta' },
      { type: 'list_item', name: 'Dr. Anil G N' },
      { type: 'list_item', name: 'Dr. Ambika R' },
      { type: 'list_item', name: 'Sri. G H Vasappa' },
      { type: 'list_item', name: 'Dr. Sanjay H A' }
    ]
  },
  officials: {
    title: 'BMSET Officials',
    content: [
      { type: 'list_item', name: 'Wg Cdr R A Raghavan (R)' },
      { type: 'list_item', name: 'Sri. V Prasad' },
      { type: 'list_item', name: 'Parigi Khaleel' },
      { type: 'list_item', name: 'Mr. Prakash Dinkar Rao' }
    ]
  },
  chairman: {
    title: 'About our Chairman',
    content: [
      {
        type: 'profile',
        name: 'Mr. Aviram Sharma',
        title: 'Chairman',
        description: 'Sri. Aviram Sharma is one of the Trustees in B.M.S. Educational Trust. He is an MBA graduate and has a wide range of experience in the banking sector and an IT Industry. He has played a significant role in implementing new technologies in leading and mentoring successful project teams. He has also been instrumental in developing complex business functions in his previous assignments with a global clientele.'
      }
    ]
  },
  principal: {
    title: 'Principal',
    content: [
      {
        type: 'profile',
        name: 'Dr. Sanjay H A',
        title: 'Principal, BMSIT&M',
        description: 'Dr. Sanjay H. A is currently serving as the Principal of BMS Institute of Technology and Management, Bangalore. In recognition of his dedicated service to academics, he has recently been nominated by Visvesvaraya Technological University (VTU) as Dean – Faculty of Engineering for a tenure of three years. He has played a pivotal role in revamping the curriculum of VTU, aligning it with the standards of premier institutes such as the IITs.'
      },
      {
        type: 'paragraph',
        text: 'Dr. Sanjay obtained his B.E. in Electrical and Electronics Engineering from Kuvempu University, M.Tech. in Computer Science and Engineering from VTU, and his Ph.D. from the Indian Institute of Science (IISc), Bangalore. He has successfully executed several research and consultancy projects funded by reputed organizations including MeitY, New Delhi, ISRO, AICTE, VGST, VTU, and KSCST-UNESCO.'
      },
      {
        type: 'paragraph',
        text: 'With over 100 research publications in leading international journals and conferences, Dr. Sanjay has also filed four Indian patents based on his research contributions. Under his guidance, five Ph.D. scholars have completed their doctoral work, while five more are currently pursuing their research.'
      },
      {
        type: 'paragraph',
        text: 'In recognition of his outstanding contributions to research and academics, the Vision Group on Science and Technology (VGST) honored him as Young Scientist of the Year 2011–12, providing funding support to advance his research. Dr. Sanjay also serves as an Expert Committee Member for the National Board of Accreditation (NBA) and is a Senior Member of IEEE.'
      }
    ]
  },
  deans: {
    title: 'Vice Principal & Deans',
    gallery: [
      { src: '/pictures/deans/anil-gn.jpg', alt: 'Dr. Anil G N' },
      { src: '/pictures/deans/satish-kumar-km.jpeg', alt: 'Dr. Satish Kumar K M' },
      { src: '/pictures/deans/ambika-r.jpeg', alt: 'Dr. Ambika R' },
      { src: '/pictures/deans/ganesh-p.jpeg', alt: 'Dr. Ganesh P' },
      { src: '/pictures/deans/seema-singh.jpeg', alt: 'Dr. Seema Singh' },
    ],
    content: [
      {
        type: 'profile_card',
        name: 'Dr. Anil G N',
        title: 'Vice Principal',
        subtitle: 'Professor, Department of Computer Science & Engineering'
      },
      {
        type: 'profile_card',
        name: 'Dr. Satish Kumar K M',
        title: 'Dean (Academic Affairs)',
        subtitle: 'Professor, Department of Mechanical Engineering'
      },
      {
        type: 'profile_card',
        name: 'Dr. Ambika R',
        title: 'Dean (Students Welfare)',
        subtitle: 'Professor, Department of Electronics and Communication Engineering'
      },
      {
        type: 'profile_card',
        name: 'Dr. Ganesh P',
        title: 'Dean (Career Guidance)',
        subtitle: 'Professor, Master of Computer Applications'
      },
      {
        type: 'profile_card',
        name: 'Dr. Seema Singh',
        title: 'Dean (Innovation & Entrepreneurship)',
        subtitle: 'Professor, Department of Electronics and Communication Engineering'
      },
      {
        type: 'profile_card',
        name: 'Dr. Ganesh P',
        title: 'Dean (Planning & Development)',
        subtitle: 'Professor, Master of Computer Applications'
      }
    ]
  },
  hods: {
    title: 'Head of Departments',
    content: [
      { type: 'profile_card', name: 'Dr. Madhu M C', title: 'Head, Department of Mechanical Engineering' },
      { type: 'profile_card', name: 'Dr. A Shobha Rani', title: 'Head, Department of Electronics and Communication Engineering' },
      { type: 'profile_card', name: 'Dr. Satish Kumar T', title: 'Head, Department of Computer Science and Engineering' },
      { type: 'profile_card', name: 'Dr. Prashant A Athavale', title: 'Head, Department of Electrical and Electronics Engineering' },
      { type: 'profile_card', name: 'Dr. Anupama H S', title: 'Head, Department of Artificial Intelligence & Machine Learning' },
      { type: 'profile_card', name: 'Dr. Vishwa Kirana S', title: 'Head, Department of Computer Science and Business Systems' },
      { type: 'profile_card', name: 'Dr. G Aruna', title: 'Head, Department of Civil Engineering' },
      { type: 'profile_card', name: 'Dr. M Sridevi', title: 'Head, Master of Computer Applications' },
      { type: 'profile_card', name: 'Dr. Balbadra Kishore', title: 'Head, Master of Business Administration' },
      { type: 'profile_card', name: 'Dr. Chetan A.S', title: 'Head, Department of Mathematics' },
      { type: 'profile_card', name: 'Dr. Dhananjaya N', title: 'Head, Department of Physics' },
      { type: 'profile_card', name: 'Dr. Ramakrishnappa T', title: 'Head, Department of Chemistry' }
    ]
  },
  section_heads: {
    title: 'Section Heads',
    content: [
      { type: 'profile_card', name: 'Mrs. B J Tejaswini', title: 'Section Head' },
      { type: 'profile_card', name: 'Dr. Bharathi Malakreddy A', title: 'Section Head' },
      { type: 'profile_card', name: 'Dr. Arun Kumar B R', title: 'Section Head' },
      { type: 'profile_card', name: 'Mrs. Anitha K S', title: 'Section Head' },
      { type: 'profile_card', name: 'Lt. Rani M S', title: 'Section Head' }
    ]
  },
  office_admin: {
    title: 'Office Administration',
    content: [
      { type: 'profile_card', name: 'Mr. Devendra Kumar S', title: 'Admin' },
      { type: 'profile_card', name: 'Mr. G H Vasappa', title: 'Admin' },
      { type: 'profile_card', name: 'Mr. Arun R', title: 'Admin' }
    ]
  },
  disclosure: {
    title: 'Mandatory Disclosure',
    content: [
      {
        type: 'link_card',
        text: 'Click here to View Mandatory Disclosure PDF',
        url: 'https://bmsit.ac.in/public/assets/pdf/mandatory_disclosure/Mandatory_Disclosure.pdf'
      }
    ]
  }
};
