import type { Action } from "./types/actions.js";

export const ACTION_NAMES: {
    [key in Action["type"]]: string
} = {
    APPLY_POTION_EFFECT: "",
    CLEAR_POTION_EFFECTS: "",
    FAIL_PARKOUR: "",
    GIVE_EXPERIENCE_LEVELS: "",
    GIVE_ITEM: "",
    REMOVE_ITEM: "",
    SEND_TO_LOBBY: "",
    CONDITIONAL: "Conditional",
    SET_GROUP: "Set Group",
    KILL: "Kill",
    HEAL: "Heal",
    TITLE: "Display Title",
    ACTION_BAR: "Action Bar",
    RESET_INVENTORY: "Reset Inventory",
    CHANGE_MAX_HEALTH: "Change Max Health",
    CHANGE_STAT: "Change Stat",
    CHANGE_GLOBAL_STAT: "Change Global Stat",
    CHANGE_TEAM_STAT: "Change Team Stat",
    CHANGE_HEALTH: "Change Health",
    MESSAGE: "Message",
    EXIT: "Exit",
    RANDOM: "Random",
    SET_VELOCITY: "Set Velocity",
    TELEPORT: "Teleport",
    CANCEL_EVENT: "Cancel Event"
}