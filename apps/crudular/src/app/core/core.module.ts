import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthenticationModule } from './authentication/authentication.module';
import { NavigationModule } from './navigation/navigation.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    AuthenticationModule.forRoot(),
    NavigationModule,
  ],
})
export class CoreModule {}
