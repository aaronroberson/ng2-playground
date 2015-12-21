/**
 * Created by paul on 21/12/2015.
 */
console.log('! app');

import tplWelcome from 'client/app.html';

import { Component } from 'angular2/core';

@Component({
    selector: 'welcome',
    template: tplWelcome
    //template: '<h1>Welcome to Meteor!</h1>'
})
export class Welcome {

}