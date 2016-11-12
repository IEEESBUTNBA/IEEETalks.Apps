import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AUTH_PROVIDERS,JwtHelper } from 'angular2-jwt';

import { AppRoutingModule }     from './app-routing.module';
import { AppComponent }  from './app.component';

import {EventModule} from './events/event.module';
import {SharedModule} from './shared/shared.module';
import{AboutUsModule} from './aboutUs/aboutUs.module';

import {HeaderBarComponent} from './shared/headerBar/headerBar.component';

@NgModule({
  imports:      [ BrowserModule,
                  AppRoutingModule,
                  EventModule,
                  SharedModule,
                  AboutUsModule],
  declarations: [ AppComponent,HeaderBarComponent],
  bootstrap:    [ AppComponent ],
  providers:[AUTH_PROVIDERS,JwtHelper ]
})
export class AppModule { }