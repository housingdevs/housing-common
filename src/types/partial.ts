import type { Action } from "./actions.js";
import type { Condition } from "./conditions.js";
import type { ActionHolder } from "./holders.js";

export type PartialElement<T extends { type: any }> = {
    type: T["type"]
} & {
    [K in keyof Omit<T, "type">]?: Wrap<T[K]>;
};

export type PartialActionHolder = PartialElement<ActionHolder>;
export type PartialAction = PartialElement<Action>;
export type PartialCondition = PartialElement<Condition>;

type Wrap<T> =
    T extends Action ? PartialAction :
    T extends Condition ? PartialCondition :
    T extends (infer U)[] ? WrapArray<U> :
    T;

type WrapArray<U> =
    U extends Action ? PartialAction[] :
    U extends Condition ? PartialCondition[] :
    U extends (infer V)[] ? WrapArray<V>[] :
    U[];

