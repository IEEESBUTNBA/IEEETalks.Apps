import { Component, OnInit, Input} from "@angular/core";
import { NgForm }    from '@angular/common';

import {IinscriptionIntended, InscriptionIntended} from "../shared/inscriptionIntended";
import {EventService} from "./event.service";

@Component({
    templateUrl: "templates/event/event-subscribe.component.html",
    
    selector:"app-eventsub"
})

export class EventSubscribe implements OnInit {

    errorMessage: string;
    succesMessage: string;    
    @Input() eventId: string;    
    user: IinscriptionIntended = new InscriptionIntended("", "", "", "");
    active = true;
    

    constructor(private _eventService: EventService) {
    }    
   
    
    ngOnInit(): void {
      
    }

    onCleanMessage() {       
        this.errorMessage = "";
        this.succesMessage = "";  
    }

    resetForm() {
        this.active = false;
        setTimeout(() => this.active = true, 0);  
    }
   
    onSubscribe() {
       
        this.user.eventId = this.eventId;
        this._eventService.inscriptionToEvent(this.user)
            .subscribe(status => this.getSuccesrMsj(status),
            error => this.getErrorMsj(error));
       
    }   

    getSuccesrMsj(status) {        
        if (status == 200) {
            this.succesMessage = "You've signed up for the event";
            this.errorMessage = "";
            this.user.firstName = "";
            this.user.email = "";
            this.user.lastName = "";
            this.resetForm();
        }
    }

    getErrorMsj(error) {        
        if (error.status == 409) {
            this.errorMessage = error.json()[0].ErrorMessage;
            this.succesMessage = "";
        }
    }
}