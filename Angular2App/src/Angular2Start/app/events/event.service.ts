import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Observable";

import { IEvent } from "./event";
import {IinscriptionIntended} from "../shared/inscriptionIntended";
import {url} from "../shared/urlConstant";



@Injectable()
export class EventService {

    private _eventUrl = url + 'api/Events';
    private _inscriptionUrl = url + 'api/InscriptionIntended';

    constructor(private _http: Http) { }

    getEvents(): Observable<IEvent[]> {
        return this._http.get(this._eventUrl)
            .map(this.extractData)
            .do(data => console.log("ALL" + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getEvent(id): Observable<IEvent> {
        return this._http.get(this._eventUrl + "/" + id)
            .map(data => data.json())
            .do(data => console.log("Event" + JSON.stringify(data)))
            .catch(this.handleError);
    }

    inscriptionToEvent(user: IinscriptionIntended): Observable<IinscriptionIntended> {
        let body = JSON.stringify(user);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        console.log(body);

        return this._http.post(this._inscriptionUrl, body, options)
            .map(user => user.status)
            .catch(this.handleError);

    }

    private extractData(res: Response) {
        let body = res.json();
        return body.items || {};
    }

    private handleError(error: Response) {
        //console.error(error);
        return Observable.throw(error || "server error");
    }

}