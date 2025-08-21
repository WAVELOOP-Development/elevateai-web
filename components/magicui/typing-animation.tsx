"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface TypingAnimationProps {
  text: string[];
  className?: string;
  duration?: number;
  delay?: number;
}

export function TypingAnimation({
  text,
  className,
  duration = 200,
  delay = 1000,
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = text[currentIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentCharIndex < currentText.length) {
          setDisplayedText(currentText.slice(0, currentCharIndex + 1));
          setCurrentCharIndex(currentCharIndex + 1);
        } else {
          // Finished typing, wait then start deleting
          setTimeout(() => setIsDeleting(true), delay);
        }
      } else {
        // Deleting
        if (currentCharIndex > 0) {
          setDisplayedText(currentText.slice(0, currentCharIndex - 1));
          setCurrentCharIndex(currentCharIndex - 1);
        } else {
          // Finished deleting, move to next text
          setIsDeleting(false);
          setCurrentIndex((currentIndex + 1) % text.length);
        }
      }
    }, isDeleting ? duration / 2 : duration);

    return () => clearTimeout(timeout);
  }, [currentCharIndex, currentIndex, isDeleting, text, duration, delay]);

  return (
    <motion.span
      className={cn(
        "inline-block border-r-2 border-primary",
        className
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {displayedText}
    </motion.span>
  );
}
