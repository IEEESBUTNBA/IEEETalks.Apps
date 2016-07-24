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
var router_1 = require("@angular/router");
var event_service_1 = require("./event.service");
var errorMsgHandle_1 = require("../shared/errorMsgHandle");
var EventsListComponet = (function () {
    function EventsListComponet(_eventService, route, _router, _errorMsgHandle) {
        this._eventService = _eventService;
        this.route = route;
        this._router = _router;
        this._errorMsgHandle = _errorMsgHandle;
        this.pageTitle = "Events List";
    }
    EventsListComponet.prototype.ngOnInit = function () {
        var _this = this;
        this._eventService.getEvents()
            .subscribe(function (events) { return _this.eventList = events; }, function (error) { return _this._errorMsgHandle.getErrorMsg(error); });
    };
    EventsListComponet.prototype.onSelect = function (event) {
        this._router.navigate(['/event', event.id]);
    };
    EventsListComponet = __decorate([
        core_1.Component({
            templateUrl: "templates/event/events-list.component.html",
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [event_service_1.EventService, router_1.ActivatedRoute, router_1.Router, errorMsgHandle_1.ErrorMsgHandle])
    ], EventsListComponet);
    return EventsListComponet;
}());
exports.EventsListComponet = EventsListComponet;
