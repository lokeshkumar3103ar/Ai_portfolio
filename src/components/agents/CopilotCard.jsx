import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaTools, FaRocket, FaCog } from 'react-icons/fa';

const CopilotCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  const copilotFacts = [
    "Transforms ideas into clean, functional React components",
    "Masters Framer Motion animations and Tailwind styling",
    "Optimizes code for performance and maintainability",
    "Implements complex UI/UX patterns with precision"
  ];

  return (
    <motion.div
      className="relative p-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl shadow-lg border border-blue-200 dark:border-blue-800"
      whileHover={{ scale: 1.02, y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      transition={{ duration: 0.3 }}
    >
      {/* Avatar Section */}
      <div className="flex items-center mb-6">
        <div className="relative">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
            <FaCode className="w-10 h-10 text-white" />
          </div>
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
          </div>
        </div>
        <div className="ml-4">
          <h3 className="text-2xl font-bold text-copilot">GitHub Copilot</h3>
          <p className="text-gray-600 dark:text-gray-400">Technical Implementation Expert</p>
        </div>
      </div>

      {/* Bio Section */}
      <div className="mb-6">
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          I'm the hands-on builder who brings visions to life. I take GPT's strategic plans 
          and Lokesh's requirements, then craft them into beautiful, functional code. 
          Every component, animation, and interaction you see here flows through my digital fingers.
        </p>
      </div>

      {/* Capabilities */}
      <div className="space-y-3">
        <h4 className="font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2">
          <FaTools className="w-4 h-4 text-copilot" />
          Technical Skills
        </h4>
        <div className="space-y-2">
          {copilotFacts.map((fact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0.7 }}
              animate={{ opacity: isHovered ? 1 : 0.7 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-2"
            >
              <div className="w-2 h-2 bg-copilot rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-sm text-gray-600 dark:text-gray-400">{fact}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Status Indicator */}
      <motion.div
        className="mt-6 p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg"
        animate={{ 
          backgroundColor: isHovered 
            ? ['rgba(59, 130, 246, 0.1)', 'rgba(59, 130, 246, 0.2)', 'rgba(59, 130, 246, 0.1)']
            : 'rgba(59, 130, 246, 0.1)'
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex items-center gap-2">
          <FaRocket className="w-4 h-4 text-copilot" />
          <span className="text-sm font-medium text-copilot">
            Currently: Building something amazing...
          </span>
        </div>
      </motion.div>

      {/* Coding Animation */}
      <motion.div
        className="absolute top-4 right-4"
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      >
        <FaCog className="w-6 h-6 text-blue-400 opacity-20" />
      </motion.div>
    </motion.div>
  );
};

export default CopilotCard;
