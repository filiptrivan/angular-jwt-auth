import { Router } from '@angular/router';
import { SoftMessageService } from '../../../../core/services/soft-message.service';
import { AuthService } from '../../../../core/services/auth.service';
import { ChangeDetectorRef, Component, KeyValueDiffers, OnInit } from '@angular/core';
import { LayoutService } from '../../../service/app.layout.service';
import { BaseForm } from '../../../../core/components/base-form/base-form';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Registration } from 'src/app/business/entities/generated/registration.generated';
import { RegistrationVerificationResultStatusCodes } from 'src/app/business/enums/generated/registration-verification-result-status-codes.generated';
import { VerificationTypeCodes } from 'src/app/business/enums/verification-type-codes';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
})
export class RegistrationComponent extends BaseForm<Registration> implements OnInit {
    companyName: string = environment.companyName;
    private subscription: Subscription | null = null;
    showEmailSentDialog: boolean = false;
    verificationType: VerificationTypeCodes = VerificationTypeCodes.Login;

    constructor(
      protected override differs: KeyValueDiffers,
      protected override http: HttpClient,
      protected override messageService: SoftMessageService, 
      protected override changeDetectorRef: ChangeDetectorRef,
      public layoutService: LayoutService, 
      private authService: AuthService, 
      private router: Router,
    ) { 
      super(differs, http, messageService, changeDetectorRef);
    }

    ngOnInit(){
        this.subscription = this.authService.navigateToDashboardIfLoggedIn();
        this.init(new Registration());
    }
    
    init(model: Registration){
        this.initFormGroup(model);
    }

    sendRegistrationVerificationEmail() {
        let isFormGroupValid: boolean = this.checkFormGroupValidity();
        if (isFormGroupValid == false) return;
        // const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '';
        this.authService.sendRegistrationVerificationEmail(this.model).subscribe((res)=>{
            if (res.status == RegistrationVerificationResultStatusCodes.UserDoesNotExistAndDoesNotHaveValidToken) {
                this.handleUserDoesNotExistAndDoesNotHaveValidToken();
            }
            else {
                this.messageService.warningMessage(res.message);
            }
        });
    }

    handleUserDoesNotExistAndDoesNotHaveValidToken() {
        this.showEmailSentDialog = true;
    }

    ngOnDestroy(): void {
        this.subscription?.unsubscribe();
    }
}
