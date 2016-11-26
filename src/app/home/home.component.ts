import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../core/authentication/authentication.service';

/**
 * This class provides the Home component of the application.
 */
@Component({
  selector: 'cru-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  currentUser: any;
  user: string;
  token: string;

  /**
   * Creates a new LoginComponent with the injected AuthenticationService.
   * @param {AuthenticationService} authenticationService - The injected AuthenticationService.
   * @constructor
   */
  constructor(private authenticationService: AuthenticationService) { }

  /**
   * Lifecycle hook which is called after the component has initialized.
   */
  ngOnInit() {
    this.currentUser = JSON.parse(this.authenticationService.getCurrentUser());
    this.user = this.currentUser.username;
    this.token = this.currentUser.token;
  }

}
