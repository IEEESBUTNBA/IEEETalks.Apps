import { Injectable } from "@angular/core";
import { Router  } from '@angular/router';

@Injectable()
export class ErrorMsgHandleService {

    constructor(private _router: Router) {       
    }

    getErrorMsg(error) {        
        console.log(error); //to see all the errors just for dev
        if (error.status == 409) {
            for (var item of error.json()) {
                toastr.error(item.ErrorMessage);
                if(item.ErrorMessage==="The event is not found.")
                 this._router.navigate(['/events']);
            }
        }
        if (error.status == 500) {
            toastr.error(error.json().message); 
        }
        if (error.status == 400) {
            toastr.error(error.json().message);
            this._router.navigate(['/events']);           
        }
        if (error.status == 401) {
            toastr.error(error.json().message);
        }        
        //TODO add more status    
    }

}

