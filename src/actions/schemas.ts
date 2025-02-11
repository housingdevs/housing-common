import { z } from "zod";
import { isValidNumericalPlaceholder } from "../helpers.js";

export const MODE_SCHEMA = z.enum([
	"increment",
	"decrement",
	"set",
	"multiply",
	"divide",
]).default("set");
export type ModeSetting = z.infer<typeof MODE_SCHEMA>;

export const NUMBER_SCHEMA = z.coerce
	.bigint()
	.min(-9223372036854775808n, { message: "Number exceeds 64-bit integer limit" })
	.max(9223372036854775807n, { message: "Number exceeds 64-bit integer limit" });
export const PLACEHOLDER_NUMBER_SCHEMA = z
	.string()
	.superRefine(isValidNumericalPlaceholder);
export const AMOUNT_SCHEMA = NUMBER_SCHEMA.or(PLACEHOLDER_NUMBER_SCHEMA);

export type AmountSetting = z.infer<typeof AMOUNT_SCHEMA>;