import { RouterConfig }  from '@angular/router';

import {EventsListComponet}  from  "./events-list.component";
import {EventDetailComponent} from "./event-detail.component";

export const eventsRoutes: RouterConfig = [
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: 'events', component: EventsListComponet },
    { path: 'event/:id', component: EventDetailComponent }
];