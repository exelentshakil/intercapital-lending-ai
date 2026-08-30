'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Bot, FileText, Building, Activity, Loader2, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useChat } from 'ai/react';
import { useEffect, useRef } from 'react';

export default function GlobalAIPage() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    initialMessages: [
      {
        id: 'initial-1',
        role: 'assistant',
        content: "Hello! I am your global AI Underwriting Assistant. I have access to your entire pipeline and all processed documents.\n\nYou can ask me things like:\n- *\"Show me all loans with an LTV over 75%\"*\n- *\"Which loans have expiring insurance this week?\"*\n- *\"Summarize the Rent Roll for LN-2026-105\"*"
      }
    ]
  });

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="flex h-screen bg-slate-50">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-slate-300 flex flex-col">
        <div className="p-4 border-b border-slate-800 flex items-center gap-2 text-white">
          <Building className="h-6 w-6 text-indigo-500" />
          <span className="font-bold text-lg tracking-tight">InterCapital</span>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <Link href="/dashboard" className="flex items-center gap-3 hover:bg-slate-800 px-3 py-2 rounded-md font-medium transition-colors">
            <Activity className="h-5 w-5" /> Pipeline
          </Link>
          <Link href="/dashboard/documents" className="flex items-center gap-3 hover:bg-slate-800 px-3 py-2 rounded-md font-medium transition-colors">
            <FileText className="h-5 w-5" /> Documents
          </Link>
          <Link href="/dashboard/ai-assistant" className="flex items-center gap-3 bg-indigo-600/10 text-indigo-400 px-3 py-2 rounded-md font-medium">
            <Bot className="h-5 w-5" /> AI Assistant
          </Link>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col overflow-hidden bg-white">
        {/* Topbar */}
        <header className="h-16 border-b flex items-center px-6 shrink-0 bg-white">
          <div className="flex items-center gap-2">
            <div className="bg-indigo-100 p-1.5 rounded-md">
              <Sparkles className="h-5 w-5 text-indigo-600" />
            </div>
            <h1 className="text-xl font-semibold text-slate-800">Global AI Copilot</h1>
          </div>
          <Badge variant="outline" className="ml-4 bg-slate-50 text-slate-500">Connected to Pipeline Data</Badge>
        </header>

        {/* Chat Area */}
        <div className="flex-1 overflow-auto p-6 lg:p-12" ref={scrollRef}>
          <div className="max-w-3xl mx-auto space-y-8 pb-12">
            {messages.map((m) => (
              <div key={m.id} className={`flex gap-4 ${m.role === 'user' ? 'flex-row-reverse' : ''}`}>
                <div className={`h-10 w-10 rounded-xl flex items-center justify-center shrink-0 shadow-sm ${m.role === 'user' ? 'bg-slate-100 text-slate-600' : 'bg-indigo-600 text-white'}`}>
                  {m.role === 'user' ? (
                    <span className="text-sm font-bold">You</span>
                  ) : (
                    <Bot className="h-5 w-5" />
                  )}
                </div>
                <div className={`p-4 rounded-2xl shadow-sm text-sm leading-relaxed whitespace-pre-wrap max-w-[85%] ${
                  m.role === 'user' 
                    ? 'bg-slate-100 text-slate-800 rounded-tr-none' 
                    : 'bg-white border border-slate-200 text-slate-700 rounded-tl-none'
                }`}>
                  {m.content}
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex gap-4">
                <div className="h-10 w-10 rounded-xl bg-indigo-600 flex items-center justify-center shrink-0 shadow-sm text-white">
                  <Bot className="h-5 w-5" />
                </div>
                <div className="bg-white border border-slate-200 p-4 rounded-2xl rounded-tl-none shadow-sm text-sm text-slate-700 flex items-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin text-indigo-600" /> Accessing Pipeline Database...
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Input Area */}
        <div className="p-6 bg-white border-t shrink-0">
          <div className="max-w-3xl mx-auto relative">
            <form onSubmit={handleSubmit} className="relative shadow-sm rounded-xl overflow-hidden border border-slate-300 focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500 transition-all bg-white">
              <Textarea 
                value={input}
                onChange={handleInputChange}
                placeholder="Message your AI Copilot..." 
                className="min-h-[60px] max-h-[200px] resize-none border-0 focus-visible:ring-0 px-4 py-4 pr-16 bg-transparent"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    // @ts-ignore
                    handleSubmit(e);
                  }
                }}
              />
              <Button 
                type="submit" 
                size="sm" 
                disabled={isLoading || !input.trim()}
                className="absolute right-2 bottom-2 bg-indigo-600 hover:bg-indigo-700 h-8 w-8 p-0 rounded-lg"
              >
                <Sparkles className="h-4 w-4" />
              </Button>
            </form>
            <p className="text-center text-xs text-slate-400 mt-3 font-medium">
              AI can make mistakes. Always verify critical underwriting data against original documents.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
