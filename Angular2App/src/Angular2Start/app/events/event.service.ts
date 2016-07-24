import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Observable";

import { IEvent } from "./event";
import {IinscriptionIntended} from "../shared/inscriptionIntended";
import {url} from "../shared/urlConstant";
import {ErrorMsgHandleService} from "../shared/errorMsgHandle.service";



@Injectable()
export class EventService {

    private _eventUrl = url + 'api/Events';
    private _inscriptionUrl = url + 'api/InscriptionIntended';

    constructor(private _http: Http, private _errorMsgHandle: ErrorMsgHandleService) { }

    getEvents(): Observable<IEvent[]> {
        return this._http.get(this._eventUrl)
            .map(this.extractData)
            .do(data => console.log("ALL" + JSON.stringify(data)))
            .catch(error => this.handleError(error));
    }

    getEvent(id): Observable<IEvent> {
        return this._http.get(this._eventUrl + "/" + id)
            .map(data => data.json())
            .do(data => console.log("Event" + JSON.stringify(data)))
            .catch(error => this.handleError(error));
    }

    inscriptionToEvent(user: IinscriptionIntended): Observable<IinscriptionIntended> {
        let body = JSON.stringify(user);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        console.log(body);

        return this._http.post(this._inscriptionUrl, body, options)
            .map(user => user.status)
            .catch(error => this.handleError(error));

    }

    private extractData(res: Response) {
        let body = res.json();
        return body.items || {};
    }

    private handleError(error: Response) {
        this._errorMsgHandle.getErrorMsg(error);                   
        return Observable.throw(error || "server error");
            
    }

}