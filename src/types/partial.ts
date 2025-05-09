import type { Action } from "./actions.js";
import type { Condition } from "./conditions.js";
import type { ActionHolder } from "./holders.js";

export type PartialElement<T extends { type: string }> = {
    [K in keyof T]: K extends "type" ? T[K] : Wrap<T[K]> | undefined | null;
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

