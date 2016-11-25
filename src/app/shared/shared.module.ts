import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AuthenticationModule } from './authentication/authentication.module';
import { NavigationModule } from './navigation/navigation.module';

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
    // @angular/common
    CommonModule,
    // @angular/forms
    FormsModule,
    // @angular/router
    RouterModule,
    // authentication/authentication.module
    AuthenticationModule,
    // navigation/navigation.module
    NavigationModule
  ]
})
export class SharedModule { }
