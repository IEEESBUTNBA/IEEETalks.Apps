import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginRedirectService} from '../shared/auth-services/login-redirect.service';

import { EventListComponent } from './event-list/event-list.component';
import { EventDetailComponent } from './event-detail/event-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'events', pathMatch: 'full' },
  { path: 'events', component: EventListComponent , canActivate: [LoginRedirectService] },
  { path: 'event/:id', component: EventDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventRoutingModule { }
