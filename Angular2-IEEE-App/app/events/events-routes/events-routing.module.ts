import { NgModule }       from '@angular/core';
import { RouterModule }   from '@angular/router';

import {EventsListComponet}  from  "../events-list/events-list.component";
import{EventDetailComponent} from '../event-detail/event-detail.component';

@NgModule({
  imports: [
    RouterModule.forChild([
    { path: '', redirectTo: 'events', pathMatch: 'full' },     
    { path: 'events', component: EventsListComponet },
    { path: 'event/:id', component: EventDetailComponent }
    ])
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class EventRoutingModule {}

