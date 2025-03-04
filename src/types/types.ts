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
	| { type: "LOCATION_CUSTOM" }
	| { type: "LOCATION_SPAWN" };

export type Gamemode =
	| "survival"
	| "adventure"
	| "creative";

export type Nbt = string;

export type InventorySlot =
	| "helmet" | "chestplate" | "leggings" | "boots"
	| "first" | "hand"
	| number;  // -1 to 39

export type PotionEffect =
	| "Speed" | "Slowness" | "Haste" | "Mining Fatigue" | "Strength" | "Instant Health" | "Instant Damage" | "Jump Boost"
	| "Nausea" | "Regeneration" | "Resistance" | "Fire Resistance" | "Water Breathing" | "Invisibility" | "Blindness"
	| "Night Vision" | "Hunger" | "Weakness" | "Poison" | "Wither" | "Health Boost" | "Absorption";

export type Event = "Player Join" | "Player Quit" | "Player Death" | "Player Kill" | "Player Respawn" | "Group Change"
	| "PvP State Change" | "Fish Caught" | "Player Enter Portal" | "Player Damage" | "Player Block Break"
	| "Start Parkour" | "Complete Parkour" | "Player Drop Item" | "Player Pick Up Item" | "Player Change Held Item"
	| "Player Toggle Sneak" | "Player Toggle Flight";

export type Lobby = "Main Lobby" | "Tournament Hall" | "Blitz SG" | "The TNT Games" | "Mega Walls" | "Arcade Games"
	| "Cops and Crims" | "UHC Champions" | "Warlords" | "Smash Heroes" | "Housing" | "SkyWars" | "Speed UHC"
	| "Classic Games" | "Prototype" | "Bed Wars" | "Murder Mystery" | "Build Battle" | "Duels" | "Wool Games";