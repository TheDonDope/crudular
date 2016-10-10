import { NgModule, ModuleWithProviders } from '@angular/core';

import { AuthenticationGuard, AuthenticationService } from './index';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */
@NgModule({ })
export class AuthenticationModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AuthenticationModule,
      providers: [
        AuthenticationGuard, AuthenticationService
      ]
    };
  }

}
