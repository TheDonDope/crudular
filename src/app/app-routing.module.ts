import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

/**
 * The AppRoutingModule provides all non-feature routes of the application.
 */
@NgModule({
  imports: [RouterModule.forRoot([/* define app non-feature routes here */])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
