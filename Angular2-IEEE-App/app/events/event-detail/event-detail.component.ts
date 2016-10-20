import { Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router  } from '@angular/router';

import {EventService} from "../event-service/event.service";
import {IEvent} from "../events-entities/event";


@Component({
    templateUrl: "app/events/event-detail/event-detail.component.html"    
})

export class EventDetailComponent implements OnInit {

    pageTitle: string;    
    event: IEvent;
    id: string;
    private _routeParam: any; 
    isOpen:boolean=false;


    constructor(private _route: ActivatedRoute,
        private _eventService: EventService,
        private _router: Router) {

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
            error => error);
    }

    onBack(): void {       
     this._router.navigate(['/events']);        
    }

    openModal():void{
       this.isOpen = true;      
    }

    closeModal():void{        
       this.isOpen=false;
    }
}