import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthenticationGuard } from '../core/authentication/authentication.guard';
import { HomeComponent } from './home.component';

/**
 * The HomeRoutingModule provides the routes for the Home module.
 */
@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: HomeComponent, canActivate: [AuthenticationGuard] }
    ])
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
