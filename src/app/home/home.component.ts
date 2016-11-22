import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../shared/authentication/authentication.service';

/**
 * This class represents the lazy loaded HomeComponent.
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
   * Initialises the component.
   */
  ngOnInit() {
    this.currentUser = JSON.parse(this.authenticationService.getCurrentUser());
    this.user = this.currentUser.username;
    this.token = this.currentUser.token;
  }

}
