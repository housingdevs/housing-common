import type { Comparison, Amount, Gamemode, StatName } from "./types.js";

export type ConditionCompareStat = {
    type: "COMPARE_STAT";
    stat: StatName;
    op: Comparison;
    amount: Amount;
}

export type ConditionRequiredGamemode = {
    type: "REQUIRED_GAMEMODE";
    gamemode: Gamemode;
}

export type ConditionCompareDamage = {
    type: "COMPARE_DAMAGE",
    op: Comparison,
    amount: Amount
}

export type Condition =
    | ConditionCompareStat
    | ConditionRequiredGamemode
    | ConditionCompareDamage;