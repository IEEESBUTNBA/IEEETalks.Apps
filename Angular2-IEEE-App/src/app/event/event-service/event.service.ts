import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { AuthService } from '../../shared/auth-services/auth.service';
import { ErrorMsgHandleServiceService } from '../../shared/error-msg-handle-service/error-msg-handle-service.service';
import { IEvent } from '../event-entities/ievent';
import { IInscriptionIntended, InscriptionIntended } from '../event-entities/inscriptionIntended';
import { IeventResponse } from '../event-entities/ievent-response';

@Injectable()
export class EventService {

    private _jsonDataUrl = '../../../assets/data/data.json';
    private _url = 'http://localhost:49458/';

    constructor(private _http: Http, private _authService: AuthService, private errorMsg: ErrorMsgHandleServiceService ) { }


    getEvents(): Observable<IEvent[]> {

        return this._http.get(this._url + 'api/events')
            .map((res: Response) => res.json().items)
            // .do(res=>console.log(JSON.stringify(res)))
            .catch(error => this.handleError(error));                      // ------Todo. Implement error handle
    }

    getEventPagination(pageIndex: number): Observable<IeventResponse> {

        const params: URLSearchParams = new URLSearchParams();
        params.set('currentPage', '' + pageIndex);
        const requestOptions = new RequestOptions();
        requestOptions.search = params;

        return this._http.get(this._url + 'api/events', requestOptions)
            .map((res: Response) => res.json())
           // .do(res => console.log(res))
            .catch(error => this.handleError(error));

    }


    getEvent(id): Observable<IEvent> {

        return this._http.get(this._url + 'api/events/' + id)
            .map((res: Response) => res.json())
            // .map(res => res.json().items.filter(event => event.id === id)[0])
            .catch(error => this.handleError(error));                  // ------Todo. Implement error handle
    }


    inscriptionToEvent(id: string) {
        const currentUser = this._authService.getProfile();
        const user: IInscriptionIntended = new InscriptionIntended(currentUser.given_name, currentUser.family_name, currentUser.email, id);
        return this._authService.AuthPost(this._url + 'api/InscriptionIntended', user)
            .map(res => res)
            .catch(error => this.handleError(error));

    }

    handleError(error: Response) {
        this.errorMsg.getErrorMsg(error);
        return Observable.throw(error.statusText || 'server error');
    }


}
