import { type Action } from "./actions.js";
import type { Event } from "./types.js";

export type ActionHolderUnknown = {
    type: "UNKNOWN",
    actions: Action[]
}

export type ActionHolderFunction = {
    type: "FUNCTION",
    name: string,
    actions: Action[]
}

export type ActionHolderEvent = {
    type: "EVENT",
    event: Event,
    actions: Action[]
}

export type ActionHolder =
    | ActionHolderUnknown
    | ActionHolderFunction
    | ActionHolderEvent;