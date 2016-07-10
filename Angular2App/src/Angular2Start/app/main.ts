///<reference path="./../typings/browser/ambient/es6-shim/index.d.ts"/>
import {bootstrap}    from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from "@angular/http";
import { ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import {AppComponent} from './app.component';



bootstrap(AppComponent, [ROUTER_PROVIDERS, { provide: LocationStrategy, useClass: HashLocationStrategy }, HTTP_PROVIDERS]);

