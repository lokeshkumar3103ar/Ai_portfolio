import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FireAnimation = ({ isVisible, onComplete }) => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    if (isVisible) {
      // Generate fierce fire particles and ash
      const newParticles = [];
      
      // Main fire particles (larger, more fierce)
      for (let i = 0; i < 40; i++) {
        newParticles.push({
          id: i,
          type: 'fire',
          x: 45 + Math.random() * 10, // Centered around middle
          y: 60 + Math.random() * 10,
          size: Math.random() * 15 + 8,
          delay: Math.random() * 0.8,
          duration: Math.random() * 1.5 + 1.2,
          color: i % 4 === 0 ? '#ff1a1a' : i % 4 === 1 ? '#ff4400' : i % 4 === 2 ? '#ff8800' : '#ffaa00',
          intensity: Math.random() * 0.8 + 0.4
        });
      }
      
      // Ash particles (smaller, greyish)
      for (let i = 0; i < 30; i++) {
        newParticles.push({
          id: i + 40,
          type: 'ash',
          x: 30 + Math.random() * 40,
          y: 55 + Math.random() * 20,
          size: Math.random() * 6 + 2,
          delay: Math.random() * 1.5,
          duration: Math.random() * 3 + 2,
          color: i % 3 === 0 ? '#555555' : i % 3 === 1 ? '#777777' : '#999999',
          intensity: Math.random() * 0.6 + 0.2
        });
      }
      
      // Fierce sparks (tiny, bright)
      for (let i = 0; i < 25; i++) {
        newParticles.push({
          id: i + 70,
          type: 'spark',
          x: 40 + Math.random() * 20,
          y: 50 + Math.random() * 15,
          size: Math.random() * 3 + 1,
          delay: Math.random() * 2,
          duration: Math.random() * 1 + 0.8,
          color: '#ffffff',
          intensity: Math.random() * 1 + 0.5
        });
      }
      
      setParticles(newParticles);

      // Auto-complete after animation
      const timer = setTimeout(() => {
        onComplete && onComplete();
      }, 3500);

      return () => clearTimeout(timer);
    }
  }, [isVisible, onComplete]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 pointer-events-none overflow-hidden"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.3) 100%)'
        }}
      >
        {/* Dynamic Fire, Ash & Spark Particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            initial={{
              x: `${particle.x}vw`,
              y: `${particle.y}vh`,
              scale: 0,
              opacity: 0
            }}
            animate={{
              x: `${particle.x + (Math.random() - 0.5) * (particle.type === 'fire' ? 25 : particle.type === 'ash' ? 35 : 40)}vw`,
              y: `${particle.y - (particle.type === 'fire' ? 60 + Math.random() * 30 : particle.type === 'ash' ? 40 + Math.random() * 50 : 70 + Math.random() * 40)}vh`,
              scale: particle.type === 'spark' ? [0, 1.2, 0.8, 0] : [0, 1, 0.9, 0.6, 0],
              opacity: [0, particle.intensity, particle.intensity * 0.8, particle.intensity * 0.4, 0],
              rotate: particle.type === 'ash' ? [0, Math.random() * 360] : 0
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              ease: particle.type === 'fire' ? "easeOut" : particle.type === 'spark' ? "easeInOut" : "linear"
            }}
            className="absolute"
          >
            <div
              className="rounded-full"
              style={{
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                backgroundColor: particle.color,
                boxShadow: particle.type === 'fire' 
                  ? `0 0 ${particle.size * 3}px ${particle.color}, 0 0 ${particle.size * 1.5}px ${particle.color}`
                  : particle.type === 'spark'
                  ? `0 0 ${particle.size * 4}px ${particle.color}`
                  : `0 0 ${particle.size}px ${particle.color}`,
                filter: particle.type === 'ash' ? 'blur(1px)' : 'blur(0.5px)'
              }}
            />
          </motion.div>
        ))}

        {/* Lightweight Heat Shimmer */}
        <motion.div
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ 
            opacity: [0, 0.2, 0.05, 0],
            scaleY: [0, 1, 1.1, 0],
            skewX: [0, 2, -1, 1, 0]
          }}
          transition={{
            duration: 3,
            times: [0, 0.3, 0.7, 1],
            ease: "easeOut"
          }}
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to top, rgba(255,136,0,0.05) 0%, transparent 40%)',
            transformOrigin: 'bottom'
          }}
        />

        {/* Subtle Ring Pulse */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: [0, 2, 2.5],
            opacity: [0, 0.2, 0]
          }}
          transition={{
            duration: 2.5,
            delay: 0.3,
            ease: "easeOut"
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          <div 
            className="w-64 h-64 rounded-full border"
            style={{
              borderColor: 'rgba(255,68,68,0.3)',
              borderWidth: '1px',
              filter: 'blur(2px)'
            }}
          />
        </motion.div>

        {/* Floating Embers */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`floating-ember-${i}`}
            initial={{
              x: `${45 + Math.random() * 10}vw`,
              y: '65vh',
              scale: 0
            }}
            animate={{
              x: `${45 + (Math.random() - 0.5) * 50}vw`,
              y: `${20 + Math.random() * 30}vh`,
              scale: [0, 1, 0.8, 0],
              opacity: [0, 0.7, 0.4, 0]
            }}
            transition={{
              duration: Math.random() * 2.5 + 2,
              delay: Math.random() * 1.8,
              ease: "easeOut"
            }}
            className="absolute"
          >
            <div
              className="w-1 h-1 rounded-full"
              style={{
                backgroundColor: '#ff6600',
                boxShadow: '0 0 6px #ff6600',
                filter: 'blur(0.5px)'
              }}
            />
          </motion.div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

export default FireAnimation;
