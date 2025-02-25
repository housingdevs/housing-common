import { z } from "zod";
import { AMOUNT_SCHEMA, COMPARISON_SCHEMA, GAMEMODE_SCHEMA, STAT_NAME_SCHEMA } from "./types.js";

export const CONDITION_COMPARE_STAT_SCHEMA = z.object({
    type: z.literal("COMPARE_STAT"),
    stat: STAT_NAME_SCHEMA,
    op: COMPARISON_SCHEMA,
    amount: AMOUNT_SCHEMA.default(1n)
});

export const CONDITION_REQUIRED_GAMEMODE_SCHEMA = z.object({
    type: z.literal("REQUIRED_GAMEMODE"),
    gamemode: GAMEMODE_SCHEMA,
});

export const CONDITION_SCHEMA = z.discriminatedUnion("type", [
    CONDITION_COMPARE_STAT_SCHEMA,
    CONDITION_REQUIRED_GAMEMODE_SCHEMA,
]);

export type ConditionInput = z.input<typeof CONDITION_SCHEMA>;
export type Condition = z.output<typeof CONDITION_SCHEMA>;