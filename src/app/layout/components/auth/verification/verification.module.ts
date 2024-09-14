import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SoftControlsModule } from 'src/app/core/controls/soft-controls.module';
import { AuthComponent } from "../partials/auth.compoment";
import { PrimengModule } from 'src/app/layout/modules/primeng.module';
import { VerificationComponent } from './verification.component';
import { VerificationRoutingModule } from './verification-routing.module';

@NgModule({
    imports: [
        CommonModule,
        VerificationRoutingModule,
        PrimengModule,
        FormsModule,
        ReactiveFormsModule,
        SoftControlsModule,
        AuthComponent
    ],
    declarations: [VerificationComponent]
})
export class VerificationModule { }
