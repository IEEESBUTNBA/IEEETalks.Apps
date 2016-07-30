"use strict";
var router_1 = require('@angular/router');
var events_routes_1 = require('./events/events-routes/events.routes');
exports.appRoutes = events_routes_1.eventsRoutes.slice();
exports.APP_ROUTER_PROVIDER = [router_1.provideRouter(exports.appRoutes)];
//# sourceMappingURL=routes.js.map