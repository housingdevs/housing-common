import { z } from "zod";
import { MODE_SCHEMA, type ModeSetting, NUMBER_SCHEMA, PLACEHOLDER_NUMBER_SCHEMA } from "./schemas.js";
import { Action } from "./Action.js";

export const HEALTH_AMOUNT_SCHEMA = NUMBER_SCHEMA
    .min(1n)
    .max(200n)
    .default(20n)
    .or(PLACEHOLDER_NUMBER_SCHEMA);
export type HealthAmountSetting = z.infer<typeof HEALTH_AMOUNT_SCHEMA>;

export class ChangeHealthAction extends Action {
	private _health: HealthAmountSetting;
	private _mode: ModeSetting;

	constructor({
		health,
		mode,
	}: { health?: HealthAmountSetting; mode?: ModeSetting } = {}) {
        super();
		this._health = HEALTH_AMOUNT_SCHEMA.parse(health);
		this._mode = MODE_SCHEMA.parse(mode);
	}

    get mode(): ModeSetting {
        return this._mode
    }

    set mode(value: ModeSetting) {
        this._mode = MODE_SCHEMA.parse(value);
    }

    get health(): HealthAmountSetting {
        return this._health;
    }
    
    set health(value: HealthAmountSetting) {
        this._health = HEALTH_AMOUNT_SCHEMA.parse(value);
    }

    override getEditDistance(other: this): number {
        let distance = 0;
        if (this.health !== other.health) distance += 1;
        if (this.mode !== other.mode) distance += 1;
        return distance;
    }
}