import type { Comparison, Amount, Gamemode, StatName } from "./types.js";

export type ConditionCompareStat = {
    type: "COMPARE_STAT",
    stat: StatName,
    op: Comparison,
    amount: Amount,
}

export type ConditionCompareGlobalStat = {
    type: "COMPARE_GLOBAL_STAT",
    stat: StatName,
    op: Comparison,
    amount: Amount,
}

export type ConditionCompareTeamStat = {
    type: "COMPARE_TEAM_STAT",
    stat: StatName,
    team: string,
    op: Comparison,
    amount: Amount,
}

export type ConditionRequiredGamemode = {
    type: "REQUIRED_GAMEMODE",
    gamemode: Gamemode,
}

export type ConditionCompareDamage = {
    type: "COMPARE_DAMAGE",
    op: Comparison,
    amount: Amount
}

export type Condition =
    | ConditionCompareStat
    | ConditionCompareGlobalStat
    | ConditionCompareTeamStat
    | ConditionRequiredGamemode
    | ConditionCompareDamage;