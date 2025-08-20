'use client';

import { motion } from 'motion/react';
import { ReactNode, useEffect } from 'react';

interface PageTransitionProps {
  children: ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Prevent scroll restoration during animation
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    
    // Reset scroll restoration after animation completes
    const timer = setTimeout(() => {
      if ('scrollRestoration' in history) {
        history.scrollRestoration = 'auto';
      }
    }, 800); // Match the animation duration
    
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      onAnimationComplete={() => {
        // Ensure we're at the top after animation completes
        window.scrollTo(0, 0);
      }}
    >
      {children}
    </motion.div>
  );
}
