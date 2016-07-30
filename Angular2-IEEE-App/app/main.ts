/// <reference path="../typings/tsd.d.ts" />

import {bootstrap}    from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from "@angular/http";
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import {disableDeprecatedForms, provideForms} from "@angular/forms";


import {AppComponent} from './app.component';
import {APP_ROUTER_PROVIDER} from './routes'


bootstrap(AppComponent, [APP_ROUTER_PROVIDER, HTTP_PROVIDERS, provideForms(), disableDeprecatedForms()])

.catch(err => console.error(err));
