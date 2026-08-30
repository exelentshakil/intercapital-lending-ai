import { openai } from '@ai-sdk/openai';
import { google } from '@ai-sdk/google';
import { streamText } from 'ai';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    // Context for the specific loan to simulate RAG
    const systemPrompt = `
You are an AI Underwriting Assistant for InterCapital Funding, a business-purpose real estate lending company.
You are assisting an underwriter reviewing loan file: LN-2026-104.

Context about the loan:
- Property: 124 Main St. Multifamily
- Borrower Entity: Smith LLC
- Authorized Signer: John Smith (100% Managing Member)
- Requested Loan Amount: $1,250,000
- Appraised Value (AVM): $1,850,000
- Calculated LTV: 67.5%
- Gross Annual Income: $185,000
- Net Operating Income (NOI): $140,000
- Calculated DSCR: 1.35x
- Flagged Issues: The Hazard Insurance policy expires in 15 days.

Your goal is to answer questions based ONLY on this context. Be professional, concise, and helpful. 
If asked to summarize, provide a brief overview of the strengths and weaknesses of the file.
    `;

    // Dynamically choose the model based on which API key is available
    let model;
    if (process.env.OPENAI_API_KEY) {
      model = openai('gpt-4o-mini');
    } else if (process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
      model = google('gemini-1.5-pro-latest');
    } else {
      return new Response(
        JSON.stringify({ error: "No AI API key configured. Please add OPENAI_API_KEY or GOOGLE_GENERATIVE_AI_API_KEY to your environment variables." }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const result = await streamText({
      model,
      system: systemPrompt,
      messages,
    });

    return result.toDataStreamResponse();
  } catch (error) {
    console.error("AI Chat Error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to process AI request." }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
