import { Component, Input, OnInit, OnChanges, Output, EventEmitter } from "@angular/core";
import { FormControl, FormBuilder, Validators, FormGroup } from "@angular/forms";
import { IInscriptionIntended, InscriptionIntended } from "../events-entities/inscriptionIntended";
import { EventService } from "../event-service/event.service";



@Component({
    templateUrl: "app/events/event-subscribe/event-subscribe.component.html",
    selector: "app-eventsub",
    //directives: [REACTIVE_FORM_DIRECTIVES]
})

export class EventSubscribeComponent implements OnInit, OnChanges {


    @Input() eventId: string;
    @Input() isOpen: boolean;
    @Output() closeModal: EventEmitter<boolean> = new EventEmitter<boolean>();

    inscriptionIntended: IInscriptionIntended = new InscriptionIntended("", "", "", "");

    name: FormControl;
    lastName: FormControl;
    email: FormControl;
    subcriptionForm: FormGroup;

    classModal: string;
    modalContent: string;


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
    ngOnInit(): void {
        this.classModal = 'modal modal-close';
        this.modalContent = 'modal-content';
    }

    ngOnChanges(): void {
        if (this.isOpen === true) {
            this.modalOpen();
        }
    }

    modalOpen(): void {       
        this.classModal = "modal modal-open";
        setTimeout(() => {
            this.modalContent = 'modal-content modal-effects';
        }, 100);

    }


    modalClose(): void {      
        this.modalContent = 'modal-content';
        setTimeout(() => {
            this.classModal = "modal modal-close";
        }, 450);
        this.closeModal.emit();
    }

    clickOutsideModal(e): void {  
        console.log(e.target.id);     
        if (e.target.id === 'modal') {
            this.modalClose();
        }
    }

    onSubscribe() {
        if (this.subcriptionForm.status == "VALID") {
            this.inscriptionIntended.eventId = this.eventId;
            this._eventService.inscriptionToEvent(this.inscriptionIntended)
                .subscribe(status => this.getSuccesrMsg(status),
                error => error);
            this.modalClose();
        } else {
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