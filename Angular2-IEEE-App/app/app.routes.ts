import {Routes, RouterModule } from '@angular/router'
import { ModuleWithProviders } from '@angular/core';

import {eventsRoutes} from './events/events-routes/events.routes'

export const routes: Routes = [
    ...eventsRoutes
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);