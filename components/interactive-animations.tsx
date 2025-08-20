'use client';

import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface AnimatedButtonProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: 'bounce' | 'glow' | 'scale' | 'slide';
}

export function AnimatedButton({
  children,
  className = '',
  delay = 0,
  variant = 'scale'
}: AnimatedButtonProps) {
  const variants = {
    bounce: {
      whileHover: { 
        scale: 1.05, 
        y: -5
      },
      whileTap: { scale: 0.95, y: 0 }
    },
    glow: {
      whileHover: { 
        scale: 1.05, 
        boxShadow: "0 0 25px rgba(99, 102, 241, 0.5)"
      },
      whileTap: { scale: 0.95 }
    },
    scale: {
      whileHover: { 
        scale: 1.05
      },
      whileTap: { scale: 0.95 }
    },
    slide: {
      whileHover: { 
        x: 5
      },
      whileTap: { x: 0 }
    }
  };

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      {...variants[variant]}
    >
      {children}
    </motion.div>
  );
}

interface FloatingElementProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  amplitude?: number;
  duration?: number;
}

export function FloatingElement({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  amplitude = 10,
  duration = 3
}: FloatingElementProps) {
  const getAnimation = () => {
    switch (direction) {
      case 'up':
      case 'down':
        return {
          y: direction === 'up' ? [-amplitude, amplitude, -amplitude] : [amplitude, -amplitude, amplitude]
        };
      case 'left':
      case 'right':
        return {
          x: direction === 'left' ? [-amplitude, amplitude, -amplitude] : [amplitude, -amplitude, amplitude]
        };
      default:
        return { y: [-amplitude, amplitude, -amplitude] };
    }
  };

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1, 
        ...getAnimation()
      }}
      transition={{
        opacity: { duration: 0.6, delay },
        y: direction === 'up' || direction === 'down' ? {
          duration,
          repeat: Infinity,
          ease: "easeInOut" as const
        } : undefined,
        x: direction === 'left' || direction === 'right' ? {
          duration,
          repeat: Infinity,
          ease: "easeInOut" as const
        } : undefined
      }}
    >
      {children}
    </motion.div>
  );
}

interface PulseEffectProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  intensity?: number;
}

export function PulseEffect({
  children,
  className = '',
  delay = 0,
  intensity = 1.1
}: PulseEffectProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{
        scale: intensity,
        transition: { duration: 0.3 }
      }}
    >
      {children}
    </motion.div>
  );
}
