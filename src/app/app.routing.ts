import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const AppRoutes: Routes = [

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
