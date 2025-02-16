import { ZodError } from "zod";
import { ACTION_SCHEMA } from "./actions/actions.js";

function tryParse<T>(block: () => T): T | undefined {
	try {
		return block();
	} catch (err) {
		if (err instanceof ZodError) {
			err.issues.forEach(issue => console.error("error: " + issue.message));
		} else throw err;
	}
}

const health1 = tryParse(() => ACTION_SCHEMA.parse({
	type: "CHANGE_HEALTH",
	amount: "555555555555555555555555"
}))
console.log(health1);

const health2 = tryParse(() => ACTION_SCHEMA.parse({
	type: "CHANGE_HEALTH",
	amount: "abcdefg"
}))
console.log(health2);

const health3 = tryParse(() => ACTION_SCHEMA.parse({
	type: "CHANGE_HEALTH",
	amount: 11,
}))
console.log(health3);

const health4 = tryParse(() => ACTION_SCHEMA.parse({
	type: "CHANGE_HEALTH",
	amount: "%badplaceholder%"
}))
console.log(health4);

const health5 = tryParse(() => ACTION_SCHEMA.parse({
	type: "CHANGE_HEALTH",
	amount: "%player.location.x%"
}))
console.log(health5);