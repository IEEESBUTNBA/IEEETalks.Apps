import { Injectable } from "@angular/core";
import { IEvent } from "./event";
import { Http, Response} from "@angular/http";
import { Observable } from "rxjs/Observable";


@Injectable()
export class EventService {

    private _eventUrl = 'http://localhost:49458/api/Events';

    constructor(private _http: Http ) { }

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

    private extractData(res: Response) {
        let body = res.json();       
        return body.items || {};
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || "server error");
    }
}