'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { Bot, ArrowLeft, FileText, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { useChat } from 'ai/react';
import { useEffect, useRef } from 'react';

export default function LoanDetailsPage({ params }: { params: { id: string } }) {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    initialMessages: [
      {
        id: 'initial-1',
        role: 'assistant',
        content: "I've analyzed the file for LN-2026-104. The DSCR is strong at 1.35x and LTV is within guidelines at 67.5%.\n\n**Warning:** The Hazard Insurance expires in 15 days. You should condition for an updated policy before closing."
      }
    ]
  });

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  // Function to simulate Inngest event
  const triggerExtraction = async () => {
    try {
      // In a real app, you would POST to an API route that calls inngest.send()
      alert("Inngest Event Fired: 'loan/document.uploaded'. Background processing started!");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-slate-50 overflow-hidden">
      {/* Topbar */}
      <header className="h-16 bg-white border-b flex items-center justify-between px-6 shrink-0">
        <div className="flex items-center gap-4">
          <Link href="/dashboard" className="text-slate-500 hover:text-slate-900 transition-colors">
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <div className="flex items-center gap-3">
            <h1 className="text-xl font-semibold text-slate-800">Loan: LN-2026-104</h1>
            <Badge variant="secondary" className="bg-indigo-100 text-indigo-800 hover:bg-indigo-100">Underwriting</Badge>
          </div>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" size="sm" onClick={triggerExtraction}>Simulate Document Upload</Button>
          <Button size="sm" className="bg-teal-600 hover:bg-teal-700">Approve Loan</Button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Main Content Area */}
        <main className="flex-1 overflow-auto p-6 space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
            
            {/* Left Column: Loan Data & Documents */}
            <div className="lg:col-span-2 space-y-6">
              
              <Card>
                <CardHeader>
                  <CardTitle>AI Document Extraction Summary</CardTitle>
                  <CardDescription>Data automatically extracted and verified by AI from uploaded documents.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  
                  {/* Extracted Metrics */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-slate-500">Subject Value (AVM)</p>
                      <p className="text-xl font-semibold">$1,850,000</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-slate-500">Requested Loan</p>
                      <p className="text-xl font-semibold">$1,250,000</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-slate-500">Calculated LTV</p>
                      <p className="text-xl font-semibold text-teal-600">67.5%</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-slate-500">Calculated DSCR</p>
                      <p className="text-xl font-semibold text-teal-600">1.35x</p>
                    </div>
                  </div>

                  <Separator />
                  
                  {/* Processed Documents */}
                  <div>
                    <h3 className="font-medium text-slate-900 mb-3">Processed Documents</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 border rounded-lg bg-white">
                        <div className="flex items-center gap-3">
                          <div className="bg-indigo-100 p-2 rounded">
                            <FileText className="h-4 w-4 text-indigo-600" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-slate-900">Multifamily_RentRoll_2026.pdf</p>
                            <p className="text-xs text-slate-500">Extracted Gross Income: $185,000/yr</p>
                          </div>
                        </div>
                        <Badge variant="outline" className="bg-teal-50 text-teal-700 border-teal-200 gap-1">
                          <CheckCircle2 className="h-3 w-3" /> Processed
                        </Badge>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 border rounded-lg bg-white">
                        <div className="flex items-center gap-3">
                          <div className="bg-indigo-100 p-2 rounded">
                            <FileText className="h-4 w-4 text-indigo-600" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-slate-900">SmithLLC_OperatingAgreement.pdf</p>
                            <p className="text-xs text-slate-500">Extracted: John Smith (100% Member)</p>
                          </div>
                        </div>
                        <Badge variant="outline" className="bg-teal-50 text-teal-700 border-teal-200 gap-1">
                          <CheckCircle2 className="h-3 w-3" /> Processed
                        </Badge>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 border rounded-lg bg-white border-amber-200">
                        <div className="flex items-center gap-3">
                          <div className="bg-amber-100 p-2 rounded">
                            <FileText className="h-4 w-4 text-amber-600" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-slate-900">HazardInsurance_DecPage.pdf</p>
                            <p className="text-xs text-slate-500">Coverage ends in 15 days</p>
                          </div>
                        </div>
                        <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200 gap-1">
                          <AlertCircle className="h-3 w-3" /> Flagged
                        </Badge>
                      </div>
                    </div>
                  </div>

                </CardContent>
              </Card>
            </div>

            {/* Right Column: AI Co-Pilot (The WOW Factor) */}
            <div className="lg:col-span-1 flex flex-col h-[calc(100vh-120px)] lg:h-auto">
              <Card className="flex-1 flex flex-col shadow-lg border-indigo-200 relative overflow-hidden h-full">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-indigo-500"></div>
                <CardHeader className="bg-indigo-50/50 pb-4 border-b shrink-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Bot className="h-5 w-5 text-indigo-600" />
                      <CardTitle className="text-lg">AI Underwriting Assistant</CardTitle>
                    </div>
                    <Badge variant="outline" className="bg-white">GPT-4o</Badge>
                  </div>
                  <CardDescription>Ask questions about the loan file or request a summary.</CardDescription>
                </CardHeader>
                
                <CardContent ref={scrollRef} className="flex-1 overflow-auto p-4 space-y-4 bg-slate-50">
                  {messages.map((m) => (
                    <div key={m.id} className={`flex gap-3 ${m.role === 'user' ? 'flex-row-reverse' : ''}`}>
                      <div className={`h-8 w-8 rounded-full flex items-center justify-center shrink-0 ${m.role === 'user' ? 'bg-slate-200' : 'bg-indigo-100'}`}>
                        {m.role === 'user' ? (
                          <span className="text-xs font-medium text-slate-600">You</span>
                        ) : (
                          <Bot className="h-4 w-4 text-indigo-600" />
                        )}
                      </div>
                      <div className={`p-3 rounded-lg shadow-sm text-sm whitespace-pre-wrap max-w-[85%] ${
                        m.role === 'user' 
                          ? 'bg-indigo-600 text-white rounded-tr-none' 
                          : 'bg-white border text-slate-700 rounded-tl-none'
                      }`}>
                        {m.content}
                      </div>
                    </div>
                  ))}
                  
                  {isLoading && (
                    <div className="flex gap-3">
                      <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center shrink-0">
                        <Bot className="h-4 w-4 text-indigo-600" />
                      </div>
                      <div className="bg-white border p-3 rounded-lg rounded-tl-none shadow-sm text-sm text-slate-700 flex items-center gap-2">
                        <Loader2 className="h-4 w-4 animate-spin text-indigo-600" /> Thinking...
                      </div>
                    </div>
                  )}
                </CardContent>
                
                <CardFooter className="p-3 bg-white border-t mt-auto shrink-0">
                  <form onSubmit={handleSubmit} className="relative w-full flex items-center">
                    <Textarea 
                      value={input}
                      onChange={handleInputChange}
                      placeholder="Ask the AI about this loan (e.g. 'Who is the authorized signer?')" 
                      className="min-h-[44px] h-[44px] resize-none pr-12 py-3"
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
                      className="absolute right-1 top-1 bottom-1 bg-indigo-600 hover:bg-indigo-700 rounded h-auto"
                    >
                      Send
                    </Button>
                  </form>
                </CardFooter>
              </Card>
            </div>
            
          </div>
        </main>
      </div>
    </div>
  );
}
