﻿import {Component} from "@angular/core";
import { ROUTER_DIRECTIVES } from "@angular/router";
import "rxjs/add/operator/map";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';

import {EventsListComponet} from "./events/events-list.component";
import {EventDetailComponent}from"./events/event-detail.component";
import {EventService} from "./events/event.service";
import {ErrorMsgHandle} from "./shared/errorMsgHandle";

@Component({
    selector: "app",
    templateUrl:"templates/shared/app.component.html" ,
    directives: [ROUTER_DIRECTIVES],
    providers: [EventService, ErrorMsgHandle]
})
       
export class AppComponent {

    pageTitle: string = "IEEE";
}

