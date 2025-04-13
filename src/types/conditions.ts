import type {
    Comparison,
    Amount,
    Gamemode,
    StatName,
    Permission,
    Nbt,
    ItemLocation,
    PotionEffect,
    ItemProperty
} from "./types.js";

export type ConditionRequireGroup = {
    type: "REQUIRE_GROUP",
    group: string,
    includeHigherGroups: boolean,
};

export type ConditionCompareStat = {
    type: "COMPARE_STAT",
    stat: StatName,
    op: Comparison,
    amount: Amount,
};

export type ConditionCompareGlobalStat = {
    type: "COMPARE_GLOBAL_STAT",
    stat: StatName,
    op: Comparison,
    amount: Amount,
};

export type ConditionRequirePermission = {
    type: "REQUIRE_PERMISSION",
    permission: Permission,
};

export type ConditionIsInRegion = {
    type: "IS_IN_REGION",
    region: string,
};

export type ConditionRequireItem = {
    type: "REQUIRE_ITEM",
    item: Nbt,
    whatToCheck: ItemProperty,
    whereToCheck: ItemLocation,
    amount: "Any Amount" | "Equal or Greater Amount"
};

export type ConditionIsDoingParkour = {
    type: "IS_DOING_PARKOUR"
};

export type ConditionRequirePotionEffect = {
    type: "REQUIRE_POTION_EFFECT",
    effect: PotionEffect,
};

export type ConditionIsSneaking = {
    type: "IS_SNEAKING",
};

export type ConditionIsFlying = {
    type: "IS_FLYING",
};

export type ConditionCompareHealth = {
    type: "COMPARE_HEALTH",
    op: Comparison,
    amount: Amount,
};

export type ConditionCompareMaxHealth = {
    type: "COMPARE_MAX_HEALTH",
    op: Comparison,
    amount: Amount,
};

export type ConditionCompareHunger = {
    type: "COMPARE_HUNGER",
    op: Comparison,
    amount: Amount,
};

export type ConditionRequireGamemode = {
    type: "REQUIRE_GAMEMODE",
    gamemode: Gamemode,
};

export type ConditionComparePlaceholder = {
    type: "COMPARE_PLACEHOLDER",
    placeholder: string,
    op: Comparison,
    amount: Amount,
};

export type ConditionRequireTeam = {
    type: "REQUIRE_TEAM",
    team: string,
};

export type ConditionCompareTeamStat = {
    type: "COMPARE_TEAM_STAT",
    stat: StatName,
    team: string,
    op: Comparison,
    amount: Amount,
};

export type ConditionCompareDamage = {
    type: "COMPARE_DAMAGE",
    op: Comparison,
    amount: Amount,
};

export type Condition = (
    | ConditionRequireGroup
    | ConditionCompareStat
    | ConditionCompareGlobalStat
    | ConditionRequirePermission
    | ConditionIsInRegion
    | ConditionRequireItem
    | ConditionIsDoingParkour
    | ConditionRequirePotionEffect
    | ConditionIsSneaking
    | ConditionIsFlying
    | ConditionCompareHealth
    | ConditionCompareMaxHealth
    | ConditionCompareHunger
    | ConditionRequireGamemode
    | ConditionComparePlaceholder
    | ConditionRequireTeam
    | ConditionCompareTeamStat

    | ConditionCompareDamage
) & { inverted: boolean };