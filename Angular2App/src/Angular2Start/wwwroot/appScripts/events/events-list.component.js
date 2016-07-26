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
var angular2_infinite_scroll_1 = require('angular2-infinite-scroll');
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
var EventsListComponet = (function () {
    function EventsListComponet(_http, _eventService, route, _router) {
        this._http = _http;
        this._eventService = _eventService;
        this.route = route;
        this._router = _router;
        this.validate = true;
        this.hasMore = true;
        this.paginationCount = 0;
        this.pageTitle = "Events List";
        this.eventList = new Array();
    }
    EventsListComponet.prototype.ngOnInit = function () {
        this.getEvents();
    };
    EventsListComponet.prototype.onSelect = function (event) {
        this._router.navigate(['/event', event.id]);
    };
    EventsListComponet.prototype.handleError = function (error) {
        // this._errorMsgHandle.getErrorMsg(error);                   
        return Observable_1.Observable.throw(error || "server error");
    };
    EventsListComponet.prototype.onScroll = function () {
        if (this.validate) {
            this.getEvents();
        }
    };
    EventsListComponet.prototype.validatePagination = function () {
        this.validate = true;
        this.getEvents();
    };
    EventsListComponet.prototype.getEvents = function () {
        var _this = this;
        this._eventService.getEventsPagination(this.paginationCount)
            .subscribe(function (response) {
            _this.hasMore = response.hasMore;
            if (response.items != null) {
                response.items.forEach(function (element) {
                    _this.eventList.push(element);
                });
                ++_this.paginationCount;
                if (_this.hasMore && _this.paginationCount % 3 == 0) {
                    _this.validate = false;
                }
            }
        }, function (error) { return error; });
    };
    EventsListComponet = __decorate([
        core_1.Component({
            templateUrl: "templates/event/events-list.component.html",
            directives: [router_1.ROUTER_DIRECTIVES, angular2_infinite_scroll_1.InfiniteScroll]
        }), 
        __metadata('design:paramtypes', [http_1.Http, event_service_1.EventService, router_1.ActivatedRoute, router_1.Router])
    ], EventsListComponet);
    return EventsListComponet;
}());
exports.EventsListComponet = EventsListComponet;
