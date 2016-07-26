import {Component, OnInit} from "@angular/core";
import { ActivatedRoute, ROUTER_DIRECTIVES, Router} from "@angular/router";
import {url} from "../shared/urlConstant";
import {IEvent} from "./event";
import {EventService} from "./event.service";
import { InfiniteScroll } from 'angular2-infinite-scroll';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Observable";


@Component({
    templateUrl: "templates/event/events-list.component.html",
    directives: [ROUTER_DIRECTIVES, InfiniteScroll]
})



export class EventsListComponet implements OnInit {
    validate: boolean = true;
    paginationCount = 1;
    pageTitle: string = "Events List";
    eventList: IEvent[] = new Array<IEvent>();
    errorMessage: string;
    constructor(private _http: Http, private _eventService: EventService, private route: ActivatedRoute, private _router: Router) {

    }

    ngOnInit(): void {

      this.getEvents();
            }

    onSelect(event: IEvent): void {
        this._router.navigate(['/event', event.id]);

    }
    private handleError(error: Response) {
        // this._errorMsgHandle.getErrorMsg(error);                   
        return Observable.throw(error || "server error");

    }
    onScroll() {
        if (this.validate) {
           this.getEvents();
        }
    }
    validatePagination():void{
        this.validate= true;
        this.getEvents();
    }


    private getEvents():void{
         this._eventService.getEventsPagination(this.paginationCount, 15)
                .subscribe(events => {
                    events.forEach(element => {
                        this.eventList.push(element);
                    });
                    ++this.paginationCount;
                    if (this.paginationCount% 3 ==0){
                        this.validate= false;
                    }
                },
                error => error);
    }

}


