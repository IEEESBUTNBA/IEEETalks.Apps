/// <reference path="../typings/main.d.ts" />
/// <reference path="../typings/typings/tsd.d.ts" />
"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var app_component_1 = require('./app.component');
var routes_1 = require('./routes');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [routes_1.APP_ROUTER_PROVIDER, http_1.HTTP_PROVIDERS, forms_1.provideForms(), forms_1.disableDeprecatedForms()])
    .catch(function (err) { return console.error(err); });
//# sourceMappingURL=main.js.map