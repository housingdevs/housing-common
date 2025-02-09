import { z } from "zod";

export const MODE_SCHEMA = z.enum([
	"increment",
	"decrement",
	"set",
	"multiply",
	"divide",
]).default("set");
export type ModeSetting = z.infer<typeof MODE_SCHEMA>;
