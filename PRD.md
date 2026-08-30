# Product Requirements Document (PRD): InterCapital Funding AI Lending Operations Platform

## 1. Executive Summary
InterCapital Funding requires a proprietary, AI-powered lending operations platform tailored for business-purpose real estate lending. The platform will modernize the loan origination, underwriting, and processing lifecycle by integrating large language models (LLMs), rules-based workflows, automated document processing, and robust database architecture. This system aims to drastically reduce manual data entry, accelerate time-to-close, and improve underwriting accuracy.

## 2. Target Audience & Users
- **Loan Officers (LOs):** Need fast quoting, borrower communication tools, and pipeline visibility.
- **Underwriters:** Require AI-assisted risk analysis, automated document verification, and rules-based exception flagging.
- **Processors:** Need automated document collection, OCR extraction, and API integrations with third-party data providers (credit, title, appraisals).
- **Borrowers/Brokers (External):** Need a seamless portal for document upload, loan status tracking, and conditions management.

## 3. Key Features & Functionality

### 3.1 AI & LLM Integration (The "WOW" Factor)
- **Intelligent Document Processing (IDP):** AI-driven extraction of key data from unstructured real estate documents (Appraisals, Rent Rolls, Operating Statements, LLC docs, Bank Statements).
- **AI Underwriting Assistant:** A conversational AI interface (powered by OpenAI/Gemini) that can answer questions about the loan file (e.g., "What is the DSCR based on the provided rent roll?").
- **Automated Condition Clearing:** AI reviews uploaded documents against loan conditions and recommends approval or rejection based on extracted data.

### 3.2 Rules-Based Workflows
- **Dynamic Task Management:** Tasks are automatically generated based on loan type, state regulations, and specific borrower entity structures.
- **Automated Decision Engine:** Pre-qualification and pricing engines based on configurable LTV, DSCR, and FICO matrices.

### 3.3 Database Architecture & API Connections
- **Robust Relational Database:** SQL-based architecture (PostgreSQL/SQL Server) for structured loan data, integrated with vector databases for AI similarity search and document querying.
- **Third-Party APIs:** Integration with credit bureaus, background checks, property valuation models (AVMs), and e-signature providers.
- **Event-Driven Background Processing:** Use of Inngest (or similar) for reliable background job execution (e.g., triggering OCR when a document is uploaded, syncing API data asynchronously).

## 4. Technology Stack Recommendation
- **Frontend:** Next.js (React), Tailwind CSS, Shadcn UI (for rapid, polished development).
- **Backend:** Node.js (Next.js API Routes) / Python (FastAPI for heavy AI/data processing).
- **Database:** PostgreSQL (with pgvector for AI), Prisma/Drizzle ORM.
- **AI/ML:** OpenAI GPT-4o / Google Gemini 1.5 Pro, LangChain.
- **Background Jobs:** Inngest (Serverless event-driven processing).
- **Deployment:** Vercel.

## 5. Minimum Viable Product (MVP) Scope
1. **Loan Pipeline Dashboard:** View all active loans and their statuses.
2. **AI Document Extraction:** Upload a Rent Roll or Operating Statement and automatically extract income/expense data to calculate DSCR.
3. **Underwriter Chatbot:** Chat interface to query the loan context (RAG - Retrieval-Augmented Generation).
4. **Inngest Background Workflow:** An event that fires on document upload, runs the AI extraction, and updates the database.

## 6. Future Roadmap
- Integration with legacy VBA/C# systems if required for migration.
- Predictive default modeling.
- Automated generation of Term Sheets and Loan Agreements.
