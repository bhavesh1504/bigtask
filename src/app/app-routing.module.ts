import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginGuard } from './login.guard';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RegisterComponent } from './register/register.component';
import {AuthGuard} from './services/auth.guard'


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login',  component: LoginComponent, canActivate: [LoginGuard]},
  {path: 'dashboard',   component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'register', component: RegisterComponent},
  {path: '**', component: PagenotfoundComponent}
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
