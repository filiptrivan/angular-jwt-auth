import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SoftControlsModule } from 'src/app/core/controls/soft-controls.module';
import { GoogleButtonComponent } from "../partials/google-button.component";
import { AuthComponent } from "../partials/auth.compoment";
import { PrimengModule } from 'src/app/layout/modules/primeng.module';
import { LoginVerificationComponent } from '../partials/verification/login-verification.component';

@NgModule({
    imports: [
    CommonModule,
    LoginRoutingModule,
    PrimengModule,
    FormsModule,
    ReactiveFormsModule,
    SoftControlsModule,
    LoginVerificationComponent,
    GoogleButtonComponent,
    AuthComponent
],
    declarations: [LoginComponent]
})
export class LoginModule { }
