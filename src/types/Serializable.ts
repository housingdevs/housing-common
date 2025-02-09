/**
 * A generic interface for serializable Housing objects.
 */
interface Serializable<T> {
	toJSON(): object;
	fromJSON(json: object): T;
}
