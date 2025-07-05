import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCopy, FaExpand, FaRocket, FaLightbulb, FaCog, FaTimes, FaCode, FaPlay, FaClipboard, FaBrain } from "react-icons/fa";

const PromptCard = ({ framework, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [showCopyFeedback, setShowCopyFeedback] = useState(false);
  const [copyType, setCopyType] = useState('');

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const handleCopyFramework = () => {
    const frameworkText = `${framework.name} Framework

${framework.description}

Phase Structure: ${framework.phase}
Impact: ${framework.impact}

Use Cases:
${framework.useCases.map(useCase => `• ${useCase}`).join('\n')}

Generated from Lokesh's Co-Creationverse`;
    
    navigator.clipboard.writeText(frameworkText);
    setCopyType('framework');
    setShowCopyFeedback(true);
    setTimeout(() => setShowCopyFeedback(false), 2000);
  };

  const handleCopyTemplate = () => {
    navigator.clipboard.writeText(framework.template);
    setCopyType('template');
    setShowCopyFeedback(true);
    setTimeout(() => setShowCopyFeedback(false), 2000);
  };

  const handleCopyMemoryCapsule = () => {
    const memoryCapsule = `— START MEMORY CAPSULE —

TINE → Trigger with \`****\`  
SUPREME CODE → Trigger with \`SUPREME CODE\`  
IT DOC → Trigger with \`IT DOC\`

Each follows a 5-step process for reasoning, system design, and developer prompt simulation.

Use:  
"**** Help me refine this answer."  
"SUPREME CODE Build a system for automatic resume scoring."  
"IT DOC Create a prompt that summarizes a PDF into key bullet points."

— END MEMORY CAPSULE —`;
    
    navigator.clipboard.writeText(memoryCapsule);
    setCopyType('memory');
    setShowCopyFeedback(true);
    setTimeout(() => setShowCopyFeedback(false), 2000);
  };

  return (
    <>
      <motion.div
        variants={cardVariants}
        className="relative p-8 rounded-2xl shadow-xl backdrop-blur-sm border-2 bg-white/80 dark:bg-gray-800/80 hover:bg-white/90 dark:hover:bg-gray-800/90 transition-all duration-300 cursor-pointer group"
        style={{ 
          borderColor: framework.color,
          boxShadow: isHovered ? `0 20px 40px ${framework.color}20` : undefined 
        }}
        whileHover={{ 
          scale: 1.05, 
          y: -10,
          transition: { duration: 0.3 }
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onClick={() => setShowDetails(true)}
      >
        {/* Background Pattern */}
        <div 
          className="absolute inset-0 opacity-5 rounded-2xl"
          style={{
            background: `radial-gradient(circle at 20% 50%, ${framework.color} 0%, transparent 50%),
                        radial-gradient(circle at 80% 20%, ${framework.color} 0%, transparent 50%),
                        radial-gradient(circle at 40% 80%, ${framework.color} 0%, transparent 50%)`
          }}
        />

        {/* Header */}
        <div className="relative z-10 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="text-4xl">{framework.icon}</div>
            <div className="flex items-center gap-2">
              <div className="px-2 py-1 bg-black/10 dark:bg-white/10 rounded text-xs font-mono">
                {framework.triggerPhrase}
              </div>
              <motion.div
                animate={{ rotate: isHovered ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <FaCog className="w-5 h-5 opacity-30" style={{ color: framework.color }} />
              </motion.div>
            </div>
          </div>
          
          <h3 className="text-3xl font-bold mb-2" style={{ color: framework.color }}>
            {framework.name}
          </h3>
          <p className="text-sm italic text-gray-500 dark:text-gray-400 mb-2">
            {framework.fullName}
          </p>
          <div className="text-xs text-gray-400 dark:text-gray-500 font-mono">
            {framework.phase}
          </div>
        </div>

        {/* Description */}
        <div className="relative z-10 mb-6">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            {framework.description}
          </p>
          
          {/* Impact Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium"
               style={{ 
                 backgroundColor: `${framework.color}15`,
                 color: framework.color 
               }}>
            <FaRocket className="w-3 h-3" />
            {framework.impact}
          </div>
        </div>

        {/* Use Cases */}
        <div className="relative z-10 mb-6">
          <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3 flex items-center gap-2">
            <FaLightbulb className="w-3 h-3" />
            Primary Applications
          </h4>
          <div className="space-y-2">
            {framework.useCases.map((useCase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + (i * 0.1) }}
                className="flex items-center gap-2"
              >
                <div 
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ backgroundColor: framework.color }}
                />
                <span className="text-sm text-gray-600 dark:text-gray-400">{useCase}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="relative z-10 flex items-center gap-3">
          <motion.button
            onClick={(e) => {
              e.stopPropagation();
              handleCopyFramework();
            }}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative"
            style={{ 
              backgroundColor: `${framework.color}15`,
              color: framework.color 
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaCopy className="w-3 h-3" />
            {showCopyFeedback && copyType === 'framework' ? 'Copied!' : 'Copy'}
          </motion.button>
          
          <motion.button
            onClick={(e) => {
              e.stopPropagation();
              setShowDetails(true);
            }}
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaExpand className="w-3 h-3" />
            Details
          </motion.button>
        </div>

        {/* Hover Indicator */}
        <motion.div
          className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
          initial={{ scale: 0 }}
          animate={{ scale: isHovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <div 
            className="w-3 h-3 rounded-full animate-pulse"
            style={{ backgroundColor: framework.color }}
          />
        </motion.div>
      </motion.div>

      {/* Detailed Modal */}
      <AnimatePresence>
        {showDetails && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowDetails(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div className="text-6xl">{framework.icon}</div>
                    <div>
                      <h3 className="text-3xl font-bold mb-2" style={{ color: framework.color }}>
                        {framework.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-lg">
                        {framework.fullName}
                      </p>
                      <div className="flex items-center gap-3 mt-2">
                        <div className="px-3 py-1 bg-black/10 dark:bg-white/10 rounded-lg text-sm font-mono">
                          Trigger: {framework.triggerPhrase}
                        </div>
                        <div 
                          className="px-3 py-1 rounded-lg text-sm font-medium"
                          style={{ 
                            backgroundColor: `${framework.color}15`,
                            color: framework.color 
                          }}
                        >
                          {framework.impact}
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowDetails(false)}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                  >
                    <FaTimes className="w-5 h-5" />
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Left Column: Structure & Features */}
                  <div className="space-y-6">
                    {/* Structure */}
                    <div>
                      <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                        <FaCog className="w-5 h-5" style={{ color: framework.color }} />
                        5-Step Structure
                      </h4>
                      <div className="space-y-3">
                        {framework.structure.map((step, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <div 
                              className="w-6 h-6 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5"
                              style={{ backgroundColor: framework.color }}
                            >
                              {i + 1}
                            </div>
                            <span className="text-gray-700 dark:text-gray-300">{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div>
                      <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                        <FaLightbulb className="w-5 h-5" style={{ color: framework.color }} />
                        Key Features
                      </h4>
                      <div className="space-y-2">
                        {framework.features.map((feature, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <div 
                              className="w-2 h-2 rounded-full flex-shrink-0 mt-2"
                              style={{ backgroundColor: framework.color }}
                            />
                            <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Use Cases */}
                    <div>
                      <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                        <FaPlay className="w-5 h-5" style={{ color: framework.color }} />
                        Use Cases
                      </h4>
                      <div className="space-y-2">
                        {framework.useCases.map((useCase, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <div 
                              className="w-2 h-2 rounded-full flex-shrink-0 mt-2"
                              style={{ backgroundColor: framework.color }}
                            />
                            <span className="text-gray-700 dark:text-gray-300">{useCase}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Template */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-xl font-semibold flex items-center gap-2">
                        <FaCode className="w-5 h-5" style={{ color: framework.color }} />
                        Prompt Template
                      </h4>
                      <motion.button
                        onClick={handleCopyTemplate}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                        style={{ 
                          backgroundColor: `${framework.color}15`,
                          color: framework.color 
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaClipboard className="w-4 h-4" />
                        {showCopyFeedback && copyType === 'template' ? 'Copied!' : 'Copy Template'}
                      </motion.button>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 font-mono text-sm">
                      <pre className="whitespace-pre-wrap text-gray-800 dark:text-gray-200 leading-relaxed">
                        {framework.template}
                      </pre>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-center gap-4 mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <motion.button
                    onClick={handleCopyMemoryCapsule}
                    className="flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200"
                    style={{ 
                      backgroundColor: framework.color,
                      color: 'white'
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaBrain className="w-4 h-4" />
                    {showCopyFeedback && copyType === 'memory' ? 'Memory Capsule Copied!' : 'Copy Memory Capsule'}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PromptCard;
