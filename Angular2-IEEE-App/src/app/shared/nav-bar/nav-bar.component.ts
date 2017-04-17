import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth-services/auth.service';
import { IUserProfile } from '../auth-services/user-profile';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  userProfile: IUserProfile;


  constructor(private _authService: AuthService) { }

  ngOnInit() {

  }


  logIn(): void {
    this._authService.startSigninMainWindow();
  }

  singOut() {
    this._authService.startSignoutMainWindow();
  }

  isLogIn(): boolean {

    this.userProfile = this._authService.getProfile();
    return this._authService.loggedIn;
  }

}
