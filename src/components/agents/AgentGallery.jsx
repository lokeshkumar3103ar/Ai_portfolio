import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaBrain, FaCode, FaLightbulb, FaUsers, FaRocket, FaMagic, FaPlay, FaPause, FaForward, FaCog, FaEye } from 'react-icons/fa';

const AgentGallery = () => {
  const [showAgentOverlay, setShowAgentOverlay] = useState(false);
  const [hasShownAgentOverlay, setHasShownAgentOverlay] = useState(false);
  const [activeAgent, setActiveAgent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // AI Agents Portfolio
  const aiAgents = [
    {
      name: "GPT-4",
      role: "Strategic AI",
      specialty: "Big picture thinking, UX design, content strategy",
      personality: "Visionary, articulate, loves complex problems",
      contribution: "Designed the overall site architecture and user experience flow",
      icon: FaBrain,
      color: "from-green-400 to-emerald-600",
      achievements: ["Site Architecture", "UX Strategy", "Content Design"]
    },
    {
      name: "GitHub Copilot", 
      role: "Code AI",
      specialty: "React development, component building, optimization",
      personality: "Precise, efficient, obsessed with clean code",
      contribution: "Built every component with perfect syntax and smooth animations",
      icon: FaCode,
      color: "from-blue-400 to-cyan-600",
      achievements: ["React Components", "Framer Motion", "Responsive Design"]
    },
    {
      name: "Lokesh",
      role: "AI Orchestrator",
      specialty: "Prompt engineering, workflow design, creative direction",
      personality: "Experimental, strategic, loves pushing boundaries",
      contribution: "Engineered the collaboration and made all creative decisions",
      icon: FaRocket,
      color: "from-purple-400 to-pink-600",
      achievements: ["AI Orchestration", "Creative Direction", "Prompt Engineering"]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        setIsAnimating(true);
        setTimeout(() => {
          setActiveAgent((prev) => (prev + 1) % aiAgents.length);
          setIsAnimating(false);
        }, 300);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isAnimating]);

  useEffect(() => {
    const handleScroll = () => {
      const agentsSection = document.getElementById('agents');
      
      if (!agentsSection || hasShownAgentOverlay) return;
      
      const sectionTop = agentsSection.offsetTop;
      const scrollPosition = window.scrollY + window.innerHeight * 0.3;
      
      if (scrollPosition >= sectionTop && !hasShownAgentOverlay) {
        setShowAgentOverlay(true);
        setHasShownAgentOverlay(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasShownAgentOverlay]);
  
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <FaRobot className="text-2xl text-blue-500 animate-pulse" />
            <span className="text-sm font-bold text-blue-600 dark:text-blue-400">AI COLLABORATION</span>
            <FaRobot className="text-2xl text-green-500 animate-pulse" />
          </div>
          <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            Meet the AI Team
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto">
            Each AI brings unique strengths. Together, they built this entire experience 
            in <strong>3 days</strong> with me orchestrating the collaboration.
          </p>
        </motion.div>

        {/* AI Agent Showcase */}
        <div className="relative">
          {/* Background Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {aiAgents.map((agent, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative overflow-hidden rounded-2xl p-8 cursor-pointer transition-all duration-500 border ${
                  activeAgent === index 
                    ? 'bg-gradient-to-br shadow-2xl scale-105 border-transparent' 
                    : 'bg-white dark:bg-gray-800 hover:scale-102 border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl'
                }`}
                style={{
                  background: activeAgent === index 
                    ? `linear-gradient(135deg, ${agent.color.includes('green') ? '#10b981' : agent.color.includes('blue') ? '#3b82f6' : '#8b5cf6'} 0%, ${agent.color.includes('green') ? '#059669' : agent.color.includes('blue') ? '#1d4ed8' : '#7c3aed'} 100%)`
                    : undefined,
                  boxShadow: activeAgent === index
                    ? `0 25px 50px -12px ${agent.color.includes('green') ? 'rgba(16, 185, 129, 0.4)' : agent.color.includes('blue') ? 'rgba(59, 130, 246, 0.4)' : 'rgba(139, 92, 246, 0.4)'}`
                    : undefined
                }}
                onClick={() => setActiveAgent(index)}
              >
                {/* Agent Icon */}
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${
                  activeAgent === index ? 'bg-white/20' : 'bg-gradient-to-br ' + agent.color
                }`}>
                  <agent.icon className={`text-2xl ${
                    activeAgent === index ? 'text-white' : 'text-white'
                  }`} />
                </div>

                {/* Agent Info */}
                <h3 className={`text-2xl font-bold mb-2 ${
                  activeAgent === index ? 'text-white' : 'text-gray-900 dark:text-white'
                }`}>
                  {agent.name}
                </h3>
                
                <p className={`text-lg font-semibold mb-4 ${
                  activeAgent === index ? 'text-white/95' : 'text-gray-700 dark:text-gray-300'
                }`}>
                  {agent.role}
                </p>

                <p className={`text-sm mb-6 leading-relaxed ${
                  activeAgent === index ? 'text-white/90' : 'text-gray-600 dark:text-gray-400'
                }`}>
                  {agent.specialty}
                </p>

                {/* Achievements */}
                <div className="space-y-2">
                  {agent.achievements.map((achievement, idx) => (
                    <div key={idx} className={`text-xs px-3 py-1 rounded-full inline-block mr-2 mb-2 ${
                      activeAgent === index 
                        ? 'bg-white/25 text-white border border-white/30' 
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-600'
                    }`}>
                      {achievement}
                    </div>
                  ))}
                </div>

                {/* Active Indicator */}
                {activeAgent === index && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute top-4 right-4 w-3 h-3 bg-white rounded-full animate-pulse"
                  />
                )}
              </motion.div>
            ))}
          </div>

          {/* Active Agent Detail */}
          <motion.div
            key={activeAgent}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 text-center"
          >
            <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {aiAgents[activeAgent].name}'s Contribution
            </h4>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
              {aiAgents[activeAgent].contribution}
            </p>
            <div className="mt-6 text-sm text-gray-600 dark:text-gray-400 italic">
              Personality: {aiAgents[activeAgent].personality}
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid md:grid-cols-3 gap-8 text-center"
        >
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <FaUsers className="text-3xl text-blue-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">3 AIs</h3>
            <p className="text-gray-600 dark:text-gray-400">Working in Perfect Sync</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <FaLightbulb className="text-3xl text-yellow-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">3 Days</h3>
            <p className="text-gray-600 dark:text-gray-400">From Idea to Live Site</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <FaRocket className="text-3xl text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">0 Bugs</h3>
            <p className="text-gray-600 dark:text-gray-400">AI-Perfect Code Quality</p>
          </div>
        </motion.div>

        {/* Simple Overlay */}
        <AnimatePresence>
          {showAgentOverlay && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl cursor-pointer"
              onClick={() => setShowAgentOverlay(false)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="max-w-3xl mx-auto text-center px-8"
                onClick={(e) => e.stopPropagation()}
              >
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-4xl font-bold text-white mb-8"
                >
                  Welcome to the{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
                    AI Lab
                  </span>
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="text-xl text-gray-300 mb-8"
                >
                  This is where AI collaboration gets real. Each team member has unique strengths, 
                  and together they created something none could build alone.
                </motion.p>

                <motion.button
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ delay: 1 }}
                  onClick={() => setShowAgentOverlay(false)}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-green-600 rounded-full text-white font-semibold shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
                >
                  Meet the Team
                </motion.button>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                  className="mt-4 text-gray-500 text-sm"
                >
                  Click anywhere to continue
                </motion.p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default AgentGallery;