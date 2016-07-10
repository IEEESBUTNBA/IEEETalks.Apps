import {Component, OnInit} from "@angular/core";
import { ROUTER_DIRECTIVES } from "@angular/router-deprecated";

import {IEvent} from "./event";
import {EventService} from "./event.service";

@Component({  
    templateUrl: "templates/event/events-list.component.html",
    directives:[ROUTER_DIRECTIVES]
})

export class EventsListComponet implements OnInit {

    pageTitle: string = "Events List";
    eventList: IEvent[];
    errorMessage: string;    
    constructor(private _eventService: EventService) {
        
    }

    //test only
    detail(): void {
        window.alert("Detail");
    }

    ngOnInit(): void {

        this._eventService.getEvents()
            .subscribe(events => this.eventList = events, 
            error => this.errorMessage = <any>error);          
    }

}


