import { Component, OnInit} from "@angular/core";
import { RouteParams, Router } from '@angular/router-deprecated';

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


    constructor(private _routeParams: RouteParams,
        private _eventService: EventService,
        private _router: Router) {

    }

    ngOnInit(): void {
        let id = this._routeParams.get('id');
        this.getEvent(id);
    }

    getEvent(id: string) {
        this._eventService.getEvent(id)
            .subscribe(event => this.event = event,
            error => this.errorMessage = <any>error);             
    }

    getEventPromise(id: string) {
        this._eventService.getEvent(id)
    }

    onBack(): void {
        this._router.navigate(['Events']);
    }
    
}