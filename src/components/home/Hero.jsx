import React, { useState, useEffect, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBrain, FaCode, FaLightbulb, FaChevronDown } from 'react-icons/fa';
import { ColorThemeContext } from '../../context/ColorThemeContext';

const Hero = () => {
  const [currentThought, setCurrentThought] = useState(0);
  const { currentColors } = useContext(ColorThemeContext);
  
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
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-10 sm:pt-16 md:pt-20">
      {/* Enhanced Animated Background with Refined Aesthetics */}
      <div className="absolute inset-0 bg-gray-50 dark:bg-gray-900">
        <div className="absolute top-1/4 -left-20 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-2/3 left-1/3 w-48 h-48 bg-green-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-yellow-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '6s' }}></div>
        
        {/* Subtle grid overlay for depth */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center">
        {/* Main Hero Content with Improved Layout */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full text-center"
        >
          
          
          
          
          {/* Dynamic Thought Display with Improved Animation */}
          <div className="h-16 mb-12 relative">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentThought}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8 }}
                className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 font-medium absolute left-0 right-0"
              >
                {thoughts[currentThought]}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Philosophy Statement with Enhanced Typography */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12"
          >
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              I build with tools, not just learn them.<br />
              With AI as my co-pilot, I master any domain on demand.
            </p>
          </motion.div>
{/* Primary Heading with Enhanced Spacing and Visibility */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 mt-8"
          >
            <h1 className="text-7xl md:text-9xl font-extrabold tracking-tight leading-tight md:leading-[7rem] drop-shadow-xl">
              <span className="text-gray-900 dark:text-white pr-4">Lokesh</span>
              <span
                className="inline-block mx-4 text-transparent bg-clip-text px-2 md:px-4"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${currentColors.primary}, ${currentColors.secondary})`,
                  filter: 'brightness(1.2)'
                }}
              >
                ×
              </span>
              <span
                className="text-transparent bg-clip-text pl-4"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${currentColors.secondary}, ${currentColors.primary})`,
                  filter: 'brightness(1.2)'
                }}
              >
                AI
              </span>
            </h1>
          </motion.div>

          {/* Professional Identity Badge moved below heading */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <div className="inline-flex items-center gap-x-3 px-6 py-3 rounded-full backdrop-blur-sm bg-white/5 border border-gray-200/20 dark:border-gray-700/20 shadow-xl shadow-gray-500/5">
              <span className="text-transparent bg-clip-text font-semibold text-lg md:text-xl"
                style={{ backgroundImage: `linear-gradient(135deg, ${currentColors.primary}, ${currentColors.secondary})` }}
              >AI Generalist</span>
              <span className="text-gray-400 dark:text-gray-500">|</span>
              <span className="text-gray-800 dark:text-gray-200 font-semibold text-lg md:text-xl">Builder of Anything</span>
              <span className="text-gray-400 dark:text-gray-500">|</span>
              <span className="text-transparent bg-clip-text font-semibold text-lg md:text-xl"
                style={{ backgroundImage: `linear-gradient(135deg, ${currentColors.secondary}, ${currentColors.primary})` }}
              >Prompt Architect</span>
            </div>
          </motion.div>
          {/* Refined Agent Icons with More Sophisticated Animation */}
          <motion.div 
            className="flex justify-center items-center gap-8 mb-14"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.div 
              className="flex flex-col items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-3 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-blue-500 opacity-90 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"></div>
                <FaBrain className="w-10 h-10 text-white relative z-10" />
              </div>
              <span className="text-sm font-semibold tracking-wide text-gray-800 dark:text-gray-200">GPT</span>
            </motion.div>
            
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 flex items-center justify-center mb-3">
                <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
              </div>
              <span className="text-xs font-medium text-gray-500">SYNERGY</span>
            </div>
            
            <motion.div 
              className="flex flex-col items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-3 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 opacity-90 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"></div>
                <FaCode className="w-10 h-10 text-white relative z-10" />
              </div>
              <span className="text-sm font-semibold tracking-wide text-gray-800 dark:text-gray-200">Copilot</span>
            </motion.div>
            
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 flex items-center justify-center mb-3">
                <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
              </div>
              <span className="text-xs font-medium text-gray-500">SYNERGY</span>
            </div>
            
            <motion.div 
              className="flex flex-col items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-3 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-indigo-500 opacity-90 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"></div>
                <FaLightbulb className="w-10 h-10 text-white relative z-10" />
              </div>
              <span className="text-sm font-semibold tracking-wide text-gray-800 dark:text-gray-200">Lokesh</span>
            </motion.div>
          </motion.div>

          {/* Modernized AI Generalist Mode Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mb-12"
          >
            <div className="inline-flex items-center gap-4 px-8 py-4 bg-black/5 dark:bg-white/5 border border-gray-200 dark:border-gray-800 rounded-xl backdrop-blur-md shadow-xl">
              <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse"></div>
              <span 
                className="text-base md:text-lg font-bold tracking-widest text-transparent bg-clip-text uppercase"
                style={{ backgroundImage: `linear-gradient(to right, ${currentColors.primary}, ${currentColors.secondary})` }}
              >
                AI Generalist Mode Activated
              </span>
              <div className="w-2.5 h-2.5 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </motion.div>

          {/* Enhanced CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-5 justify-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <motion.button 
              onClick={() => document.getElementById('live-projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-4 rounded-xl text-white font-semibold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              style={{ 
                background: `linear-gradient(135deg, ${currentColors.primary}, ${currentColors.secondary})` 
              }}
            >
              <span className="relative z-10">See Live Projects</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </motion.button>
            
            <motion.button 
              onClick={() => document.getElementById('challenge')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-4 rounded-xl font-semibold text-lg border-2 transition-all duration-300 relative overflow-hidden group"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              style={{ 
                borderColor: currentColors.primary,
                color: isDarkMode => isDarkMode ? '#fff' : '#333'
              }}
            >
              <span className="relative z-10">30-Day Challenge</span>
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                style={{ 
                  background: `linear-gradient(135deg, ${currentColors.primary}30, ${currentColors.secondary}30)` 
                }}
              ></div>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Elegant scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-0 right-0 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <motion.div 
          className="flex flex-col items-center cursor-pointer"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          whileHover={{ y: 5 }}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">Explore</span>
          <FaChevronDown className="text-gray-400 dark:text-gray-500" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
