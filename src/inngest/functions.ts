import { inngest } from "./client";

export const processLoanDocument = inngest.createFunction(
  { id: "process-loan-document" },
  { event: "loan/document.uploaded" },
  async ({ event, step }) => {
    // Step 1: Simulate OCR Extraction
    const extractedData = await step.run("extract-text-ocr", async () => {
      // In a real app, this calls AWS Textract or DocumentAI
      await new Promise((resolve) => setTimeout(resolve, 2000));
      return {
        text: "Gross Rent: $185,000, Expenses: $45,000, Net Operating Income: $140,000",
        documentType: event.data.documentType || "Rent Roll",
      };
    });

    // Step 2: Use AI to structure the data
    const structuredData = await step.run("ai-structure-data", async () => {
      // Here we would call OpenAI/Gemini
      await new Promise((resolve) => setTimeout(resolve, 3000));
      return {
        noi: 140000,
        dscr: 1.35,
        confidence: 0.98,
      };
    });

    // Step 3: Update database
    await step.run("update-database", async () => {
      // Simulate DB update
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return { success: true, loanId: event.data.loanId };
    });

    return {
      message: `Successfully processed ${extractedData.documentType} for loan ${event.data.loanId}`,
      metrics: structuredData,
    };
  }
);
