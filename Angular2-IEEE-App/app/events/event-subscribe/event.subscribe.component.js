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
var forms_1 = require("@angular/forms");
var inscriptionIntended_1 = require("../../shared/inscriptionIntended");
var event_service_1 = require("../event-service/event.service");
var EventSubscribeComponent = (function () {
    function EventSubscribeComponent(_eventService, builder) {
        this._eventService = _eventService;
        this.builder = builder;
        this.inscriptionIntended = new inscriptionIntended_1.InscriptionIntended("", "", "", "");
        this.active = true;
        this.name = new forms_1.FormControl("", [forms_1.Validators.required]);
        this.email = new forms_1.FormControl('', [forms_1.Validators.required]);
        this.lastName = new forms_1.FormControl('', [forms_1.Validators.required]);
        this.subcriptionForm = builder.group({
            name: this.name,
            lastName: this.lastName,
            email: this.email
        });
    }
    EventSubscribeComponent.prototype.onSubscribe = function () {
        var _this = this;
        if (this.subcriptionForm.status == "VALID") {
            this.inscriptionIntended.eventId = this.eventId;
            this._eventService.inscriptionToEvent(this.inscriptionIntended)
                .subscribe(function (status) { return _this.getSuccesrMsg(status); }, function (error) { return error; });
            this.modal = "modal"; //<------------------close modal        
        }
        else {
            this.modal = "";
            this.getFormError();
        }
    };
    EventSubscribeComponent.prototype.getFormError = function () {
        toastr.remove();
        if (this.name.hasError("required")) {
            toastr.warning("Name is required");
        }
        if (this.lastName.hasError("required")) {
            toastr.warning("Last Name is required");
        }
        if (this.email.hasError("required")) {
            toastr.warning("Email is required");
        }
        if (this.email.hasError("pattern")) {
            toastr.warning("Email is not valid");
        }
    };
    EventSubscribeComponent.prototype.getSuccesrMsg = function (status) {
        if (status == 200) {
            toastr.success("You've signed up for the event");
            this.resetForm();
        }
    };
    EventSubscribeComponent.prototype.resetForm = function () {
        var _this = this;
        this.inscriptionIntended.firstName = "";
        this.inscriptionIntended.email = "";
        this.inscriptionIntended.lastName = "";
        this.active = false;
        setTimeout(function () { return _this.active = true; }, 0);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], EventSubscribeComponent.prototype, "eventId", void 0);
    EventSubscribeComponent = __decorate([
        core_1.Component({
            templateUrl: "app/events/event-subscribe/event-subscribe.component.html",
            selector: "app-eventsub",
            providers: [],
            directives: [forms_1.REACTIVE_FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [event_service_1.EventService, forms_1.FormBuilder])
    ], EventSubscribeComponent);
    return EventSubscribeComponent;
}());
exports.EventSubscribeComponent = EventSubscribeComponent;
//# sourceMappingURL=event.subscribe.component.js.map