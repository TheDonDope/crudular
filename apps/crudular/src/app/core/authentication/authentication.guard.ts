import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

/**
 * This class implements a guard for routes that require successful authentication.
 */
@Injectable()
export class AuthenticationGuard implements CanActivate {

  /**
   * Creates an instance of the AuthenticationGuard class.
   * @param {Router} router - The injected Router
   * @constructor
   */
  constructor(private router: Router) { }

  /**
   * To protect routes from being accessible without previous authentication, the `canActivate()` method checks if the
   * LocalStorage contains a `currentUser`, which equates to a user being logged in. Only then the navigation will pass
   * on to the requested route. Otherwise the user will be redirected to the login view.
   * @return {boolean} `true` if a user is currently logged in, otherwise `false`.
   */
  canActivate() {
    if (localStorage.getItem('currentUser')) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }

}
