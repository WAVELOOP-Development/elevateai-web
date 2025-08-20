'use client';

import { motion, useSpring, useTransform, MotionValue } from 'motion/react';
import { ReactNode, useRef } from 'react';

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  enableHover?: boolean;
  enableTilt?: boolean;
}

export function AnimatedCard({
  children,
  className = '',
  delay = 0,
  enableHover = true,
  enableTilt = false
}: AnimatedCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ 
        opacity: 1, 
        y: 0, 
        scale: 1,
        transition: {
          duration: 0.7,
          delay,
          ease: [0.25, 0.46, 0.45, 0.94]
        }
      }}
      whileHover={enableHover ? {
        y: -8,
        scale: 1.02,
        transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }
      } : undefined}
      whileTap={enableHover ? { scale: 0.98 } : undefined}
      viewport={{ once: true, margin: '-100px' }}
      style={enableTilt ? {
        transformStyle: 'preserve-3d',
      } : undefined}
    >
      {children}
    </motion.div>
  );
}

interface StaggeredListProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export function StaggeredList({
  children,
  className = '',
  staggerDelay = 0.1,
  direction = 'up'
}: StaggeredListProps) {
  const directionMap = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { y: 0, x: -40 },
    right: { y: 0, x: 40 }
  };

  const { x, y } = directionMap[direction];

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: 0.1,
          }
        }
      }}
    >
      {Array.isArray(children) ? 
        children.map((child, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, x, y, scale: 0.95 },
              visible: { 
                opacity: 1, 
                x: 0, 
                y: 0, 
                scale: 1,
                transition: {
                  duration: 0.6,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }
              }
            }}
          >
            {child}
          </motion.div>
        )) :
        <motion.div
          variants={{
            hidden: { opacity: 0, x, y, scale: 0.95 },
            visible: { 
              opacity: 1, 
              x: 0, 
              y: 0, 
              scale: 1,
              transition: {
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94]
              }
            }
          }}
        >
          {children}
        </motion.div>
      }
    </motion.div>
  );
}

interface FadeInWhenVisibleProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

export function FadeInWhenVisible({
  children,
  className = '',
  delay = 0,
  duration = 0.8
}: FadeInWhenVisibleProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, filter: 'blur(10px)' }}
      whileInView={{ 
        opacity: 1, 
        filter: 'blur(0px)',
        transition: {
          duration,
          delay,
          ease: [0.25, 0.46, 0.45, 0.94]
        }
      }}
      viewport={{ once: true, margin: '-100px' }}
    >
      {children}
    </motion.div>
  );
}
