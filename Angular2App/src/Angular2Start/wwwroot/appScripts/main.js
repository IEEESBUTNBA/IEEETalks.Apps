"use strict";
///<reference path="./../typings/browser/ambient/es6-shim/index.d.ts"/>
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var http_1 = require("@angular/http");
var app_component_1 = require('./app.component');
var routes_1 = require('./routes');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [routes_1.APP_ROUTER_PROVIDER, http_1.HTTP_PROVIDERS])
    .catch(function (err) { return console.error(err); });
