import { NgModule }      from '@angular/core';

import { MasonryModule } from 'angular2-masonry';

import {SharedModule} from '../shared/shared.module';
import{EventRoutingModule} from './events-routes/events-routing.module';

import{EventsListComponet}from './events-list/events-list.component';
import{EventDetailComponent} from './event-detail/event-detail.component';
import {EventSubscribeComponent } from './event-subscribe/event.subscribe.component'
import {EventService} from "./event-service/event.service";


@NgModule({
 imports:[MasonryModule,
          SharedModule,
          EventRoutingModule
        ],  
 declarations: [ EventsListComponet,
                 EventDetailComponent,
                EventSubscribeComponent
            ],
  providers:[EventService]
})

export class EventModule{

}