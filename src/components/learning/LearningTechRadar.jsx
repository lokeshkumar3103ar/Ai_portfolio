import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBrain, FaCode, FaGraduationCap, FaRocket, FaCog, FaDatabase, FaCloud, FaChartLine, FaFire, FaLightbulb } from 'react-icons/fa';

const LearningTechRadar = () => {
  const [activeCategory, setActiveCategory] = useState('current-learning');

  const currentLearning = [
    {
      tech: "MongoDB Developer Certification",
      status: "In Progress",
      timeline: "2-3 weeks remaining",
      reason: "Needed for QritiQ deployment and database optimization",
      icon: FaDatabase,
      color: "#10B981"
    },
    {
      tech: "Building LLM from Scratch",
      status: "Research Phase",
      timeline: "Long-term project",
      reason: "Understanding AI fundamentals beyond just using models",
      icon: FaBrain,
      color: "#8B5CF6"
    },
    {
      tech: "Small Language Models (SLMs)",
      status: "Active Exploration",
      timeline: "Next 2 months",
      reason: "Edge AI and efficient model deployment for products",
      icon: FaRocket,
      color: "#F59E0B"
    },
    {
      tech: "Azure AI Services",
      status: "Learning",
      timeline: "4-6 weeks",
      reason: "Enterprise-grade AI deployment for scaling projects",
      icon: FaCloud,
      color: "#4F46E5"
    }
  ];

  const exploringTech = [
    "New AI Frameworks",
    "Agentic Systems", 
    "Neural Networks from Scratch",
    "Fine-tuning Techniques",
    "MCP (Model Context Protocol)",
    "ACP (AI Communication Protocol)",
    "Data Pipelines for AI",
    "LLM Output Evaluation",
    "Edge AI Implementation",
    "Automated Education Systems",
    "NLP Advanced Techniques",
    "AI Agent Communication"
  ];

  const masteredSkills = [
    { category: "Programming", skills: ["Python", "C", "C++", "Java"], level: "Expert" },
    { category: "AI/ML", skills: ["GenAI", "Data Science", "LLM Integration", "Edge AI"], level: "Advanced" },
    { category: "Tools & Systems", skills: ["Git/GitHub", "Docker", "MATLAB", "DBMS"], level: "Proficient" },
    { category: "Specialized", skills: ["Prompt Engineering", "AI Concepts", "Data Structures"], level: "Expert" },
    { category: "Research", skills: ["Self-directed Learning", "Technology Evaluation", "Problem Analysis"], level: "Master" }
  ];

  const learningPhilosophy = [
    {
      principle: "Learn by Building",
      description: "Every technology is mastered through real project implementation",
      example: "Built QritiQ while learning Whisper, Mistral, and FastAPI",
      impact: "100% retention rate through practical application"
    },
    {
      principle: "Research-Driven Approach", 
      description: "Deep research before implementation ensures optimal technology choices",
      example: "Researched 15+ AI frameworks before selecting tech stack for each project",
      impact: "Efficient learning path with minimal technical debt"
    },
    {
      principle: "Self-Taught Mastery",
      description: "Everything learned independently through documentation, research, and experimentation",
      example: "All current skills acquired without formal courses or bootcamps",
      impact: "Ability to learn any technology when motivation exists"
    },
    {
      principle: "Efficiency Mindset",
      description: "Focus on learning what's needed for current goals, diving deep when required",
      example: "Learning MongoDB specifically for QritiQ, not general database theory",
      impact: "Faster project completion with targeted knowledge acquisition"
    }
  ];

  const categories = [
    { id: 'current-learning', label: 'Current Learning', icon: FaGraduationCap },
    { id: 'exploring', label: 'Technology Radar', icon: FaLightbulb },
    { id: 'mastered', label: 'Mastered Skills', icon: FaCode },
    { id: 'philosophy', label: 'Learning Philosophy', icon: FaBrain }
  ];

  const getSkillLevelColor = (level) => {
    switch (level) {
      case 'Master': return 'bg-gradient-to-r from-red-500 to-pink-500';
      case 'Expert': return 'bg-gradient-to-r from-purple-500 to-indigo-500';
      case 'Advanced': return 'bg-gradient-to-r from-blue-500 to-cyan-500';
      case 'Proficient': return 'bg-gradient-to-r from-green-500 to-teal-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <FaFire className="text-3xl text-red-500 animate-pulse" />
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              Learning & Technology Radar
            </h2>
            <FaChartLine className="text-3xl text-green-500 animate-pulse" />
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto">
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Everything self-taught
            </span> through research, experimentation, and building real projects.
            <br />
            Current focus: AI fundamentals, edge deployment, and enterprise-scale systems.
          </p>
        </motion.div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <category.icon className="text-sm" />
              {category.label}
            </motion.button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {activeCategory === 'current-learning' && (
            <motion.div
              key="current-learning"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-6">
                {currentLearning.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
                  >
                    <div className="flex items-start gap-4">
                      <div 
                        className="p-3 rounded-lg"
                        style={{ backgroundColor: `${item.color}20` }}
                      >
                        <item.icon 
                          className="text-2xl"
                          style={{ color: item.color }}
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            {item.tech}
                          </h3>
                          <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900 px-3 py-1 rounded-full">
                            {item.status}
                          </span>
                        </div>
                        
                        <p className="text-gray-700 dark:text-gray-300 mb-2">
                          {item.reason}
                        </p>
                        <p className="text-sm text-gray-500">
                          Timeline: {item.timeline}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeCategory === 'exploring' && (
            <motion.div
              key="exploring"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {exploringTech.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-lg text-center font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-8 text-center bg-yellow-100 dark:bg-yellow-900 p-6 rounded-xl"
              >
                <p className="text-yellow-800 dark:text-yellow-200">
                  <strong>Active Research:</strong> Currently evaluating these technologies for upcoming projects and long-term AI contributions
                </p>
              </motion.div>
            </motion.div>
          )}

          {activeCategory === 'mastered' && (
            <motion.div
              key="mastered"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-6">
                {masteredSkills.map((category, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {category.category}
                      </h3>
                      <span className={`text-white px-3 py-1 rounded-full text-sm font-semibold ${getSkillLevelColor(category.level)}`}>
                        {category.level}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeCategory === 'philosophy' && (
            <motion.div
              key="philosophy"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-8">
                {learningPhilosophy.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
                  >
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {item.principle}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      {item.description}
                    </p>
                    <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg mb-4">
                      <p className="text-blue-800 dark:text-blue-200">
                        <strong>Example:</strong> {item.example}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaChartLine className="text-green-500" />
                      <span className="text-sm font-semibold text-green-600 dark:text-green-400">
                        Impact: {item.impact}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default LearningTechRadar;
