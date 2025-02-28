import type { RefinementCtx } from "zod";
import { span } from "./types/Span.js";
import type { Action } from "./actions/actions.js";

export function isValidNumericalPlaceholder(value: string, ctx: RefinementCtx): void {
    isValidPlaceholder(value, ctx, true);
}

export function isValidPlaceholder(
    value: string,
    ctx: RefinementCtx,
    numerical: boolean = false
): void {
    if (!(value.startsWith("%") && value.endsWith("%"))) {
        ctx.addIssue({
            code: "custom",
            message: "Invalid amount",
        });
    }

    const stripped = value.substring(1, value.length - 1);

    const index = stripped.indexOf("/");
    const name = stripped.substring(0, index == -1 ? stripped.length : index);
    const args = index == -1 ? [] : stripped.substring(index + 1).split(" ");

    function addIssueInvalidPlaceholder() {
        ctx.addIssue({
            code: "custom",
            message: "Invalid placeholder",
            params: { span: span(0, value.length - 1) }
        });
    }

    function addIssueInvalidArgument(message: string) {
        const lo = index == -1 ? value.length - 1 : index + 1;
        ctx.addIssue({
            code: "custom",
            message,
            params: { span: span(lo, value.length - 1) }
        });
    }

    switch (name) {
        case "server.name":
        case "server.shortname":
        case "player.name":
        case "player.version":
        case "player.gamemode":
        case "player.region.name":
        case "player.group.name":
        case "player.group.tag":
        case "player.group.color":
        case "player.team.name":
        case "player.team.tag":
        case "player.team.color":
        case "player.parkour.formatted":
        case "house.name":
        case "house.visitingrules":
            if (args.length > 0) addIssueInvalidArgument("No arguments expected");
            if (numerical) addIssueInvalidPlaceholder();
            break;
        case "player.ping":
        case "player.health":
        case "player.maxhealth":
        case "player.hunger":
        case "player.experience":
        case "player.level":
        case "player.protocol":
        case "player.location.x":
        case "player.location.y":
        case "player.location.z":
        case "player.location.pitch":
        case "player.location.yaw":
        case "player.group.priority":
        case "player.parkour.ticks":
        case "house.guests":
        case "house.cookies":
        case "house.players":
            if (args.length > 0) addIssueInvalidArgument("No arguments expected");
            break;
        case "stat.player":
        case "stat.global":
            if (args.length == 0) addIssueInvalidArgument("Expected stat key");
            break;
        case "stat.team":
            if (args.length == 0) addIssueInvalidArgument("Expected stat key");
            if (args.length == 1) addIssueInvalidArgument("Expected team name");
            if (args.length > 2) addIssueInvalidArgument("Team stat key cannot contain spaces");
            break;
        default:
            addIssueInvalidPlaceholder();
    }
}

export function isValidNbt(nbt: string): boolean {
    return true;
}

export function iter(
    actions: Action[],
    block: (action: Action) => void
) {
    for (const action of actions) {
        block(action);

        if (action.type === "CONDITIONAL") {
            iter(action.ifActions, block);
            iter(action.elseActions, block);
        }

        if (action.type === "RANDOM") {
            iter(action.actions, block);
        }
    }
}

export const ACTION_NAMES: {
    [key in Action["type"]]: string
} = {
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