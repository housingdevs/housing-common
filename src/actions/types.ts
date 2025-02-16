import { z } from "zod";
import { isValidNumericalPlaceholder } from "../helpers.js";

export const MODE_SCHEMA = z.enum([
	"increment",
	"decrement",
	"set",
	"multiply",
	"divide",
]).default("set");

export type Mode = z.infer<typeof MODE_SCHEMA>;

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