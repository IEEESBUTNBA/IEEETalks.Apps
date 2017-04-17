import { Injectable, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';



@Injectable()
export class ErrorMsgHandleServiceService {

  constructor(private _router: Router) { }

  getErrorMsg(error) {
    console.log(error); // to see all the errors just for dev
    if (error.status === 409 || error.status === 400) {
      toastr.error(error.json().message);
      for (const item of error.json()) {
        toastr.error(item.ErrorMessage);
        if (item.ErrorMessage === 'The event is not found.') {
          this._router.navigate(['/events']);
        }
      }
        this._router.navigate(['/events']);
    }
    else {
      toastr.error(error.json().message);
    }
  }
}

