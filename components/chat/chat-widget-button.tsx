"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import { useChat } from './chat-provider';
import { cn } from '@/lib/utils';

interface ChatWidgetButtonProps {
  variant?: 'floating' | 'inline';
  className?: string;
  children?: React.ReactNode;
}

export function ChatWidgetButton({ 
  variant = 'inline', 
  className,
  children 
}: ChatWidgetButtonProps) {
  const { setIsOpen } = useChat();

  if (variant === 'floating') {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className={cn(
          "fixed z-40 h-14 w-14 rounded-full shadow-lg",
          "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700",
          "transition-all duration-300 hover:scale-110",
          // Mobile and Desktop: positioned at bottom-right
          "bottom-6 right-6",
          className
        )}
        size="icon"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="sr-only">Open chat</span>
      </Button>
    );
  }

  return (
    <Button
      onClick={() => setIsOpen(true)}
      className={cn(
        "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700",
        className
      )}
    >
      <MessageCircle className="h-4 w-4 mr-2" />
      {children || "Chat with AI"}
    </Button>
  );
}
