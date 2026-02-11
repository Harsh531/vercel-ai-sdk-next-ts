import { generateText } from "ai"
import { google } from '@ai-sdk/google';

export async function POST(req: Request) {
    try {
        const {prompt} = await req.json()
        const { text } = await generateText({
            model: google('gemini-2.5-flash'),
            prompt,
        });

        console.log(text);
        return Response.json({ text })
    } catch (error) {
        if (error instanceof Error) {
            console.log("Error generating text:", error.message)
            return Response.json({ error: error.message  || "Failed to generate text"}, { status: 500 })
        }
    }
}