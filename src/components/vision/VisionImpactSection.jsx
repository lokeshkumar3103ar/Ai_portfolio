import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBrain, FaRocket, FaCode, FaLightbulb, FaChartLine, FaCog, FaGraduationCap, FaUsers, FaGlobe, FaArrowRight } from 'react-icons/fa';
import ContactOverlay from '../ui/ContactOverlay';

const VisionImpactSection = () => {
  const [activeTab, setActiveTab] = useState('vision');
  const [isContactOverlayOpen, setIsContactOverlayOpen] = useState(false);

  const visionPillars = [
    {
      icon: FaBrain,
      title: "Lead in AI Field",
      description: "Contributing to AI systems, agents, and hopefully AGI - not just using tools, but building the future",
      color: "#4F46E5"
    },
    {
      icon: FaRocket,
      title: "Products That Matter",
      description: "Building AI-powered solutions that ease daily life and solve real problems at scale",
      color: "#10B981"
    },
    {
      icon: FaCode,
      title: "Beyond Prompt Engineering",
      description: "Real prompt engineering involves understanding, architecting, deploying - not just ChatGPT",
      color: "#8B5CF6"
    },
    {
      icon: FaLightbulb,
      title: "Original Thinking + AI",
      description: "Using AI for amplification, not replacement. Ideas and architecture remain under my control",
      color: "#F59E0B"
    }
  ];

  const philosophy = [
    {
      title: "Self-Taught Research Mindset",
      description: "Everything I know is self-learned through long research and 'want to learn' mindset",
      icon: FaGraduationCap,
      stats: "15+ Technologies mastered independently"
    },
    {
      title: "Learn by Building",
      description: "I learn as I build projects - gaining experience and conceptual knowledge simultaneously",
      icon: FaCog,
      stats: "6+ Projects built while learning"
    },
    {
      title: "AI Leverage Strategy",
      description: "I use AI to stay ahead of those who think prompt engineering is just ChatGPT",
      icon: FaBrain,
      stats: "10x faster execution with AI amplification"
    },
    {
      title: "Build Anything Mindset",
      description: "Can easily build webapps, tools, solutions, systems, apps - with right motivation",
      icon: FaRocket,
      stats: "100% project completion rate"
    }
  ];

  const contributionGoals = [
    {
      area: "AI Systems & Agents",
      goal: "Contribute to advancing AI agent capabilities and multi-agent systems",
      timeline: "Next 2-3 years",
      impact: "Help push towards AGI development"
    },
    {
      area: "AI-Native Companies",
      goal: "Build and improve companies that are AI-first in their approach",
      timeline: "Ongoing",
      impact: "Transform how businesses operate with AI"
    },
    {
      area: "Product Innovation",
      goal: "Create products that seamlessly integrate AI into daily workflows",
      timeline: "Current focus",
      impact: "Make AI productivity accessible to everyone"
    },
    {
      area: "AI Education",
      goal: "Show the difference between real AI engineering and surface-level usage",
      timeline: "Through building in public",
      impact: "Elevate industry standards for AI development"
    }
  ];

  const tabs = [
    { id: 'vision', label: 'Vision & Goals', icon: FaBrain },
    { id: 'philosophy', label: 'Building Philosophy', icon: FaLightbulb },
    { id: 'contribution', label: 'Future Contributions', icon: FaGlobe }
  ];

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
          <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            Vision & Impact
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto">
            My approach to building the AI-native future through 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-semibold">
              {" "}original thinking, rapid execution, and meaningful contributions
            </span>
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <tab.icon className="text-sm" />
              {tab.label}
            </motion.button>
          ))}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'vision' && (
            <motion.div
              key="vision"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid md:grid-cols-2 gap-8">
                {visionPillars.map((pillar, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div 
                        className="p-3 rounded-lg"
                        style={{ backgroundColor: `${pillar.color}20` }}
                      >
                        <pillar.icon 
                          className="text-2xl"
                          style={{ color: pillar.color }}
                        />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {pillar.title}
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {pillar.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'philosophy' && (
            <motion.div
              key="philosophy"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-6">
                {philosophy.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                        <item.icon className="text-xl text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            {item.title}
                          </h3>
                          <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900 px-3 py-1 rounded-full">
                            {item.stats}
                          </span>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Philosophy Quote */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-xl text-white text-center"
              >
                <blockquote className="text-xl italic mb-4">
                  "I don't wait to master tools. I master tools by building impossible things with them. 
                  AI doesn't replace my thinking - it amplifies it."
                </blockquote>
                <cite className="text-blue-200">— My core building philosophy</cite>
              </motion.div>
            </motion.div>
          )}

          {activeTab === 'contribution' && (
            <motion.div
              key="contribution"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-6">
                {contributionGoals.map((goal, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {goal.area}
                      </h3>
                      <span className="text-sm text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900 px-3 py-1 rounded-full">
                        {goal.timeline}
                      </span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                      {goal.goal}
                    </p>
                    <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                      <FaChartLine className="text-sm" />
                      <span className="text-sm font-semibold">Expected Impact: {goal.impact}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Call to Action */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-12 bg-gradient-to-r from-green-600 to-teal-600 p-8 rounded-xl text-white text-center"
              >
                <h3 className="text-2xl font-bold mb-4">Ready to Build the Future Together?</h3>
                <p className="text-xl mb-6 text-green-100">
                  I'm looking for opportunities to contribute to AI-first companies and revolutionary projects
                </p>
                <button 
                  onClick={() => setIsContactOverlayOpen(true)}
                  className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 mx-auto"
                >
                  Let's Connect <FaArrowRight />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Contact Overlay */}
      <ContactOverlay 
        isOpen={isContactOverlayOpen} 
        onClose={() => setIsContactOverlayOpen(false)} 
      />
    </section>
  );
};

export default VisionImpactSection;
