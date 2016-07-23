"use strict";
var events_list_component_1 = require("./events-list.component");
var event_detail_component_1 = require("./event-detail.component");
exports.eventsRoutes = [
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: 'events', component: events_list_component_1.EventsListComponet },
    { path: 'event/:id', component: event_detail_component_1.EventDetailComponent }
];
//# sourceMappingURL=events.routes.js.map