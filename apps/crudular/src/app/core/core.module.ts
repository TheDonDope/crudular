import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AuthenticationModule } from './authentication/authentication.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, AuthenticationModule],
})
export class CoreModule {}
