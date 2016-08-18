import {Component, OnInit} from "@angular/core";
import { ActivatedRoute, ROUTER_DIRECTIVES, Router} from "@angular/router";
import {url} from "../../shared/urlConstant";
import {IEvent, IEventResponse} from "../event";
import {EventService} from "../event-service/event.service";
import { InfiniteScroll } from 'angular2-infinite-scroll';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Observable";


@Component({
    templateUrl: "app/events/events-list/events-list.component.html",
    directives: [ROUTER_DIRECTIVES, InfiniteScroll]
})



export class EventsListComponet implements OnInit {
    validate: boolean = true;
    hasMore: boolean = true;
    paginationCount = 0;
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
    validatePagination(): void {
        this.validate = true;
        this.getEvents();
    }


    private getEvents(): void {
        this._eventService.getEventsPagination(this.paginationCount)
            .subscribe(response => {
                this.hasMore = response.hasMore;
                if (response.items != null) {
                    
                    response.items.forEach(element => {
                        this.eventList.push(element);
                    });
                    ++this.paginationCount;
                    if (this.hasMore && this.paginationCount % 3 == 0) {
                        this.validate = false;
                    }
                }
            },
            error => error);
    }

}