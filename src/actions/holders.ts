import { z } from "zod";
import { ACTION_SCHEMA } from "./actions.js";

export const HOLDER_FUNCTION_SCHEMA = z.object({
    type: z.literal("FUNCTION"),
    actions: ACTION_SCHEMA.array().default([])
});

export const HOLDER_SCHEMA = z.discriminatedUnion("type", [
    HOLDER_FUNCTION_SCHEMA
]);

export type ActionHolderInput = z.input<typeof HOLDER_SCHEMA>;
export type ActionHolder = z.output<typeof HOLDER_SCHEMA>;