"use strict";
///<reference path="./../typings/browser/ambient/es6-shim/index.d.ts"/>
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var http_1 = require("@angular/http");
var router_deprecated_1 = require('@angular/router-deprecated');
var common_1 = require('@angular/common');
var app_component_1 = require('./app.component');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [router_deprecated_1.ROUTER_PROVIDERS, { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }, http_1.HTTP_PROVIDERS]);
