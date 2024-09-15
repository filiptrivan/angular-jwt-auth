import { ActivatedRoute, Router } from '@angular/router';
import { SoftMessageService } from '../../../../../core/services/soft-message.service';
import { AuthService } from '../../../../../core/services/auth.service';
import { Component, Input, OnInit } from '@angular/core';
import { LayoutService } from '../../../../service/app.layout.service';
import { ApiService } from 'src/app/business/services/api/api.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SoftControlsModule } from 'src/app/core/controls/soft-controls.module';
import { PrimengModule } from 'src/app/layout/modules/primeng.module';
import { RegistrationVerificationResultStatusCodes } from 'src/app/business/enums/generated/registration-verification-result-status-codes.generated';
import { VerificationWrapperComponent } from './verification-wrapper.component';

@Component({
    selector: 'registration-verification',
    templateUrl: './registration-verification.component.html',
    standalone: true,
    imports: [
        CommonModule,
        PrimengModule,
        FormsModule,
        ReactiveFormsModule,
        SoftControlsModule,
        VerificationWrapperComponent
    ]
})
export class RegistrationVerificationComponent implements OnInit {
    @Input() email: string;
    @Input() password: string;

    constructor(
      public layoutService: LayoutService, 
      private authService: AuthService, 
      private router: Router,
      private route: ActivatedRoute,
      private apiService: ApiService,
      private messageService: SoftMessageService, 
    ) { 
    }

    ngOnInit(){
    }

    resendVerificationToken(){
        this.authService.sendRegistrationVerificationEmail({email: this.email, password: this.password}).subscribe((res) => {
            if (res.status == RegistrationVerificationResultStatusCodes.UserDoesNotExistAndDoesNotHaveValidToken) {
                this.messageService.successMessage("Successfully sent verification code.")
            }
            else {
                this.messageService.warningMessage(res.message);
            }
        });
    }

    onCodeSubmit(event: string){
        this.authService.register({email: this.email, verificationCode: event}).subscribe(() => {
            this.messageService.successMessage("You have successfully verified your account.")
            this.router.navigate(['/']);
        });
    }

}

