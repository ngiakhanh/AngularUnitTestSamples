import 'jasmine-core/lib/jasmine-core/jasmine-html.js';
import 'jasmine-core/lib/jasmine-core/boot.js';

declare const jasmine: any;

import './polyfills';

import 'zone.js/testing';

import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

// Import spec files individually for Stackblitz
import './app/app.component.spec';
import './app/my-service.service.spec';
import './app/my-service2.service.spec';
import './app/parent/parent.component.spec';
import './app/complex/complex.component.spec';
import './app/complex/complex.component2.spec';
import './app/async2/async2.component.spec';
import './app/async/async.component.spec';
import './app/async/async.effect.spec';

//
bootstrap();

//
function bootstrap() {
  if ((window as any).jasmineRef) {
    location.reload();
    return;
  } else {
    window.onload?.({} as Event);
    (window as any).jasmineRef = jasmine.getEnv();
  }

  // First, initialize the Angular testing environment.
  getTestBed().initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting()
  );
}
