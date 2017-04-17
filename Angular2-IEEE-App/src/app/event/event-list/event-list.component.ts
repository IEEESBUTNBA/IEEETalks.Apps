import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { EventService } from '../event-service/event.service';

import { IEvent } from '../event-entities/ievent';
import { IeventResponse } from '../event-entities/ievent-response';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

  eventList: IEvent[] = [];
  eventResponse: IeventResponse;
  pageIndex = 0;
  isValid = true;
  scrollPosition = 0;
  isLoading$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private _eventService: EventService, private _router: Router) { }

  ngOnInit() {
    this.getEvents();
  }

  onScroll(event) {
    if (this.scrollPosition <= event.currentScrollPosition) {
      this.getEvents();
      this.scrollPosition = event.currentScrollPosition + 1000;
    }
  }

  validatePagination(): void {
    this.getEvents();
  }

  private getEvents(): void {
    this.isLoading$.next(true);
    this._eventService.getEventPagination(this.pageIndex)
      .subscribe((response) => {
        this.eventResponse = response;
        if (this.eventResponse.items != null) {
          this.eventResponse.items.forEach(element => {
            this.eventList.push(element);
          });
          ++this.pageIndex;
        }
      },
      error => error,
      () => {
        this.isLoading$.next(false);
      });
  }

  onSelect(event: IEvent): void {
    this._router.navigate(['/event', event.id]);
  }

}
