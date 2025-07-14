import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "Budget.ai", // Unique app ID
  name: "Budget.ai",
  retryFunction: async (attempt) => ({
    delay: Math.pow(2, attempt) * 1000, // Exponential backoff
    maxAttempts: 2,
  }),
});