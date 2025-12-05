import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PORTFOLIO_PROJECTS, REVOLUTION_STORY } from '../constants';
import { Sparkles, ArrowUpRight, Code, Cpu, Globe, Layers, Zap, Smartphone, Linkedin, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../types';

const MILESTONES = [
  {
    year: "June'25",
    title: 'Ideation & Foundation',
    description: 'Skyzuri is conceptualized with a vision to lead digital transformation through advanced technologies.'
  },
  {
    year: "July'25",
    title: 'Official Launch',
    description: 'Company launches with core services: AI, Cloud, Blockchain, Web Development, and Cybersecurity.'
  },
  {
    year: "September'25",
    title: 'Major Project Deployments',
    description: 'Delivered multiple enterprise solutions for startups, SMEs, and institutions.'
  },
  {
    year: "October'25",
    title: 'Expansion of Services',
    description: 'Added digital marketing, UI/UX, automation, and advanced consulting services.'
  },
  {
    year: "December'25",
    title: 'Global Partnerships',
    description: 'Formed strategic tech collaborations and expanded service reach internationally.'
  },
  {
    year: '2026',
    title: 'Future Goals',
    description: 'Scaling AI-driven products, cybersecurity platforms, and cloud automation systems to become a global digital innovation leader.'
  }
];

const Portfolio: React.FC = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Extract unique categories for the filter
  const categories = ['All', ...Array.from(new Set(PORTFOLIO_PROJECTS.map(p => p.category)))];

  const filteredProjects = activeCategory === 'All'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter(p => p.category === activeCategory);

  return (
    <div className="bg-[#f8faff] min-h-screen font-sans selection:bg-accent selection:text-white pb-20 overflow-x-hidden">

      {/* --- HERO / REVOLUTION SECTION --- */}
      <section className="relative pt-20 pb-24 px-6 md:px-12 overflow-hidden">

        {/* Animated Background Elements */}
        <motion.div
          animate={{
            scale: [1, 1.1, 0.9, 1],
            translate: ["0% 0%", "10% -10%", "-5% 5%", "0% 0%"]
          }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
          className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-gradient-to-br from-blue-200/40 to-purple-200/40 rounded-full blur-3xl"
        />

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-100 shadow-sm text-accent font-bold text-sm mb-8">
                <Sparkles size={16} />
                <span className="tracking-wide uppercase">Innovation First</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-8 font-montserrat">
                {REVOLUTION_STORY.title} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-600">
                  Since 2025
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-10 max-w-xl font-inter text-justify">
                {REVOLUTION_STORY.content}
              </p>

              {/* Stats Row */}
              <div className="flex flex-wrap gap-12 border-t border-gray-200 pt-8">
                {REVOLUTION_STORY.stats.map((stat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + (idx * 0.1) }}
                    className="group"
                  >
                    <div className="text-4xl font-bold text-slate-800 mb-1 group-hover:text-accent transition-colors duration-300">
                      {stat.value}
                    </div>
                    <div className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Visual/Illustration Side */}
            <motion.div
              initial={{ opacity: 0, x: 30, rotate: 3 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] w-full hidden lg:block"
            >
              <div className="absolute inset-0 bg-white/60 backdrop-blur-xl rounded-[40px] border border-white/50 shadow-2xl p-8 flex flex-col justify-between transform hover:scale-[1.02] transition-all duration-700">
                <div className="w-full h-48 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-3xl mb-6 opacity-90 shadow-lg relative overflow-hidden group">
                  <div className="absolute inset-0 bg-[url('images/cubes-pattern.png')] opacity-20"></div>
                  <Layers className="absolute bottom-4 right-4 text-white/50 w-12 h-12 group-hover:scale-125 transition-transform duration-500" />
                </div>
                <div className="flex gap-6 h-full">
                  <div className="flex-1 bg-slate-50 rounded-3xl p-6 flex flex-col justify-center items-center shadow-inner border border-gray-100">
                    <Cpu className="w-12 h-12 text-accent mb-4 animate-bounce" />
                    <span className="font-bold text-gray-400">AI Core</span>
                  </div>
                  <div className="flex-1 bg-slate-900 rounded-3xl p-6 flex flex-col justify-center items-center text-white shadow-2xl">
                    <Code className="w-12 h-12 text-green-400 mb-4" />
                    <span className="font-bold">Clean Code</span>
                  </div>
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Zap className="text-green-600 w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 font-medium">Efficiency</div>
                    <div className="text-xl font-bold text-slate-800">98.5%</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- PORTFOLIO GALLERY SECTION --- */}
      <section className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-200 pb-6 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2 font-montserrat">Selected Work</h2>
            <p className="text-gray-500">Explore our successful deliveries across industries.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActiveCategory(cat)} className="relative px-5 py-2.5 rounded-full text-sm font-semibold transition-colors z-10">
                {activeCategory === cat && (
                  <motion.div layoutId="pill-bg" className="absolute inset-0 bg-slate-900 rounded-full -z-10" transition={{ type: "spring", duration: 0.5 }} />
                )}
                <span className={activeCategory === cat ? 'text-white' : 'text-gray-600 hover:text-accent'}>{cat}</span>
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
            >
              <motion.img
                layoutId={`card-image-container-${project.id}`}
                src={project.image}
                alt={project.title}
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="text-sm opacity-80">{project.category}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="py-20 text-center text-gray-400">
            <p>No projects found in this category.</p>
          </div>
        )}
      </section>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            layoutId={`card-image-container-${selectedProject.id}`}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl overflow-hidden w-full max-w-4xl max-h-[90vh] flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside
            >
              <img src={selectedProject.image} alt={selectedProject.title} className="w-full md:w-1/2 object-cover" />
              <div className="p-8 flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-2">{selectedProject.title}</h2>
                <p className="text-sm text-gray-500 mb-4">{selectedProject.category}</p>
                <p className="text-gray-700 mb-6">{selectedProject.description}</p>
                <a href={selectedProject.linkedinUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 p-3 px-6 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 text-white hover:scale-105 transition-transform w-fit font-semibold">
                  <Linkedin size={20} />
                  View on LinkedIn
                </a>
              </div>
            </motion.div>
            <button onClick={() => setSelectedProject(null)} className="absolute top-6 right-6 text-white bg-black/50 p-2 rounded-full hover:bg-black/80 transition-colors">
              <X size={24} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- OUR JOURNEY / MILESTONES SECTION --- */}
      <section className="container mx-auto px-4 max-w-7xl mt-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2 font-montserrat">Our Journey</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">A timeline of our innovation, growth, and commitment to excellence since day one.</p>
        </div>

        <div className="relative">
          {/* The vertical line */}
          <div className="absolute left-1/2 -translate-x-1/2 h-full top-0 w-1 bg-blue-100 rounded" aria-hidden="true"></div>

          {MILESTONES.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative flex items-center mb-12 w-full ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
            >
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-transparent hover:border-blue-200 hover:shadow-xl transition-all duration-300">
                  <p className="text-sm font-bold text-accent mb-2 tracking-wide">{milestone.year} - {milestone.title}</p>
                  <p className="text-gray-600 text-base leading-relaxed">{milestone.description}</p>
                </div>
              </div>

              {/* Dot on the timeline */}
              <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-white border-4 border-accent rounded-full z-10 flex items-center justify-center">
                <div className="w-2.5 h-2.5 bg-accent rounded-full"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="container mx-auto px-4 mt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-accent to-blue-600 rounded-[40px] p-12 md:p-20 text-center text-white shadow-2xl shadow-blue-500/30 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full -translate-x-1/3 translate-y-1/3"></div>

          <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10 font-montserrat">Have a Vision? Let's Build It.</h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-10 relative z-10">
            Join the list of successful companies transforming their future with Skyzuri technologies.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg shadow-lg relative z-10"
            onClick={() => {
              window.scrollTo(0, 0);
              navigate('/contact');
            }}
          >
            Start a Project
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
};

export default Portfolio;