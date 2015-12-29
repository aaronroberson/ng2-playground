console.log('! app');

export var dbTest = new Mongo.Collection('test');

import tplWelcome from 'client/welcome.html';
import {Reactive} from 'client/reactive';

import { Component, NgZone, Inject } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';

@Component({
  selector: 'welcome',
  providers: [Reactive],
  directives: [CORE_DIRECTIVES],
  template: tplWelcome
})

export class Welcome {

  constructor(reactive:Reactive) {
    reactive(() => {
      this.items = dbTest.find().fetch();
      window.items = this.items;
      console.log('New data');
    });
  }

  ngOnDestroy() {
    console.log('----- onDestroy');
  }
}
