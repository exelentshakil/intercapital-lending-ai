# InterCapital Funding - AI Lending Operations Platform Prototype

This repository contains the prototype for the AI-powered lending operations platform for InterCapital Funding. It demonstrates a modern, Next.js-based frontend combined with AI capabilities to automate commercial real estate lending workflows.

## The "WOW" Factor
This prototype is designed to win the Upwork bid by showcasing:
1. **Modern, polished UI** tailored for Loan Officers and Underwriters.
2. **AI Underwriting Assistant interface** (RAG concept) where users can query loan documents.
3. **Automated Document Extraction Dashboard** showing calculated LTV, DSCR, and flagged conditions (e.g., expiring insurance).
4. **Event-Driven Architecture concept** using Inngest for background OCR and API lookups.

## Tech Stack
- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS, shadcn/ui
- **Icons:** Lucide React
- **Planned Integrations:** OpenAI/Gemini, Inngest, PostgreSQL (pgvector)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Architecture

See the `PRD.md` file for the full Product Requirements Document outlining the database architecture, rules engine, and AI integrations.
