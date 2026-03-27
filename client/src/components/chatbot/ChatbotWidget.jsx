import { useMemo, useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, MessageCircle, Send, X, Sparkles, Paperclip, Mic, Copy, Plus } from 'lucide-react';
import { askChatbot } from '../../services/api';
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
    setIsTyping(true);

    try {
      const response = await askChatbot(trimmed);
      const botMessage = {
        id: `assistant-${Date.now()}`,
        role: 'assistant',
        content: response.reply,
        sources: response.sources || [],
      };
      setMessages((prev) => [...prev, botMessage]);
      if (response.suggestions?.length) {
        setSuggestions(response.suggestions);
      }
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          id: `assistant-error-${Date.now()}`,
          role: 'assistant',
          content: 'I could not reach the college assistant service right now. Please try again in a moment.',
        },
      ]);
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
        className="chat-launcher"
        aria-label="Open college assistant"
      >
        <MessageCircle size={20} />
        <span>Chat Assistant</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.section
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="chat-shell"
          >
            <div className="chat-panel-left">
              <div className="chat-brand-row">
                <button type="button" className="ghost-icon">
                  <Sparkles size={16} />
                </button>
                <h3>Chat Results</h3>
              </div>

              <p className="chat-subtitle">Today</p>

              <div className="chat-history-card featured">
                <div className="chat-history-top">
                  <span className="badge">College Assistant</span>
                  <button type="button" className="ghost-icon small">
                    <Copy size={14} />
                  </button>
                </div>
                <p className="history-title">College Information</p>
                <p className="history-meta">Admissions, academics, placements, and campus life</p>
              </div>

              <p className="chat-subtitle">Quick Suggestions</p>
              <div className="chat-suggestion-list">
                {suggestions.slice(0, 4).map((suggestion) => (
                  <button
                    key={suggestion}
                    type="button"
                    className="history-pill"
                    onClick={() => sendMessage(suggestion)}
                  >
                    {suggestion}
                  </button>
                ))}
              </div>

              <div className="chat-left-footer">
                <button type="button" className="ghost-icon">
                  <Plus size={16} />
                </button>
                <button type="button" className="ghost-icon">
                  <Bot size={16} />
                </button>
              </div>
            </div>

            <div className="chat-panel-right">
              <div className="chat-topbar">
                <div className="chat-agent">
                  <div className="avatar">B</div>
                  <div>
                    <p className="agent-greeting">Hi, welcome!</p>
                    <h4>BMSIT College Assistant</h4>
                  </div>
                </div>
                <button type="button" className="ghost-icon" onClick={() => setIsOpen(false)}>
                  <X size={16} />
                </button>
              </div>

              <div className="chat-stream">
                {visibleMessages.map((message) => (
                  <article key={message.id} className={`bubble ${message.role}`}>
                    <p>{message.content}</p>
                    {message.sources?.length ? (
                      <div className="sources">Sources: {message.sources.join(', ')}</div>
                    ) : null}
                  </article>
                ))}
                {isTyping ? <div className="typing-indicator">Assistant is typing...</div> : null}
                <div ref={messagesEndRef} />
              </div>

              <div className="chat-action-row">
                <button type="button" className="action-pill" onClick={() => sendMessage('Show admission contacts')}>
                  Admissions
                </button>
                <button type="button" className="action-pill" onClick={() => sendMessage('Tell me about CSE department')}>
                  Departments
                </button>
                <button type="button" className="action-pill" onClick={() => sendMessage('Placement details')}>
                  Placements
                </button>
              </div>

              <form className="chat-input-row" onSubmit={onSubmit}>
                <button type="button" className="ghost-icon">
                  <Paperclip size={16} />
                </button>
                <input
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  placeholder="Ask me anything about BMSIT&M..."
                />
                <button type="button" className="ghost-icon">
                  <Mic size={16} />
                </button>
                <button type="submit" className="send-btn" disabled={isTyping || !input.trim()}>
                  <Send size={15} />
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
