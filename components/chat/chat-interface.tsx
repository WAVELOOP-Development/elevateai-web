"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  MessageCircle, 
  Send, 
  X, 
  Minimize2, 
  Maximize2,
  Bot,
  User,
  Loader2
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  isTyping?: boolean;
}

interface ChatInterfaceProps {
  className?: string;
}

export function ChatInterface({ className }: ChatInterfaceProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hello! I'm your ElevateAI assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date(),
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const isMobile = useIsMobile();

  const scrollToBottom = () => {
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen && !isMinimized) {
      // Don't auto-focus on mobile to prevent unwanted keyboard opening
      // Only focus on desktop
      if (!isMobile) {
        setTimeout(() => {
          inputRef.current?.focus();
        }, 100);
      }
      scrollToBottom();
      
      // On mobile, prevent body scroll when chat is open
      if (isMobile) {
        document.body.style.overflow = 'hidden';
      }
    } else {
      // Re-enable body scroll when chat is closed/minimized
      if (isMobile) {
        document.body.style.overflow = 'auto';
      }
    }
    
    // Cleanup function
    return () => {
      if (isMobile) {
        document.body.style.overflow = 'auto';
      }
    };
  }, [isOpen, isMinimized, isMobile]);

  const simulateBotResponse = (userMessage: string) => {
    setIsTyping(true);
    
    setTimeout(() => {
      const responses = [
        "Sorry, Our AI Agent is currently under maintenance. Please fill our contact form and we will get back to you shortly.",
        "Please Use our contact form for any inquiries. Our AI Agent is currently unavailable. Sorry for your inconvenience."
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      const botMessage: Message = {
        id: Date.now().toString(),
        content: randomResponse,
        sender: 'bot',
        timestamp: new Date(),
      };
      
      setMessages(prev => prev.filter(msg => !msg.isTyping).concat([botMessage]));
      setIsTyping(false);
    }, 1000 + Math.random() * 2000);
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    
    simulateBotResponse(inputValue);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className={cn(
          "fixed z-50 h-14 w-14 rounded-full shadow-lg",
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
    <Card 
      className={cn(
        "fixed z-50 shadow-2xl chat-fade-in flex flex-col",
        "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
        "border-border/40",
        // Mobile: positioned at bottom-right, responsive width
        "bottom-6 right-6 w-[calc(100vw-3rem)] max-w-sm",
        // Desktop: positioned at bottom-right
        "md:w-96",
        isMinimized ? "h-14" : isMobile ? "h-[calc(100vh-8rem)] max-h-[550px]" : "h-[600px]",
        className
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-3 md:p-4 border-b border-border/40 flex-shrink-0">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/icon-T-white.png" alt="ElevateAI" />
              <AvatarFallback>
                <Bot className="h-4 w-4" />
              </AvatarFallback>
            </Avatar>
            <div className="absolute -bottom-1 -right-1 h-3 w-3 bg-green-500 rounded-full border-2 border-background" />
          </div>
          <div>
            <h3 className="font-semibold text-sm">ElevateAI Assistant</h3>
            <p className="text-xs text-muted-foreground">Online</p>
          </div>
        </div>
        <div className="flex items-center space-x-1">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 md:h-8 md:w-8"
            onClick={() => setIsMinimized(!isMinimized)}
          >
            {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 md:h-8 md:w-8"
            onClick={() => setIsOpen(false)}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Messages */}
          <div className="flex-1 flex flex-col min-h-0">
            <ScrollArea className="flex-1 px-3 md:px-4 overflow-y-auto">
              <div className="space-y-3 md:space-y-4 pb-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={cn(
                      "flex items-start space-x-2 chat-slide-up",
                      message.sender === 'user' && "flex-row-reverse space-x-reverse"
                    )}
                  >
                  <Avatar className="h-8 w-8 flex-shrink-0">
                    {message.sender === 'bot' ? (
                      <>
                        <AvatarImage src="/icon-T-white.png" alt="Bot" />
                        <AvatarFallback>
                          <Bot className="h-4 w-4" />
                        </AvatarFallback>
                      </>
                    ) : (
                      <>
                        <AvatarImage src="/placeholder-user.jpg" alt="User" />
                        <AvatarFallback>
                          <User className="h-4 w-4" />
                        </AvatarFallback>
                      </>
                    )}
                  </Avatar>
                  <div
                    className={cn(
                      "flex flex-col max-w-[200px] sm:max-w-[250px]",
                      message.sender === 'user' && "items-end"
                    )}
                  >
                    <div
                      className={cn(
                        "rounded-2xl px-3 py-2 text-sm sm:px-4",
                        message.sender === 'bot'
                          ? "bg-muted text-foreground"
                          : "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                      )}
                    >
                      {message.content}
                    </div>
                    <span className="text-xs text-muted-foreground mt-1">
                      {formatTime(message.timestamp)}
                    </span>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex items-start space-x-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/icon-T-white.png" alt="Bot" />
                    <AvatarFallback>
                      <Bot className="h-4 w-4" />
                    </AvatarFallback>
                  </Avatar>
                  <div className="bg-muted rounded-2xl px-4 py-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-muted-foreground/60 rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-muted-foreground/60 rounded-full animate-bounce delay-100" />
                      <div className="w-2 h-2 bg-muted-foreground/60 rounded-full animate-bounce delay-200" />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>
        </div>

        {/* Input */}
        <div className="border-t border-border/40 p-3 md:p-4 flex-shrink-0 bg-background/95">
            <div className="flex space-x-2">
              <Input
                ref={inputRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 text-sm md:text-base"
                disabled={isTyping}
                // Prevent auto-zoom on iOS by setting font-size to 16px minimum
                style={{ fontSize: isMobile ? '16px' : undefined }}
              />
              <Button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isTyping}
                size="icon"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                {isTyping ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Send className="h-4 w-4" />
                )}
              </Button>
            </div>
            <div className="flex items-center justify-between mt-2">
              <p className="text-xs text-muted-foreground">
                Powered by ElevateAI
              </p>
            </div>
          </div>
        </>
      )}
    </Card>
  );
}
