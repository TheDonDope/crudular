import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { environment } from '../../../environments/environment';

/**
 * This class implements a JWT authorisation for the application.
 */
@Injectable()
export class AuthenticationService {

  token: string;
  baseUrl: string;

  /**
   * Creates an instance of the AuthenticationService class.
   * @param {Http} http - The injected Http
   * @constructor
   */
  constructor(private http: Http) {
    // set token if saved in local storage
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
    this.baseUrl = environment.apiBaseUrl;
  }

  /**
   * Authorises the given credentials. An error will be thrown if the username or password is not correct.
   * @param  {string}    username - The username
   * @param  {string}    password - The password
   * @return {boolean}              `true` if the authorisation was successful, otherwise `false`.
   */
  login(username: string, password: string): Observable<boolean> {
    const userJSON: string = JSON.stringify({ user: { email: username, password: password }});
    return this.http.post(this.baseUrl + 'users/sign_in.json', userJSON, this.getRequestOptions())
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        let token = response.json() && response.json().token;
        if (token) {
          // set token property
          this.token = token;

          // store username and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));

          // return true to indicate successful login
          return true;
        } else {
          // return false to indicate failed login
          return false;
        }
      }
    );
  }

  /**
   * Logs out the current user by removing it from the LocalStorage.
   */
  logout(): void {
    this.token = null;
    localStorage.removeItem('currentUser');
  }

  /**
   * Returns the current users from the LocalStorage.
   * @return {any} The LocalStorage item containing the current users id.
   */
  getCurrentUser(): any {
    return localStorage.getItem('currentUser');
  }

  /**
   * Returns if there is a user currently logged in.
   * @return {boolean} `true` if a user is currently logged in, otherwise `false`.
   */
  isUserLoggedIn(): boolean {
    return this.getCurrentUser() !== null;
  }

  /**
   * Returns the RequestOptions for the HTTP POST and HTTP PATCH Requests
   * @return {RequestOptions} The request options.
   */
  getRequestOptions(): RequestOptions {
    const headers: Headers = new Headers({ 'Content-Type': 'application/json' });
    const requestOptions: RequestOptions = new RequestOptions({ headers: headers });
    return requestOptions;
  }

}
