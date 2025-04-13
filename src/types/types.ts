import {
	ENCHANTMENTS,
	EVENTS,
	ITEM_LOCATIONS,
	ITEM_PROPERTIES,
	LOBBIES,
	PERMISSIONS,
	POTION_EFFECTS,
	SOUNDS
} from "../helpers.js";

export type Operation =
	| "increment"
	| "decrement"
	| "set"
	| "multiply"
	| "divide";

export type Comparison =
	| "less_than"
	| "less_than_or_equals"
	| "equals"
	| "greater_than"
	| "greater_than_or_equals";

export type Amount = bigint | string;

export type StatName = string;

export type Location =
	| { type: "LOCATION_CUSTOM", value: string }
	| { type: "LOCATION_SPAWN" }
	| { type: "LOCATION_INVOKERS" };

export type Gamemode =
	| "survival"
	| "adventure"
	| "creative";

export type Nbt = string;

export type InventorySlot =
	| "helmet" | "chestplate" | "leggings" | "boots"
	| "first" | "hand"
	| number;  // -1 to 39

export type PotionEffect = (typeof POTION_EFFECTS)[number];
export type Event = (typeof EVENTS)[number];
export type Lobby = (typeof LOBBIES)[number];
export type Enchantment = (typeof ENCHANTMENTS)[number];
export type Sound = (typeof SOUNDS)[number]["path"];
export type Permission = (typeof PERMISSIONS)[number];

export type ItemProperty = (typeof ITEM_PROPERTIES)[number];
export type ItemLocation = (typeof ITEM_LOCATIONS)[number];