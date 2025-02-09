import { z } from "zod";
import { MODE_SCHEMA, type ModeSetting } from "./schemas.js";
import { Action } from "./Action.js";

export const HEALTH_SCHEMA = z
	.number()
	.min(1)
	.max(200)
	.default(20);
export type HealthSetting = z.infer<typeof HEALTH_SCHEMA>;

export class ChangeHealthAction extends Action {
	private _health: HealthSetting;
	private _mode: ModeSetting;

	constructor({
		health,
		mode,
	}: { health?: HealthSetting; mode?: ModeSetting } = {}) {
        super();
		this._health = HEALTH_SCHEMA.parse(health);
		this._mode = MODE_SCHEMA.parse(mode);
	}

    get mode(): ModeSetting {
        return this._mode
    }

    set mode(value: ModeSetting) {
        this._mode = MODE_SCHEMA.parse(value);
    }

    get health(): HealthSetting {
        return this._health;
    }
    
    set health(value: HealthSetting) {
        this._health = HEALTH_SCHEMA.parse(value);
    }

    override getEditDistance(other: this): number {
        let distance = 0;
        if (this.health !== other.health) distance += 1;
        if (this.mode !== other.mode) distance += 1;
        return distance;
    }
}