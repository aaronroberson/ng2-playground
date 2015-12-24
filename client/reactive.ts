console.log('! reactive');

import { NgZone, Injectable } from 'angular2/core';

@Injectable()
export class Reactive {
    constructor(zone: NgZone) {
        return function (fn) {
            Tracker.autorun(co => {
                zone.run(()=> {
                    fn();
                })
            })
        }
    }
}