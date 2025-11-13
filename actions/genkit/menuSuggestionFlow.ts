"use server";
import { googleAI } from "@genkit-ai/google-genai";
import { genkit, z } from "genkit";
import { openAI } from "@genkit-ai/compat-oai/openai";

const ai = genkit({
  plugins: [googleAI()],
});

export const genkitPrompt = async (article: string) => {
  const newsSummaryFlow = ai.defineFlow(
    {
      name: "newsSummaryFlow",
      inputSchema: z.object({ article: z.string() }),
      outputSchema: z.object({ summary: z.string() }),
      streamSchema: z.string(),
    },
    async ({ article }, { sendChunk }) => {
      const { stream, response } = ai.generateStream({
        model: googleAI.model("gemini-2.5-flash"),
        prompt: `Summarize the text written in this ${article}`,
      });

      for await (const chunk of stream) {
        sendChunk(chunk.text);
      }

      const { text } = await response;
      return { summary: text };
    }
  );
  const response = await newsSummaryFlow.run({ article });
  return response.result;
};

//
