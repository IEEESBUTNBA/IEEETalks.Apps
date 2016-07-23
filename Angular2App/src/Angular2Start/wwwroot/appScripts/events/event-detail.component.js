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
var router_1 = require('@angular/router');
var event_service_1 = require("./event.service");
var event_subscribe_component_1 = require("./event.subscribe.component");
var EventDetailComponent = (function () {
    function EventDetailComponent(_route, _eventService, _router) {
        this._route = _route;
        this._eventService = _eventService;
        this._router = _router;
    }
    EventDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._sub = this._route
            .params
            .subscribe(function (params) {
            _this.id = params['id'];
        });
        this.getEvent(this.id);
    };
    EventDetailComponent.prototype.getEvent = function (id) {
        var _this = this;
        this._eventService.getEvent(this.id)
            .subscribe(function (event) { return _this.event = event; }, function (error) { return _this.errorMessage = error; });
    };
    EventDetailComponent.prototype.getEventPromise = function (id) {
        this._eventService.getEvent(id);
    };
    EventDetailComponent.prototype.onBack = function () {
        this._router.navigate(['/events']);
    };
    EventDetailComponent = __decorate([
        core_1.Component({
            templateUrl: "templates/event/event-detail.component.html",
            directives: [event_subscribe_component_1.EventSubscribeComponent]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, event_service_1.EventService, router_1.Router])
    ], EventDetailComponent);
    return EventDetailComponent;
}());
exports.EventDetailComponent = EventDetailComponent;
