"use client";

import { matchIntent } from "@/hooks/intents";
import { useState, useRef, useEffect } from "react";
import { Send, X, MessageCircle, Minimize2 } from "lucide-react";

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { role: "bot", content: "Hi! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && !isMinimized) {
      inputRef.current?.focus();
    }
  }, [isOpen, isMinimized]);

  function sendMessage() {
    if (!input.trim()) return;

    const userMsg = { role: "user", content: input };
    const intentReply = matchIntent(input);

    const botMsg = {
      role: "bot",
      content:
        intentReply ??
        "I can help with booking, pricing, and account questions. Please rephrase your question.",
    };

    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput("");
  }

  function handleKeyPress(e: React.KeyboardEvent) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  return (
    <>
      {/* Chat Widget */}
      <div
        className={`fixed z-50 transition-all duration-300 ease-in-out
          ${
            isOpen
              ? "bottom-4 right-4 sm:bottom-6 sm:right-6"
              : "bottom-4 right-4 sm:bottom-6 sm:right-6"
          }
          ${isMinimized ? "w-80 sm:w-96" : ""}
        `}
      >
        {isOpen ? (
          <div
            className={`
            bg-card border border-border
            rounded-2xl shadow-2xl 
            flex flex-col
            transition-all duration-300
            ${
              isMinimized
                ? "h-14"
                : "h-[500px] sm:h-[600px] w-[calc(100vw-2rem)] sm:w-96"
            }
          `}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border bg-primary rounded-t-2xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center backdrop-blur-sm">
                  <MessageCircle className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary-foreground text-sm sm:text-base">
                    Support Assistant
                  </h3>
                  <p className="text-xs text-primary-foreground/80">
                    We typically reply instantly
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="w-8 h-8 rounded-lg hover:bg-primary-foreground/10 flex items-center justify-center transition-colors"
                  aria-label={isMinimized ? "Expand chat" : "Minimize chat"}
                >
                  <Minimize2 className="w-4 h-4 text-primary-foreground" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-lg hover:bg-primary-foreground/10 flex items-center justify-center transition-colors"
                  aria-label="Close chat"
                >
                  <X className="w-4 h-4 text-primary-foreground" />
                </button>
              </div>
            </div>

            {/* Messages Container */}
            {!isMinimized && (
              <>
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-muted">
                  {messages.map((m, i) => (
                    <div
                      key={i}
                      className={`flex ${
                        m.role === "user" ? "justify-end" : "justify-start"
                      } animate-in fade-in slide-in-from-bottom-2 duration-300`}
                    >
                      <div
                        className={`
                        max-w-[85%] sm:max-w-[80%] rounded-2xl px-4 py-2.5 text-sm sm:text-base
                        ${
                          m.role === "user"
                            ? "bg-primary text-primary-foreground rounded-br-sm"
                            : "bg-card text-card-foreground border border-border rounded-bl-sm shadow-sm"
                        }
                      `}
                      >
                        <div 
                          className="leading-relaxed"
                          dangerouslySetInnerHTML={{ __html: m.content }}
                        />
                        <span
                          className={`text-xs mt-1 block ${
                            m.role === "user"
                              ? "text-primary-foreground/70"
                              : "text-muted-foreground"
                          }`}
                        >
                          {new Date().toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </span>
                      </div>
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="p-4 border-t border-border bg-card">
                  <div className="flex gap-2">
                    <input
                      ref={inputRef}
                      className="
                        flex-1 
                        border border-input 
                        rounded-xl 
                        px-4 py-2.5 
                        text-sm sm:text-base
                        bg-input
                        text-foreground
                        placeholder:text-muted-foreground
                        focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent
                        transition-all
                      "
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Type your message..."
                      aria-label="Message input"
                    />
                    <button
                      onClick={sendMessage}
                      disabled={!input.trim()}
                      className="
                        bg-primary hover:bg-primary/90
                        disabled:bg-muted disabled:text-muted-foreground
                        disabled:cursor-not-allowed
                        text-primary-foreground 
                        px-4 py-2.5 
                        rounded-xl 
                        transition-all
                        hover:shadow-lg
                        active:scale-95
                        flex items-center justify-center
                        min-w-[44px]
                      "
                      aria-label="Send message"
                    >
                      <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2 text-center">
                    Press Enter to send
                  </p>
                </div>
              </>
            )}
          </div>
        ) : (
          /* Floating Action Button */
          <button
            onClick={() => setIsOpen(true)}
            className="
              w-14 h-14 sm:w-16 sm:h-16
              bg-primary
              hover:bg-primary/90
              text-primary-foreground 
              rounded-full 
              shadow-2xl 
              flex items-center justify-center
              transition-all duration-300
              hover:scale-110
              active:scale-95
              group
              relative
            "
            aria-label="Open chat"
          >
            <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 group-hover:scale-110 transition-transform" />
          </button>
        )}
      </div>
    </>
  );
}