import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  token = 'no token';
  baseUrl: string;

  /**
   * Creates an instance of the AuthenticationService class.
   * @param http - The injected HttpClient
   */
  constructor(private http: HttpClient) {
    this.baseUrl = environment.apiBaseUrl;
    // set token if saved in local storage
    const userFromStorage = this.getCurrentUser();
    if (userFromStorage) {
      const currentUser = JSON.parse(userFromStorage);
      this.token = currentUser && currentUser.token;
    }
  }

  /**
   * Returns the current users from the LocalStorage.
   * @returns The LocalStorage item containing the current users id.
   */
  getCurrentUser(): string | null {
    return localStorage.getItem('currentUser');
  }

  /**
   * Returns if there is a user currently logged in.
   * @return  `true` if a user is currently logged in, otherwise `false`.
   */
  isUserLoggedIn(): boolean {
    return this.getCurrentUser() !== null;
  }

  /**
   * Authorises the given credentials. An error will be thrown if the username or password is not correct.
   * @param username - The username
   * @param password - The password
   * @returns `true` if the authorisation was successful, otherwise `false`.
   */
  login(username: string, password: string): Observable<boolean> {
    const userJSON: string = JSON.stringify({
      user: { email: username, password: password },
    });
    return this.http
      .post<{ token: string }>(this.baseUrl + 'users/sign_in.json', userJSON, {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      })
      .pipe(
        map((response: { token: string }) => {
          const token = response['token'];
          if (token) {
            this.token = token;
            localStorage.setItem(
              'currentUser',
              JSON.stringify({ username, token })
            );
            return true;
          } else {
            return false;
          }
        })
      );
  }

  /**
   * Logs out the current user by removing it from the LocalStorage.
   */
  logout(): void {
    this.token = 'no token';
    localStorage.removeItem('currentUser');
  }
}
