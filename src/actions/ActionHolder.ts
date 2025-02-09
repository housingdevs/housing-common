// holders should define the actions they allow (and how many)

import type { Action } from "./Action.js";

// subholders (if, else, random action) can only hold what their parent holds
class ActionHolder {
    actions: Action[] = [];
}

// ConditionalHolder

// ConditionalIf
// ConditionalElse
// Function
// Event
