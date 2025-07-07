import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaEnvelope, FaPhone, FaTimes } from 'react-icons/fa';

const ContactOverlay = ({ isOpen, onClose }) => {
  const contacts = [
    {
      icon: FaGithub,
      label: 'GitHub',
      value: 'lokeshkumar3103ar',
      link: 'https://github.com/lokeshkumar3103ar',
      color: '#333',
      darkColor: '#fff'
    },
    {
      icon: FaLinkedinIn,
      label: 'LinkedIn',
      value: 'Lokesh Kumar A R',
      link: 'https://www.linkedin.com/in/lokesh-kumar-a-r-465218244/',
      color: '#0077B5',
      darkColor: '#0077B5'
    },
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'lokeshkumar3103ar@gmail.com',
      link: 'mailto:lokeshkumar3103ar@gmail.com',
      color: '#EA4335',
      darkColor: '#EA4335'
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+91 94891 12725',
      link: 'tel:9489112725',
      color: '#10B981',
      darkColor: '#10B981'
    }
  ];

  const overlayVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.2, ease: 'easeInOut' }
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, ease: 'easeOut' }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' }
    }
  };

  // Overlay close on scroll/click logic
  React.useEffect(() => {
    if (!isOpen) return;
    const handleScroll = () => {
      onClose && onClose();
    };
    const handleClick = (e) => {
      // Only close if click is outside modal
      if (e.target.classList && e.target.classList.contains('fixed')) {
        onClose && onClose();
      }
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('click', handleClick);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
          
          {/* Modal */}
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold">Let's Connect</h2>
                  <p className="text-indigo-100 mt-1">Get in touch and let's build something amazing together</p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                  aria-label="Close"
                >
                  <FaTimes size={20} />
                </button>
              </div>
            </div>

            {/* Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="p-6 space-y-4"
            >
              {contacts.map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <motion.a
                    key={contact.label}
                    variants={itemVariants}
                    href={contact.link}
                    target={contact.label !== 'Phone' && contact.label !== 'Email' ? '_blank' : undefined}
                    rel={contact.label !== 'Phone' && contact.label !== 'Email' ? 'noreferrer' : undefined}
                    className="flex items-center p-4 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 group"
                  >
                    <div 
                      className="flex items-center justify-center w-12 h-12 rounded-full mr-4 transition-all duration-300"
                      style={{ 
                        backgroundColor: `${contact.color}15`,
                        color: contact.color
                      }}
                    >
                      <IconComponent size={20} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-[#6366f1] dark:group-hover:text-[#a78bfa] transition-colors">
                        {contact.label}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {contact.value}
                      </p>
                    </div>
                    <div className="text-gray-400 dark:text-gray-500 group-hover:text-[#6366f1] dark:group-hover:text-[#a78bfa] transition-colors">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </motion.a>
                );
              })}
            </motion.div>

            {/* Footer */}
            <div className="p-6 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
              <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                Available for freelance projects and full-time opportunities
              </p>
              <div className="flex justify-center mt-3">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-green-600 dark:text-green-400 font-medium">
                    Open to work
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactOverlay;
