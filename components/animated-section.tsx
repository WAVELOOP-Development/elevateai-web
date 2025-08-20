'use client';

import { motion, Variants } from 'motion/react';
import { useInView } from '@/hooks/use-in-view';
import { ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade';
  staggerChildren?: number;
  viewport?: {
    once?: boolean;
    margin?: string;
  };
}

const variants: Record<string, Variants> = {
  up: {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  },
  down: {
    hidden: { opacity: 0, y: -60 },
    visible: { opacity: 1, y: 0 }
  },
  left: {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 }
  },
  right: {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 }
  },
  scale: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  },
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }
};

export function AnimatedSection({
  children,
  className = '',
  delay = 0,
  duration = 0.6,
  direction = 'up',
  staggerChildren,
  viewport = { once: true, margin: '-50px' }
}: AnimatedSectionProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.1,
        staggerChildren: staggerChildren || 0.1,
        delayChildren: delay,
      }
    }
  };

  const itemVariants = variants[direction];

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={staggerChildren ? containerVariants : itemVariants}
      transition={{
        duration,
        delay: staggerChildren ? 0 : delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedItem({
  children,
  className = '',
  delay = 0,
  duration = 0.6,
  direction = 'up'
}: Omit<AnimatedSectionProps, 'staggerChildren' | 'viewport'>) {
  const itemVariants = variants[direction];

  return (
    <motion.div
      className={className}
      variants={itemVariants}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
    >
      {children}
    </motion.div>
  );
}
