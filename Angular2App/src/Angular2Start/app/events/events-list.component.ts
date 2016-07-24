import {Component, OnInit} from "@angular/core";
import { ActivatedRoute, ROUTER_DIRECTIVES, Router} from "@angular/router";

import {IEvent} from "./event";
import {EventService} from "./event.service";


@Component({  
    templateUrl: "templates/event/events-list.component.html",
    directives: [ROUTER_DIRECTIVES]    
})

export class EventsListComponet implements OnInit {

    pageTitle: string = "Events List";
    eventList: IEvent[];
    errorMessage: string;
    constructor(private _eventService: EventService, private route: ActivatedRoute, private _router: Router) {
        
    }
       
    ngOnInit(): void {

        this._eventService.getEvents()
            .subscribe(events => this.eventList = events,
            error => error);          
    }

    onSelect(event: IEvent): void {
        this._router.navigate(['/event', event.id]);
        
    }
        
}


