import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FileText, Upload, Plus, Bot, Building, Activity } from 'lucide-react';
import Link from 'next/link';

// Mock data for the pipeline
const pipeline = [
  { id: 'LN-2026-104', property: '124 Main St. Multifamily', borrower: 'Smith LLC', amount: '$1,250,000', status: 'Underwriting', aiScore: 85, lastUpdated: '2 hrs ago' },
  { id: 'LN-2026-105', property: 'Oakwood Retail Center', borrower: 'Oakwood Partners', amount: '$3,400,000', status: 'Doc Collection', aiScore: 72, lastUpdated: '5 hrs ago' },
  { id: 'LN-2026-106', property: 'Industrial Park Whse', borrower: 'Logistics Prop Co', amount: '$850,000', status: 'Approved', aiScore: 94, lastUpdated: '1 day ago' },
];

export default function DashboardPage() {
  return (
    <div className="flex h-screen bg-slate-50">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-slate-300 flex flex-col">
        <div className="p-4 border-b border-slate-800 flex items-center gap-2 text-white">
          <Building className="h-6 w-6 text-blue-500" />
          <span className="font-bold text-lg">InterCapital</span>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <Link href="/dashboard" className="flex items-center gap-3 bg-blue-600/10 text-blue-400 px-3 py-2 rounded-md font-medium">
            <Activity className="h-5 w-5" /> Pipeline
          </Link>
          <Link href="#" className="flex items-center gap-3 hover:bg-slate-800 px-3 py-2 rounded-md font-medium transition-colors">
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
          <h1 className="text-xl font-semibold text-slate-800">Active Pipeline</h1>
          <div className="flex gap-3">
            <Button variant="outline" size="sm" className="gap-2">
              <Upload className="h-4 w-4" /> Bulk Upload
            </Button>
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700 gap-2">
              <Plus className="h-4 w-4" /> New Loan
            </Button>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="flex-1 overflow-auto p-6 space-y-6">
          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>Active Loans</CardDescription>
                <CardTitle className="text-3xl">24</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-emerald-600 font-medium">+3 this week</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>Pipeline Volume</CardDescription>
                <CardTitle className="text-3xl">$42.5M</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-500 font-medium">Avg size: $1.7M</p>
              </CardContent>
            </Card>
            <Card className="bg-blue-600 text-white border-blue-700">
              <CardHeader className="pb-2">
                <CardDescription className="text-blue-100">AI Documents Processed</CardDescription>
                <CardTitle className="text-3xl">1,240</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-blue-100 font-medium">14 hrs saved this week</p>
              </CardContent>
            </Card>
          </div>

          {/* Pipeline Table */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Applications</CardTitle>
              <CardDescription>Click on a loan to view the AI Underwriting Summary</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <table className="w-full text-sm text-left">
                  <thead className="bg-slate-50 text-slate-500 border-b">
                    <tr>
                      <th className="px-4 py-3 font-medium">Loan ID</th>
                      <th className="px-4 py-3 font-medium">Property / Borrower</th>
                      <th className="px-4 py-3 font-medium">Amount</th>
                      <th className="px-4 py-3 font-medium">Status</th>
                      <th className="px-4 py-3 font-medium">AI Risk Score</th>
                      <th className="px-4 py-3 font-medium text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pipeline.map((loan) => (
                      <tr key={loan.id} className="border-b last:border-0 hover:bg-slate-50/50 transition-colors">
                        <td className="px-4 py-4 font-medium text-blue-600">{loan.id}</td>
                        <td className="px-4 py-4">
                          <div className="font-medium text-slate-900">{loan.property}</div>
                          <div className="text-slate-500 text-xs">{loan.borrower}</div>
                        </td>
                        <td className="px-4 py-4 text-slate-700">{loan.amount}</td>
                        <td className="px-4 py-4">
                          <Badge variant={loan.status === 'Approved' ? 'default' : loan.status === 'Underwriting' ? 'secondary' : 'outline'}
                            className={loan.status === 'Approved' ? 'bg-emerald-100 text-emerald-800 hover:bg-emerald-100' : ''}>
                            {loan.status}
                          </Badge>
                        </td>
                        <td className="px-4 py-4">
                          <div className="flex items-center gap-2">
                            <div className="w-full bg-slate-200 rounded-full h-2.5 max-w-[100px]">
                              <div className={`h-2.5 rounded-full ${loan.aiScore > 90 ? 'bg-emerald-500' : loan.aiScore > 80 ? 'bg-blue-500' : 'bg-amber-500'}`} style={{ width: `${loan.aiScore}%` }}></div>
                            </div>
                            <span className="text-xs font-medium text-slate-600">{loan.aiScore}</span>
                          </div>
                        </td>
                        <td className="px-4 py-4 text-right">
                          <Link href={`/dashboard/loan/${loan.id}`}>
                            <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50">Review</Button>
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
