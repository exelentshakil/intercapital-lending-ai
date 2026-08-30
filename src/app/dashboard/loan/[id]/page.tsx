import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { Bot, ArrowLeft, FileText, CheckCircle2, AlertCircle, Clock } from 'lucide-react';
import Link from 'next/link';

export default function LoanDetailsPage({ params }: { params: { id: string } }) {
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
            <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-100">Underwriting</Badge>
          </div>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" size="sm">Request Conditions</Button>
          <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">Approve Loan</Button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Main Content Area */}
        <main className="flex-1 overflow-auto p-6 space-y-6">
          <div className="grid grid-cols-3 gap-6">
            
            {/* Left Column: Loan Data & Documents */}
            <div className="col-span-2 space-y-6">
              
              <Card>
                <CardHeader>
                  <CardTitle>AI Document Extraction Summary</CardTitle>
                  <CardDescription>Data automatically extracted and verified by AI from uploaded documents.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  
                  {/* Extracted Metrics */}
                  <div className="grid grid-cols-4 gap-4">
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
                      <p className="text-xl font-semibold text-emerald-600">67.5%</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-slate-500">Calculated DSCR</p>
                      <p className="text-xl font-semibold text-emerald-600">1.35x</p>
                    </div>
                  </div>

                  <Separator />
                  
                  {/* Processed Documents */}
                  <div>
                    <h3 className="font-medium text-slate-900 mb-3">Processed Documents</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 border rounded-lg bg-white">
                        <div className="flex items-center gap-3">
                          <div className="bg-blue-100 p-2 rounded">
                            <FileText className="h-4 w-4 text-blue-600" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-slate-900">Multifamily_RentRoll_2026.pdf</p>
                            <p className="text-xs text-slate-500">Extracted Gross Income: $185,000/yr</p>
                          </div>
                        </div>
                        <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200 gap-1">
                          <CheckCircle2 className="h-3 w-3" /> Processed
                        </Badge>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 border rounded-lg bg-white">
                        <div className="flex items-center gap-3">
                          <div className="bg-blue-100 p-2 rounded">
                            <FileText className="h-4 w-4 text-blue-600" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-slate-900">SmithLLC_OperatingAgreement.pdf</p>
                            <p className="text-xs text-slate-500">Extracted: John Smith (100% Member)</p>
                          </div>
                        </div>
                        <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200 gap-1">
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
            <div className="col-span-1 flex flex-col">
              <Card className="flex-1 flex flex-col shadow-lg border-blue-200 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
                <CardHeader className="bg-blue-50/50 pb-4 border-b">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Bot className="h-5 w-5 text-blue-600" />
                      <CardTitle className="text-lg">AI Underwriting Assistant</CardTitle>
                    </div>
                    <Badge variant="outline" className="bg-white">GPT-4o</Badge>
                  </div>
                  <CardDescription>Ask questions about the loan file or request a summary.</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 overflow-auto p-4 space-y-4 bg-slate-50">
                  
                  {/* Chat Messages */}
                  <div className="flex gap-3">
                    <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                      <Bot className="h-4 w-4 text-blue-600" />
                    </div>
                    <div className="bg-white border p-3 rounded-lg rounded-tl-none shadow-sm text-sm text-slate-700">
                      I've analyzed the file for LN-2026-104. The DSCR is strong at 1.35x and LTV is within guidelines at 67.5%. 
                      <br/><br/>
                      <strong>Warning:</strong> The Hazard Insurance expires in 15 days. You should condition for an updated policy before closing.
                    </div>
                  </div>
                  
                  <div className="flex gap-3 flex-row-reverse">
                    <div className="h-8 w-8 rounded-full bg-slate-200 flex items-center justify-center shrink-0">
                      <span className="text-xs font-medium text-slate-600">You</span>
                    </div>
                    <div className="bg-blue-600 text-white p-3 rounded-lg rounded-tr-none shadow-sm text-sm">
                      Who are the authorized signers for the borrowing entity?
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                      <Bot className="h-4 w-4 text-blue-600" />
                    </div>
                    <div className="bg-white border p-3 rounded-lg rounded-tl-none shadow-sm text-sm text-slate-700">
                      Based on the <strong>SmithLLC_OperatingAgreement.pdf</strong> (Page 4, Section 3.1), <strong>John Smith</strong> is the sole Managing Member and has 100% signing authority to encumber property. No other signatures are required.
                    </div>
                  </div>
                  
                </CardContent>
                <CardFooter className="p-3 bg-white border-t mt-auto">
                  <div className="relative w-full flex items-center">
                    <Textarea 
                      placeholder="Ask the AI about this loan..." 
                      className="min-h-[44px] h-[44px] resize-none pr-12 py-3"
                    />
                    <Button size="sm" className="absolute right-1 top-1 bottom-1 bg-blue-600 hover:bg-blue-700 rounded h-auto">
                      Send
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </div>
            
          </div>
        </main>
      </div>
    </div>
  );
}
