import { Component, OnInit} from "@angular/core";

import {IUser} from "../shared/user";

@Component({
    templateUrl: "templates/event/event-subscribe.component.html",
    selector:"app-eventsub"
})

export class EventSubscribe {
    user: IUser;

    pageTitle: string = "Subscribe";
}