import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { map } from 'rxjs/operators';

@Injectable()
export class DopplerService {

    constructor() {}

    private readonly _velocity = new BehaviorSubject<number>(0);
    readonly velocity$ = this._velocity.asObservable();
    readonly velocityInRange$ = this._velocity.asObservable().pipe(
        map(res => {
            if (res >= -100 && res <= 100){
                return res;
            } else {
                if (res > 100) {
                    return 100;
                } else {
                    return -100;
                }
            }
        })
    );

    get velocity():number {
        return this._velocity.getValue();
    }

    set velocity(value: number) {
        this._velocity.next(value);
    }

    updateVelocity(value: number) {
        if (!value) {
            value = 0;
        }
        this.velocity = value;
    }

}