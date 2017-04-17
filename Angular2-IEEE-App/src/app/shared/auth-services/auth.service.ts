import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { UserManager, Log, MetadataService, User, WebStorageStateStore } from 'oidc-client';
import { environment } from '../../../environments/environment';

import { IUserProfile } from './user-profile';
import { settings } from './settings-auth.service';



@Injectable()
export class AuthService {
  mgr: UserManager = new UserManager(settings);
  userLoadededEvent: EventEmitter<User> = new EventEmitter<User>();
  currentUser: User;
  loggedIn = false;
  authHeaders: Headers;
  userProfile: IUserProfile;


  constructor(private http: Http) {
    this.mgr.getUser()
      .then((user) => {
        if (user) {
          this.loggedIn = true;
          this.currentUser = user;
          this._setAuthHeaders(user); // check this later
        } else {
          this.loggedIn = false;
        }
      })
      .catch((err) => {
        this.loggedIn = false;
      });
    this.mgr.events.addUserUnloaded((e) => {
      if (!environment.production) {
        console.log('user unloaded');
      }
      this.loggedIn = false;
    });
    this.mgr.events.addUserLoaded((loadedUser) => {
      if (!environment.production) {
        console.log('user loaded');
      }
      this.currentUser = loadedUser;
    });
  }


  getProfile(): IUserProfile {
    if (this.currentUser) {
      return this.currentUser.profile;
    }
  }

  clearState() {
    this.mgr.clearStaleState().then(function () {
      console.log('clearStateState success');
    }).catch(function (e) {
      console.log('clearStateState error', e.message);
    });
  }

  getUser() {
    this.mgr.getUser().then((user) => {
      console.log('got user', user);
      this.userLoadededEvent.emit(user);
    }).catch(function (err) {
      console.log(err);
    });
  }

  removeUser() {
    this.mgr.removeUser().then(() => {
      this.userLoadededEvent.emit(null);
      console.log('user removed');
    }).catch(function (err) {
      console.log(err);
    });
  }

  startSigninMainWindow() {
    this.mgr.signinRedirect().then((user) => {
      if (user) {
        console.log(user);
        this.loggedIn = true;
      }
      console.log('signinRedirect done');
    }).catch(function (err) {
      console.log(err);
    });
  }

  // endSigninMainWindow() {
  //   this.mgr.signinRedirectCallback().then(function (user) {
  //     console.log('signed in', user);
  //   }).catch(function (err) {
  //     console.log(err);
  //   });
  // }

  startSignoutMainWindow() {
    this.mgr.signoutRedirect().then(function (resp) {
      console.log('signed out', resp);
      this.loggedIn = false;
      setTimeout(5000, () => {
        console.log('testing to see if fired...');
      });
    }).catch(function (err) {
      console.log(err);
    });
  };


  // endSignoutMainWindow() {
  //   this.mgr.signoutRedirectCallback().then(function (resp) {
  //     console.log('signed out', resp);
  //   }).catch(function (err) {
  //     console.log(err);
  //   });
  // };

  /**
   * Example of how you can make auth request using angulars http methods.
   * @param options if options are not supplied the default content type is application/json
   */
  AuthGet(url: string, options?: RequestOptions): Observable<Response> {

    if (options) {
      options = this._setRequestOptions(options);
    }
    else {
      options = this._setRequestOptions();
    }
    return this.http.get(url, options);
  }

  /**
   * @param options if options are not supplied the default content type is application/json
   */
  AuthPut(url: string, data: any, options?: RequestOptions): Observable<Response> {

    const body = JSON.stringify(data);

    if (options) {
      options = this._setRequestOptions(options);
    }
    else {
      options = this._setRequestOptions();
    }
    return this.http.put(url, body, options);
  }

  /**
   * @param options if options are not supplied the default content type is application/json
   */
  AuthDelete(url: string, options?: RequestOptions): Observable<Response> {

    if (options) {
      options = this._setRequestOptions(options);
    }
    else {
      options = this._setRequestOptions();
    }
    return this.http.delete(url, options);
  }

  /**
   * @param options if options are not supplied the default content type is application/json
   */
  AuthPost(url: string, data: any, options?: RequestOptions): Observable<Response> {

    const body = JSON.stringify(data);
    if (options) {
      options = this._setRequestOptions(options);
    }
    else {
      options = this._setRequestOptions();
    }
    return this.http.post(url, body, options);
  }


  _setAuthHeaders(user: any) {
    this.authHeaders = new Headers();
    this.authHeaders.append('Authorization', user.token_type + ' ' + user.access_token);
    this.authHeaders.append('Content-Type', 'application/json');
  }

  private _setRequestOptions(options?: RequestOptions) {

    if (options) {
      options.headers.append(this.authHeaders.keys[0], this.authHeaders.values[0]);
    }
    else {
      options = new RequestOptions({ headers: this.authHeaders }); // took this away ", body: ''" check why
    }

    return options;
  }

}

