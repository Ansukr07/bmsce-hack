import { useMemo, useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, MessageCircle, Send, X, Sparkles, GraduationCap } from 'lucide-react';
import { askChatbot } from '../../services/api';
import campusImage from '../../assets/images/campus.png';
import classroomImage from '../../assets/images/classroom.png';
import clubImage from '../../assets/images/club.png';
import facilitiesImage from '../../assets/images/facilities.png';
import graduationImage from '../../assets/images/graduation.png';
import libraryImage from '../../assets/images/library.png';
import './ChatbotWidget.css';

const INITIAL_MESSAGE = {
  id: 'welcome',
  role: 'assistant',
  content:
    'Hi! I am your BMSIT&M guide. I can help with admissions, academics, departments, placements, campus life, and contact details.',
};

const FALLBACK_SUGGESTIONS = [
  'Admission criteria for engineering',
  'Top departments and specializations',
  'Placement support and recruiters',
  'Campus facilities and clubs',
];

const LOCAL_READY_ANSWERS = [
  {
    patterns: [/admission criteria for engineering/i, /admissions eligibility for ug and pg/i, /admission criteria/i],
    content:
      'Admissions at BMSIT&M (quick guide):\n- UG (B.E.): 12th/PUC with Physics and Mathematics plus one optional science subject; typical minimum around 45%.\n- PG (M.Tech): B.E./B.Tech (or equivalent) with at least 50% aggregate in relevant subjects.\n- PG (MCA): Graduate degree with at least 50% (45% for SC/ST) with applicable background.\n- Final eligibility/cutoffs may vary each cycle; verify with admissions office.',
    images: [graduationImage, classroomImage],
    suggestions: ['Top departments and specializations', 'Placement support and recruiters'],
  },
  {
    patterns: [/top departments and specializations/i, /top departments and programs/i, /academic departments/i],
    content:
      'Top departments and programs (overview):\n- Computer Science & Engineering (CSE)\n- Information Science & Engineering (ISE)\n- Electronics & Communication Engineering (ECE)\n- Mechanical Engineering\n- Civil Engineering\n- AI/ML and emerging technology tracks (as offered in current cycle).',
    images: [classroomImage],
    suggestions: ['Placement support and recruiters', 'Campus facilities and clubs'],
  },
  {
    patterns: [/placement support and recruiters/i, /placement and internship details/i, /placements stats/i],
    content:
      'Placement and internship support:\n- Training for aptitude, coding, communication, and interviews.\n- Internship support through industry tie-ups and department guidance.\n- Recruiter participation varies by year and branch.\n- Check latest official placement report for current statistics.',
    images: [graduationImage],
    suggestions: ['Top departments and specializations', 'Campus facilities and clubs'],
  },
  {
    patterns: [/campus facilities and clubs/i, /campus facilities and student clubs/i, /campus life/i],
    content:
      'Campus facilities and student life:\n- Library with digital access and circulation/reference services.\n- Department labs and project spaces.\n- Technical, cultural, and social clubs.\n- Sports and college-level events throughout the semester.',
    images: [facilitiesImage, clubImage, libraryImage],
    suggestions: ['Admission criteria for engineering', 'How to contact the admissions office'],
  },
  {
    patterns: [/how to contact the admissions office/i, /contact|phone|email|address|location|reach/i],
    content:
      'Contact details:\n- BMS Institute of Technology & Management, Doddaballapur Main Road, Avalahalli, Yelahanka, Bengaluru - 560119\n- Main office phone: 080-68730444\n- Principal email: principal@bmsit.in',
    images: [campusImage],
    suggestions: ['Admission criteria for engineering', 'Campus facilities and clubs'],
  },
  {
    patterns: [/hi|hello|hey|good morning|good evening/i],
    content:
      'Hi! I am your BMSIT&M guide. I can answer admissions, departments, placements, facilities, and contact questions. Try the suggested messages to get instant details.',
    images: [campusImage],
    suggestions: FALLBACK_SUGGESTIONS,
  },
  {
    patterns: [/thanks|thank you/i],
    content: 'You are welcome. Ask me anything about BMSIT&M admissions, campus life, or placements.',
    suggestions: FALLBACK_SUGGESTIONS,
  },
  {
    patterns: [/fee|fees|tuition|cost/i],
    content:
      'Fee guidance (indicative):\n- UG management quota fee can vary by branch and year.\n- PG fee slabs vary by program.\n- Please confirm exact current fee structure from official admissions office before payment.',
    images: [graduationImage],
    suggestions: ['Admission criteria for engineering', 'How to contact the admissions office'],
  },
  {
    patterns: [/hostel|accommodation|stay/i],
    content:
      'Hostel and stay overview:\n- On-campus/near-campus accommodation options are typically available for students.\n- Facilities and seat availability can vary each year.\n- Contact admissions for current hostel availability and fee details.',
    images: [facilitiesImage],
    suggestions: ['Campus facilities and clubs', 'How to contact the admissions office'],
  },
  {
    patterns: [/library|books|digital library/i],
    content:
      'Library highlights:\n- Library with circulation/reference support and digital resources.\n- Students can access textbooks, journals, and digital content for academics and projects.',
    images: [libraryImage],
    suggestions: ['Campus facilities and clubs', 'Top departments and specializations'],
  },
];

const getLocalReadyAnswer = (message) => {
  const matched = LOCAL_READY_ANSWERS.find((entry) =>
    entry.patterns.some((pattern) => pattern.test(message))
  );
  if (!matched) {
    return null;
  }

  return {
    content: matched.content,
    images: matched.images || [],
    suggestions: matched.suggestions || FALLBACK_SUGGESTIONS,
  };
};

const PAGE_GUIDES = [
  {
    patterns: [/admission|eligibility|apply|cet|pgcet|fee|fees|tuition|scholarship/i],
    pageName: 'Admissions',
    path: '/admissions',
    image: graduationImage,
    hint: [
      'Check UG/PG eligibility and admission process details.',
      'Verify category-wise fee details and required documents.',
      'For latest deadlines, use official admissions updates.',
    ],
    suggestions: ['Admission criteria for engineering', 'How to contact the admissions office'],
  },
  {
    patterns: [/department|cse|ise|ece|mechanical|civil|branch|program|course|academics/i],
    pageName: 'Academics / Departments',
    path: '/academics',
    image: classroomImage,
    hint: [
      'Explore department-wise programs and specialization tracks.',
      'Review curriculum and lab-focused learning areas.',
      'Use departments section for branch-specific highlights.',
    ],
    suggestions: ['Top departments and specializations', 'Academic departments'],
  },
  {
    patterns: [/placement|placements|internship|recruiter|career|job/i],
    pageName: 'Placements',
    path: '/placement',
    image: graduationImage,
    hint: [
      'View placement support process and recruiter participation.',
      'Check internship and career-readiness activities.',
      'Use this page for placement-focused updates.',
    ],
    suggestions: ['Placement support and recruiters', 'Placements stats'],
  },
  {
    patterns: [/tour|3d|virtual|campus tour/i],
    pageName: '3D Campus Tour',
    path: '/campus-tour',
    image: campusImage,
    hint: [
      'Launch the immersive 360 campus walkthrough.',
      'Use desktop for smoother interaction with 3D scenes.',
      'Allow a few seconds for first-time asset loading.',
    ],
    suggestions: ['Campus life', 'Campus facilities and clubs'],
  },
  {
    patterns: [/campus life|club|clubs|facility|facilities|hostel|library|sports|fest/i],
    pageName: 'Campus Life',
    path: '/campus-life',
    image: facilitiesImage,
    hint: [
      'See clubs, events, and extracurricular opportunities.',
      'Find facilities like labs, library, and activity spaces.',
      'Use this page for student engagement highlights.',
    ],
    suggestions: ['Campus facilities and clubs', 'Library details'],
  },
  {
    patterns: [/research|paper|publication|innovation|idea lab|ip cell|bicep|e studio/i],
    pageName: 'Research',
    path: '/research',
    image: classroomImage,
    hint: [
      'Explore research centers, publications, and innovation initiatives.',
      'Check project ecosystems like Idea Lab and related cells.',
      'Use research pages for detailed paper and center info.',
    ],
    suggestions: ['Research centers', 'Innovation programs'],
  },
  {
    patterns: [/about|history|vision|mission|management|contact|phone|email|address/i],
    pageName: 'About',
    path: '/about',
    image: campusImage,
    hint: [
      'Find institute profile, vision, and leadership overview.',
      'Use this page for official contact and address details.',
      'Navigate here for high-level institutional information.',
    ],
    suggestions: ['How to contact the admissions office', 'About the institute'],
  },
  {
    patterns: [/student portal|portal|attendance|marks|timetable|tasks|resources|forum|notices|profile/i],
    pageName: 'Student Portal',
    path: '/portal',
    image: classroomImage,
    hint: [
      'Access attendance, marks, timetable, and student tasks.',
      'Use portal routes for notices, profile, and resources.',
      'Sign in to continue with student-specific services.',
    ],
    suggestions: ['Student portal help', 'Academic departments'],
  },
];

const getIntentGuideResponse = (message) => {
  const matched = PAGE_GUIDES.find((guide) =>
    guide.patterns.some((pattern) => pattern.test(message))
  );

  if (!matched) {
    return null;
  }

  const hintText = (matched.hint || []).map((line) => `- ${line}`).join('\n');

  return {
    content: `Best page for this query: ${matched.pageName} (${matched.path})\n\n${hintText}`,
    images: matched.image ? [matched.image] : [],
    suggestions: matched.suggestions,
  };
};

const getPageGuidanceFallback = (message) => {
  const matched = PAGE_GUIDES.find((guide) =>
    guide.patterns.some((pattern) => pattern.test(message))
  );

  if (!matched) {
    return {
      content:
        'I could not find an exact answer yet. Please head to the About page (/about) or Academics page (/academics) to continue, and you can also try one of the suggested queries.',
      images: [campusImage],
      suggestions: FALLBACK_SUGGESTIONS,
    };
  }

  return {
    content: `I could not find an exact answer yet. Please head to the ${matched.pageName} page (${matched.path}) for detailed information.`,
    images: matched.image ? [matched.image] : [],
    suggestions: matched.suggestions,
  };
};

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([INITIAL_MESSAGE]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [suggestions, setSuggestions] = useState(FALLBACK_SUGGESTIONS);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const visibleMessages = useMemo(() => messages, [messages]);

  const sendMessage = async (text) => {
    const trimmed = text.trim();
    if (!trimmed || isTyping) return;

    const userMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: trimmed,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    const localAnswer = getLocalReadyAnswer(trimmed);
    if (localAnswer) {
      setMessages((prev) => [
        ...prev,
        {
          id: `assistant-local-${Date.now()}`,
          role: 'assistant',
          content: localAnswer.content,
          images: localAnswer.images,
        },
      ]);
      setSuggestions(localAnswer.suggestions);
      return;
    }

    const intentGuide = getIntentGuideResponse(trimmed);
    if (intentGuide) {
      setMessages((prev) => [
        ...prev,
        {
          id: `assistant-intent-${Date.now()}`,
          role: 'assistant',
          content: intentGuide.content,
          images: intentGuide.images,
        },
      ]);
      setSuggestions(intentGuide.suggestions);
      return;
    }

    setIsTyping(true);

    try {
      const response = await askChatbot(trimmed);
      const botMessage = {
        id: `assistant-${Date.now()}`,
        role: 'assistant',
        content: response.reply,
        sources: response.sources || [],
        images: response.images || [],
      };
      setMessages((prev) => [...prev, botMessage]);
      if (response.suggestions?.length) {
        setSuggestions(response.suggestions);
      }
    } catch (error) {
      const pageGuide = getPageGuidanceFallback(trimmed);
      setMessages((prev) => [
        ...prev,
        {
          id: `assistant-error-${Date.now()}`,
          role: 'assistant',
          content: pageGuide.content,
          images: pageGuide.images,
        },
      ]);
      setSuggestions(pageGuide.suggestions);
    } finally {
      setIsTyping(false);
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    sendMessage(input);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="fixed left-4 md:left-6 bottom-6 z-50 flex items-center gap-3 p-2 md:pr-6 rounded-full font-bold text-[13px] uppercase tracking-widest text-white bg-[#111111] border border-black/20 shadow-[0_12px_40px_-10px_rgba(0,0,0,0.3)] transition-all hover:bg-black hover:scale-105 group"
      >
        <div className="flex items-center justify-center w-10 h-10 bg-white text-[#111111] rounded-full shadow-md group-hover:rotate-12 transition-transform">
          <MessageCircle size={20} />
        </div>
        <span className="hidden md:inline">BMSIT Assistant</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.section
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed z-[100] right-0 bottom-0 top-0 left-0 md:top-auto md:left-auto md:right-8 md:bottom-8 md:w-[1000px] md:h-[700px] bg-white/60 backdrop-blur-3xl border border-white/80 shadow-[0_24px_60px_-10px_rgba(0,0,0,0.15)] md:rounded-[40px] flex flex-col md:flex-row overflow-hidden"
          >
            {/* Left Panel - Hidden on Mobile */}
            <div className="hidden md:flex flex-col w-[320px] bg-white/40 border-r border-white/60 p-6 md:p-8 shrink-0">
              <div className="flex items-center gap-3 mb-8 shrink-0">
                <div className="p-3 bg-[#111111] rounded-2xl text-[#FB6D39] shadow-md">
                  <Sparkles size={20} />
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#111111]">Assistant</h3>
              </div>

              <div className="flex-1 overflow-y-auto pr-2 space-y-6 scrollbar-hide">
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 pl-1">Session</p>
                  <div className="bg-white/60 border border-white rounded-[20px] p-4 shadow-sm relative overflow-hidden group cursor-default">
                    <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                      <GraduationCap size={40} />
                    </div>
                    <div className="flex justify-between items-start mb-2 relative z-10">
                      <span className="text-[10px] font-bold bg-[#FB6D39]/10 text-[#FB6D39] px-2 py-1 rounded-full uppercase tracking-wider">Campus Guide</span>
                    </div>
                    <p className="font-bold text-[#111111] mb-1 relative z-10">General Inquiry</p>
                    <p className="text-xs text-gray-500 leading-relaxed relative z-10">Admissions, academics, placements, and facilities.</p>
                  </div>
                </div>

                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 pl-1">Suggested Queries</p>
                  <div className="flex flex-col gap-2">
                    {suggestions.slice(0, 4).map((suggestion) => (
                      <button
                        key={suggestion}
                        type="button"
                        className="text-left text-xs font-medium p-3 bg-white/40 hover:bg-white border border-white/60 rounded-xl text-[#111111] transition-all"
                        onClick={() => sendMessage(suggestion)}
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Panel - Chat Area */}
            <div className="flex-1 flex flex-col min-h-0 bg-white/20 p-4 md:p-8">
              {/* Topbar */}
              <div className="flex items-center justify-between bg-white/60 border border-white/80 p-4 rounded-3xl shadow-sm mb-6 shrink-0">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#111111] rounded-full flex items-center justify-center text-[#FB6D39] shadow-md border-2 border-white">
                    <Bot size={24} />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-lg text-[#111111] leading-tight">BMSIT&M Guide</h4>
                    <p className="text-xs text-gray-500 font-medium tracking-wide">Online & Ready to Help</p>
                  </div>
                </div>
                <button 
                  type="button" 
                  className="w-10 h-10 flex items-center justify-center bg-white/80 hover:bg-[#111111] text-gray-600 hover:text-white rounded-full transition-colors border border-white shadow-sm"
                  onClick={() => setIsOpen(false)}
                >
                  <X size={18} />
                </button>
              </div>

              {/* Chat Stream */}
              <div className="flex-1 overflow-y-auto mb-6 pr-2 chat-stream flex flex-col gap-4 min-h-0">
                {visibleMessages.map((message) => (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    key={message.id} 
                    className={`flex flex-col max-w-[85%] ${message.role === 'user' ? 'self-end items-end' : 'self-start items-start'}`}
                  >
                    <div className={`px-5 py-3.5 rounded-3xl shadow-sm text-[14px] leading-relaxed ${
                      message.role === 'user' 
                        ? 'bg-[#111111] text-white rounded-br-sm' 
                        : 'bg-white/80 border border-white text-[#111111] rounded-bl-sm'
                    }`}>
                      <p className="whitespace-pre-wrap">{message.content}</p>
                      {message.images?.length ? (
                        <div className="mt-3 grid grid-cols-2 gap-2">
                          {message.images.slice(0, 4).map((image, idx) => (
                            <img
                              key={`${message.id}-img-${idx}`}
                              src={image}
                              alt="BMSIT context"
                              className="w-full h-24 object-cover rounded-xl border border-black/10"
                              loading="lazy"
                            />
                          ))}
                        </div>
                      ) : null}
                    </div>
                    {message.sources?.length ? (
                      <div className="text-[10px] text-gray-500 mt-2 mx-2 px-3 py-1.5 bg-white/40 border border-white/60 rounded-full inline-block">
                        <span className="font-bold text-[#111111]">Sources:</span> {message.sources.join(', ')}
                      </div>
                    ) : null}
                  </motion.div>
                ))}
                {isTyping && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="self-start items-start flex bg-white/80 border border-white rounded-3xl rounded-bl-sm px-5 py-4 shadow-sm">
                    <div className="flex gap-1.5 items-center justify-center h-4">
                      <span className="w-1.5 h-1.5 bg-[#FB6D39] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-1.5 h-1.5 bg-[#FB6D39] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-1.5 h-1.5 bg-[#FB6D39] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </motion.div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Action Pills */}
              <div className="flex gap-2 mb-4 overflow-x-auto pb-2 scrollbar-hide shrink-0">
                {['Admission criteria', 'Academic departments', 'Placements stats', 'Campus life'].map(text => (
                  <button 
                    key={text}
                    type="button" 
                    className="whitespace-nowrap px-5 py-2.5 bg-white/60 hover:bg-white border border-white/80 rounded-full text-xs font-bold text-[#111111] hover:text-[#FB6D39] transition-colors shadow-sm"
                    onClick={() => sendMessage(text)}
                  >
                    {text}
                  </button>
                ))}
              </div>

              {/* Input Area */}
              <form 
                className="shrink-0 flex items-center gap-2 bg-white/80 border border-white p-2.5 rounded-full shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]"
                onSubmit={onSubmit}
              >
                <div className="w-10 h-10 flex items-center justify-center text-gray-400">
                  <Sparkles size={18} className="text-[#FB6D39]" />
                </div>
                <input
                  className="flex-1 bg-transparent border-0 outline-none text-[#111111] text-[14px] placeholder:text-gray-400 px-2"
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  placeholder="Ask me anything about BMSIT&M..."
                />
                <button 
                  type="submit" 
                  disabled={isTyping || !input.trim()}
                  className="w-10 h-10 flex items-center justify-center bg-[#111111] text-white rounded-full shadow-md disabled:opacity-50 hover:bg-[#FB6D39] transition-colors shrink-0"
                >
                  <Send size={16} className="ml-1" />
                </button>
              </form>

            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatbotWidget;
