import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Building2, Bot, Database, Workflow, FileText, ArrowRight, ShieldCheck } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Building2 className="text-white h-5 w-5" />
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900">InterCapital AI</span>
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-600">
            <Link href="#features" className="hover:text-blue-600 transition-colors">Features</Link>
            <Link href="#architecture" className="hover:text-blue-600 transition-colors">Architecture</Link>
            <Link href="#demo" className="hover:text-blue-600 transition-colors">Interactive Demo</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="hidden md:flex">Documentation</Button>
            <Link href="/dashboard">
              <Button className="bg-blue-600 hover:bg-blue-700">Enter Platform</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1">
        <section className="py-20 md:py-28 px-4 container mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
            <span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
            Prototype Platform for InterCapital Funding
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 max-w-4xl mx-auto leading-tight mb-6">
            The Next-Generation <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">AI Lending Operations</span> Platform
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10">
            Purpose-built for business-purpose real estate lending. Accelerate underwriting, automate document processing, and deploy capital faster with intelligent workflows.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/dashboard">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto gap-2">
                Launch Demo Dashboard <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/api/inngest" target="_blank">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                View Background Workers
              </Button>
            </Link>
          </div>
        </section>

        {/* Value Proposition Cards */}
        <section id="features" className="py-16 bg-white border-y px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Architected for Speed and Accuracy</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">Combining state-of-the-art LLMs with reliable event-driven background processing to handle complex lending workflows.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border shadow-sm">
                <CardHeader>
                  <div className="h-12 w-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                    <Bot className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>AI Document Extraction</CardTitle>
                  <CardDescription>Powered by GPT-4o / Gemini Pro</CardDescription>
                </CardHeader>
                <CardContent className="text-slate-600">
                  Instantly parse Rent Rolls, Operating Statements, and Appraisals. Calculate DSCR and LTV automatically without manual data entry.
                </CardContent>
              </Card>
              
              <Card className="border shadow-sm">
                <CardHeader>
                  <div className="h-12 w-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                    <Workflow className="h-6 w-6 text-indigo-600" />
                  </div>
                  <CardTitle>Event-Driven Workflows</CardTitle>
                  <CardDescription>Powered by Inngest</CardDescription>
                </CardHeader>
                <CardContent className="text-slate-600">
                  Reliable background processing. Upload a document and fire asynchronous jobs for OCR, API lookups, and underwriting rules without blocking the UI.
                </CardContent>
              </Card>

              <Card className="border shadow-sm">
                <CardHeader>
                  <div className="h-12 w-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                    <Database className="h-6 w-6 text-emerald-600" />
                  </div>
                  <CardTitle>Enterprise Architecture</CardTitle>
                  <CardDescription>C#, SQL, and Python Ready</CardDescription>
                </CardHeader>
                <CardContent className="text-slate-600">
                  Built to integrate with robust relational databases, handle complex data schemas, and bridge modern AI with legacy lending systems.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 py-12 text-center text-slate-400">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Building2 className="h-6 w-6 text-emerald-400" />
            <span className="font-bold text-xl text-white">InterCapital AI</span>
          </div>
          <p className="text-sm text-slate-400">
            Commercial Real Estate Lending Intelligence &amp; Automated Underwriting · Built by{" "}
            <a
              href="https://github.com/exelentshakil"
              target="_blank"
              rel="noreferrer"
              className="text-emerald-400 hover:text-emerald-300 underline"
            >
              Shakil Ahmed
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
