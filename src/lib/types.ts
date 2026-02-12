import z from "zod";
import { recipeSchema } from "./schema";

export type TRecipe = z.infer<typeof recipeSchema>