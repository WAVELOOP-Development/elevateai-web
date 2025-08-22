"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ChatContextType {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  messageCount: number;
  incrementMessageCount: () => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export function ChatProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messageCount, setMessageCount] = useState(0);

  const incrementMessageCount = () => {
    setMessageCount(prev => prev + 1);
  };

  const value = {
    isOpen,
    setIsOpen,
    messageCount,
    incrementMessageCount,
  };

  return (
    <ChatContext.Provider value={value}>
      {children}
    </ChatContext.Provider>
  );
}

export function useChat() {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
}
