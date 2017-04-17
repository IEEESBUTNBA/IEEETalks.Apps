import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from './shared/shared-module/shared.module';
import * as toastr from 'toastr';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import {AuthService} from './shared//auth-services/auth.service';

import { EventModule } from './event/event.module';
import { LoginRedirectService } from './shared/auth-services/login-redirect.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    EventModule
  ],
  exports: [],
  providers: [AuthService, LoginRedirectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
