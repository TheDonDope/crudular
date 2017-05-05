import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../core/authentication/authentication.service';

/**
 * This class provides the Login component of the application.
 */
@Component({
  selector: 'cru-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: any;
  loading: boolean;
  canShowLoginFailedMessage: boolean;
  loginFailedMessage: string;

  /**
   * Creates a new LoginComponent with the injected Router and AuthenticationService.
   * @param {Router}                router                - The injected Router.
   * @param {AuthenticationService} authenticationService - The injected AuthenticationService.
   * @constructor
   */
  constructor(private router: Router, private authenticationService: AuthenticationService) { }

  /**
   * Lifecycle hook which is called after the component has initialized.
   */
  ngOnInit() {
    this.authenticationService.logout();
    this.user = { };
    this.loading = false;
    this.canShowLoginFailedMessage = false;
    this.loginFailedMessage = null;
  }

  /**
   * Attempts to login the user with the given credentials of the login form.
   */
  onSubmit(): void {
    this.canShowLoginFailedMessage = false;
    this.loading = true;
    this.authenticationService.login(this.user.username, this.user.password)
      .subscribe(result => {
        if (result === true) {
          this.onLoginSuccessful();
        } else {
          this.onLoginFailed('Username or password is incorrect');
        }
      }
    );
  }

  /**
   * Handles a successful login attempt by redirecting to the dashboard.
   */
  private onLoginSuccessful(): void {
    this.router.navigate(['']);
  }

  /**
   * Handles a failed login attempt by displaying the error message.
   * @param {any} error - The error to be handled.
   */
  private onLoginFailed(error: any): void {
    this.canShowLoginFailedMessage = true;
    this.loginFailedMessage = error;
  }

}
