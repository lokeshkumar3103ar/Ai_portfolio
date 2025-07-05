import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { ColorThemeProvider } from './context/ColorThemeContext';
import HomePage from './components/home/HomePage';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import LoadingScreen from './components/transitions/LoadingScreen';
import PurposeReveal from './components/transitions/PurposeReveal';
import SmoothScroll from './components/transitions/SmoothScroll';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showPurpose, setShowPurpose] = useState(false);
  const [showMain, setShowMain] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setShowPurpose(true);
  };

  const handlePurposeComplete = () => {
    setShowPurpose(false);
    setShowMain(true);
  };

  return (
    <ThemeProvider>
      <ColorThemeProvider>
        <AnimatePresence mode="wait">
          {isLoading && (
            <LoadingScreen onComplete={handleLoadingComplete} />
          )}
          {showPurpose && (
            <PurposeReveal onComplete={handlePurposeComplete} />
          )}
          {showMain && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Header />
              <HomePage />
              <Footer />
              <SmoothScroll />
            </motion.div>
          )}
        </AnimatePresence>
      </ColorThemeProvider>
    </ThemeProvider>
  );
};

export default App;
