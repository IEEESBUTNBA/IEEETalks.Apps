import { Injectable, EventEmitter } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Observable";

import  {  AuthHttp, JwtHelper  }  from  'angular2-jwt';
import { UserManager, Log, MetadataService, User } from 'oidc-client';


@Injectable()
export class AuthService {

  id_token: string;
  isExpired: boolean;
  mgr: UserManager = new UserManager(settings);
  userLoadededEvent: EventEmitter<User> = new EventEmitter<User>();
  currentUser: User;
  loggedIn: boolean=false;

  constructor(private _http: Http, private _authHttp: AuthHttp, private _jwtHelper: JwtHelper) {

    this._jwtHelper = new JwtHelper();
   
    this.mgr.getUser()
      .then((user) => {
        if (user) {          
          this.loggedIn = true;
          this.currentUser = user;         
        }
        else {
          this.loggedIn = false;
        }
      })
      .catch((err) => {
        this.loggedIn = false;
      });   

     this.isLogIn();
  }


  public Authorize() {
    this.mgr.signinRedirect().then(function () {
      console.log("signinRedirect done");
    }).catch(function (err) {
      console.log(err);
    });
    this.getToken();
  }

  isLogIn(): Observable<any> { 
    this.mgr.getUser().then(function(user){
     if(user){      
        this.loggedIn=true;
     }
     else{           
        console.log(user);
     }
    });    
      return Observable.of(true);
  }

  logOut() {
    this.mgr.signoutRedirect()
      .then(() => this.loggedIn = false)
      .catch((err) => console.log(err));

  }

  getToken() {
    this.mgr.getUser().then((user) => {
      this.currentUser = user;
      localStorage.setItem('id_token', user.access_token);
      console.log(this.currentUser);
      this.useJwtHelper();
      this.getProfile();
      this.loggedIn = true;
      this.userLoadededEvent.emit(this.currentUser);
    }).catch(function (err) {
      console.log(err);
    });

  }

  clear() {
    this.mgr.removeUser().then(() => {
      this.userLoadededEvent.emit(null);
      localStorage.removeItem('id_token');
      console.log("user removed");
    }).catch(function (err) {
      console.log(err);
    });
  }

  getProfile(){
    let profile=this.currentUser.profile;
    console.log(profile);
  }


    useJwtHelper() {
      this.isExpired= this._jwtHelper.isTokenExpired(this.currentUser.access_token);
  var exp = this._jwtHelper.getTokenExpirationDate(this.currentUser.access_token);
      console.log(this.isExpired); 
      console.log(exp); 
  } 

}

const settings: any = {
  authority: 'http://localhost:22711',
  client_id: 'pepesApp-implicit',
  redirect_uri: 'http://localhost:3000/callback.html',
  popup_redirect_uri: 'http://localhost:3000/popup.html',
  post_logout_redirect_uri: 'http://localhost:3000',
  response_type: 'id_token token',
  scope: 'openid profile',
  silent_redirect_uri: 'http://localhost:3000/silent-renew.html',
  automaticSilentRenew: true,
  //silentRequestTimeout:10000,
  filterProtocolClaims: true,
  loadUserInfo: true
};