import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import {HttpClientModule} from '@angular/common/http';
import {FormGroup,FormControl} from '@angular/forms'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'



@NgModule({
  declarations: [
  RegisterComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    FormsModule,
    // RouterModule.forChild([
    //   {
    //     path: '',
    //     component: RegisterComponent
    //   }
    // ]),
    
  ]
})
export class RegisterModule { }
