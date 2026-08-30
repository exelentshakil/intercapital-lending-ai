import { serve } from "inngest/next";
import { inngest } from "@/inngest/client";
import { processLoanDocument } from "@/inngest/functions";

// Create an API that serves zero-dependency routing for Inngest
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    processLoanDocument,
  ],
});
