import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenerativeAI, GenerateContentResult } from "@google/generative-ai";
import { MessageCircle, X, Send, Loader2, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  role: 'user' | 'model';
  text: string;
}

// Comprehensive Knowledge Base with Q&A pairs
const KNOWLEDGE_BASE = [
  {
    keywords: ['what', 'do', 'you', 'do', 'services', 'offer'],
    answer: "Skyzuri Technologies offers comprehensive digital solutions including AI & Machine Learning, Cloud Computing, Blockchain Development, Cybersecurity, Web/App Development, UI/UX Design, Digital Marketing, Automation, and Digital Consulting. We help businesses of all sizes transform their ideas into scalable, secure digital solutions.",
  },
  {
    keywords: ['mission'],
    answer: "Our mission is to empower organizations through advanced, secure, and scalable technologies. We strive to deliver excellence in AI, Cloud, Blockchain, Cybersecurity, and Software Engineering, enabling businesses to innovate with confidence. Skyzuri is dedicated to transforming ideas into impactful digital solutions that accelerate progress and shape the future.",
  },
  {
    keywords: ['vision'],
    answer: "To be a global leader in digital innovation, shaping a smarter, more connected world where technology drives opportunity, security, and limitless growth. Skyzuri envisions a future where businesses thrive with intelligent, adaptive, and sustainable digital ecosystems.",
  },
  {
    keywords: ['about', 'skyzuri', 'company'],
    answer: "Skyzuri is a forward-thinking digital innovation company specializing in AI, Cloud Computing, Blockchain, Cybersecurity, and Custom Software Development. We help businesses, startups, and enterprise clients navigate digital transformation with secure, scalable, and intelligent solutions. Our team blends technology, creativity, and strategic thinking to build systems that are modern, efficient, and future-ready.",
  },
  {
    keywords: ['ai', 'artificial', 'intelligence'],
    answer: "We offer comprehensive AI and Machine Learning solutions including predictive analytics, natural language processing, computer vision systems, and custom chatbot development. Our AI solutions help businesses automate tasks, gain insights from data, and create intelligent systems that drive competitive advantage.",
  },
  {
    keywords: ['blockchain', 'crypto', 'web3', 'smart', 'contract'],
    answer: "Our Blockchain services include smart contract development, DApp creation, tokenization, private blockchain setup, and cryptocurrency solutions. We help businesses leverage decentralized technology for secure transactions and innovative business models.",
  },
  {
    keywords: ['cloud', 'computing', 'aws', 'azure', 'google'],
    answer: "Skyzuri provides cloud infrastructure solutions including cloud migration strategy, AWS/Azure/Google Cloud services, DevOps & CI/CD pipelines, and serverless architecture. We help you scale your applications efficiently and securely on the cloud.",
  },
  {
    keywords: ['cybersecurity', 'security', 'protection', 'vulnerability'],
    answer: "We offer comprehensive cybersecurity solutions including vulnerability assessments, network security, data encryption, security audits, and compliance support. Protecting your digital assets is our priority.",
  },
  {
    keywords: ['web', 'development', 'website', 'app', 'application'],
    answer: "We develop custom websites and web applications including e-commerce solutions, CMS integration, progressive web apps (PWA), and responsive design. Our team uses modern technologies like React, Node.js, and more to build scalable solutions.",
  },
  {
    keywords: ['ui', 'ux', 'design', 'interface', 'user'],
    answer: "Our UI/UX design services include user research, wireframing, prototyping, interactive interface design, and usability testing. We create beautiful, intuitive designs that users love.",
  },
  {
    keywords: ['digital', 'marketing'],
    answer: "We provide digital marketing services including SEO, SEM, social media management, content marketing, and pay-per-click advertising. Our data-driven strategies help your business reach and engage your target audience.",
  },
  {
    keywords: ['automation'],
    answer: "Skyzuri specializes in business process automation, robotic process automation (RPA), workflow integration, and custom scripting. We help streamline operations and reduce manual effort to increase efficiency.",
  },
  {
    keywords: ['team', 'who', 'founder', 'ceo', 'leadership'],
    answer: "Skyzuri is led by CEO Ibrahim with a talented team of developers, designers, and strategists. Our team brings together diverse expertise in emerging technologies and business transformation.",
  },
  {
    keywords: ['student', 'project', 'academic', 'capstone'],
    answer: "We offer Student Project services including project topic selection, technical implementation support, documentation assistance, and code review. Perfect for final year capstones and academic excellence.",
  },
  {
    keywords: ['pcb', 'hardware', 'circuit', 'embedded'],
    answer: "Our PCB Building services include schematic design, PCB layout & routing, prototyping & assembly, and component sourcing. We bring hardware prototypes to life with professional design and manufacturing.",
  },
  {
    keywords: ['how', 'contact', 'reach', 'phone', 'email'],
    answer: "You can reach us at info@skyzuritechbrides.com or call 9385816887. We're also available on LinkedIn and WhatsApp. Our team is ready to discuss your project and help you get started.",
  },
  {
    keywords: ['location', 'where', 'office', 'based'],
    answer: "Skyzuri is headquartered in Chennai, Tamil Nadu, India. We serve clients globally and offer both remote and on-site collaboration options.",
  },
  {
    keywords: ['pricing', 'cost', 'budget', 'quote'],
    answer: "Our pricing depends on your project requirements and scope. We offer flexible pricing models tailored to startups, SMEs, and enterprises. Contact our team for a custom quote based on your needs.",
  },
  {
    keywords: ['timeline', 'how', 'long', 'duration', 'delivery'],
    answer: "Project timelines vary based on complexity and scope. We follow agile development practices with regular updates and milestones. Our team will provide a detailed timeline during the project discovery phase.",
  },
  {
    keywords: ['technologies', 'tech', 'stack', 'languages', 'frameworks'],
    answer: "We work with modern technologies including React, Node.js, Python, Go, Flutter, Swift, Solidity, AWS, Azure, Docker, Kubernetes, and many more. Our tech stack is carefully chosen for each project's specific needs.",
  },
  {
    keywords: ['portfolio', 'projects', 'work', 'case', 'study'],
    answer: "Check out our portfolio on the website to see projects like Lanka Greenovation, Trabook, Background Remover, and Heritage. Each project showcases our expertise across different domains and technologies.",
  },
  {
    keywords: ['process', 'methodology', 'how', 'work', 'approach'],
    answer: "We follow a structured approach: Discovery & Planning → Design & Prototyping → Development & Implementation → Testing & QA → Deployment → Support & Maintenance. We use agile methodologies and maintain transparent communication throughout.",
  },
  {
    keywords: ['support', 'maintenance', 'after', 'post', 'deployment'],
    answer: "After deployment, we provide ongoing support, maintenance, bug fixes, and updates. Our support packages are tailored to keep your solution running smoothly and adapting to changing needs.",
  },
  {
    keywords: ['startup', 'enterprise', 'business', 'consulting'],
    answer: "We serve startups, SMEs, and enterprises. Our consulting services help businesses identify opportunities, plan digital transformation, and execute technology solutions that drive growth.",
  },
  {
    keywords: ['partnership', 'collaborate', 'work', 'together'],
    answer: "We're open to partnerships and collaborations. Whether you're looking to partner on projects, integrations, or technology initiatives, let's discuss how we can work together for mutual success.",
  },
];

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Hi! 👋 I\'m the Skyzuri AI Assistant. I\'m here to answer questions about our services, team, and how we can help transform your digital future. What would you like to know?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatSessionRef = useRef<any>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Animation variants
  const panelVariants = {
    hidden: { opacity: 0, x: 80, scale: 0.98 },
    visible: { opacity: 1, x: 0, scale: 1, transition: { type: 'spring', stiffness: 600, damping: 28 } },
    exit: { opacity: 0, x: 80, transition: { duration: 0.18 } },
  };

  const messageVariants = {
    hidden: { opacity: 0, y: 6, scale: 0.98 },
    visible: (i: number) => ({ opacity: 1, y: 0, scale: 1, transition: { delay: i * 0.03, duration: 0.16 } }),
  };

  const typingDot = {
    animate: { y: [0, -6, 0] },
    transition: { repeat: Infinity, duration: 0.9, ease: 'easeInOut' }
  };

  // Runtime-trained Q&A stored in localStorage
  const [trainedKB, setTrainedKB] = useState<{ question: string; answer: string }[]>(() => {
    try {
      const raw = localStorage.getItem('skyzuri_trained_kb');
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  });

  // Common greetings and canned responses for small talk
  const GREETING_KEYWORDS = ['hi', 'hello', 'hey', 'hiya', 'good morning', 'good afternoon', 'good evening'];
  const GREETING_ANSWERS = [
    "Hi there! 👋 How can I help you today?",
    "Hello! I'm Skyzuri's assistant — what would you like to know?",
    "Hey! Ask me about our services, team, or how we work."
  ];

  const SMALL_TALK: { keywords: string[]; answer: string }[] = [
    { keywords: ['how are you', 'how are you?'], answer: "I'm a virtual assistant — always ready to help! How can I assist you today?" },
    { keywords: ['thank you', 'thanks'], answer: "You're welcome! If you have more questions, feel free to ask." },
    { keywords: ['bye', 'goodbye', 'see ya'], answer: "Goodbye! Reach out anytime or contact our team at info@skyzuritechbrides.com." },
  ];

  // Function to find best matching answer from knowledge base (includes greetings, small-talk and runtime-trained pairs)
  const findAnswerFromKB = (userMessage: string): string | null => {
    const raw = userMessage.toLowerCase().trim();

    // 1) Exact/single-word greetings and salutations
    for (const g of GREETING_KEYWORDS) {
      if (raw === g || raw.startsWith(g + ' ') || raw.includes(' ' + g + ' ') || raw.endsWith(' ' + g)) {
        // pick a friendly greeting answer
        return GREETING_ANSWERS[Math.floor(Math.random() * GREETING_ANSWERS.length)];
      }
    }

    // 2) Small talk matches
    for (const s of SMALL_TALK) {
      for (const phrase of s.keywords) {
        if (raw.includes(phrase)) return s.answer;
      }
    }

    // 3) Runtime-trained QA pairs (exact contains or equality)
    for (const t of trainedKB) {
      const q = t.question.toLowerCase().trim();
      if (!q) continue;
      if (raw === q || raw.includes(q) || q.includes(raw)) return t.answer;
    }

    // 4) Static knowledge base matching (keyword intersection)
    const words = raw.split(/\W+/).filter(Boolean);
    for (const qa of KNOWLEDGE_BASE) {
      const matchCount = words.filter(word => qa.keywords.includes(word)).length;
      if (matchCount >= 1) {
        return qa.answer;
      }
    }

    return null;
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  useEffect(() => {
    // Initialize Gemini Chat Session
    try {
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');
        const model = genAI.getGenerativeModel({
            model: 'gemini-1.5-flash',
            systemInstruction: `You are the AI assistant for Skyzuri Technologies, a digital innovation company. You are knowledgeable, helpful, professional, and friendly.

**About Skyzuri:**
Skyzuri is a forward-thinking digital innovation company specializing in AI, Cloud Computing, Blockchain, Cybersecurity, and Custom Software Development. We help businesses, startups, and enterprise clients navigate digital transformation with secure, scalable, and intelligent solutions.

**Our Mission:**
Our mission is to empower organizations through advanced, secure, and scalable technologies. We strive to deliver excellence in AI, Cloud, Blockchain, Cybersecurity, and Software Engineering.

**Our Vision:**
To be a global leader in digital innovation, shaping a smarter, more connected world where technology drives opportunity, security, and limitless growth.

**Core Services:**
- AI & Machine Learning
- Cloud Computing (AWS, Azure, Google Cloud)
- Blockchain & Smart Contracts
- Cybersecurity Solutions
- Web & App Development
- UI/UX Design
- Digital Marketing
- Automation & RPA
- PCB Building
- Student Projects

**Contact:**
- Phone: 9385816887
- Email: connect.skyzuri@outlook.com
- Location: Madurai, Tamil Nadu, India

Always be professional, concise, and helpful. If you don't know something, admit it and suggest contacting our team directly.`,
        });
        chatSessionRef.current = model.startChat({
            history: [],
        });
    } catch (error) {
        console.error("Failed to initialize AI", error);
    }
  }, []);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      // Support simple runtime training command: /train question|answer
      if (userMessage.toLowerCase().startsWith('/train ')) {
        const payload = userMessage.slice(7).split('|');
        if (payload.length >= 2) {
          const q = payload[0].trim();
          const a = payload.slice(1).join('|').trim();
          if (q && a) {
            const newKB = [{ question: q, answer: a }, ...trainedKB];
            setTrainedKB(newKB);
            try { localStorage.setItem('skyzuri_trained_kb', JSON.stringify(newKB)); } catch (e) { /* ignore */ }
            setMessages(prev => [...prev, { role: 'model', text: 'Thanks — I\'ve learned that. I will use this to answer similar questions.' }]);
            setIsLoading(false);
            return;
          }
        }
        setMessages(prev => [...prev, { role: 'model', text: 'To train me use: /train question|answer — for example: /train What are your hours?|We are open Mon-Fri from 9am-6pm.' }]);
        setIsLoading(false);
        return;
      }
      // First, try to find answer from knowledge base (including runtime-trained pairs)
      const kbAnswer = findAnswerFromKB(userMessage);
      
      if (kbAnswer) {
        // Use knowledge base answer
        setMessages(prev => [...prev, { role: 'model', text: kbAnswer }]);
        setIsLoading(false);
      } else if (chatSessionRef.current) {
        // Fall back to Gemini AI for complex questions
        const result = await chatSessionRef.current.sendMessageStream({ message: userMessage });
        
        let fullResponse = "";
        setMessages(prev => [...prev, { role: 'model', text: '' }]);

        for await (const chunk of result) {
            const c = chunk as GenerateContentResponse;
            const text = c.text || "";
            fullResponse += text;
            
            setMessages(prev => {
                const newMessages = [...prev];
                const lastMessage = newMessages[newMessages.length - 1];
                lastMessage.text = fullResponse;
                return newMessages;
            });
        }
        setIsLoading(false);
      } else {
        setMessages(prev => [...prev, { role: 'model', text: "I'm here to help! Could you please rephrase your question? I'm trained to answer questions about Skyzuri's services, team, and solutions." }]);
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages(prev => [...prev, { role: 'model', text: "I'm having trouble processing that right now. Please try again, or contact us directly at 9385816887 or info@skyzuritechbrides.com" }]);
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed bottom-24 right-6 w-[350px] md:w-[400px] h-[500px] bg-white rounded-2xl shadow-2xl border border-gray-100 z-[9999] flex flex-col overflow-hidden font-inter"
          >
            {/* Header */}
            <div className="bg-primary p-4 flex justify-between items-center text-white">
              <div className="flex items-center gap-2">
                <div className="bg-accent/20 p-1.5 rounded-lg">
                    <Bot size={20} className="text-accent" />
                </div>
                <div>
                    <h3 className="font-bold text-sm">Skyzuri Assistant</h3>
                    <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                        <span className="text-xs text-gray-300">Online</span>
                    </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/10 p-1.5 rounded-full transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  custom={idx}
                  initial="hidden"
                  animate="visible"
                  variants={messageVariants}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3.5 rounded-2xl text-sm leading-relaxed shadow-sm ${
                      msg.role === 'user'
                        ? 'bg-accent text-white rounded-br-none'
                        : 'bg-white text-gray-700 border border-gray-100 rounded-bl-none'
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                  <div className="flex justify-start">
                      <div className="bg-white p-3 rounded-2xl rounded-bl-none border border-gray-100 shadow-sm flex gap-2 items-center">
                          <motion.span className="w-2 h-2 bg-gray-400 rounded-full" animate={typingDot.animate} transition={typingDot.transition} />
                          <motion.span className="w-2 h-2 bg-gray-400 rounded-full" animate={typingDot.animate} transition={{ ...typingDot.transition, delay: 0.15 }} />
                          <motion.span className="w-2 h-2 bg-gray-400 rounded-full" animate={typingDot.animate} transition={{ ...typingDot.transition, delay: 0.3 }} />
                      </div>
                  </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-gray-100">
              <div className="relative">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Ask me anything..."
                  className="w-full pl-4 pr-12 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all text-sm"
                  disabled={isLoading}
                />
                <button 
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-accent text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {isLoading ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
                </button>
              </div>
              <div className="text-[10px] text-center text-gray-400 mt-2">
                  Powered by Gemini AI • Skyzuri Technologies
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(prev => !prev)}
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.94 }}
        animate={isOpen ? {} : { y: [0, -6, 0], boxShadow: ["0 10px 30px rgba(59,130,246,0.12)", "0 18px 40px rgba(59,130,246,0.06)", "0 10px 30px rgba(59,130,246,0.12)"] }}
        transition={isOpen ? { duration: 0 } : { repeat: Infinity, duration: 3, ease: 'easeInOut' }}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-accent to-blue-600 text-white rounded-full shadow-glow flex items-center justify-center z-[9999]"
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
      </motion.button>
    </>
  );
};

export default ChatBot;