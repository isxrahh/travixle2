"use client";

import { useChat } from "@ai-sdk/react";
import { useState, useRef, useEffect } from "react";
import { DefaultChatTransport } from "ai";
import { X } from "lucide-react";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");

  const { messages, sendMessage, status, error } = useChat({
    transport: new DefaultChatTransport({
      api: "/api/chat",
    }),
  });

  const isLoading = status === "submitted" || status === "streaming";

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && status === "ready") {
      sendMessage({ text: input });
      setInput("");
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <div
        className={`transition-all duration-500 ease-out transform ${
          isOpen
            ? "translate-y-0 opacity-100 visible scale-100"
            : "translate-y-4 opacity-0 invisible scale-95"
        }`}
      >
        {isOpen && (
          <div className="mb-4 w-[500px] h-[600px] bg-white dark:bg-zinc-950 rounded-3xl shadow-2xl border border-zinc-200 dark:border-zinc-800 flex flex-col overflow-hidden backdrop-blur-xl">
            <div className="p-6 bg-gradient-to-r from-cyan-700 to-cyan-900 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                      <svg
                        className="w-7 h-7"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full ring-4 ring-white/30"></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Concierge AI</h3>
                    <p className="text-xs opacity-90">
                      Always here to help • Online
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/20 rounded-xl transition-colors"
                >
                  <X />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-gradient-to-b from-zinc-50/50 to-white dark:from-zinc-900/50 dark:to-zinc-950">
              {messages.length === 0 && (
                <div className="text-center mt-20">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl flex items-center justify-center opacity-20">
                    <svg
                      className="w-10 h-10 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <p className="text-zinc-500 dark:text-zinc-400 text-lg font-medium italic">
                    How can I assist you today?
                  </p>
                </div>
              )}

              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex ${
                    m.role === "user" ? "justify-end" : "justify-start"
                  } animate-fade-in`}
                >
                  <div
                    className={`max-w-[85%] px-5 py-4 rounded-3xl text-sm leading-relaxed shadow-md transition-all ${
                      m.role === "user"
                        ? "bg-gradient-to-r from-cyan-700 to-cyan-900 text-white rounded-br-none"
                        : "bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 rounded-bl-none border border-zinc-200 dark:border-zinc-700"
                    }`}
                  >
                    {m.parts
                      ?.filter((part) => part.type === "text")
                      .map((part, i) => (
                        <span key={i}>{part.text}</span>
                      ))}
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white dark:bg-zinc-800 px-5 py-4 rounded-3xl shadow-md flex items-center gap-3">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce delay-100"></div>
                      <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce delay-200"></div>
                    </div>
                    <span className="text-sm text-zinc-500">
                      Concierge is thinking...
                    </span>
                  </div>
                </div>
              )}

              {error && (
                <div className="text-center text-red-500 text-sm">
                  Something went wrong. Please try again.
                </div>
              )}

              <div ref={scrollRef} />
            </div>

            {/* Input Area */}
            <form
              onSubmit={handleSubmit}
              className="p-6 border-t border-zinc-200 dark:border-zinc-800"
            >
              <div className="relative">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  disabled={status !== "ready"}
                  className="w-full px-6 py-4 pr-14 bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-2xl outline-none focus:ring-4 focus:ring-indigo-500/30 focus:border-indigo-500 text-sm transition-all disabled:opacity-60"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || status !== "ready"}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-3 bg-gradient-to-r from-cyan-700 to-cyan-900 text-white rounded-xl hover:scale-110 disabled:opacity-50 disabled:scale-100 transition-all shadow-lg"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M12 5l7 7-7 7 M5 12h14"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-gradient-to-r from-cyan-700 to-cyan-900 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 group"
        aria-label="Open chat"
      >
        {isOpen ? (
          <X className="w-8 h-8 transition-transform group-hover:rotate-90" />
        ) : (
          <div className="relative">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>

            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse ring-4 ring-white"></div>
          </div>
        )}
      </button>
    </div>
  );
}
