import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

/**
 * The SharedModule provides all shared components, directives and pipes of the application.
 */
@NgModule({
  imports: [
    // @angular/common
    CommonModule,
    // @angular/forms
    FormsModule,
    // @angular/router
    RouterModule
  ],
  exports: [
    // @angular/common
    CommonModule,
    // @angular/forms
    FormsModule,
    // @angular/router
    RouterModule
  ]
})
export class SharedModule { }
