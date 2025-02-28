import type { Action } from "./actions.js";
import type { RefinementCtx } from "zod";
import { ACTION_NAMES, iter } from "../helpers.js";

function validateFunction(
    actions: Action[],
    ctx: RefinementCtx
): void {
    function addIssue(message: string) {
        ctx.addIssue({
            code: "custom",
            message,
        });
    }

    iter(actions, (action) => {
        if (["CANCEL_EVENT"].includes(action.type)) {
            addIssue(`${ACTION_NAMES[action.type]} Action must be used in an event`);
        }
    });
}