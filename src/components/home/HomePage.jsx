import React from 'react';
import Hero from './Hero';
import LabTransition from '../transitions/LabTransition';
import AboutAI from './AboutAI';
import AgentGallery from '../agents/AgentGallery';
import PromptSystemsGrid from '../promptSystems/PromptSystemsGrid';
import LiveProjectsDashboard from '../dashboard/LiveProjectsDashboard';
import LearningTechRadar from '../learning/LearningTechRadar';
import VisionImpactSection from '../vision/VisionImpactSection';
import ThirtyDayChallenge from '../challenge/ThirtyDayChallenge';
import { motion } from 'framer-motion';

const HomePage = () => {
  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-slate-900 dark:to-indigo-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Hero />
      <LabTransition />
      <section id="about">
        <AboutAI />
      </section>
      <section id="agents">
        <AgentGallery />
      </section>
      <section id="live-projects">
        <LiveProjectsDashboard />
      </section>
      <section id="prompt-engineering">
        <PromptSystemsGrid />
      </section>
      <section id="learning">
        <LearningTechRadar />
      </section>
      <section id="vision">
        <VisionImpactSection />
      </section>
      <section id="challenge">
        <ThirtyDayChallenge />
      </section>
    </motion.div>
  );
};

export default HomePage;
