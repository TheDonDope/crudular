import { CommonModule } from '@angular/common';

import { ModuleWithProviders, NgModule } from '@angular/core';
import { AuthenticationGuard } from './authentication.guard';

/**
 * The AuthenticationModule provides the Authentication guard and Authentication service.
 */
@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class AuthenticationModule {
  /**
   * Returns the wrapped AuthenticationModule also containing the providers.
   * @return {ModuleWithProviders} The wrapped AuthenticationModule.
   */
  static forRoot(): ModuleWithProviders<AuthenticationModule> {
    return {
      ngModule: AuthenticationModule,
      providers: [AuthenticationGuard],
    };
  }
}
