import {Component, OnInit} from "@angular/core";
import { ActivatedRoute, Router} from "@angular/router";
import { MasonryOptions } from 'angular2-masonry';

import {IEvent } from "../events-entities/event";
import {IEventResponse} from "../events-entities/eventResponse";
import {EventService} from "../event-service/event.service";



@Component({
    moduleId:module.id,
    templateUrl: "events-list.component.html",       
})



export class EventsListComponet implements OnInit {
    validate: boolean = true;
    hasMore: boolean = true;
    paginationCount: number = 0;
    pageTitle: string = "Events List";
    eventList: IEvent[] = new Array<IEvent>();
    errorMessage: string;    
    constructor(private _eventService: EventService,private _router:Router) {

    }

    ngOnInit(): void {
        this.getEvents();
    }

    onSelect(event: IEvent): void {      
        this._router.navigate(['/event',event.id]);

    }    
    // onScroll() {
    //     if (this.validate) {
    //         this.getEvents();
    //     }
    // }
    validatePagination(): void {
        this.validate = true;
        this.getEvents();
    }


    // private getEvents(): void {           
    //     this._eventService.getEventsPagination(this.paginationCount)
    //         .subscribe(response => { 
    //             this.hasMore = response.hasMore;
    //             if (response.items != null) {
                    
    //                 response.items.forEach(element => {
    //                     this.eventList.push(element);
    //                 });
    //                 ++this.paginationCount;
    //                 if (this.hasMore && this.paginationCount % 3 == 0) {
    //                     this.validate = false;
    //                 }
    //             }
    //         },
    //         error => error);
    // }

    private getEvents(): void { 
        this._eventService.getEvents()
        .subscribe(events=>this.eventList=events,
         error => error);   
    }

    masonryOptions:MasonryOptions ={
        gutter:10,
        transitionDuration:'0.3s',
        percentPosition:false,
        fitWidth: true        
    }

}