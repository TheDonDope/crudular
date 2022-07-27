import { Component } from '@angular/core';

import { AuthenticationService } from '../authentication/authentication.service';

@Component({
  selector: 'crud-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  constructor(private authenticationService: AuthenticationService) {}

  /**
   * Returns if a user is currently logged in.
   * @returns `true` if a user is logged in, else `false`.
   */
  isUserLoggedIn(): boolean {
    return this.authenticationService.isUserLoggedIn();
  }

  /**
   * Logs out the current user.
   * @returns `false` after the service call completed.
   */
  onLogoutUser(): boolean {
    this.authenticationService.logout();
    return false;
  }
}
