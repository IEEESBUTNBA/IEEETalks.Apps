import {Component} from "@angular/core";
import { ROUTER_DIRECTIVES } from "@angular/router";
import "rxjs/add/operator/map";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';

import {EventsListComponet} from "./events/events-list/events-list.component";
import {EventDetailComponent}from"./events/event-detail/event-detail.component";
import {EventService} from "./events/event-service/event.service";
import {ErrorMsgHandleService} from "./shared/errorMsgHandle.service";

@Component({
    selector: "app",
    templateUrl:"app/app.component.html" ,
    directives: [ROUTER_DIRECTIVES],
    providers: [EventService, ErrorMsgHandleService]
})
       
export class AppComponent {

    pageTitle: string = "IEEE";
}
