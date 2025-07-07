import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRocket, FaClock, FaCheckCircle, FaLightbulb, FaChartLine, FaFire, FaArrowRight, FaCode, FaBrain, FaCog } from 'react-icons/fa';
// import FireAnimation from '../transitions/FireAnimation';
import ContactOverlay from '../ui/ContactOverlay';

const ThirtyDayChallenge = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [counterAnimation, setCounterAnimation] = useState(false);
  const [showFireAnimation, setShowFireAnimation] = useState(false);
  const [fireAnimationCompleted, setFireAnimationCompleted] = useState(false);
  const [isContactOverlayOpen, setIsContactOverlayOpen] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    setCounterAnimation(true);
  }, []);

  // REMOVE: Intersection Observer for fire animation
  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       const [entry] = entries;
  //       if (entry.isIntersecting && !fireAnimationCompleted) {
  //         setShowFireAnimation(true);
  //       }
  //     },
  //     {
  //       threshold: 0.3, // Trigger when 30% of the section is visible
  //       rootMargin: '0px 0px -100px 0px' // Offset to trigger slightly before fully visible
  //     }
  //   );

  //   if (sectionRef.current) {
  //     observer.observe(sectionRef.current);
  //   }

  //   return () => {
  //     if (sectionRef.current) {
  //       observer.unobserve(sectionRef.current);
  //     }
  //   };
  // }, [fireAnimationCompleted]);

  const handleFireAnimationComplete = () => {
    setShowFireAnimation(false);
    setFireAnimationCompleted(true);
  };

  const challenges = [
    {
      project: "QritiQ",
      timeframe: "14 days",
      challenge: "AI-powered interview evaluation system",
      result: "University adoption with financial investment",
      complexity: "High",
      technologies: ["Whisper", "Mistral 7B", "FastAPI", "Docker"],
      impact: "66% evaluation time reduction",
      status: "Production",
      color: "#4F46E5"
    },
    {
      project: "Smart Attendance",
      timeframe: "21 days",
      challenge: "Dual-layer face + QR verification system",
      result: "Anti-spoofing system with 98% accuracy",
      complexity: "High",
      technologies: ["OpenCV", "MTCNN", "Flask", "QR Generation"],
      impact: "Spoof-proof attendance tracking",
      status: "Completed",
      color: "#10B981"
    },
    {
      project: "Prompt Systems",
      timeframe: "7 days",
      challenge: "Framework architecture for AI optimization",
      result: "TINE, SUPREME CODE, IT DOC frameworks",
      complexity: "Expert",
      technologies: ["Prompt Engineering", "System Design", "LLM Behavior"],
      impact: "Meta-tools that built everything else",
      status: "Active",
      color: "#8B5CF6"
    }
  ];

  const stats = [
    { label: "Problem Analysis", value: "Research-first", subtext: "Understanding before building" },
    { label: "Technology Stack", value: "Any stack", subtext: "Web, mobile, AI, desktop - any solution needed" },
    { label: "Learning Approach", value: "Self-taught", subtext: "Everything learned independently" },
    { label: "Implementation Style", value: "AI-assisted", subtext: "10x faster development with smart tools" }
  ];

  const process = [
    {
      step: 1,
      title: "Research & Architecture",
      description: "Deep research into problem space, technology evaluation, and system design",
      time: "Days 1-3",
      icon: FaBrain,
      color: "#4F46E5"
    },
    {
      step: 2,
      title: "Rapid Prototyping",
      description: "Build core functionality with AI-assisted development and iterative testing",
      time: "Days 4-10",
      icon: FaCode,
      color: "#10B981"
    },
    {
      step: 3,
      title: "Integration & Optimization",
      description: "System integration, performance optimization, and production preparation",
      time: "Days 11-20",
      icon: FaCog,
      color: "#F59E0B"
    },
    {
      step: 4,
      title: "Deployment & Impact",
      description: "Production deployment with real-world testing and impact measurement",
      time: "Days 21-30",
      icon: FaRocket,
      color: "#EF4444"
    }
  ];

  const CounterAnimation = ({ target, suffix = "" }) => {
    const [count, setCount] = useState(0);
    const [displayValue, setDisplayValue] = useState("");
    
    useEffect(() => {
      if (!counterAnimation) return;
      
      // Check if target contains numbers
      const targetNum = parseInt(target.replace(/[^\d]/g, ''));
      
      if (isNaN(targetNum) || targetNum === 0) {
        // If no numbers or invalid, just display the text directly
        setDisplayValue(target);
        return;
      }
      
      let start = 0;
      const increment = targetNum / 30;
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= targetNum) {
          setCount(targetNum);
          setDisplayValue(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
          // For values with text and numbers, show the counting version
          if (target.includes('week')) {
            setDisplayValue(`${Math.floor(start)} week${Math.floor(start) !== 1 ? 's' : ''}`);
          } else if (target.includes('days')) {
            setDisplayValue(`${Math.floor(start)}-${Math.floor(start) + 2} days`);
          } else {
            setDisplayValue(target.replace(/\d+/, Math.floor(start)));
          }
        }
      }, 50);
      
      return () => clearInterval(timer);
    }, [counterAnimation, target]);
    
    return <span>{displayValue || target}</span>;
  };

  return (
    <>
      {/* <FireAnimation 
        isVisible={showFireAnimation} 
        onComplete={handleFireAnimationComplete}
      /> */}
      <section 
        ref={sectionRef}
        className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
      >
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
            <FaFire className="text-4xl text-red-500 animate-pulse" />
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              The 30-Day Challenge
            </h2>
            <FaFire className="text-4xl text-red-500 animate-pulse" />
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600 mb-4">
              "Give me any problem and 30 days."
            </p>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
              I'll research, architect, build, and deploy a working solution.
              <br />
              <span className="font-semibold">Not a prototype. Not a demo. A real product.</span>
            </p>
            <div className="bg-gradient-to-r from-red-100 to-orange-100 dark:from-red-900 dark:to-orange-900 p-6 rounded-xl">
              <p className="text-red-800 dark:text-red-200 font-semibold">
                💥 The Nuclear Option: What's your company's biggest technical challenge?
              </p>
            </div>
          </div>
        </motion.div>

        {/* Evidence - Past Challenges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            Challenge Evidence: Delivered in Record Time
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {challenges.map((challenge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                style={{ 
                  boxShadow: hoveredCard === index ? `0 20px 40px ${challenge.color}20` : undefined 
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                    {challenge.project}
                  </h4>
                  <span 
                    className="text-white px-3 py-1 rounded-full text-sm font-bold"
                    style={{ backgroundColor: challenge.color }}
                  >
                    {challenge.timeframe}
                  </span>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  <strong>Challenge:</strong> {challenge.challenge}
                </p>
                
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  <strong>Result:</strong> {challenge.result}
                </p>

                <div className="flex items-center gap-2 mb-4">
                  <FaChartLine className="text-green-500" />
                  <span className="text-sm font-semibold text-green-600 dark:text-green-400">
                    {challenge.impact}
                  </span>
                </div>

                <div className="flex flex-wrap gap-1">
                  {challenge.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="grid md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-xl text-center"
              >
                <div className="text-3xl font-bold mb-2">
                  <CounterAnimation target={stat.value} />
                </div>
                <p className="font-semibold mb-1">{stat.label}</p>
                <p className="text-sm opacity-90">{stat.subtext}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            The 30-Day Process: How It Works
          </h3>
          <div className="space-y-6">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center gap-6 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <div 
                  className="p-4 rounded-full text-white text-2xl"
                  style={{ backgroundColor: step.color }}
                >
                  <step.icon />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                      Step {step.step}: {step.title}
                    </h4>
                    <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm font-semibold">
                      {step.time}
                    </span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-red-600 to-orange-600 p-8 rounded-xl text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Test the Challenge?</h3>
            <p className="text-xl mb-6 text-red-100">
              I don't just talk about rapid development - I deliver it.
              <br />
              <span className="font-bold">What impossible thing can we build together?</span>
            </p>
            <button 
              className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 mx-auto hover:scale-105"
              onClick={() => setIsContactOverlayOpen(true)}
            >
              Challenge Me <FaArrowRight />
            </button>
            <p className="text-sm text-red-200 mt-4">
              This isn't confidence - it's a proven track record.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
    
    <ContactOverlay 
      isOpen={isContactOverlayOpen} 
      onClose={() => setIsContactOverlayOpen(false)} 
    />
    </>
  );
};

export default ThirtyDayChallenge;
