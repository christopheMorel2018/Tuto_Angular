import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms' ;
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { AppareilComponent } from './component/appareil/appareil.component';

import {AppareilService } from './services/appareil.service';
import { AuthComponent } from './component/auth/auth.component';
import { AppareilViewComponent } from './component/appareil-view/appareil-view.component'
import { AuthService } from './services/auth.service';
import { SingleAppareilComponent } from './component/single-appareil/single-appareil.component';
import { FourOhFourComponent } from './component/four-oh-four/four-oh-four.component';
import { AuthGuard } from './services/auth-guard.service';
import { EditAppareilComponent } from './component/edit-appareil/edit-appareil.component';
import { UserListComponent } from './component/user-list/user-list.component';
import { UserService } from './services/user.service';
import { NewUserComponent } from './component/new-user/new-user.component';

const appRoutes: Routes = [
  {path: 'appareils', canActivate: [AuthGuard], component: AppareilViewComponent},
  {path: 'appareils/:id', canActivate: [AuthGuard], component : SingleAppareilComponent},
  {path: 'edit', canActivate: [AuthGuard], component: EditAppareilComponent},
  {path: 'users', canActivate: [AuthGuard], component: UserListComponent},
  {path: 'new-user', canActivate: [AuthGuard], component: NewUserComponent},
  {path : 'auth', component: AuthComponent},
  {path: '', component: AppareilViewComponent},
  {path: 'not-found', component: FourOhFourComponent},
  {path: '**', redirectTo: '/not-found'},
]

@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent,
    SingleAppareilComponent,
    FourOhFourComponent,
    EditAppareilComponent,
    UserListComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [
    AppareilService,
    AuthService,
    UserService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
