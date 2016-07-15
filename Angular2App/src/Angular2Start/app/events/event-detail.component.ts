import { Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router  } from '@angular/router';

import {EventService} from "./event.service";
import {IEvent} from "./event";
import { EventSubscribe} from "./event.subscribe"

@Component({
    templateUrl: "templates/event/event-detail.component.html",
    directives: [EventSubscribe]  

})

export class EventDetailComponent implements OnInit {

    pageTitle: string;
    errorMessage: string;
    event: IEvent;
    id: string;
    private _sub: any;


    constructor(private _route: ActivatedRoute,
        private _eventService: EventService,
        private _router: Router
    ) {

    }

    ngOnInit(): void {
        this._sub = this._route
            .params
            .subscribe(params => {
                this.id = params['id'];              
            });
        this.getEvent(this.id);    
    }

    getEvent(id: string) {
        this._eventService.getEvent(this.id)
            .subscribe(event => this.event = event,
            error => this.errorMessage = <any>error);
    }

    getEventPromise(id: string) {
        this._eventService.getEvent(id)
    }

    onBack(): void {       
     this._router.navigate(['/events']);        
    }

}