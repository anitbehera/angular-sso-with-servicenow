import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './oauth/login/login.component';
import { CallbackComponent } from './oauth/callback/callback.component';
import { HomeComponent } from './users/home/home.component';

const appRoutes: Routes = [
  { path: 'oauth/login', component: LoginComponent },
  { path: 'oauth/callback', component: CallbackComponent },
  { path: 'home',        component: HomeComponent },
  { path: '',   redirectTo: '/oauth/login', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CallbackComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
