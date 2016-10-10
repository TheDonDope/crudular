import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeRoutes } from './home/';
import { LoginRoutes } from './login/';

const AppRoutes: Routes = [
  ...HomeRoutes,
  ...LoginRoutes
];

/**
 * This module provides all the routes of the application. Any feature routes are imported through their respective
 * module and added to the `AppRoutes` array.
 */
@NgModule({
  imports: [RouterModule.forRoot(AppRoutes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
