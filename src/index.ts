import { ZodError } from "zod";
import { ChangeHealthAction } from "./actions/ChangeHealthAction.js";

function tryParse<T>(block: () => T): T | undefined {
	try {
		return block();
	} catch (err) {
		if (err instanceof ZodError) {
			err.issues.forEach(issue => console.error("error: " + issue.message));
		} else throw err;
	}
}

const health1 = tryParse(() => new ChangeHealthAction({ health: "555555555555555555555555" }))
console.log(health1);

const health2 = tryParse(() => new ChangeHealthAction({ health: "abcdefg" }))
console.log(health2);

const health3 = tryParse(() => new ChangeHealthAction({ health: "11" }))
console.log(health3);

const health4 = tryParse(() => new ChangeHealthAction({ health: "%badplaceholder%" }))
console.log(health4);

const health5 = tryParse(() => new ChangeHealthAction({ health: "%player.location.x%" }))
console.log(health5);