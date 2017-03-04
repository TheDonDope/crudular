import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/**
 * The AppModule provides the root module of the application. It imports all necessary @angular modules as well as the
 * application specific modules `CoreModule`, `SharedModule` and all feature modules.
 */
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // @angular/platform-browser
    BrowserModule,
    // @angular/forms
    FormsModule,
    // @angular/http
    HttpModule,
    // app-routing.module
    AppRoutingModule,
    // core/core.module
    CoreModule,
    // home/home.module
    HomeModule,
    // login/login.module
    LoginModule,
    // shared/shared.module
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
