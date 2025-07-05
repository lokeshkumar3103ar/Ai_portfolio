import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBrain, FaRobot, FaCode, FaLightbulb } from 'react-icons/fa';

const Hero = () => {
  const [currentThought, setCurrentThought] = useState(0);
  
  const thoughts = [
    "I think fast. I build faster. I deliver results.",
    "Any domain, any system — I make it happen.",
    "AI amplifies my thinking. I amplify possibilities.",
    "From vision to execution in record time."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentThought((prev) => (prev + 1) % thoughts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-400/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-400/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-green-400/20 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Main Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gray-900 dark:text-white">Lokesh</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> × </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">AI</span>
          </h1>
          
          {/* AI Generalist Identity Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-8"
          >
            <p className="highlighted-role text-xl md:text-2xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">AI Generalist</span>
              <span className="text-gray-600 dark:text-gray-400 mx-2">·</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">Builder of Anything</span>
              <span className="text-gray-600 dark:text-gray-400 mx-2">·</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Prompt Architect</span>
            </p>
          </motion.div>
          
          <div className="h-16 mb-8">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentThought}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8 }}
                className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-medium"
              >
                {thoughts[currentThought]}
              </motion.p>
            </AnimatePresence>
          </div>

          <motion.p className="philosophy-caption text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            I don't wait to "learn" tools — I build with them.<br />
            With AI as my co-pilot, I can take on any domain, any system, and deliver it.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-semibold">
              Tools, stacks, and domains are variables — I master them on demand.
            </span>
          </motion.p>

          {/* Agent Icons */}
          <motion.div 
            className="flex justify-center items-center gap-8 mb-12"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center mb-2 animate-pulse">
                <FaBrain className="w-8 h-8 text-white" />
              </div>
              <span className="text-sm font-medium text-gpt">GPT</span>
            </div>
            
            <div className="text-4xl text-gray-400">⚡</div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center mb-2 animate-pulse" style={{ animationDelay: '1s' }}>
                <FaCode className="w-8 h-8 text-white" />
              </div>
              <span className="text-sm font-medium text-copilot">Copilot</span>
            </div>
            
            <div className="text-4xl text-gray-400">⚡</div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full flex items-center justify-center mb-2 animate-pulse" style={{ animationDelay: '2s' }}>
                <FaLightbulb className="w-8 h-8 text-white" />
              </div>
              <span className="text-sm font-medium text-lokesh">Lokesh</span>
            </div>
          </motion.div>

          {/* AI GENERALIST MODE ACTIVATED Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 rounded-full backdrop-blur-sm">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm md:text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                AI GENERALIST MODE ACTIVATED
              </span>
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <button 
              onClick={() => document.getElementById('live-projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              See Live Projects
            </button>
            <button 
              onClick={() => document.getElementById('challenge')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
            >
              30-Day Challenge
            </button>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
