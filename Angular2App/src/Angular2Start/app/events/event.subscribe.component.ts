import { Component, Input} from "@angular/core";
import {FormControl, FormBuilder, Validators, FormGroup, REACTIVE_FORM_DIRECTIVES} from "@angular/forms";

import {IinscriptionIntended, InscriptionIntended} from "../shared/inscriptionIntended";
import {EventService} from "./event.service";


@Component({
    templateUrl: "templates/event/event-subscribe.component.html",
    selector: "app-eventsub",
    providers: [],
    directives: [REACTIVE_FORM_DIRECTIVES]
})

export class EventSubscribeComponent  {


    @Input() eventId: string;
    inscriptionIntended: IinscriptionIntended = new InscriptionIntended("", "", "", "");
    active = true;
    modal: string;


    name: FormControl;
    lastName: FormControl;
    email: FormControl;
    subcriptionForm: FormGroup;


    constructor(private _eventService: EventService, public builder: FormBuilder) {

        this.name = new FormControl("", [Validators.required]);
        this.email = new FormControl('', [Validators.required]);
        this.lastName = new FormControl('', [Validators.required]);

        this.subcriptionForm = builder.group({
            name: this.name,
            lastName: this.lastName,
            email: this.email
        });
    }

    onSubscribe() {        
        if (this.subcriptionForm.status == "VALID") {
            this.inscriptionIntended.eventId = this.eventId;
            this._eventService.inscriptionToEvent(this.inscriptionIntended)
                .subscribe(status => this.getSuccesrMsg(status),
                error => this.getErrorMsg(error));
            this.modal = "modal";     //<------------------close modal        
        } else {
            this.modal = "";
            this.getFormError();
        }
    }
   
    getFormError() {
        toastr.clear();
        if (this.name.hasError("required")) {
            toastr.warning("Name is required");
        }
        if (this.lastName.hasError("required")) {
            toastr.warning("Last Name is required");
        }
        if (this.email.hasError("required")) {
            toastr.warning("Email is required");
        }
        if (this.email.hasError("pattern")) {
            toastr.warning("Email is not valid");
        }
        
    }


    resetForm() {
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }

    getSuccesrMsg(status) {
        if (status == 200) {
            toastr.success("You've signed up for the event");
            this.inscriptionIntended.firstName = "";
            this.inscriptionIntended.email = "";
            this.inscriptionIntended.lastName = "";
            this.resetForm();
        }
    }

     ///TODO move this to a more generic componet for handling all errorMsg in the app

    getErrorMsg(error) {
        if (error.status == 409) {
            for (var item of error.json()) {
                toastr.error(item.ErrorMessage);
            }            
        }
        if (error.status == 500) {
            for (var item of error.json()) {
                toastr.error(item.ErrorMessage);
            }
        }
    }
}