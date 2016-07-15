///<reference path="./../typings/browser/ambient/es6-shim/index.d.ts"/>
import {bootstrap}    from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from "@angular/http";
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import {AppComponent} from './app.component';
import {APP_ROUTER_PROVIDER} from './routes'


bootstrap(AppComponent, [APP_ROUTER_PROVIDER, HTTP_PROVIDERS])

.catch(err => console.error(err));

