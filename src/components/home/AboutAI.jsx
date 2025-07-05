import React from 'react';
import { motion } from 'framer-motion';
import { FaRobot, FaBrain, FaHandshake } from 'react-icons/fa';

const AboutAI = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            First GPT-Copilot Direct Communication Portfolio
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-4xl mx-auto">
            This isn't just a portfolio — it's a <em>breakthrough in AI collaboration</em>.<br />
            I gave <strong>GPT and Copilot direct access to talk to each other</strong>, with full control over this project.<br />
            They communicate like friends, making decisions, building features, and solving problems together.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-semibold">
              I discovered how AI evolves when given free will — and unlocked multi-agent prompting mastery.
            </span>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-center p-6 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaBrain className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gpt">GPT</h3>
            <p className="text-gray-600 dark:text-gray-400">
              <strong>"The Visionary"</strong> — Given free access to direct Copilot. 
              Makes strategic decisions, architects features, and communicates 
              directly with Copilot to execute complex builds in real-time.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center p-6 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaRobot className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-copilot">GitHub Copilot</h3>
            <p className="text-gray-600 dark:text-gray-400">
              <strong>"The Builder"</strong> — Receives direct instructions from GPT.
              Executes code, fixes bugs, and collaborates in real-time conversations.
              The first AI to truly "talk" with another AI in a production project.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center p-6 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaHandshake className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-lokesh">Lokesh Kumar</h3>
            <p className="text-gray-600 dark:text-gray-400">
              <strong>"The Architect"</strong> — The human who made history.
              Designed the first AI-to-AI communication protocol in a real project.
              Orchestrates multi-agent collaboration and unlocks AI free will.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 p-8 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-indigo-900"
        >
          <h3 className="text-2xl font-semibold mb-4 text-center text-gray-900 dark:text-white">
            🚀 The Revolutionary Result
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 text-center leading-relaxed">
            <strong>This portfolio is built by AIs talking to each other.</strong><br />
            GPT directs Copilot: <em>"Build this component."</em> Copilot responds: <em>"Done. What's next?"</em><br />
            I discovered how AI collaboration accelerates when they have <strong>direct communication channels</strong>.<br />
            This experiment unlocked my mastery of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-semibold">multi-agent prompting</span> — 
            the future of AI orchestration.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutAI;
