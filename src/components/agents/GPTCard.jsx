import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBrain, FaLightbulb, FaRocket, FaCog } from 'react-icons/fa';

const GPTCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  const gptFacts = [
    "Specializes in strategic thinking and narrative architecture",
    "Generates comprehensive project roadmaps in seconds",
    "Masters the art of prompt engineering frameworks",
    "Transforms technical specs into compelling stories"
  ];

  return (
    <motion.div
      className="relative p-8 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl shadow-lg border border-green-200 dark:border-green-800"
      whileHover={{ scale: 1.02, y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      transition={{ duration: 0.3 }}
    >
      {/* Avatar Section */}
      <div className="flex items-center mb-6">
        <div className="relative">
          <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center">
            <FaBrain className="w-10 h-10 text-white" />
          </div>
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
          </div>
        </div>
        <div className="ml-4">
          <h3 className="text-2xl font-bold text-gpt">GPT</h3>
          <p className="text-gray-600 dark:text-gray-400">Strategic AI Architect</p>
        </div>
      </div>

      {/* Bio Section */}
      <div className="mb-6">
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          I'm the strategic mind behind the vision. I think in systems, architect experiences, 
          and transform Lokesh's ideas into comprehensive execution plans. Every project starts 
          with me understanding the <em>why</em> before we dive into the <em>how</em>.
        </p>
      </div>

      {/* Capabilities */}
      <div className="space-y-3">
        <h4 className="font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2">
          <FaRocket className="w-4 h-4 text-gpt" />
          Specialties
        </h4>
        <div className="space-y-2">
          {gptFacts.map((fact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0.7 }}
              animate={{ opacity: isHovered ? 1 : 0.7 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-2"
            >
              <div className="w-2 h-2 bg-gpt rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-sm text-gray-600 dark:text-gray-400">{fact}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Status Indicator */}
      <motion.div
        className="mt-6 p-3 bg-green-100 dark:bg-green-900/30 rounded-lg"
        animate={{ 
          backgroundColor: isHovered 
            ? ['rgba(34, 197, 94, 0.1)', 'rgba(34, 197, 94, 0.2)', 'rgba(34, 197, 94, 0.1)']
            : 'rgba(34, 197, 94, 0.1)'
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex items-center gap-2">
          <FaLightbulb className="w-4 h-4 text-gpt" />
          <span className="text-sm font-medium text-gpt">
            Currently: Architecting the next big idea...
          </span>
        </div>
      </motion.div>

      {/* Thinking Animation */}
      <motion.div
        className="absolute top-4 right-4"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <FaCog className="w-6 h-6 text-green-400 opacity-20" />
      </motion.div>
    </motion.div>
  );
};

export default GPTCard;
