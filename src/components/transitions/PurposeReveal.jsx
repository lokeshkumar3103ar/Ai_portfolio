import React, { useState, useEffect, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ColorThemeContext } from '../../context/ColorThemeContext';
import { ThemeContext } from '../../context/ThemeContext';
import { FaFlask, FaRocket, FaCog, FaBrain, FaLightbulb, FaArrowRight, FaProjectDiagram, FaTools, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const PurposeReveal = ({ onComplete }) => {
  const { currentColors } = useContext(ColorThemeContext);
  const { isDarkMode } = useContext(ThemeContext);
  const [currentPhase, setCurrentPhase] = useState('intro'); // intro, purpose, systems, frameworks, execution, experiments, complete
  const [isExiting, setIsExiting] = useState(false);
  const [autoPlayCompleted, setAutoPlayCompleted] = useState(false);

  const phases = ['intro', 'purpose', 'systems', 'frameworks', 'execution', 'experiments', 'complete'];
  const currentPhaseIndex = phases.indexOf(currentPhase);

  useEffect(() => {
    if (!autoPlayCompleted) {
      const timer1 = setTimeout(() => setCurrentPhase('purpose'), 4000);
      const timer2 = setTimeout(() => setCurrentPhase('systems'), 8500);
      const timer3 = setTimeout(() => setCurrentPhase('frameworks'), 12500);
      const timer4 = setTimeout(() => setCurrentPhase('execution'), 16500);
      const timer5 = setTimeout(() => setCurrentPhase('experiments'), 20500);
      const timer6 = setTimeout(() => {
        setCurrentPhase('complete');
        setAutoPlayCompleted(true);
      }, 24500);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
        clearTimeout(timer4);
        clearTimeout(timer5);
        clearTimeout(timer6);
      };
    }
  }, [autoPlayCompleted]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (!autoPlayCompleted) return; // Only allow keyboard navigation after autoplay
      
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        goToPreviousPhase();
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        goToNextPhase();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [autoPlayCompleted, currentPhaseIndex]);

  const handleEnterLab = () => {
    setIsExiting(true);
    setTimeout(onComplete, 1000);
  };

  const goToPreviousPhase = () => {
    if (currentPhaseIndex > 0) {
      setCurrentPhase(phases[currentPhaseIndex - 1]);
    }
  };

  const goToNextPhase = () => {
    if (currentPhaseIndex < phases.length - 1) {
      setCurrentPhase(phases[currentPhaseIndex + 1]);
    }
  };

  const containerVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.8 } },
    exit: { 
      opacity: 0,
      scale: 0.95,
      filter: 'blur(20px)',
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const purposeData = [
    {
      icon: FaBrain,
      title: "AI Generalist Mindset",
      description: "From prompt frameworks to product logic — I design, scale, and deliver across any domain with AI as my weapon of choice."
    },
    {
      icon: FaProjectDiagram,
      title: "Systems I've Architected",
      description: "Real-world solutions I've built — from identity evaluators to intelligent verification systems — all guided by my frameworks and AI orchestration."
    },
    {
      icon: FaTools,
      title: "Frameworks That Power Me",
      description: "Explore SUPREME CODE, TINE, and IT DOC — my original prompt frameworks engineered for high-speed execution and cognitive scaling."
    },
    {
      icon: FaRocket,
      title: "Build → Deploy → Loop",
      description: "I don't wait to learn the stack. I build. I test. I deploy. And I repeat — faster than most plan their wireframes."
    }
  ];

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          variants={containerVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {/* Dynamic Background */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: isDarkMode 
                ? `radial-gradient(ellipse at center, ${currentColors.primary}10 0%, #0f172a 40%, #020617 100%)`
                : `radial-gradient(ellipse at center, ${currentColors.primary}05 0%, #ffffff 40%, #f8fafc 100%)`
            }}
          />

          {/* Floating Particles - Hidden on complete phase */}
          {currentPhase !== 'complete' && (
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(40)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 rounded-full"
                  style={{
                    backgroundColor: i % 3 === 0 ? currentColors.primary : 
                                     i % 3 === 1 ? currentColors.secondary : 
                                     '#10b981',
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    opacity: [0, 0.6, 0],
                    scale: [0, 1.5, 0],
                    y: [0, -200 - Math.random() * 100],
                    x: [0, (Math.random() - 0.5) * 100]
                  }}
                  transition={{
                    duration: 4 + Math.random() * 3,
                    repeat: Infinity,
                    delay: Math.random() * 4,
                    ease: "easeOut"
                  }}
                />
              ))}
            </div>
          )}

          {/* Main Content */}
          <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
            
            {/* Intro Phase */}
            <AnimatePresence mode="wait">
              {currentPhase === 'intro' && (
                <motion.div
                  key="intro"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <motion.div
                    className="inline-flex items-center gap-3 mb-8 px-6 py-3 rounded-full"
                    style={{
                      background: `linear-gradient(135deg, ${currentColors.primary}20, ${currentColors.secondary}15)`,
                      border: `1px solid ${currentColors.primary}30`
                    }}
                  >
                    <motion.div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: currentColors.primary }}
                      animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <span className="text-lg font-medium text-gray-800 dark:text-gray-200">
                      Enter Lokesh's AI Laboratory
                    </span>
                  </motion.div>

                  <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
                    AI Generalist · Builder of Anything
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed">
                    Where prompt architecture meets real-world execution
                  </p>
                </motion.div>
              )}

              {/* Purpose Phase */}
              {currentPhase === 'purpose' && (
                <motion.div
                  key="purpose"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <motion.div
                    className="inline-flex items-center gap-2 mb-8"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    <FaLightbulb 
                      className="w-8 h-8" 
                      style={{ color: currentColors.secondary }}
                    />
                    <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                      THE METHODOLOGY
                    </span>
                  </motion.div>

                  <h2 className="text-3xl md:text-5xl font-bold mb-8 text-gray-900 dark:text-white">
                    First GPT-Copilot Direct Communication
                  </h2>
                  <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-4xl mx-auto">
                    I pioneered direct AI-to-AI collaboration, enabling GPT and Copilot to work together seamlessly. 
                    This portfolio showcases my original frameworks, real-world systems, and the rapid execution 
                    philosophy that sets me apart in the AI space.
                  </p>
                </motion.div>
              )}

              {/* Systems Phase */}
              {currentPhase === 'systems' && (
                <motion.div
                  key="systems"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <motion.div
                    className="inline-flex items-center gap-3 mb-8"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    <div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center"
                      style={{
                        background: `linear-gradient(135deg, ${currentColors.primary}, ${currentColors.secondary})`
                      }}
                    >
                      <FaProjectDiagram className="w-6 h-6 text-white" />
                    </div>
                  </motion.div>

                  <h2 className="text-3xl md:text-5xl font-bold mb-8 text-gray-900 dark:text-white">
                    Systems I've Architected
                  </h2>
                  <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-4xl mx-auto">
                    Real-world solutions I've built — from identity evaluators to intelligent verification systems — all guided by my frameworks and AI orchestration.
                  </p>
                </motion.div>
              )}

              {/* Frameworks Phase */}
              {currentPhase === 'frameworks' && (
                <motion.div
                  key="frameworks"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <motion.div
                    className="inline-flex items-center gap-3 mb-8"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    <div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center"
                      style={{
                        background: `linear-gradient(135deg, ${currentColors.primary}, ${currentColors.secondary})`
                      }}
                    >
                      <FaTools className="w-6 h-6 text-white" />
                    </div>
                  </motion.div>

                  <h2 className="text-3xl md:text-5xl font-bold mb-8 text-gray-900 dark:text-white">
                    Frameworks That Power Me
                  </h2>
                  <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-4xl mx-auto">
                    Explore SUPREME CODE, TINE, and IT DOC — my original prompt frameworks engineered for high-speed execution and cognitive scaling.
                  </p>
                </motion.div>
              )}

              {/* Execution Phase */}
              {currentPhase === 'execution' && (
                <motion.div
                  key="execution"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <motion.div
                    className="inline-flex items-center gap-3 mb-8"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    <div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center"
                      style={{
                        background: `linear-gradient(135deg, ${currentColors.primary}, ${currentColors.secondary})`
                      }}
                    >
                      <FaRocket className="w-6 h-6 text-white" />
                    </div>
                  </motion.div>

                  <h2 className="text-3xl md:text-5xl font-bold mb-8 text-gray-900 dark:text-white">
                    Build → Deploy → Loop
                  </h2>
                  <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-4xl mx-auto">
                    I don't wait to learn the stack. I build. I test. I deploy. And I repeat — faster than most plan their wireframes.
                  </p>
                </motion.div>
              )}

              {/* Experiments Phase */}
              {currentPhase === 'experiments' && (
                <motion.div
                  key="experiments"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <motion.div
                    className="mb-8"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8 }}
                  >
                    <h2 className="text-2xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                      🚀 What You'll Discover
                    </h2>
                  </motion.div>

                  <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {purposeData.map((item, index) => (
                      <motion.div
                        key={index}
                        className="p-6 rounded-xl bg-white/10 dark:bg-gray-800/30 backdrop-blur-sm border border-white/20 dark:border-gray-700/30"
                        initial={{ opacity: 0, y: 30, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ 
                          duration: 0.6, 
                          delay: index * 0.1 + 0.3,
                          ease: [0.16, 1, 0.3, 1]
                        }}
                      >
                        <div className="flex items-start gap-4">
                          <div 
                            className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                            style={{
                              background: `linear-gradient(135deg, ${currentColors.primary}, ${currentColors.secondary})`
                            }}
                          >
                            <item.icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="text-left">
                            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                              {item.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Complete Phase */}
              {currentPhase === 'complete' && (
                <motion.div
                  key="complete"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <motion.div
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-full cursor-pointer relative z-20"
                    style={{
                      background: `linear-gradient(135deg, ${currentColors.primary}, ${currentColors.secondary})`,
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleEnterLab}
                  >
                    <span className="text-white font-semibold text-lg">
                      Enter the Laboratory
                    </span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <FaArrowRight className="w-5 h-5 text-white" />
                    </motion.div>
                  </motion.div>

                  <p className="text-gray-500 dark:text-gray-400 mt-4 text-sm relative z-20">
                    Preparing your AI experience...
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Floating Keywords Background - Full Viewport Coverage */}
          {currentPhase === 'complete' && (
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-[1]">
              {/* Neural Network Connections */}
              <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
                {/* Connection lines between keywords */}
                {[
                  // Primary horizontal connections
                  { from: { x: 8, y: 5 }, to: { x: 75, y: 8 } },
                  { from: { x: 15, y: 15 }, to: { x: 65, y: 18 } },
                  { from: { x: 5, y: 25 }, to: { x: 85, y: 28 } },
                  { from: { x: 25, y: 35 }, to: { x: 55, y: 38 } },
                  { from: { x: 10, y: 45 }, to: { x: 80, y: 48 } },
                  { from: { x: 35, y: 55 }, to: { x: 70, y: 58 } },
                  { from: { x: 12, y: 65 }, to: { x: 60, y: 68 } },
                  { from: { x: 20, y: 75 }, to: { x: 75, y: 78 } },
                  { from: { x: 5, y: 85 }, to: { x: 45, y: 88 } },
                  
                  // Vertical connections for structure
                  { from: { x: 8, y: 5 }, to: { x: 15, y: 15 } },
                  { from: { x: 15, y: 15 }, to: { x: 25, y: 35 } },
                  { from: { x: 25, y: 35 }, to: { x: 35, y: 55 } },
                  { from: { x: 35, y: 55 }, to: { x: 20, y: 75 } },
                  { from: { x: 75, y: 8 }, to: { x: 65, y: 18 } },
                  { from: { x: 65, y: 18 }, to: { x: 55, y: 38 } },
                  { from: { x: 55, y: 38 }, to: { x: 70, y: 58 } },
                  { from: { x: 70, y: 58 }, to: { x: 75, y: 78 } },
                  
                  // Diagonal connections for network effect
                  { from: { x: 8, y: 5 }, to: { x: 65, y: 18 } },
                  { from: { x: 15, y: 15 }, to: { x: 80, y: 48 } },
                  { from: { x: 25, y: 35 }, to: { x: 70, y: 58 } },
                  { from: { x: 35, y: 55 }, to: { x: 75, y: 78 } },
                  { from: { x: 90, y: 12 }, to: { x: 40, y: 25 } },
                  { from: { x: 92, y: 35 }, to: { x: 22, y: 82 } },
                  { from: { x: 58, y: 15 }, to: { x: 18, y: 48 } },
                  { from: { x: 50, y: 72 }, to: { x: 85, y: 92 } }
                ].map((connection, index) => (
                  <motion.line
                    key={index}
                    x1={`${connection.from.x}vw`}
                    y1={`${connection.from.y}vh`}
                    x2={`${connection.to.x}vw`}
                    y2={`${connection.to.y}vh`}
                    stroke={currentColors.primary}
                    strokeWidth="1"
                    strokeOpacity="0.3"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ 
                      pathLength: [0, 1], 
                      opacity: [0, 0.4, 0.3] 
                    }}
                    transition={{
                      duration: 3 + index * 0.1,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: index * 0.1,
                      ease: "easeInOut"
                    }}
                  />
                ))}
                
                {/* Connection nodes/dots at intersections */}
                {[
                  { x: 8, y: 5 }, { x: 75, y: 8 }, { x: 15, y: 15 }, { x: 65, y: 18 },
                  { x: 5, y: 25 }, { x: 85, y: 28 }, { x: 25, y: 35 }, { x: 55, y: 38 },
                  { x: 10, y: 45 }, { x: 80, y: 48 }, { x: 35, y: 55 }, { x: 70, y: 58 },
                  { x: 12, y: 65 }, { x: 60, y: 68 }, { x: 20, y: 75 }, { x: 75, y: 78 },
                  { x: 5, y: 85 }, { x: 45, y: 88 }, { x: 85, y: 92 }, { x: 90, y: 12 },
                  { x: 40, y: 25 }, { x: 18, y: 48 }, { x: 50, y: 72 }, { x: 28, y: 95 },
                  { x: 92, y: 35 }, { x: 22, y: 82 }, { x: 58, y: 15 }
                ].map((node, index) => (
                  <motion.circle
                    key={`node-${index}`}
                    cx={`${node.x}vw`}
                    cy={`${node.y}vh`}
                    r="2"
                    fill={currentColors.primary}
                    fillOpacity="0.6"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                      scale: [0, 1.2, 1], 
                      opacity: [0, 0.8, 0.6] 
                    }}
                    transition={{
                      duration: 2,
                      delay: index * 0.05,
                      ease: "easeOut"
                    }}
                  />
                ))}
              </svg>

              {/* Keywords */}
              {[
                'TINE', 'SUPREME CODE', 'MODEL CONTEXT PROTOCOL', 'LLM', 'NLP', 
                'GPT', 'OLLAMA', 'EDGE AI', 'OPENAI', 'CLAUDE', 'COPILOT',
                'MULTI AGENT SYSTEMS', 'ACP PROTOCOL', 'DOCKER',
                'Chain-of-Thought', 'LLM Operations', 'AI PIPELINES',
                'Transformers', 'FastAPI', 'PROMPT ENGINEERING', 'LLM INTEGRATION',
                'NEURAL NETWORKS', 'TRANSFORMER ARCH', 'ATTENTION MECHANISM',
                'AI ORCHESTRATION', 'COGNITIVE SCALING', 'REASONING SYSTEMS'
              ].map((keyword, index) => {
                // Better distributed positions with more spacing to prevent overlap
                const positions = [
                  { x: 8, y: 5 }, { x: 75, y: 8 }, { x: 15, y: 15 }, { x: 65, y: 18 },
                  { x: 5, y: 25 }, { x: 85, y: 28 }, { x: 25, y: 35 }, { x: 55, y: 38 },
                  { x: 10, y: 45 }, { x: 80, y: 48 }, { x: 35, y: 55 }, { x: 70, y: 58 },
                  { x: 12, y: 65 }, { x: 60, y: 68 }, { x: 20, y: 75 }, { x: 75, y: 78 },
                  { x: 5, y: 85 }, { x: 45, y: 88 }, { x: 85, y: 92 }, { x: 90, y: 12 },
                  { x: 40, y: 25 }, { x: 18, y: 48 }, { x: 50, y: 72 }, { x: 28, y: 95 },
                  { x: 92, y: 35 }, { x: 22, y: 82 }, { x: 58, y: 15 }
                ];
                
                const position = positions[index] || { 
                  x: 10 + (index * 15) % 70, 
                  y: 10 + (index * 8) % 80 
                };
                
                return (
                  <motion.div
                    key={keyword}
                    className="absolute font-bold select-none whitespace-nowrap"
                    style={{
                      fontSize: '1.3rem', // Uniform font size for all keywords
                      left: `${Math.min(Math.max(position.x, 1), 80)}vw`, // More space on edges
                      top: `${Math.min(Math.max(position.y, 3), 92)}vh`, // More space on edges
                      filter: 'blur(0.2px)',
                      fontWeight: '700',
                      color: isDarkMode 
                        ? `${currentColors.primary}` 
                        : `${currentColors.primary}`,
                      opacity: 0.22,
                      zIndex: -1
                    }}
                    animate={{
                      opacity: [0.15, 0.3, 0.15],
                      scale: [0.95, 1.05, 0.95],
                    }}
                    transition={{
                      duration: 10 + Math.random() * 4,
                      repeat: Infinity,
                      delay: index * 0.3,
                      ease: "easeInOut"
                    }}
                  >
                    {keyword}
                  </motion.div>
                );
              })}
            </div>
          )}

          {/* Progress Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="flex gap-2">
              {phases.map((phase, index) => (
                <motion.div
                  key={phase}
                  className={`w-2 h-2 rounded-full ${autoPlayCompleted ? 'cursor-pointer' : ''}`}
                  style={{
                    backgroundColor: currentPhase === phase || 
                      phases.indexOf(currentPhase) > index
                      ? currentColors.primary 
                      : '#d1d5db'
                  }}
                  animate={{
                    scale: currentPhase === phase ? 1.3 : 1
                  }}
                  transition={{ duration: 0.3 }}
                  onClick={autoPlayCompleted ? () => setCurrentPhase(phase) : undefined}
                  whileHover={autoPlayCompleted ? { scale: 1.2 } : {}}
                />
              ))}
            </div>
          </div>

          {/* Navigation Arrows - Only show after autoplay completes */}
          {autoPlayCompleted && (
            <>
              {/* Left Arrow */}
              {currentPhaseIndex > 0 && (
                <motion.button
                  className="absolute left-8 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20 dark:border-gray-700/30"
                  style={{
                    background: `linear-gradient(135deg, ${currentColors.primary}20, ${currentColors.secondary}15)`
                  }}
                  onClick={goToPreviousPhase}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaChevronLeft 
                    className="w-5 h-5" 
                    style={{ color: currentColors.primary }}
                  />
                </motion.button>
              )}

              {/* Right Arrow */}
              {currentPhaseIndex < phases.length - 1 && (
                <motion.button
                  className="absolute right-8 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20 dark:border-gray-700/30"
                  style={{
                    background: `linear-gradient(135deg, ${currentColors.primary}20, ${currentColors.secondary}15)`
                  }}
                  onClick={goToNextPhase}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaChevronRight 
                    className="w-5 h-5" 
                    style={{ color: currentColors.primary }}
                  />
                </motion.button>
              )}
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PurposeReveal;
