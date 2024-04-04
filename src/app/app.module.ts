import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './_components/auth/sign-in/sign-in.component';
import { SignUpComponent } from './_components/auth/sign-up/sign-up.component';
import { HomeComponent } from './_components/home/home.component';
import { StoreModule } from '@ngrx/store';
import { AsyncPipe, CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { environment } from '../environments/environment.development';
import { UserEffect } from './Store/User.effects';
import { stateTestReducer, UserReducer } from './Store/User.reducer';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    HomeComponent
  ],
  imports: [
    AsyncPipe,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    //FontAwesomeModule,
    CommonModule,
    JwtModule.forRoot({
      config: {
        //tokenGetter: tokenGetter,
        allowedDomains: [environment.apiUrl],
        disallowedRoutes: [''],
      },}),
      //ToastrModule.forRoot(),
      StoreModule.forRoot({ user: UserReducer, stateTest : stateTestReducer },
       {}
        ),
     EffectsModule.forRoot([UserEffect]),
     StoreRouterConnectingModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
