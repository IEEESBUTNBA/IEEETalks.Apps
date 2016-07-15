import {RouterConfig, provideRouter} from '@angular/router'

import {eventsRoutes} from './events/events.routes'

export const appRoutes: RouterConfig = [
    ...eventsRoutes
];

export const APP_ROUTER_PROVIDER = [provideRouter(appRoutes)];