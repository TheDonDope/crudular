import { NgModule, ModuleWithProviders } from '@angular/core';

import { AuthenticationGuard } from './authentication.guard';
import { AuthenticationService } from './authentication.service';

/**
 * The AuthenticationModule provides the Authentication guard and Authentication service.
 */
@NgModule({ })
export class AuthenticationModule {

  /**
   * Returns the wrapped AuthenticationModule also containing the providers.
   * @return {ModuleWithProviders} The wrapped AuthenticationModule.
   */
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AuthenticationModule,
      providers: [AuthenticationGuard, AuthenticationService]
    };
  }

}
