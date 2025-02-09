// type StatMode = "increment" | "decrement" | "set" | "multiply" | "divide";
// type GameMode = "adventure" | "survival" | "creative";

import { ZodError } from "zod";
import { ChangeHealthAction } from "./actions/ChangeHealthAction.js";

try {
	let action = new ChangeHealthAction({ health: 30 });
	console.log(action);
} catch (err) {
	if (err instanceof ZodError) {
		err.issues.forEach(issue => {
			console.error(issue);
		})
	}
}

// TODO: i18n?
