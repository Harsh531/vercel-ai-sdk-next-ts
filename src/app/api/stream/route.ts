import { streamText } from "ai"
import { google } from "@ai-sdk/google"

export async function POST(req: Request) {
    try {
        const { prompt } = await req.json();

        if (!prompt) {
            return Response.json({ error: "Prompt is required" }, { status: 400 });
        }


        const result = await streamText({
            model: google("gemini-2.5-flash-lite"),
            prompt
        });

        result.usage.then((usage) => {
            console.log("Usage:", usage.totalTokens, "tokens used", usage.inputTokens, "input tokens,", usage.outputTokens, "output tokens");
        })


        return result.toUIMessageStreamResponse();
    } catch (error) {
        if (error instanceof Error) {
            console.log("Error generating text:", error.message);
            return Response.json({ error: error.message || "Failed to stream text" }, { status: 500 });
        } else {
            return Response.json({ error: "Unknown error" }, { status: 500 });
        }
    }
}
