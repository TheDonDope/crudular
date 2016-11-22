import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';

/**
 * The LoginRoutingModule provides the routes for the Login module.
 */
@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'login', component: LoginComponent }
    ])
  ],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
