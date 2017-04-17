import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()

export class LoginRedirectService implements CanActivate {

url: string;

  constructor(private _router: Router) { }

canActivate() {

        this.url = sessionStorage.getItem('login-redirect');
        if (this.url) {
          this._router.navigate([this.url]);
          console.log('redirecting');
          sessionStorage.removeItem('login-redirect');
          console.log('clear');
        }

        return true;
    }
}
