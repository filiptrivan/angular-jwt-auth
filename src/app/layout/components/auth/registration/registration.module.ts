import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationRoutingModule } from '../registration/registration-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SoftControlsModule } from 'src/app/core/controls/soft-controls.module';
import { GoogleButtonComponent } from "../partials/google-button.component";
import { AuthComponent } from "../partials/auth.compoment";
import { PrimengModule } from 'src/app/layout/modules/primeng.module';
import { RegistrationComponent } from './registration.component';
import { VerificationComponent } from '../verification/verification.component';

@NgModule({
    imports: [
        CommonModule,
        RegistrationRoutingModule,
        PrimengModule,
        FormsModule,
        ReactiveFormsModule,
        SoftControlsModule,
        VerificationComponent,
        GoogleButtonComponent,
        AuthComponent,
    ],
    declarations: [RegistrationComponent]
})
export class RegistrationModule { }
