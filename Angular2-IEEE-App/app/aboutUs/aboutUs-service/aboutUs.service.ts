import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Observable";

import {IContributor} from '../aboutUs-entities/Contributor';

import {ErrorMsgHandleService} from "../../shared/errorMsgHandle.service";

@Injectable()
export class AboutService {

    private  _gitApiUrl:string='https://api.github.com/repos/IEEESBUTNBA/IEEETalks/contributors';
    private _dataUrl = '../app/data/contributors.json';

   constructor(private _http: Http, private _errorMsgHandle: ErrorMsgHandleService) { }
    
    getContributors():Observable<IContributor[]> {
        return this._http.get(this._gitApiUrl)
            .map(data => data.json())
            //.do(data => console.log("ALL" + JSON.stringify(data)))
            .catch(error => this.handleError(error));
    }

      private handleError(error: Response) {
        this._errorMsgHandle.getErrorMsg(error);
        return Observable.throw(error || "server error");

    }
}