import { z } from "zod";
import {
    AMOUNT_SCHEMA, INVENTORY_SLOT_SCHEMA,
    LOCATION_SCHEMA,
    NBT_SCHEMA,
    OPERATION_SCHEMA,
    PLACEHOLDER_NUMBER_SCHEMA, POTION_EFFECT_SCHEMA,
    STAT_NAME_SCHEMA
} from "./types.js";
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

export const ACTION_PARKOUR_CHECKPOINT_SCHEMA = z.object({
    type: z.literal("PARKOUR_CHECKPOINT")
});

export const ACTION_GIVE_ITEM_SCHEMA = z.object({
    type: z.literal("GIVE_ITEM"),
    item: NBT_SCHEMA,
    allowMultiple: z.boolean().default(false),
    slot: INVENTORY_SLOT_SCHEMA,
    replace: z.boolean().default(false)
});

export const ACTION_REMOVE_ITEM_SCHEMA = z.object({
    type: z.literal("GIVE_ITEM"),
    item: NBT_SCHEMA
});

export const ACTION_MESSAGE_SCHEMA = z.object({
    type: z.literal("MESSAGE"),
    message: z.string().default("Hello World!")
});

export const ACTION_APPLY_POTION_EFFECT_SCHEMA = z.object({
    type: z.literal("APPLY_POTION_EFFECT"),
    effect: POTION_EFFECT_SCHEMA,
    duration: z.coerce.number().int()
        .min(1).max(2592000)
        .default(60),
    level: z.coerce.number().int()
        .min(1).max(10)
        .default(1),
    override: z.boolean().default(false),
    showIcon: z.boolean().default(true)
});

export const ACTION_CLEAR_POTION_EFFECTS_SCHEMA = z.object({
    type: z.literal("CLEAR_POTION_EFFECTS")
});

export const ACTION_GIVE_EXPERIENCE_LEVELS_SCHEMA = z.object({
    type: z.literal("GIVE_EXPERIENCE_LEVELS"),
    amount: z.coerce.number().int()
        .min(1).max(10000000) // i dont know the actual max
        .default(1)
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

export const ACTION_EXIT_SCHEMA = z.object({
    type: z.literal("EXIT"),
});

export const ACTION_CANCEL_EVENT_SCHEMA = z.object({
    type: z.literal("CANCEL_EVENT"),
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
    ACTION_TELEPORT_SCHEMA,
    ACTION_EXIT_SCHEMA,
    ACTION_CANCEL_EVENT_SCHEMA,
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
    ACTION_EXIT_SCHEMA,
]);

export type ActionInput = z.input<typeof ACTION_SCHEMA>;
export type Action = z.output<typeof ACTION_SCHEMA>;