import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/auth.guard';
import { LoginGuard } from './login.guard';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RegisterComponent } from './register/register.component';
import { CommonInterceptor } from './common.interceptor';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PagenotfoundComponent,
    RegisterComponent
     
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    
  ],
  providers: [AuthGuard, LoginGuard,
  {provide: HTTP_INTERCEPTORS, useClass: CommonInterceptor, multi: true}],
  bootstrap: [AppComponent],

})
export class AppModule { }
