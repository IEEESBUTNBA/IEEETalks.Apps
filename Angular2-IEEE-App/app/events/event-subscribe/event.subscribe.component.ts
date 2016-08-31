import { Component, Input} from "@angular/core";
import {FormControl, FormBuilder, Validators, FormGroup, REACTIVE_FORM_DIRECTIVES} from "@angular/forms";
import {IInscriptionIntended, InscriptionIntended} from "../events-entities/inscriptionIntended";
import {EventService} from "../event-service/event.service";



@Component({
    templateUrl: "app/events/event-subscribe/event-subscribe.component.html",
    selector: "app-eventsub",
    directives: [REACTIVE_FORM_DIRECTIVES]    
})

export class EventSubscribeComponent  {


    @Input() eventId: string;
    inscriptionIntended: IInscriptionIntended = new InscriptionIntended("", "", "", "");    
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
                error => error);
            this.modal = "modal";     //<------------------close modal        
        } else {
            this.modal = "";
            this.getFormError();
        }
    }
   
    getFormError() {
        toastr.remove();
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

    getSuccesrMsg(status) {
        if (status == 200) {
            toastr.success("You've signed up for the event");         
           
            this.subcriptionForm.reset();
        }
    }

}