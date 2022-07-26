import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AuthenticationModule } from './authentication/authentication.module';
import { NavigationModule } from './navigation/navigation.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, AuthenticationModule, NavigationModule],
})
export class CoreModule {}
