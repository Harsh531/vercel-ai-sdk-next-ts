import { UIMessage, streamText , convertToModelMessages} from "ai";
import { google } from "@ai-sdk/google";

export async function POST(req: Request) {
    try {
        const {messages}: {messages: UIMessage[]} = await req.json();

        const result = await streamText({
            model : google("gemini-2.5-flash-lite"),
            messages : convertToModelMessages(messages)
        });

        return result.toUIMessageStreamResponse();

    } catch (error) {
        if(error instanceof Error) {
            console.log("Failed to stream chat messages: ", error.message);
            return Response.json({error : error.message || "Failed to stream chat messages"}, {status : 500})
        }
    }
}