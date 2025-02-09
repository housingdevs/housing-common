export abstract class Action {
    // abstract type: string;

    /**
     * The number of operations it takes to transform to another action of the same type, where `0` means the actions are deeply equal.
     * @param other 
     */
    abstract getEditDistance(other: this): number;
}