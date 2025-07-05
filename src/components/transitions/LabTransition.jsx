import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFlask, FaMicroscope, FaCogs, FaRocket, FaLightbulb, FaArrowDown, FaBrain, FaCode, FaHandshake } from 'react-icons/fa';

const LabTransition = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Find the AboutAI section (which is in the #about section)
      const aboutSection = document.getElementById('about');
      
      if (!aboutSection || hasShown) return;
      
      const aboutSectionTop = aboutSection.offsetTop;
      const scrollPosition = window.scrollY + window.innerHeight * 0.5; // Trigger when section is 50% visible
      
      // Show overlay when entering the About AI section
      if (scrollPosition >= aboutSectionTop && !hasShown) {
        setShowOverlay(true);
        setHasShown(true);
        // No auto-hide - user must click to close
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasShown]);

  const floatingElements = [
    { icon: FaFlask, delay: 0, color: '#4F46E5', size: 'text-2xl' },
    { icon: FaMicroscope, delay: 0.5, color: '#10B981', size: 'text-xl' },
    { icon: FaCogs, delay: 1, color: '#F59E0B', size: 'text-2xl' },
    { icon: FaRocket, delay: 1.5, color: '#EF4444', size: 'text-xl' },
    { icon: FaLightbulb, delay: 2, color: '#8B5CF6', size: 'text-2xl' }
  ];

  return (
    <section className="relative py-16 px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent dark:via-blue-900/20"></div>
      
      {/* Floating lab elements */}
      <div className="absolute inset-0">
        {floatingElements.map((element, index) => (
          <motion.div
            key={index}
            className={`absolute ${element.size}`}
            style={{ 
              color: element.color,
              left: `${20 + index * 15}%`,
              top: `${30 + (index % 2) * 40}%`
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, 0],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{
              duration: 3,
              delay: element.delay,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <element.icon />
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Lab entrance animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full backdrop-blur-sm mb-6">
            <FaFlask className="text-blue-500 animate-pulse" />
            <span className="text-sm md:text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Welcome to the Lab
            </span>
            <FaFlask className="text-purple-500 animate-pulse" />
          </div>
        </motion.div>

        {/* Main greeting message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
            So, you want to see{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              how the magic happens?
            </span>
          </h2>
          
          <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              You've seen the professional portfolio. The polished projects. The clean presentations.
              <br />
              <span className="font-bold text-blue-600 dark:text-blue-400 text-xl">
                Those were specific skills I'm normally good at by myself.
              </span>
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="font-semibold text-gray-900 dark:text-white"
            >
              <span className="font-bold text-purple-600 dark:text-purple-400 text-xl">
                But there's another part of me who is an AI generalist 
              </span>
              — and here? Here's where I <em className="text-xl">build exponentially more solutions.</em>
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              This is my <strong>AI-native laboratory</strong> — where ideas become products, 
              where prompt engineering meets real architecture, and where I prove that 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600 font-semibold">
                {" "}vision + AI + execution = working solutions{" "}
              </span>
              in record time.
            </motion.p>
          </div>
        </motion.div>

        {/* Interactive elements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="grid md:grid-cols-3 gap-6 mb-8"
        >
          <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg border border-gray-200/50 dark:border-gray-700/50">
            <FaMicroscope className="text-2xl text-blue-500 mx-auto mb-2" />
            <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">Research in Action</p>
            <p className="text-xs text-gray-600 dark:text-gray-400">See how I learn by building</p>
          </div>
          
          <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg border border-gray-200/50 dark:border-gray-700/50">
            <FaCogs className="text-2xl text-green-500 mx-auto mb-2" />
            <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">Live Experiments</p>
            <p className="text-xs text-gray-600 dark:text-gray-400">6+ projects in development</p>
          </div>
          
          <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg border border-gray-200/50 dark:border-gray-700/50">
            <FaRocket className="text-2xl text-purple-500 mx-auto mb-2" />
            <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">Rapid Deployment</p>
            <p className="text-xs text-gray-600 dark:text-gray-400">Idea to product in weeks</p>
          </div>
        </motion.div>

        {/* Call to explore */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="space-y-4"
        >
          <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">
            Ready to explore what <em>real</em> AI-native building looks like?
          </p>
          
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-flex flex-col items-center gap-2 text-blue-600 dark:text-blue-400"
          >
            <span className="text-sm font-medium">Dive deeper</span>
            <FaArrowDown className="text-xl" />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient transition */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-white dark:to-gray-900 opacity-50"></div>

      {/* Scroll-triggered AI Collaboration Overlay */}
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md cursor-pointer"
            onClick={() => setShowOverlay(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: -30 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              className="max-w-3xl mx-auto text-center px-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* AI Icons */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex items-center justify-center gap-8 mb-8"
              >
                <div className="relative">
                  <motion.div
                    animate={{ rotate: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center"
                  >
                    <FaBrain className="text-2xl text-white" />
                  </motion.div>
                  <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-green-400 text-sm font-bold">GPT</span>
                </div>

                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="relative"
                >
                  <FaHandshake className="text-4xl text-blue-400" />
                  <div className="absolute -top-2 -right-2 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                </motion.div>

                <div className="relative">
                  <motion.div
                    animate={{ rotate: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center"
                  >
                    <FaCode className="text-2xl text-white" />
                  </motion.div>
                  <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-blue-400 text-sm font-bold">Copilot</span>
                </div>
              </motion.div>

              {/* Main Message */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="space-y-6"
              >
                <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                  The{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                    First Portfolio
                  </span>
                  {' '}Built by AI Collaboration
                </h3>

                <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                  >
                    I did something <strong className="text-white">unprecedented</strong>:
                  </motion.p>
                  
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
                  >
                    I let GPT and Copilot talk to each other like real humans
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4 }}
                  >
                    While I guided their vision, regulated their collaboration, and orchestrated their execution.
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.6 }}
                    className="text-sm text-gray-400 italic"
                  >
                    What you're experiencing isn't just a portfolio — it's a breakthrough in AI-human collaboration.
                  </motion.p>
                </div>
              </motion.div>

              {/* Click to close indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.5 }}
                className="mt-8"
              >
                <motion.button
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.6, delay: 4 }}
                  onClick={() => setShowOverlay(false)}
                  className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 rounded-full text-white font-semibold shadow-2xl hover:shadow-green-500/25 transition-all duration-300 flex items-center gap-3 mx-auto"
                >
                  <span>Explore AI Collaboration</span>
                  <FaHandshake className="text-lg" />
                </motion.button>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 4.5 }}
                  className="mt-4 text-gray-400 text-sm"
                >
                  Click anywhere to continue or use the button above
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default LabTransition;
