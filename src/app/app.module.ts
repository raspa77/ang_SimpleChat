import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnlineUsersComponent } from './online-users/online-users.component';
import { ThreadComponent } from './thread/thread.component';
import { HomeComponent } from './home/home.component';
import { EnterComponent } from './enter/enter.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { from } from 'rxjs';
import { PasswordCheckDirective } from './password-check';
import { OnLineUsersService } from './online-users.service';
import { serviceFactory } from './service-factories';
import { UserProfileService } from './user-profile.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { PostMessageComponent } from './post-message/post-message.component';

@NgModule({
  declarations: [
    AppComponent,
    OnlineUsersComponent,
    ThreadComponent,
    HomeComponent,
    EnterComponent,
    PageNotFoundComponent,
    PasswordCheckDirective,
    PostMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    HttpClient,
    // {provide: OnLineUsersService, useClass: OnLineUsersService},
    {provide: OnLineUsersService, useFactory: serviceFactory, deps: [UserProfileService, HttpClient]},
    {provide: 'TITLE', useValue: 'Benevenuti in RASPA chat'},
    UserProfileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
