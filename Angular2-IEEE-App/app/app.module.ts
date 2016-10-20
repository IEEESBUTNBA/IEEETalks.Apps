import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";
import {FormsModule,FormBuilder} from "@angular/forms";
import {InfiniteScrollModule} from 'angular2-infinite-scroll';
import { MasonryModule } from 'angular2-masonry';
import { InlineSVGModule } from 'ng2-inline-svg';


import { routing } from './app.routes';

import { AppComponent }  from './app.component';
import {HeaderBarComponent} from './shared/headerBar/headerBar.component'
import{EventsListComponet}from './events/events-list/events-list.component';
import{EventDetailComponent} from './events/event-detail/event-detail.component';
import {EventSubscribeComponent } from './events/event-subscribe/event.subscribe.component'
import {EventService} from "./events/event-service/event.service";
import {ErrorMsgHandleService} from "./shared/errorMsgHandle.service"


@NgModule({
  imports:      [ BrowserModule,HttpModule,routing,FormsModule,InfiniteScrollModule,MasonryModule,InlineSVGModule],
  declarations: [ AppComponent,HeaderBarComponent,EventsListComponet,EventDetailComponent,EventSubscribeComponent],
  bootstrap:    [ AppComponent ],
  providers:[EventService,ErrorMsgHandleService,FormBuilder]
})
export class AppModule { }