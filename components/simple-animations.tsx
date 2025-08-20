'use client';

import { useEffect, useState, useRef, ReactNode } from 'react';

interface SimpleAnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade';
}

export function SimpleAnimatedSection({
  children,
  className = '',
  delay = 0,
  duration = '0.6s',
  direction = 'up'
}: SimpleAnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay * 1000);
        }
      },
      { threshold: 0.1, rootMargin: '-50px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  const getInitialTransform = () => {
    switch (direction) {
      case 'up': return 'translateY(60px)';
      case 'down': return 'translateY(-60px)';
      case 'left': return 'translateX(-60px)';
      case 'right': return 'translateX(60px)';
      case 'scale': return 'scale(0.8)';
      case 'fade': return 'none';
      default: return 'translateY(60px)';
    }
  };

  const animationStyle = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0px) translateX(0px) scale(1)' : getInitialTransform(),
    transition: `all ${duration} cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
    filter: isVisible ? 'blur(0px)' : 'blur(5px)'
  };

  return (
    <div ref={ref} className={className} style={animationStyle}>
      {children}
    </div>
  );
}

interface SimpleStaggeredListProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export function SimpleStaggeredList({
  children,
  className = '',
  staggerDelay = 0.1,
  direction = 'up'
}: SimpleStaggeredListProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '-50px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const childrenArray = Array.isArray(children) ? children : [children];

  return (
    <div ref={ref} className={className}>
      {childrenArray.map((child, index) => (
        <SimpleAnimatedSection
          key={index}
          delay={index * staggerDelay}
          direction={direction}
        >
          {child}
        </SimpleAnimatedSection>
      ))}
    </div>
  );
}

interface SimpleCardAnimationProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  enableHover?: boolean;
}

export function SimpleCardAnimation({
  children,
  className = '',
  delay = 0,
  enableHover = true
}: SimpleCardAnimationProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay * 1000);
        }
      },
      { threshold: 0.1, rootMargin: '-100px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  const animationStyle = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0px) scale(1)' : 'translateY(50px) scale(0.95)',
    transition: 'all 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
  };

  const hoverClass = enableHover ? 'hover:-translate-y-2 hover:scale-105 transition-transform duration-300' : '';

  return (
    <div ref={ref} className={`${className} ${hoverClass}`} style={animationStyle}>
      {children}
    </div>
  );
}
