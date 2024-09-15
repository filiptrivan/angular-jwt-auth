import { ActivatedRoute, Router } from '@angular/router';
import { SoftMessageService } from '../../../../core/services/soft-message.service';
import { AuthService } from '../../../../core/services/auth.service';
import { ChangeDetectorRef, Component, Input, KeyValueDiffers, OnInit } from '@angular/core';
import { LayoutService } from '../../../service/app.layout.service';
import { BaseForm } from '../../../../core/components/base-form/base-form';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Registration } from 'src/app/business/entities/generated/registration.generated';
import { VerificationTokenRequest } from 'src/app/business/entities/generated/verification-token-request.generated';
import { ApiService } from 'src/app/business/services/api/api.service';
import { RegistrationResultStatusCodes } from 'src/app/business/enums/generated/registration-result-status-codes.generated';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SoftControlsModule } from 'src/app/core/controls/soft-controls.module';
import { PrimengModule } from 'src/app/layout/modules/primeng.module';

@Component({
    selector: 'verification',
    templateUrl: './verification.component.html',
    standalone: true,
    imports: [
        CommonModule,
        PrimengModule,
        FormsModule,
        ReactiveFormsModule,
        SoftControlsModule,
    ]
})
export class VerificationComponent extends BaseForm<VerificationTokenRequest> implements OnInit {
    private subscription: Subscription | null = null;
    @Input() email: string;
    @Input() password: string;

    constructor(
      protected override differs: KeyValueDiffers,
      protected override http: HttpClient,
      protected override messageService: SoftMessageService, 
      protected override changeDetectorRef: ChangeDetectorRef,
      public layoutService: LayoutService, 
      private authService: AuthService, 
      private router: Router,
      private route: ActivatedRoute,
      private apiService: ApiService,
    ) { 
      super(differs, http, messageService, changeDetectorRef);
    }

    ngOnInit(){
        this.subscription = this.authService.navigateToDashboardIfLoggedIn(); // TODO FT: Make the guard for this
        this.init(new VerificationTokenRequest({email: this.email}));
    }
    
    init(model: VerificationTokenRequest){
        this.initFormGroup(model);
    }

    resendVerificationToken(){
        this.authService.sendRegistrationVerificationEmail({email: this.email, password: this.password}).subscribe((res) => {
            if (res.status == RegistrationResultStatusCodes.UserDoesNotExistAndDoesNotHaveValidToken) {
                this.messageService.successMessage("Successfully sent verification code.")
            }
            else {
                this.messageService.warningMessage(res.message);
            }
        });
    }

    onCodeSubmit(){
        let isValid: boolean = this.checkFormGroupValidity();
    
        if(isValid){
            this.authService.register(this.model).subscribe(() => {
                this.messageService.successMessage("You have successfully verified your account.")
                this.router.navigate(['/']);
            });
        }
    }

    ngOnDestroy(): void {
        this.subscription?.unsubscribe();
    }
}
