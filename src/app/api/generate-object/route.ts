import { google } from "@ai-sdk/google";
import { generateObject } from "ai";
import z from "zod";

const schema = z.object({
    recipe: z.object({
        name: z.string(),
        ingredients: z.array(z.object({ name: z.string(), amount: z.string() })),
        steps: z.array(z.string()),
    }),
})

export async function POST(req: Request) {
    try {
        const { prompt } = await req.json();
        const {object : {recipe}} = await generateObject({
            model: google('gemini-2.5-flash'),
            prompt,
            schema
        });

        console.log(recipe, "Recipe");
        return Response.json({ recipe });

    } catch (error) {
        if (error instanceof Error) {
            console.log("Error generating structured object:", error.message)
            return Response.json({ error: error.message || "Failed to generate structured object" }, { status: 500 })
        }
    }
}