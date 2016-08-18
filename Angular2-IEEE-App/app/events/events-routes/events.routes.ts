import { RouterConfig }  from '@angular/router';

import {EventsListComponet}  from  "../events-list/events-list.component";
import {EventDetailComponent} from "../event-detail/event-detail.component";

export const eventsRoutes: RouterConfig = [
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: 'events', component: EventsListComponet },
    { path: 'event/:id', component: EventDetailComponent }
];