"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_deprecated_1 = require("@angular/router-deprecated");
require("rxjs/add/operator/map");
require('rxjs/add/operator/catch');
require('rxjs/add/operator/do');
require('rxjs/add/observable/throw');
var events_list_component_1 = require("./events/events-list.component");
var event_detail_component_1 = require("./events/event-detail.component");
var event_service_1 = require("./events/event.service");
var AppComponent = (function () {
    function AppComponent() {
        this.pageTitle = "IEEE";
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "app",
            templateUrl: "templates/shared/app.component.html",
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
            providers: [event_service_1.EventService]
        }),
        router_deprecated_1.RouteConfig([
            { path: '/events', name: 'Events', component: events_list_component_1.EventsListComponet, useAsDefault: true },
            { path: '/event/:id', name: 'EventDetail', component: event_detail_component_1.EventDetailComponent }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
