const Program = require('../models/Program');
const Event = require('../models/Event');
const Faculty = require('../models/Faculty');
const Testimonial = require('../models/Testimonial');
const { COLLEGE_KNOWLEDGE } = require('../data/collegeKnowledge');

const STOP_WORDS = new Set([
  'the', 'is', 'a', 'an', 'to', 'of', 'for', 'and', 'in', 'on', 'with', 'at', 'by', 'from', 'about',
  'what', 'which', 'who', 'how', 'when', 'where', 'can', 'you', 'me', 'tell', 'please', 'do', 'does',
]);

const DEFAULT_SUGGESTIONS = [
  'Admissions eligibility for UG and PG',
  'Top departments and programs',
  'Placement and internship details',
  'Campus facilities and student clubs',
  'How to contact the admissions office',
];

const READY_MADE_ANSWERS = [
  {
    patterns: [/admission criteria for engineering/, /admission criteria/, /admissions eligibility for ug and pg/, /admission|eligibility|apply|entrance|cet|pgcet/],
    answer:
      'Admissions at BMSIT&M (quick guide):\n' +
      '- UG (B.E.): 12th/PUC with Physics and Mathematics plus one optional science subject; typical minimum around 45% in optional subjects.\n' +
      '- PG (M.Tech): B.E./B.Tech (or equivalent) with at least 50% aggregate in relevant subjects.\n' +
      '- PG (MCA): Graduate degree with at least 50% (45% for SC/ST) with Mathematics/Statistics/CS background as applicable.\n' +
      '- Entrance route and seat category rules can vary each cycle; verify final eligibility and cutoffs with admissions office.',
    sources: ['Admissions Guidance'],
    suggestions: [
      'Top departments and programs',
      'Placement and internship details',
      'How to contact the admissions office',
    ],
  },
  {
    patterns: [/top departments and programs/, /top departments and specializations/, /academic departments/, /program|course|department|branch|specialization|ug|pg/],
    answer:
      'Top departments and programs (overview):\n' +
      '- Computer Science & Engineering (CSE)\n' +
      '- Information Science & Engineering (ISE)\n' +
      '- Electronics & Communication Engineering (ECE)\n' +
      '- Mechanical Engineering\n' +
      '- Civil Engineering\n' +
      '- AI/ML and emerging technology tracks (as offered in the current cycle)\n\n' +
      'Popular programs include B.E. branches, M.Tech specializations, MCA, and MBA tracks depending on annual offerings.',
    sources: ['Academics Overview'],
    suggestions: [
      'Admission criteria for engineering',
      'Placement support and recruiters',
      'Campus facilities and clubs',
    ],
  },
  {
    patterns: [/placement and internship details/, /placement support and recruiters/, /placements stats/, /placement|internship|recruiter|ctc|career/],
    answer:
      'Placement and internship support at BMSIT&M:\n' +
      '- Dedicated training for aptitude, coding, communication, and interview readiness.\n' +
      '- Internship support through industry tie-ups and department-level guidance.\n' +
      '- Recruiter participation varies by year and branch; students typically receive role-based preparation and placement drives through the placement cell.\n' +
      '- For latest branch-wise offers and recruiter list, rely on the current official placement report.',
    sources: ['Placement Cell Guidance'],
    suggestions: [
      'Top departments and programs',
      'Campus facilities and student clubs',
      'How to contact the admissions office',
    ],
  },
  {
    patterns: [/campus facilities and student clubs/, /campus facilities and clubs/, /campus life/, /facilit|hostel|library|club|sports|campus/],
    answer:
      'Campus facilities and student life:\n' +
      '- Library with digital access and circulation/reference services.\n' +
      '- Department labs and project spaces for practical learning.\n' +
      '- Student clubs for technical, cultural, literary, and social activities.\n' +
      '- Sports and event participation through college-level fests and competitions.\n' +
      '- Support services for academics and campus engagement throughout the semester.',
    sources: ['Campus Life Overview'],
    suggestions: [
      'Admission criteria for engineering',
      'Placement support and recruiters',
      'How to contact the admissions office',
    ],
  },
  {
    patterns: [/how to contact the admissions office/, /contact/, /phone|email|address|location|reach/],
    answer:
      'Admissions contact details:\n' +
      '- BMS Institute of Technology & Management, Doddaballapur Main Road, Avalahalli, Yelahanka, Bengaluru - 560119\n' +
      '- Main office phone: 080-68730444\n' +
      '- Principal email: principal@bmsit.in\n\n' +
      'For admission-specific timelines and document checklists, contact the admissions office through official institute channels.',
    sources: ['Official Contact Information'],
    suggestions: [
      'Admission criteria for engineering',
      'Top departments and programs',
      'Placement support and recruiters',
    ],
  },
];

const INTENT_SNIPPETS = {
  admissions: [
    'UG eligibility: 12th/PUC with Physics and Mathematics and one optional science subject. Typical minimum is 45% aggregate in optional subjects; management quota expectations are higher.',
    'M.Tech eligibility: B.E./B.Tech (or equivalent) with at least 50% aggregate in relevant subjects.',
    'MCA eligibility: graduate with at least 50% (45% for SC/ST) with Mathematics/Statistics/CS background plus entrance route as applicable.',
  ],
  fees: [
    'Management quota sample annual fee ranges include approximately Rs. 2,00,000 to Rs. 7,50,000 for UG programs depending on branch and around Rs. 1,25,000 to Rs. 2,75,000 for many PG programs.',
    'For exact latest fee slab by branch and year, students should verify through the official admissions office before payment.',
  ],
  contacts: [
    'Campus address: BMS Institute of Technology & Management, Doddaballapur Main Road, Avalahalli, Yelahanka, Bengaluru - 560119.',
    'Main office contact: 080-68730444. Admissions support is available through institute admissions channels.',
    'Principal email: principal@bmsit.in.',
  ],
  library: [
    'The library includes large title/volume collections, digital access systems, and KOHA-based library management.',
    'Students can access circulation, reference services, digital library resources, and book-bank support based on eligibility.',
  ],
  cse: [
    'CSE is one of the largest departments with strong faculty strength, active research participation, and industry-aligned activities.',
    'Department highlights include advanced labs, conference activity, and placement-focused support.',
  ],
};

function normalize(text = '') {
  return String(text).toLowerCase().replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim();
}

function tokenize(text = '') {
  return normalize(text)
    .split(' ')
    .filter((word) => word && !STOP_WORDS.has(word));
}

function getReadyMadeResponse(message) {
  const normalizedMessage = normalize(message);
  const matched = READY_MADE_ANSWERS.find((entry) =>
    entry.patterns.some((pattern) => pattern.test(normalizedMessage))
  );

  if (!matched) {
    return null;
  }

  return {
    answer: matched.answer,
    suggestions: matched.suggestions,
    sources: matched.sources,
  };
}

function scoreKnowledgeItem(item, tokens, normalizedMessage) {
  let score = 0;

  for (const keyword of item.keywords) {
    if (normalizedMessage.includes(keyword)) {
      score += 4;
    }
  }

  for (const token of tokens) {
    if (item.content.toLowerCase().includes(token)) {
      score += 1;
    }
  }

  return score;
}

function formatList(title, rows, mapper) {
  if (!rows.length) {
    return '';
  }

  const body = rows.map(mapper).join('\n');
  return `\n${title}\n${body}`;
}

async function fetchDynamicContext() {
  const [programs, events, faculty, testimonials] = await Promise.all([
    Program.find().sort({ createdAt: -1 }).limit(6).lean().catch(() => []),
    Event.find().sort({ date: 1 }).limit(6).lean().catch(() => []),
    Faculty.find().sort({ createdAt: -1 }).limit(6).lean().catch(() => []),
    Testimonial.find().sort({ createdAt: -1 }).limit(4).lean().catch(() => []),
  ]);

  return { programs, events, faculty, testimonials };
}

function buildAnswer(message, context) {
  const normalizedMessage = normalize(message);
  const tokens = tokenize(message);

  const rankedKnowledge = COLLEGE_KNOWLEDGE
    .map((item) => ({ ...item, score: scoreKnowledgeItem(item, tokens, normalizedMessage) }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);

  const shouldIncludePrograms = /program|course|department|branch|mtech|mca|mba|phd|ug|pg/.test(normalizedMessage);
  const shouldIncludeEvents = /event|upcoming|seminar|cultur|sport|fest/.test(normalizedMessage);
  const shouldIncludeFaculty = /faculty|teacher|professor|hod/.test(normalizedMessage);
  const shouldIncludeTestimonials = /review|testimonial|student say|feedback/.test(normalizedMessage);
  const isGreeting = /^(hi|hello|hey|hola|good morning|good evening)\b/.test(normalizedMessage);
  const asksAdmissions = /admission|eligibility|apply|entrance|cet|pgcet/.test(normalizedMessage);
  const asksFees = /fee|fees|cost|tuition|management quota/.test(normalizedMessage);
  const asksContacts = /contact|phone|email|address|location|reach/.test(normalizedMessage);
  const asksLibrary = /library|book|journal|digital library|koha/.test(normalizedMessage);
  const asksCSE = /cse|computer science|cyber|aiml|department/.test(normalizedMessage);

  if (isGreeting) {
    return {
      answer:
        'Hi! I am your BMSIT&M assistant. I can help with admissions, academics, departments, placements, facilities, and contacts. Ask me anything about the college.',
      suggestions: DEFAULT_SUGGESTIONS,
      sources: ['Institute web content', 'Programs, events, faculty, and testimonials data'],
    };
  }

  let answer = '';

  if (!rankedKnowledge.length) {
    answer += 'I can help with BMSIT&M admissions, academics, departments, campus life, placements, and contacts.';
  } else {
    answer += rankedKnowledge.map((item) => `• ${item.content}`).join('\n');
  }

  if (asksAdmissions) {
    answer += `\n\nAdmissions Details:\n- ${INTENT_SNIPPETS.admissions.join('\n- ')}`;
  }

  if (asksFees) {
    answer += `\n\nFee Guidance:\n- ${INTENT_SNIPPETS.fees.join('\n- ')}`;
  }

  if (asksContacts) {
    answer += `\n\nContact Details:\n- ${INTENT_SNIPPETS.contacts.join('\n- ')}`;
  }

  if (asksLibrary) {
    answer += `\n\nLibrary Details:\n- ${INTENT_SNIPPETS.library.join('\n- ')}`;
  }

  if (asksCSE) {
    answer += `\n\nDepartment Insight:\n- ${INTENT_SNIPPETS.cse.join('\n- ')}`;
  }

  if (shouldIncludePrograms && context.programs.length) {
    answer += formatList('Recent Programs:', context.programs, (row) =>
      `- ${row.name} (${row.type}) - ${row.department}`
    );
  }

  if (shouldIncludeEvents && context.events.length) {
    answer += formatList('Upcoming/Recent Events:', context.events, (row) => {
      const date = row.date ? new Date(row.date).toLocaleDateString('en-IN') : 'Date TBA';
      return `- ${row.title} (${row.category}) on ${date}`;
    });
  }

  if (shouldIncludeFaculty && context.faculty.length) {
    answer += formatList('Faculty Highlights:', context.faculty, (row) =>
      `- ${row.name} - ${row.department}`
    );
  }

  if (shouldIncludeTestimonials && context.testimonials.length) {
    answer += formatList('Student/Alumni Voice:', context.testimonials, (row) =>
      `- ${row.name} (${row.role}): ${row.message}`
    );
  }

  const suggestions = rankedKnowledge.length
    ? rankedKnowledge.map((item) => `More on ${item.title.toLowerCase()}`).slice(0, 3)
    : DEFAULT_SUGGESTIONS.slice(0, 3);

  return {
    answer,
    suggestions,
    sources: rankedKnowledge.map((item) => item.title),
  };
}

const queryChatbot = async (req, res, next) => {
  try {
    const { message } = req.body || {};

    if (!message || typeof message !== 'string' || !message.trim()) {
      return res.status(400).json({ message: 'A valid message is required.' });
    }

    // Always answer known suggested prompts deterministically without dependency on DB state.
    const readyMade = getReadyMadeResponse(message);
    if (readyMade) {
      return res.json({
        reply: readyMade.answer,
        suggestions: readyMade.suggestions,
        sources: readyMade.sources,
        timestamp: new Date().toISOString(),
      });
    }

    const context = await fetchDynamicContext();
    const result = buildAnswer(message, context);

    return res.json({
      reply: result.answer,
      suggestions: result.suggestions,
      sources: result.sources,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  queryChatbot,
};
