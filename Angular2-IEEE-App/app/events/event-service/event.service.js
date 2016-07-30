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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
var urlConstant_1 = require("../../shared/urlConstant");
var errorMsgHandle_service_1 = require("../../shared/errorMsgHandle.service");
var EventService = (function () {
    function EventService(_http, _errorMsgHandle) {
        this._http = _http;
        this._errorMsgHandle = _errorMsgHandle;
        this._eventUrl = urlConstant_1.url + 'api/Events';
        this._inscriptionUrl = urlConstant_1.url + 'api/InscriptionIntended';
    }
    EventService.prototype.getEvents = function () {
        var _this = this;
        return this._http.get(this._eventUrl)
            .map(this.extractData)
            .do(function (data) { return console.log("ALL" + JSON.stringify(data)); })
            .catch(function (error) { return _this.handleError(error); });
    };
    EventService.prototype.getEventsPagination = function (pageIndex) {
        var _this = this;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.get(this._eventUrl + "?request.currentPage=" + pageIndex, options)
            .map(function (data) { return data.json(); })
            .do(function (data) { return console.log("ALL" + JSON.stringify(data)); })
            .catch(function (error) { return _this.handleError(error); });
    };
    EventService.prototype.getEvent = function (id) {
        var _this = this;
        return this._http.get(this._eventUrl + "/" + id)
            .map(function (data) { return data.json(); })
            .do(function (data) { return console.log("Event" + JSON.stringify(data)); })
            .catch(function (error) { return _this.handleError(error); });
    };
    EventService.prototype.inscriptionToEvent = function (user) {
        var _this = this;
        var body = JSON.stringify(user);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        console.log(body);
        return this._http.post(this._inscriptionUrl, body, options)
            .map(function (user) { return user.status; })
            .catch(function (error) { return _this.handleError(error); });
    };
    EventService.prototype.extractData = function (res) {
        var body = res.json();
        return body.items || {};
    };
    EventService.prototype.handleError = function (error) {
        this._errorMsgHandle.getErrorMsg(error);
        return Observable_1.Observable.throw(error || "server error");
    };
    EventService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, errorMsgHandle_service_1.ErrorMsgHandleService])
    ], EventService);
    return EventService;
}());
exports.EventService = EventService;
//# sourceMappingURL=event.service.js.map