import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthenticationModule } from './authentication/authentication.module';
import { LoggingService } from './logging/logging.service';
import { NavigationModule } from './navigation/navigation.module';
import { throwIfAlreadyLoaded } from './module-import.guard';

/**
 * The CoreModule provides all single-use components and singleton services of the application.
 */
@NgModule({
  imports: [
    // @angular/common
    CommonModule,
    // @angular/router
    RouterModule,
    // authentication/authentication.module
    AuthenticationModule.forRoot(),
    // navigation/navigation.module
    NavigationModule
  ],
  exports: [
    // authentication/authentication.module
    AuthenticationModule,
    // navigation/navigation.module
    NavigationModule
  ],
  declarations: [],
  providers: [LoggingService]
})
export class CoreModule {

  /**
   * Do guard against reimporting of CoreModule and fail fast by adding guard logic.
   * @param {CoreModule} parentModule - the parent Module.
   * @constructor
   */
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

}
