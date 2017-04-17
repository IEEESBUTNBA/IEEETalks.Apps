import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MdDialog, MdDialogRef } from '@angular/material';

import { EventService } from '../event-service/event.service';
import { IEvent } from '../event-entities/ievent';
import { AuthService } from '../../shared/auth-services/auth.service';

@Component({
    selector: 'app-event-detail',
    templateUrl: './event-detail.component.html',
    styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit {

    event: IEvent;
    id: string;
    private _routeParam: any;
    selectedOption: string;


    constructor(private _route: ActivatedRoute,
        private _eventService: EventService,
        private _router: Router,
        private _authService: AuthService,
        public dialog: MdDialog) { }

    ngOnInit() {
        this._routeParam = this._route
            .params
            .subscribe(params => {
                this.id = params['id'];
            });
        this.getEvent(this.id);
    }

    getEvent(id: string) {
        this._eventService.getEvent(id)
            .subscribe(event => this.event = event,
            error => error);
    }

    onBack(): void {
        this._router.navigate(['/events']);
    }

    onSubscribe(id: string) {
        if (this._authService.loggedIn === true) {
            this._eventService.inscriptionToEvent(this.id)
                .subscribe(res => this.getSuccesrMsg(res.status),
                error => console.log(error));
        } else {
            const dialogRef = this.dialog.open(DialogResultComponent);
            dialogRef.afterClosed().subscribe(result => {
                if (result === 'login') {
                    const url = this._route.snapshot.url.join('/');
                    sessionStorage.setItem('login-redirect', url);
                    this._authService.startSigninMainWindow();
                }
            });
        }

    }

    private getSuccesrMsg(status) {
        if (status === 200) {
            toastr.success('You\'ve signed up for the event');
            console.log('You´ve signed up for the event');
        }
    }

}

// dialog component

@Component({
    selector: 'dialog-result-component',
    templateUrl: './dialog-result.html',
    styleUrls: ['./event-detail.component.scss']
})
export class DialogResultComponent {
    constructor(public dialogRef: MdDialogRef<DialogResultComponent>) { }
}
