import { Injectable } from "@angular/core";

@Injectable()
export class ErrorMsgHandleService {

    constructor() {       
    }

    getErrorMsg(error) {        
        console.log(error); //to see all the errors just for dev

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
        if (error.status == 400) {
            toastr.error(error.json().message);           
        }
        if (error.status == 401) {
            toastr.error(error.json().message);
        }

        //TODO add more status
    }

}

