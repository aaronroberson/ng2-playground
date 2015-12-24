console.log('! index');

import { bootstrap } from 'angular2/platform/browser';

import { Welcome, dbTest } from 'client/welcome';

window.dbTest = dbTest;

bootstrap( Welcome );

