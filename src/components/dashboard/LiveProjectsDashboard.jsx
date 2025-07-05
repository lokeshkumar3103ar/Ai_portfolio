import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBrain, FaRocket, FaCode, FaGamepad, FaGraduationCap, FaEye, FaLock, FaChartLine, FaClock, FaFire, FaLightbulb, FaCogs, FaArrowRight } from 'react-icons/fa';

const LiveProjectsDashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showContextOverlay, setShowContextOverlay] = useState(false);
  const [hasShownContextOverlay, setHasShownContextOverlay] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Find the Live Projects section
      const liveProjectsSection = document.getElementById('live-projects');
      
      if (!liveProjectsSection || hasShownContextOverlay) return;
      
      const sectionTop = liveProjectsSection.offsetTop;
      const scrollPosition = window.scrollY + window.innerHeight * 0.3; // Trigger when section is 30% visible
      
      // Show overlay when entering the Live Projects section
      if (scrollPosition >= sectionTop && !hasShownContextOverlay) {
        setShowContextOverlay(true);
        setHasShownContextOverlay(true);
        // No auto-hide - user must click to close
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasShownContextOverlay]);

  const projects = [
    {
      id: 'qritiq',
      name: 'QritiQ',
      status: 'Testing & Deployment',
      stage: 'University Implementation',
      priority: 'HIGH',
      icon: FaBrain,
      color: '#4F46E5',
      description: 'AI Self-Intro Evaluator - Already securing university investment',
      impact: '66% evaluation time reduction',
      timeframe: '8 weeks: Concept to University Deployment',
      category: 'AI Product',
      detailedDescription: 'QritiQ wasn\'t just a project — it was a response to a real institutional gap. Lokesh envisioned an AI system that could evaluate self-introductions like a human mentor, but at scale. Within 2 weeks, he architected the entire pipeline: from Whisper-based speech transcription, to Mistral 7B reasoning, to a Dockerized FastAPI backend with local LLM deployment. The system reduced manual evaluation time by 66%, secured financial investment from his university, and is now being prepared for cross-campus deployment.',
      techStack: ['Whisper', 'Mistral 7B', 'FastAPI', 'Docker', 'Ollama', 'SQLAlchemy'],
      keyFeatures: ['Whisper ASR + LLM reasoning', '80% cost reduction via local model deployment', 'Dockerized FastAPI backend', 'Secured university investment for scaling'],
      challenges: ['Local LLM optimization', 'Real-time speech processing', 'Cross-campus deployment'],
      nextSteps: ['Multi-campus rollout', 'Advanced feedback algorithms', 'Mobile app integration']
    },
    {
      id: 'project11',
      name: 'Project11',
      status: 'Architecture Complete',
      stage: 'Advanced AI Engine Development',
      priority: 'HIGH',
      icon: FaGamepad,
      color: '#10B981',
      description: 'Dream11 Supreme Optimization Engine with dual-architecture system',
      impact: 'Potential 300%+ ROI for users',
      timeframe: 'Revolutionary probability manipulation system',
      category: 'AI Optimization',
      detailedDescription: 'Sophisticated probability optimization engine for fantasy sports with dual-architecture system. Uses advanced machine learning to maximize user success rates.',
      techStack: ['Python', 'TensorFlow', 'pandas', 'NumPy', 'Redis', 'MongoDB', 'Flask'],
      keyFeatures: ['Probability calculation engine', 'Player performance prediction', 'Team optimization', 'Risk assessment'],
      challenges: ['Data accuracy', 'Real-time updates', 'Scalability'],
      nextSteps: ['Live match integration', 'Mobile optimization', 'Multi-sport support']
    },
    {
      id: 'prompt-library',
      name: 'Prompt Library',
      status: 'Development',
      stage: 'Monetization Architecture',
      priority: 'MEDIUM',
      icon: FaCode,
      color: '#8B5CF6',
      description: 'Structured prompting systems like TINE, SUPREME CODE, IT DOC + standard prompts library',
      impact: 'Scaffolds for scalable AI cognition',
      timeframe: 'Frameworks that built these projects',
      category: 'Prompt Frameworks',
      detailedDescription: 'This project isn\'t a tool — it\'s a thought engine. Lokesh created structured prompting systems like TINE (There Is No Escape), SUPREME CODE, and IT DOC to guide AI into delivering not just answers, but the most optimized version of truth possible. Each framework will have its own specialized architecture for specific tasks and use cases. Additionally, standard prompts like Chain of Thought (CoT), Few-Shot prompting, and other foundational techniques will be centralized in one accessible place.',
      techStack: ['Prompt Architecture', 'LLM Behavior Design', 'Cognitive Scaffolding', 'System Design'],
      keyFeatures: ['TINE: Recursive optimization logic', 'SUPREME CODE: System-level thinking', 'IT DOC: Developer simulation', 'Standard prompts library (CoT, Few-Shot, etc.)', 'Task-specialized architectures'],
      challenges: ['Framework standardization', 'Cross-model compatibility', 'Effectiveness measurement'],
      nextSteps: ['Individual framework deployment', 'Standard prompts centralization', 'Community prompt sharing']
    },
    {
      id: 'ai-logger',
      name: 'AI Logger',
      status: 'Concept Development',
      stage: 'Problem-Solution Mapping',
      priority: 'MEDIUM',
      icon: FaEye,
      color: '#F59E0B',
      description: 'Self-logging system for AI-assisted coding - Solves debugging nightmare',
      impact: 'Hours of debugging → Minutes of understanding',
      timeframe: 'Making AI coding actually productive',
      category: 'Developer Tools',
      detailedDescription: 'Intelligent logging system that automatically tracks AI-assisted coding sessions, making debugging and code review exponentially easier.',
      techStack: ['TypeScript', 'Node.js', 'SQLite', 'VS Code Extension API', 'OpenAI API', 'Electron'],
      keyFeatures: ['Automatic code tracking', 'AI conversation logging', 'Debug assistance', 'Code review tools'],
      challenges: ['IDE integration', 'Performance overhead', 'Privacy concerns'],
      nextSteps: ['VS Code extension', 'GitHub integration', 'Team collaboration features']
    },
    {
      id: 'course-curator',
      name: 'Course Curator',
      status: 'Research & Design',
      stage: 'Learning Optimization Engine',
      priority: 'MEDIUM',
      icon: FaGraduationCap,
      color: '#EF4444',
      description: 'Transform hours-long videos into curated step-by-step documents',
      impact: 'MongoDB cert: Hours of video → Focused learning docs',
      timeframe: 'Efficient learning revolution',
      category: 'EdTech',
      detailedDescription: 'AI-powered system that converts lengthy educational videos into structured, actionable learning documents with step-by-step guides.',
      techStack: ['Python', 'OpenAI Whisper', 'GPT-4', 'React', 'FastAPI', 'PostgreSQL', 'FFmpeg'],
      keyFeatures: ['Video transcription', 'Content summarization', 'Step extraction', 'Interactive guides'],
      challenges: ['Accuracy of transcription', 'Content quality', 'Video processing speed'],
      nextSteps: ['Live course support', 'Interactive quizzes', 'Progress tracking']
    },
    {
      id: 'stealth',
      name: 'CLASSIFIED',
      status: 'Concept Development',
      stage: 'Stealth Mode',
      priority: 'MASSIVE',
      icon: FaLock,
      color: '#6B7280',
      description: 'Food delivery platform targeting entirely unique users',
      impact: 'Large customer base using existing resources',
      timeframe: 'Massive disruption potential - NDA required',
      category: 'Stealth Startup',
      isClassified: true,
      detailedDescription: 'Stealth mode project targeting significant market disruption in food delivery space. Details available under NDA.',
      techStack: ['CLASSIFIED'],
      keyFeatures: ['CLASSIFIED'],
      challenges: ['CLASSIFIED'],
      nextSteps: ['CLASSIFIED']
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Testing & Deployment': return 'text-green-500';
      case 'Architecture Complete': return 'text-blue-500';
      case 'Development': return 'text-purple-500';
      case 'Concept Development': return 'text-yellow-500';
      case 'Research & Design': return 'text-orange-500';
      default: return 'text-gray-500';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'HIGH': return 'bg-red-500';
      case 'MEDIUM': return 'bg-yellow-500';
      case 'MASSIVE': return 'bg-gradient-to-r from-red-500 to-purple-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <section className="py-20 px-6" id="live-projects">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <FaRocket className="text-3xl text-blue-500 animate-pulse" />
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              Live Projects Dashboard
            </h2>
            <FaFire className="text-3xl text-red-500 animate-pulse" />
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto">
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Active Projects
            </span> running simultaneously across AI, optimization, SaaS, developer tools, and stealth innovation.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 auto-rows-fr px-4 py-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ 
                y: -12,
                scale: 1.025,
                boxShadow: `0 25px 50px ${project.color}25, 0 0 0 1px ${project.color}20`,
                transition: { 
                  duration: 0.4, 
                  ease: [0.25, 0.46, 0.45, 0.94],
                  type: "tween"
                }
              }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
              onClick={() => setSelectedProject(project)}
              className={`relative bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 cursor-pointer will-change-transform ${
                project.isClassified ? 'hover:bg-gray-900 hover:border-red-500' : ''
              }`}
              style={{ 
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                transform: 'translate3d(0, 0, 0)',
                backfaceVisibility: 'hidden',
                perspective: 1000
              }}
            >
              {/* Priority Badge */}
              <div className={`absolute -top-3 -right-3 px-3 py-1 rounded-full text-xs font-bold text-white z-10 ${getPriorityColor(project.priority)}`}>
                {project.priority}
              </div>

              {/* Project Header */}
              <div className="flex items-center gap-4 mb-4">
                <div 
                  className="p-3 rounded-lg"
                  style={{ backgroundColor: `${project.color}20` }}
                >
                  <project.icon 
                    className="text-2xl"
                    style={{ color: project.color }}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {project.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {project.category}
                  </p>
                </div>
              </div>

              {/* Status */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-sm font-semibold ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                  <span className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full text-gray-600 dark:text-gray-400">
                    Click for details
                  </span>
                </div>
                <p className="text-xs text-gray-500">
                  {project.stage}
                </p>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                {project.description}
              </p>

              {/* Impact & Timeframe */}
              <motion.div
                initial={false}
                animate={{ 
                  opacity: hoveredProject === project.id ? 1 : 0,
                  height: hoveredProject === project.id ? 'auto' : 0,
                  paddingTop: hoveredProject === project.id ? 16 : 0,
                  marginTop: hoveredProject === project.id ? 16 : 0
                }}
                transition={{ 
                  duration: 0.3, 
                  ease: [0.25, 0.46, 0.45, 0.94],
                  opacity: { duration: 0.2 },
                  height: { duration: 0.3 }
                }}
                className="border-t border-gray-200 dark:border-gray-700 overflow-hidden"
                style={{ 
                  borderTopWidth: hoveredProject === project.id ? 1 : 0,
                  borderTopColor: hoveredProject === project.id ? undefined : 'transparent'
                }}
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <FaChartLine className="text-green-500 text-sm" />
                    <span className="text-sm font-semibold text-green-600 dark:text-green-400">
                      {project.impact}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaClock className="text-blue-500 text-sm" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {project.timeframe}
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Classified Overlay */}
              {project.isClassified && (
                <motion.div
                  initial={false}
                  animate={{ 
                    opacity: hoveredProject === project.id ? 1 : 0,
                    scale: hoveredProject === project.id ? 1 : 0.95
                  }}
                  transition={{ 
                    duration: 0.3, 
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  className="absolute inset-0 bg-black/80 rounded-xl flex items-center justify-center backdrop-blur-sm pointer-events-none"
                  style={{ 
                    display: hoveredProject === project.id ? 'flex' : 'none'
                  }}
                >
                  <div className="text-center text-white">
                    <motion.div
                      animate={{ 
                        scale: hoveredProject === project.id ? [1, 1.1, 1] : 1 
                      }}
                      transition={{ 
                        duration: 0.5, 
                        repeat: hoveredProject === project.id ? Infinity : 0,
                        repeatType: "reverse"
                      }}
                    >
                      <FaLock className="text-3xl mx-auto mb-2 text-red-400" />
                    </motion.div>
                    <p className="text-sm font-semibold">CLASSIFIED PROJECT</p>
                    <p className="text-xs text-gray-300">Contact for NDA discussion</p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid md:grid-cols-3 gap-8 text-center"
        >
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-xl">
            <h3 className="text-2xl font-bold">Multiple</h3>
            <p className="text-sm opacity-90">Active Projects</p>
          </div>
          <div className="bg-gradient-to-r from-green-500 to-teal-600 text-white p-6 rounded-xl">
            <h3 className="text-2xl font-bold">2-8 weeks</h3>
            <p className="text-sm opacity-90">Idea to Product</p>
          </div>
          <div className="bg-gradient-to-r from-red-500 to-pink-600 text-white p-6 rounded-xl">
            <h3 className="text-2xl font-bold">AI-First</h3>
            <p className="text-sm opacity-90">Approach</p>
          </div>
        </motion.div>

        {/* Context Transition Overlay - Beautiful Fluid Transition */}
        <AnimatePresence>
          {showContextOverlay && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-indigo-900/95 via-purple-900/95 to-blue-900/95 backdrop-blur-xl cursor-pointer"
              onClick={() => setShowContextOverlay(false)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: -50 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
                className="max-w-4xl mx-auto text-center px-8"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Floating Project Icons */}
                <motion.div
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="flex items-center justify-center gap-12 mb-12"
                >
                  <motion.div
                    animate={{ 
                      y: [0, -15, 0],
                      rotate: [0, 5, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 3, repeat: Infinity, delay: 0 }}
                    className="relative"
                  >
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center shadow-2xl">
                      <FaBrain className="text-3xl text-white" />
                    </div>
                    <div className="absolute -top-3 -right-3 w-6 h-6 bg-green-400 rounded-full animate-pulse shadow-lg"></div>
                  </motion.div>

                  <motion.div
                    animate={{ 
                      y: [0, -20, 0],
                      rotate: [0, -5, 0],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                    className="relative"
                  >
                    <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-teal-500 rounded-full flex items-center justify-center shadow-2xl">
                      <FaRocket className="text-3xl text-white" />
                    </div>
                    <div className="absolute -top-3 -right-3 w-6 h-6 bg-yellow-400 rounded-full animate-pulse shadow-lg"></div>
                  </motion.div>

                  <motion.div
                    animate={{ 
                      y: [0, -10, 0],
                      rotate: [0, 3, 0],
                      scale: [1, 1.08, 1]
                    }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                    className="relative"
                  >
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center shadow-2xl">
                      <FaCogs className="text-3xl text-white" />
                    </div>
                    <div className="absolute -top-3 -right-3 w-6 h-6 bg-red-400 rounded-full animate-pulse shadow-lg"></div>
                  </motion.div>
                </motion.div>

                {/* Main Context Shift Message */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, delay: 0.8 }}
                  className="space-y-8"
                >
                  <motion.h3 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="text-4xl md:text-5xl font-bold text-white leading-tight"
                  >
                    Context Switch:{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-400 to-cyan-400">
                      From Experiment to Reality
                    </span>
                  </motion.h3>

                  <div className="space-y-6 text-lg text-gray-200 leading-relaxed">
                    <motion.p
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.3 }}
                      className="text-xl"
                    >
                      You just witnessed my <strong className="text-yellow-400">first AI-to-AI collaboration experiment</strong> — and how I think about leveraging AI effectively.
                    </motion.p>
                    
                    <motion.p
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.5 }}
                      className="text-lg font-semibold"
                    >
                      You came from my <em className="text-blue-400">professional portfolio</em>, saw my <em className="text-purple-400">unique AI approach</em>...
                    </motion.p>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.7 }}
                      className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400"
                    >
                      Now here's the <span className="text-white">real picture</span> of what I actually do
                    </motion.p>

                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.9 }}
                      className="text-base text-gray-300 italic"
                    >
                      This site's purpose: showing you my actual projects, progress, and how I apply AI thinking to <strong>real problems</strong>.<br />
                      Beyond the experiment — here's my actual work and impact.
                    </motion.p>
                  </div>
                </motion.div>

                {/* Curious Feeding Elements */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.2 }}
                  className="mt-12 grid md:grid-cols-3 gap-6"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2.4 }}
                    className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20"
                  >
                    <FaFire className="text-2xl text-red-400 mx-auto mb-2" />
                    <p className="text-sm font-semibold text-white">Current Projects</p>
                    <p className="text-xs text-gray-300">Real progress & timelines</p>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2.6 }}
                    className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20"
                  >
                    <FaChartLine className="text-2xl text-green-400 mx-auto mb-2" />
                    <p className="text-sm font-semibold text-white">Purpose & Impact</p>
                    <p className="text-xs text-gray-300">Why these projects matter</p>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2.8 }}
                    className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20"
                  >
                    <FaLock className="text-2xl text-purple-400 mx-auto mb-2" />
                    <p className="text-sm font-semibold text-white">Behind the Scenes</p>
                    <p className="text-xs text-gray-300">How I actually work</p>
                  </motion.div>
                </motion.div>

                {/* Click to Continue */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 3.5 }}
                  className="mt-12"
                >
                  <motion.button
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.6, delay: 4 }}
                    onClick={() => setShowContextOverlay(false)}
                    className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 flex items-center gap-3 mx-auto"
                  >
                    <span>Explore My Projects</span>
                    <FaArrowRight className="text-lg" />
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

        {/* Project Detail Overlay */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm cursor-pointer p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 50 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header */}
                <div className="relative p-8 pb-6" style={{ backgroundColor: `${selectedProject.color}10` }}>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-2xl"
                  >
                    ×
                  </button>
                  
                  <div className="flex items-center gap-6 mb-6">
                    <div 
                      className="p-4 rounded-xl"
                      style={{ backgroundColor: selectedProject.color, color: 'white' }}
                    >
                      <selectedProject.icon className="text-3xl" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                        {selectedProject.name}
                      </h2>
                      <div className="flex items-center gap-4">
                        <span className="text-lg text-gray-600 dark:text-gray-400">
                          {selectedProject.category}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getPriorityColor(selectedProject.priority)} text-white`}>
                          {selectedProject.priority} PRIORITY
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <span className={`text-lg font-semibold ${getStatusColor(selectedProject.status)}`}>
                        {selectedProject.status}
                      </span>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {selectedProject.stage}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center justify-end gap-2 mb-1">
                        <FaChartLine className="text-green-500" />
                        <span className="text-sm font-semibold text-green-600 dark:text-green-400">
                          {selectedProject.impact}
                        </span>
                      </div>
                      <div className="flex items-center justify-end gap-2">
                        <FaClock className="text-blue-500" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {selectedProject.timeframe}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 space-y-8">
                  {/* Detailed Description */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                      <FaLightbulb className="text-yellow-500" />
                      Project Overview
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {selectedProject.detailedDescription}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  {!selectedProject.isClassified && (
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                        <FaCogs className="text-blue-500" />
                        Tech Stack
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.techStack.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Key Features */}
                  {!selectedProject.isClassified && (
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                        <FaRocket className="text-purple-500" />
                        Key Features
                      </h3>
                      <ul className="space-y-2">
                        {selectedProject.keyFeatures.map((feature, index) => (
                          <li key={index} className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: selectedProject.color }}></div>
                            <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Challenges & Next Steps */}
                  {!selectedProject.isClassified && (
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                          <FaFire className="text-red-500" />
                          Challenges
                        </h3>
                        <ul className="space-y-2">
                          {selectedProject.challenges.map((challenge, index) => (
                            <li key={index} className="flex items-center gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                              <span className="text-sm text-gray-700 dark:text-gray-300">{challenge}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                          <FaArrowRight className="text-green-500" />
                          Next Steps
                        </h3>
                        <ul className="space-y-2">
                          {selectedProject.nextSteps.map((step, index) => (
                            <li key={index} className="flex items-center gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                              <span className="text-sm text-gray-700 dark:text-gray-300">{step}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* Classified Project Message */}
                  {selectedProject.isClassified && (
                    <div className="text-center py-12">
                      <FaLock className="text-6xl text-gray-400 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Classified Project
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
                        This project is in stealth mode. Technical details and specifics are available under NDA for serious inquiries.
                      </p>
                      <div className="mt-6">
                        <span className="inline-block px-4 py-2 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-lg text-sm font-medium">
                          Contact required for access
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default LiveProjectsDashboard;
