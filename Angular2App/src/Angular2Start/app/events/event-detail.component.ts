import { Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router  } from '@angular/router';

import {EventService} from "./event.service";
import {IEvent} from "./event";
import { EventSubscribeComponent} from "./event.subscribe.component";
import {ErrorMsgHandle} from "../shared/errorMsgHandle";


@Component({
    templateUrl: "templates/event/event-detail.component.html",
    directives: [EventSubscribeComponent]  

})

export class EventDetailComponent implements OnInit {

    pageTitle: string;    
    event: IEvent;
    id: string;
    private _routeParam: any;
   


    constructor(private _route: ActivatedRoute,
        private _eventService: EventService,
        private _router: Router,
        private _errorMsgHandle: ErrorMsgHandle
    ) {

    }

    ngOnInit(): void {
        this._routeParam = this._route
            .params
            .subscribe(params => {
                this.id = params['id'];              
            });
        this.getEvent(this.id);         
    }

    getEvent(id: string) {
        this._eventService.getEvent(id)
            .subscribe(event => this.event = event,
            error => this._errorMsgHandle.getErrorMsg(error));
    }

    onBack(): void {       
     this._router.navigate(['/events']);        
    }
}