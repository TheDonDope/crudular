import { Routes } from '@angular/router';

import { AuthenticationGuard } from '../shared/';
import { HomeComponent } from './home.component';

export const HomeRoutes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthenticationGuard] }
];
