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
var inscriptionIntended_1 = require("../shared/inscriptionIntended");
var event_service_1 = require("./event.service");
var EventSubscribe = (function () {
    function EventSubscribe(_eventService) {
        this._eventService = _eventService;
        this.user = new inscriptionIntended_1.InscriptionIntended("", "", "", "");
        this.active = true;
    }
    EventSubscribe.prototype.ngOnInit = function () {
    };
    EventSubscribe.prototype.onCleanMessage = function () {
        this.errorMessage = "";
        this.succesMessage = "";
    };
    EventSubscribe.prototype.resetForm = function () {
        var _this = this;
        this.active = false;
        setTimeout(function () { return _this.active = true; }, 0);
    };
    EventSubscribe.prototype.onSubscribe = function () {
        var _this = this;
        this.user.eventId = this.eventId;
        this._eventService.inscriptionToEvent(this.user)
            .subscribe(function (status) { return _this.getSuccesrMsj(status); }, function (error) { return _this.getErrorMsj(error); });
    };
    EventSubscribe.prototype.getSuccesrMsj = function (status) {
        if (status == 200) {
            this.succesMessage = "You've signed up for the event";
            this.errorMessage = "";
            this.user.firstName = "";
            this.user.email = "";
            this.user.lastName = "";
            this.resetForm();
        }
    };
    EventSubscribe.prototype.getErrorMsj = function (error) {
        if (error.status == 409) {
            this.errorMessage = error.json()[0].ErrorMessage;
            this.succesMessage = "";
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], EventSubscribe.prototype, "eventId", void 0);
    EventSubscribe = __decorate([
        core_1.Component({
            templateUrl: "templates/event/event-subscribe.component.html",
            selector: "app-eventsub"
        }), 
        __metadata('design:paramtypes', [event_service_1.EventService])
    ], EventSubscribe);
    return EventSubscribe;
}());
exports.EventSubscribe = EventSubscribe;
