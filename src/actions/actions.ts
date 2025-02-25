import { z } from "zod";
import { AMOUNT_SCHEMA, LOCATION_SCHEMA, OPERATION_SCHEMA, PLACEHOLDER_NUMBER_SCHEMA, STAT_NAME_SCHEMA } from "./types.js";
import { CONDITION_SCHEMA } from "./conditions.js";

export const ACTION_CONDITIONAL_SCHEMA = z.object({
    type: z.literal("CONDITIONAL"),
    matchAny: z.boolean().default(false),
    conditions: z.array(CONDITION_SCHEMA).default([]),
    ifActions: z.lazy(() => ACTION_LIMITED_SCHEMA).array().default([]),
    elseActions: z.lazy(() => ACTION_LIMITED_SCHEMA).array().default([])
});

export const ACTION_SET_GROUP_SCHEMA = z.object({
    type: z.literal("SET_GROUP"),
    group: z.string().optional(),
    demotionProtection: z.boolean().default(true)
});

export const ACTION_KILL_SCHEMA = z.object({
    type: z.literal("KILL")
});

export const ACTION_HEAL_SCHEMA = z.object({
    type: z.literal("HEAL")
});

export const ACTION_TITLE_SCHEMA = z.object({
    type: z.literal("TITLE"),
    title: z.string().default("Hello World!"),
    subtitle: z.string().default(""),
    fadein: z.coerce.number().int()
        .min(0).max(3)
        .default(1),
    stay: z.coerce.number().int()
        .min(0).max(10)
        .default(5),
    fadeout: z.coerce.number().int()
        .min(0).max(3)
        .default(1)
});

export const ACTION_ACTION_BAR_SCHEMA = z.object({
    type: z.literal("ACTION_BAR"),
    message: z.string().default("Hello World!")
});

export const ACTION_RESET_INVENTORY_SCHEMA = z.object({
    type: z.literal("RESET_INVENTORY")
});

export const ACTION_CHANGE_MAX_HEALTH_SCHEMA = z.object({
    type: z.literal("CHANGE_MAX_HEALTH"),
    op: OPERATION_SCHEMA,
    amount: z.coerce.number().int()
        .min(1).max(200)
        .or(PLACEHOLDER_NUMBER_SCHEMA)
        .default(20),
    heal: z.boolean().default(false)
});

export const ACTION_CHANGE_STAT_SCHEMA = z.object({
    type: z.literal("CHANGE_STAT"),
    stat: STAT_NAME_SCHEMA,
    op: OPERATION_SCHEMA,
    amount: AMOUNT_SCHEMA.default(1n)
});

export const ACTION_CHANGE_GLOBAL_STAT_SCHEMA = z.object({
    type: z.literal("CHANGE_GLOBAL_STAT"),
    stat: STAT_NAME_SCHEMA,
    op: OPERATION_SCHEMA,
    amount: AMOUNT_SCHEMA.default(1n)
});

export const ACTION_CHANGE_TEAM_STAT_SCHEMA = z.object({
    type: z.literal("CHANGE_TEAM_STAT"),
    stat: STAT_NAME_SCHEMA,
    team: z.string().optional(),
    op: OPERATION_SCHEMA,
    amount: AMOUNT_SCHEMA.default(1n)
});

export const ACTION_CHANGE_HEALTH_SCHEMA = z.object({
    type: z.literal("CHANGE_HEALTH"),
    op: OPERATION_SCHEMA,
    amount: z.coerce.number().int()
        .min(1).max(200)
        .or(PLACEHOLDER_NUMBER_SCHEMA)
        .default(20)
});

export const ACTION_MESSAGE_SCHEMA = z.object({
    type: z.literal("MESSAGE"),
    message: z.string().default("Hello World!")
});

export const ACTION_RANDOM_SCHEMA = z.object({
    type: z.literal("RANDOM"),
    actions: z.lazy(() => ACTION_LIMITED_SCHEMA).array().default([]),
});

export const ACTION_SET_VELOCITY_SCHEMA = z.object({
    type: z.literal("SET_VELOCITY"),
    x: z.coerce.number().int()
        .min(1).max(10)
        .or(PLACEHOLDER_NUMBER_SCHEMA)
        .default(1),
    y: z.coerce.number().int()
        .min(1).max(10)
        .or(PLACEHOLDER_NUMBER_SCHEMA)
        .default(1),
    z: z.coerce.number().int()
        .min(1).max(10)
        .or(PLACEHOLDER_NUMBER_SCHEMA)
        .default(1)
});

export const ACTION_TELEPORT_SCHEMA = z.object({
    type: z.literal("TELEPORT"),
    location: LOCATION_SCHEMA
});

export const ACTION_SCHEMA = z.discriminatedUnion("type", [
    ACTION_CONDITIONAL_SCHEMA,
    ACTION_SET_GROUP_SCHEMA,
    ACTION_KILL_SCHEMA,
    ACTION_HEAL_SCHEMA,
    ACTION_TITLE_SCHEMA,
    ACTION_ACTION_BAR_SCHEMA,
    ACTION_RESET_INVENTORY_SCHEMA,
    ACTION_CHANGE_MAX_HEALTH_SCHEMA,
    ACTION_CHANGE_STAT_SCHEMA,
    ACTION_CHANGE_GLOBAL_STAT_SCHEMA,
    ACTION_CHANGE_TEAM_STAT_SCHEMA,
    ACTION_CHANGE_HEALTH_SCHEMA,
    ACTION_MESSAGE_SCHEMA,
    ACTION_RANDOM_SCHEMA,
    ACTION_SET_VELOCITY_SCHEMA,
    ACTION_TELEPORT_SCHEMA
]);

export const ACTION_LIMITED_SCHEMA = z.discriminatedUnion("type", [
    ACTION_SET_GROUP_SCHEMA,
    ACTION_KILL_SCHEMA,
    ACTION_HEAL_SCHEMA,
    ACTION_TITLE_SCHEMA,
    ACTION_ACTION_BAR_SCHEMA,
    ACTION_RESET_INVENTORY_SCHEMA,
    ACTION_CHANGE_MAX_HEALTH_SCHEMA,
    ACTION_CHANGE_STAT_SCHEMA,
    ACTION_CHANGE_GLOBAL_STAT_SCHEMA,
    ACTION_CHANGE_TEAM_STAT_SCHEMA,
    ACTION_CHANGE_HEALTH_SCHEMA,
    ACTION_MESSAGE_SCHEMA,
]);

export type ActionInput = z.input<typeof ACTION_SCHEMA>;
export type Action = z.output<typeof ACTION_SCHEMA>;