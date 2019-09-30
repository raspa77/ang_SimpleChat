import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EnterComponent } from './enter/enter.component';
import { OnlineUsersComponent } from './online-users/online-users.component';
import { ThreadComponent } from './thread/thread.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'enter', component: EnterComponent},
  {path: 'online', component: OnlineUsersComponent, data: {title: 'Online Users'}},
  {path: 'thread/:id', component: ThreadComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
