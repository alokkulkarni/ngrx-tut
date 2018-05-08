import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';

import * as axios from 'axios';
import {Http} from '@angular/http';

import {NgxElectronModule} from 'ngx-electron';


import { StoreModule } from '@ngrx/store'
import { reducer } from './reducers/tutorial.reducers'

import { environment } from '../environments/environment';
import { ReadComponent } from './read/read.component';
import { CreateComponent } from './create/create.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    ReadComponent,
    CreateComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    NgxElectronModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    StoreModule.forRoot({tutorial: reducer})
  ],
providers : [
  {
    provide: Http,
    useValue: axios
  }
],
  bootstrap: [AppComponent]
})

export class AppModule { }

