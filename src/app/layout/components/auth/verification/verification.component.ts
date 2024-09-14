import { MessageService } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { SoftMessageService } from '../../../../core/services/soft-message.service';
import { AuthService } from '../../../../core/services/auth.service';
import { ChangeDetectorRef, Component, KeyValueDiffers, OnInit } from '@angular/core';
import { LayoutService } from '../../../service/app.layout.service';
import { BaseForm } from '../../../../core/components/base-form/base-form';
import { catchError, Subscription, throwError, empty } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Registration } from 'src/app/business/entities/generated/registration.generated';
import { VerificationTokenRequest } from 'src/app/business/entities/generated/verification-token-request.generated';

@Component({
    selector: 'verification',
    templateUrl: './verification.component.html',
})
export class VerificationComponent extends BaseForm<VerificationTokenRequest> implements OnInit {
    private subscription: Subscription | null = null;
    email: string;

    constructor(
      protected override differs: KeyValueDiffers,
      protected override http: HttpClient,
      protected override messageService: SoftMessageService, 
      protected override changeDetectorRef: ChangeDetectorRef,
      public layoutService: LayoutService, 
      private authService: AuthService, 
      private router: Router,
      private route: ActivatedRoute,
    ) { 
      super(differs, http, messageService, changeDetectorRef);
    }

    ngOnInit(){
        this.subscription = this.authService.navigateToDashboardIfLoggedIn(); // TODO FT: Make the guard for this
        this.init(new VerificationTokenRequest());
        this.route.queryParams.subscribe(params => {
            this.model.accessToken = params['access_token'];
            this.model.verificationToken =  params['verification_token'];
            if (this.model.accessToken && this.model.verificationToken) {
                this.parseToken(this.model.accessToken);
                let isFormGroupValid: boolean = this.checkFormGroupValidity();
                if (isFormGroupValid == false) return;
                this.authService.registrationVerification(this.model).subscribe(() => {
                    this.messageService.successMessage("You have successfully verified your account.")
                    this.router.navigate(['/']);
                });
            }else{
                this.messageService.warningMessage("You didn't came from verification link.")
            }
        });
    }
    
    init(model: Registration){
        this.initFormGroup(model);
    }

    register() {
        let isFormGroupValid: boolean = this.checkFormGroupValidity();
        if (isFormGroupValid == false) return;
        // const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '';
        this.authService.register(this.model).subscribe((res)=>{

        });
    }

    parseToken(token: string) {
        const payload = token.split('.')[1];  // Extract the payload part
        const decodedPayload = JSON.parse(atob(payload));  // Decode and parse it
        this.email = decodedPayload['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress'];
    }

    onGoogleSignIn(){
        
    }

    goToRegistrationPage(){
        
    }

    resendVerificationToken(){

    }

    ngOnDestroy(): void {
        this.subscription?.unsubscribe();
    }
}
