import { NgModule } from '@angular/core';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { SharedModule } from '../shared/shared-module/shared.module';

import { EventRoutingModule } from './event-routing.module';
import { EventListComponent } from './event-list/event-list.component';
import { EventDetailComponent, DialogResultComponent } from './event-detail/event-detail.component';
import { EventService } from './event-service/event.service';



@NgModule({
  imports: [
    EventRoutingModule,
    SharedModule,
    InfiniteScrollModule
     ],
  declarations: [EventListComponent, EventDetailComponent, DialogResultComponent],
  providers: [EventService],
  entryComponents: [DialogResultComponent]
})
export class EventModule { }
