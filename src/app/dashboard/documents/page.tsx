import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FileText, Upload, Filter, Bot, Building, Activity, Search } from 'lucide-react';
import Link from 'next/link';

// Mock data for documents
const documents = [
  { id: 'DOC-001', name: 'Multifamily_RentRoll_2026.pdf', type: 'Rent Roll', loanId: 'LN-2026-104', uploadDate: 'Today, 10:30 AM', status: 'Extracted', confidence: 98 },
  { id: 'DOC-002', name: 'SmithLLC_OperatingAgreement.pdf', type: 'Entity Docs', loanId: 'LN-2026-104', uploadDate: 'Today, 10:32 AM', status: 'Extracted', confidence: 95 },
  { id: 'DOC-003', name: 'HazardInsurance_DecPage.pdf', type: 'Insurance', loanId: 'LN-2026-104', uploadDate: 'Yesterday', status: 'Flagged', confidence: 100 },
  { id: 'DOC-004', name: 'Oakwood_Trailing12.xlsx', type: 'Financials', loanId: 'LN-2026-105', uploadDate: 'Yesterday', status: 'Processing', confidence: 0 },
  { id: 'DOC-005', name: 'Appraisal_LogisticsPark.pdf', type: 'Appraisal', loanId: 'LN-2026-106', uploadDate: '3 days ago', status: 'Extracted', confidence: 99 },
];

export default function DocumentsPage() {
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
          <Link href="/dashboard/documents" className="flex items-center gap-3 bg-indigo-600/10 text-indigo-400 px-3 py-2 rounded-md font-medium">
            <FileText className="h-5 w-5" /> Documents
          </Link>
          <Link href="/dashboard/ai-assistant" className="flex items-center gap-3 hover:bg-slate-800 px-3 py-2 rounded-md font-medium transition-colors">
            <Bot className="h-5 w-5" /> AI Assistant
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Topbar */}
        <header className="h-16 bg-white border-b flex items-center justify-between px-6">
          <h1 className="text-xl font-semibold text-slate-800">Document Center</h1>
          <div className="flex gap-3">
            <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700 gap-2">
              <Upload className="h-4 w-4" /> Upload Document
            </Button>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="flex-1 overflow-auto p-6 space-y-6">
          
          {/* Controls */}
          <div className="flex justify-between items-center bg-white p-4 rounded-xl border shadow-sm">
             <div className="flex items-center gap-2 bg-slate-100 rounded-md px-3 py-2 w-96">
                <Search className="h-4 w-4 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Search documents by name, loan ID, or type..." 
                  className="bg-transparent border-none outline-none text-sm w-full text-slate-700 placeholder:text-slate-400"
                />
             </div>
             <Button variant="outline" size="sm" className="gap-2 text-slate-600">
               <Filter className="h-4 w-4" /> Filter
             </Button>
          </div>

          {/* Documents Table */}
          <Card className="border-none shadow-md overflow-hidden rounded-xl">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-100 text-slate-600 border-b">
                <tr>
                  <th className="px-6 py-4 font-semibold text-xs uppercase tracking-wider">Document Name</th>
                  <th className="px-6 py-4 font-semibold text-xs uppercase tracking-wider">Type</th>
                  <th className="px-6 py-4 font-semibold text-xs uppercase tracking-wider">Loan ID</th>
                  <th className="px-6 py-4 font-semibold text-xs uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 font-semibold text-xs uppercase tracking-wider">AI Confidence</th>
                  <th className="px-6 py-4 font-semibold text-xs uppercase tracking-wider text-right">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-slate-100">
                {documents.map((doc) => (
                  <tr key={doc.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600">
                          <FileText className="h-4 w-4" />
                        </div>
                        <span className="font-medium text-slate-900">{doc.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-slate-600">{doc.type}</td>
                    <td className="px-6 py-4">
                      <Link href={`/dashboard/loan/${doc.loanId}`} className="text-indigo-600 hover:underline font-medium">
                        {doc.loanId}
                      </Link>
                    </td>
                    <td className="px-6 py-4">
                      <Badge variant="outline" className={`
                        ${doc.status === 'Extracted' ? 'bg-teal-50 text-teal-700 border-teal-200' : ''}
                        ${doc.status === 'Flagged' ? 'bg-amber-50 text-amber-700 border-amber-200' : ''}
                        ${doc.status === 'Processing' ? 'bg-blue-50 text-blue-700 border-blue-200' : ''}
                      `}>
                        {doc.status}
                      </Badge>
                    </td>
                    <td className="px-6 py-4">
                      {doc.confidence > 0 ? (
                        <div className="flex items-center gap-2">
                           <div className="w-16 bg-slate-100 rounded-full h-1.5">
                             <div className={`h-1.5 rounded-full ${doc.confidence > 90 ? 'bg-teal-500' : 'bg-amber-500'}`} style={{ width: `${doc.confidence}%` }}></div>
                           </div>
                           <span className="text-xs font-medium text-slate-500">{doc.confidence}%</span>
                        </div>
                      ) : (
                        <span className="text-xs text-slate-400 italic">Extracting...</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <Button variant="ghost" size="sm" className="text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50">View Data</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        </div>
      </main>
    </div>
  );
}
