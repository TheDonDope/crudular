import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../authentication/authentication.service';

/**
 * This class represents the navigation bar component.
 */
@Component({
  selector: 'cru-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  /**
   * Creates a new NavigationComponent with the injected AuthenticationService.
   * @param {AuthenticationService} authenticationService - The injected AuthenticationService.
   * @constructor
   */
  constructor(private authenticationService: AuthenticationService) { }

  /**
   * Lifecycle hook which is called after the component has initialized.
   */
  ngOnInit() { }

  /**
   * Returns if a user is currently logged in.
   * @return {boolean} `true` if a user is logged in, else `false`.
   */
  isUserLoggedIn(): boolean {
    return this.authenticationService.isUserLoggedIn();
  }

  /**
   * Logs out the current user.
   * @return {boolean} `false` after the service call completed.
   */
  onLogoutUser(): boolean {
    this.authenticationService.logout();
    return false;
  }

}
