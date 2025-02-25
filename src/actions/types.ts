import { z } from "zod";
import { isValidNbt, isValidNumericalPlaceholder } from "../helpers.js";

export const OPERATION_SCHEMA = z.enum([
	"increment",
	"decrement",
	"set",
	"multiply",
	"divide",
]).default("set");

export type Operation = z.infer<typeof OPERATION_SCHEMA>;

export const COMPARISON_SCHEMA = z.enum([
	"less_than",
	"less_than_or_equals",
	"equals",
	"greater_than",
	"greater_than_or_equals",
]).default("equals");

export type Comparison = z.infer<typeof COMPARISON_SCHEMA>;

export const PLACEHOLDER_NUMBER_SCHEMA = z
	.string()
	.superRefine(isValidNumericalPlaceholder);

export const AMOUNT_SCHEMA = z.coerce
	.bigint()
	.min(-9223372036854775808n, { message: "Number exceeds 64-bit integer limit" })
	.max(9223372036854775807n, { message: "Number exceeds 64-bit integer limit" })
	.or(PLACEHOLDER_NUMBER_SCHEMA);

export type Amount = z.infer<typeof AMOUNT_SCHEMA>;

export const STAT_NAME_SCHEMA = z
	.string()
	.min(1, { message: "Stat name must not be empty" })
	.max(16, { message: "Stat name exceeds 16-character limit" })
	.default("Kills");

export const LOCATION_CUSTOM_SCHEMA = z.object({
	type: z.literal("LOCATION_CUSTOM"),
});

export const LOCATION_SPAWN_SCHEMA = z.object({
	type: z.literal("LOCATION_SPAWN")
});

export const LOCATION_SCHEMA = z
	.discriminatedUnion("type", [
		LOCATION_CUSTOM_SCHEMA,
		LOCATION_SPAWN_SCHEMA
	]).default({ type: "LOCATION_SPAWN" });

export type Location = z.infer<typeof LOCATION_SCHEMA>;

export const GAMEMODE_SCHEMA = z.enum([
	"survival",
	"adventure",
	"creative"
]).default("survival");

export type Gamemode = z.infer<typeof GAMEMODE_SCHEMA>;

export const NBT_SCHEMA = z
	.string()
	.superRefine(isValidNbt);

export const INVENTORY_SLOT_SCHEMA = z.enum([
	"helmet",
	"chestplate",
	"leggings",
	"boots",
	"first",
	"hand"
]).or(
	z.number().min(-1).max(39)
).default("first");

export const POTION_EFFECT_SCHEMA = z.enum([
	"Speed", "Slowness", "Haste", "Mining Fatigue", "Strength", "Instant Health",
	"Instant Damage", "Jump Boost", "Nausea", "Regeneration", "Resistance",
	"Fire Resistance", "Water Breathing", "Invisibility", "Blindness", "Night Vision",
	"Hunger", "Weakness", "Poison", "Wither", "Health Boost", "Absorption"
]);