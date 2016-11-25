import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    // @angular/platform-browser
    BrowserModule,
    // @angular/forms
    FormsModule,
    // @angular/http
    HttpModule,
    // app.routing
    AppRoutingModule,
    // shared/shared.module
    SharedModule,
    // home/home.module
    HomeModule,
    // login/login.module
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
