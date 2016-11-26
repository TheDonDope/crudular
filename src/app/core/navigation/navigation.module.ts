import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthenticationModule } from '../authentication/authentication.module';
import { NavigationComponent } from './navigation.component';

@NgModule({
  imports: [CommonModule, RouterModule, AuthenticationModule.forRoot()],
  declarations: [NavigationComponent],
  exports: [NavigationComponent]
})
export class NavigationModule { }
