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
var inscriptionIntended_1 = require("../shared/inscriptionIntended");
var event_service_1 = require("./event.service");
var EventSubscribeComponent = (function () {
    function EventSubscribeComponent(_eventService, builder) {
        this._eventService = _eventService;
        this.builder = builder;
        this.inscriptionIntended = new inscriptionIntended_1.InscriptionIntended("", "", "", "");
        this.active = true;
        this.name = new forms_1.FormControl("", [forms_1.Validators.required], []);
        this.email = new forms_1.FormControl('', [forms_1.Validators.required], []);
        this.lastName = new forms_1.FormControl('', [forms_1.Validators.required], []);
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
                .subscribe(function (status) { return _this.getSuccesrMsg(status); }, function (error) { return _this.getErrorMsg(error); });
            this.modal = "modal"; //close modal        
        }
        else {
            this.modal = "";
            this.getFormError();
        }
    };
    EventSubscribeComponent.prototype.getFormError = function () {
        toastr.clear();
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
    EventSubscribeComponent.prototype.resetForm = function () {
        var _this = this;
        this.active = false;
        setTimeout(function () { return _this.active = true; }, 0);
    };
    EventSubscribeComponent.prototype.getSuccesrMsg = function (status) {
        if (status == 200) {
            toastr.success("You've signed up for the event");
            this.inscriptionIntended.firstName = "";
            this.inscriptionIntended.email = "";
            this.inscriptionIntended.lastName = "";
            this.resetForm();
        }
    };
    ///TODO move this to a more generic componet for handling all errorMsg in the app
    EventSubscribeComponent.prototype.getErrorMsg = function (error) {
        if (error.status == 409) {
            for (var _i = 0, _a = error.json(); _i < _a.length; _i++) {
                var item = _a[_i];
                toastr.error(item.ErrorMessage);
            }
        }
        if (error.status == 500) {
            for (var _b = 0, _c = error.json(); _b < _c.length; _b++) {
                var item = _c[_b];
                toastr.error(item.ErrorMessage);
            }
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], EventSubscribeComponent.prototype, "eventId", void 0);
    EventSubscribeComponent = __decorate([
        core_1.Component({
            templateUrl: "templates/event/event-subscribe.component.html",
            selector: "app-eventsub",
            providers: [],
            directives: [forms_1.REACTIVE_FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [event_service_1.EventService, forms_1.FormBuilder])
    ], EventSubscribeComponent);
    return EventSubscribeComponent;
}());
exports.EventSubscribeComponent = EventSubscribeComponent;
