import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Observable";

import { AuthHttp } from 'angular2-jwt';

import { IEvent } from "../events-entities/event";
import { IEventResponse } from "../events-entities/eventResponse";
import {IInscriptionIntended} from "../events-entities/inscriptionIntended";
import {url} from "../../shared/urlConstant";
import {ErrorMsgHandleService} from "../../shared/errorMsgHandle.service";



@Injectable()
export class EventService {
    private _eventUrl = url + 'api/Events';
    private _inscriptionUrl = url + 'api/InscriptionIntended';
    private _dataUrl = './app/data/data.json';

    constructor(private _http: Http,private authHttp:AuthHttp, private _errorMsgHandle: ErrorMsgHandleService) { }

    getEvents(): Observable<IEvent[]> {
        return this._http.get(this._dataUrl)
            .map(this.extractData)
            //.do(data => console.log("ALL" + JSON.stringify(data)))
            .catch(error => this.handleError(error));
    }
     
     test(){
      return   this.authHttp.get('http://localhost:14215/api/user')
      .map(data => data.json())
      .catch(error => this.handleError(error));
     }
    
    
    getEventsPagination(pageIndex: number): Observable<IEventResponse> {       
        return this._http.get(`${this._eventUrl}?request.currentPage=${pageIndex}`)
            .map(data => data.json())
            .do(data => console.log(JSON.stringify(data)))
            .catch(error => this.handleError(error));
    }



    // getEvent(id): Observable<IEvent> {
    //     return this._http.get(this._eventUrl + "/" + id)
    //         .map(data => data.json())
    //         .do(data => console.log("Event" + JSON.stringify(data)))
    //         .catch(error => this.handleError(error));
    // }


      //just for showing 
     getEvent(id): Observable<IEvent> {
        return this._http.get(this._dataUrl)
            .map(data =>data.json().items.filter(data=>data.id==id)[0])
            //.do(data => console.log(data))
            .catch(error => this.handleError(error));
    }



    inscriptionToEvent(user: IInscriptionIntended): Observable<IInscriptionIntended> {
        let body = JSON.stringify(user);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });      

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