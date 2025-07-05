import React from "react";
import PromptCard from "./PromptCard";
import { motion } from "framer-motion";

const frameworks = [
  {
    name: "TINE",
    fullName: "There Is No Escape",
    triggerPhrase: "****",
    tagline: "Recursive 5-step optimization process",
    color: "#EF4444",
    description: "Recursive 5-step optimization process to reach highest-quality output.",
    summary: "Recursive 5-step optimization process to reach highest-quality output.",
    structure: [
      "Understanding the Core Objective",
      "Structuring the Initial Response", 
      "Optimizing for Maximum Power",
      "Checking for Further Enhancements",
      "Finalizing & Delivering"
    ],
    features: [
      "Recursive self-improvement",
      "Ideal for creative, complex, polished outputs",
      "Good for max-depth refinement (technical + writing)"
    ],
    useCases: ["Portfolio content", "Vision refinement", "Narrative polishing"],
    icon: "🎯",
    phase: "5-Phase Recursive Improvement",
    impact: "Zero-escape optimization",
    template: `Use the TINE framework. Begin by deeply analyzing the core objective and challenges. Then, iterate through the 5 structured stages:

1. Understanding the Core Objective  
2. Structuring the Initial Response  
3. Optimizing for Maximum Power  
4. Checking for Further Enhancements  
5. Finalizing & Delivering

Begin with this objective:
"{INSERT YOUR TASK}"`
  },
  {
    name: "SUPREME CODE",
    fullName: "SUPREME CODE: System-Level Prompt Strategy",
    triggerPhrase: "SUPREME CODE",
    tagline: "Breaks down any goal into modular, AI-friendly executable systems",
    color: "#3B82F6",
    description: "A system thinking framework that breaks down tasks into modules, identifies logic gates, and designs AI-first execution paths.",
    summary: "Breaks down any goal into modular, AI-friendly executable systems.",
    structure: [
      "Deconstruct the Objective",
      "Identify Core Components",
      "Map Execution Architecture", 
      "Align with AI Prompt Logic",
      "Optimize for Scalability"
    ],
    features: [
      "Ideal for product/system thinkers",
      "Modular, scalable thinking",
      "Aligns design thinking with prompt chains"
    ],
    useCases: ["AI task automation", "System design", "Code architecture"],
    icon: "⚡",
    phase: "Objective → Context → Execution",
    impact: "System-level intelligence",
    template: `Apply the SUPREME CODE strategy to solve this challenge. Move through the 5 stages strategically:

1. Deconstruct the Objective  
2. Identify Components  
3. Map Execution Architecture  
4. Align with AI Prompt Logic  
5. Optimize for Scalability

Objective:
"{INSERT PROBLEM / GOAL}"`
  },
  {
    name: "IT DOC",
    fullName: "I'm the Developer of ChatGPT Prompt",
    triggerPhrase: "IT DOC",
    tagline: "Simulates a GPT dev designing internal-grade prompts",
    color: "#10B981",
    description: "A simulation technique to replicate how GPT engineers would design their own prompts — precision + insight fusion.",
    summary: "Simulates a GPT dev designing internal-grade prompts.",
    structure: [
      "Define the Prompt's Role",
      "Engineer the Language",
      "Inject Internal Tool Awareness",
      "Simulate Developer Thinking", 
      "Final Prompt Draft"
    ],
    features: [
      "Great for tool-based or developer prompts",
      "Mimics OpenAI-style engineering logic",
      "Encourages robust, flexible prompt design"
    ],
    useCases: ["Prompt engineering", "Tech prompt design", "LLM tuning"],
    icon: "🧠",
    phase: "Role Simulation Protocol",
    impact: "Developer-level precision",
    template: `Use the IT DOC framework to design a production-grade AI prompt. Proceed through these stages:

1. Define the Prompt's Role  
2. Engineer the Language  
3. Inject Internal Tool Awareness  
4. Simulate Developer Thinking  
5. Final Prompt Draft

Task:
"{INSERT PROMPT OBJECTIVE}"`
  }
];

const PromptSystemsGrid = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  return (
    <section className="relative py-20 px-6">
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            🧠 Lokesh's Prompt Frameworks
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            The cognitive architectures that guide AI collaboration. These aren't just prompts — 
            they're <em>thinking systems</em> that transform how humans and AI work together.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-full">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Battle-tested in real projects
            </span>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {frameworks.map((framework, idx) => (
            <PromptCard key={idx} framework={framework} index={idx} />
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Ready to master these frameworks? Start exploring the detailed guides above!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PromptSystemsGrid;
