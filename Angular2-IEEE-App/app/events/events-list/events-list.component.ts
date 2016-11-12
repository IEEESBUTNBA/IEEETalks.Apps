import {Component, OnInit,OnChanges} from "@angular/core";
import { ActivatedRoute, Router} from "@angular/router";
import { MasonryOptions } from 'angular2-masonry';

import {IEvent } from "../events-entities/event";
import {IEventResponse} from "../events-entities/eventResponse";
import {EventService} from "../event-service/event.service";
import {AuthService} from "../../shared/auth/auth.service";


declare var Auth0Lock: any;

@Component({
    moduleId:module.id,
    templateUrl: "events-list.component.html",       
})



export class EventsListComponet implements OnInit ,OnChanges{
    validate: boolean = true;
    hasMore: boolean = true;
    paginationCount: number = 0;
    pageTitle: string = "Events List";
    eventList: IEvent[] = new Array<IEvent>();
    errorMessage: string;   
    isLogIn:boolean;
    constructor(private _eventService: EventService,private _router:Router, private _authService:AuthService) {
         
    }

    ngOnInit(): void {        
        this.getEvents(); 
         this._authService.isLogIn()
        .subscribe(d=>this.isLogIn=d);   
         }

     ngOnChanges(){
         
     }    

    onAuth(){         
        this._authService.Authorize();
             
    }
    logOut(){         
        this._authService.logOut();  
       
    }

    isTokenExpired(){
        this._authService.getToken();
    }

    clear(){
         this._authService.clear();
    }
    
     onCallPrivate(){
         this._eventService.test()
         .subscribe(data=>console.log(data));
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