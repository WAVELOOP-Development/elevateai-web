"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface WarpBackgroundProps {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  [key: string]: any;
}

export const WarpBackground = ({
  children,
  className,
  containerClassName,
  colors = ["#38bdf8", "#818cf8", "#c084fc", "#e879f9", "#22d3ee"],
  backgroundFill = "black",
  blur = 10,
  speed = "fast",
  ...props
}: WarpBackgroundProps) => {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden",
        containerClassName,
      )}
      {...props}
    >
      {/* Background */}
      <div 
        className="absolute inset-0"
        style={{ background: backgroundFill }}
      />
      
      {/* Warp grid effect */}
      <div className="absolute inset-0">
        <svg
          className="absolute inset-0 h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="warp-grid"
              x="0"
              y="0"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="url(#warp-gradient)"
                strokeWidth="1"
                opacity="0.3"
              />
            </pattern>
            <linearGradient id="warp-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              {colors.map((color, index) => (
                <stop
                  key={index}
                  offset={`${(index * 100) / (colors.length - 1)}%`}
                  stopColor={color}
                />
              ))}
            </linearGradient>
            <filter id="warp-blur">
              <feGaussianBlur in="SourceGraphic" stdDeviation={blur} />
            </filter>
          </defs>
          <rect width="100%" height="100%" fill="url(#warp-grid)" />
        </svg>
        
        {/* Animated warp layers */}
        <div className="absolute inset-0">
          {Array.from({ length: 3 }, (_, i) => (
            <div
              key={i}
              className={cn(
                "absolute inset-0 opacity-20",
                speed === "fast" 
                  ? "animate-[warp_8s_ease-in-out_infinite]" 
                  : "animate-[warp_12s_ease-in-out_infinite]"
              )}
              style={{
                background: `radial-gradient(circle at ${30 + i * 20}% ${40 + i * 15}%, ${colors[i % colors.length]} 0%, transparent 50%)`,
                animationDelay: `${i * 2}s`,
                filter: `blur(${blur}px)`,
                transform: `scale(${1 + i * 0.2}) rotate(${i * 45}deg)`,
              }}
            />
          ))}
        </div>
        
        {/* Moving light rays */}
        <div className="absolute inset-0">
          {Array.from({ length: 5 }, (_, i) => (
            <div
              key={i}
              className={cn(
                "absolute h-1 w-full opacity-30",
                speed === "fast" 
                  ? "animate-[slide_6s_linear_infinite]" 
                  : "animate-[slide_9s_linear_infinite]"
              )}
              style={{
                top: `${20 + i * 15}%`,
                background: `linear-gradient(90deg, transparent, ${colors[i % colors.length]}, transparent)`,
                animationDelay: `${i * 1.2}s`,
                filter: `blur(${blur / 2}px)`,
                transform: `skewY(${-15 + i * 5}deg)`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className={cn("relative z-10", className)}>
        {children}
      </div>
    </div>
  );
};

export default WarpBackground;
