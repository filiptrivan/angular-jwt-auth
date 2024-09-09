import { Router } from '@angular/router';
import { SoftMessageService } from '../../../../core/services/soft-message.service';
import { AuthService } from '../../../../core/services/auth.service';
import { ChangeDetectorRef, Component, KeyValueDiffers, OnInit } from '@angular/core';
import { LayoutService } from '../../../service/app.layout.service';
import { BaseForm } from '../../../../core/components/base-form/base-form';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Login } from 'src/app/business/entities/generated/login.generated';
import { environment } from 'src/environments/environment';
import { Registration } from 'src/app/business/entities/generated/registration.generated';
import { confirmationPassword } from 'src/app/business/services/validation/validation-rules';
import { SoftFormControl } from 'src/app/core/components/soft-form-control/soft-form-control';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
})
export class RegistrationComponent extends BaseForm<Registration> implements OnInit {
    companyName: string = environment.companyName;
    private subscription: Subscription | null = null;

    constructor(
      protected override differs: KeyValueDiffers,
      protected override http: HttpClient,
      protected override messageService: SoftMessageService, 
      protected override changeDetectorRef: ChangeDetectorRef,
      public layoutService: LayoutService, 
      private authService: AuthService, 
      private router: Router) { 
      super(differs, http, messageService, changeDetectorRef);
    }

    ngOnInit(){
        this.subscription = this.authService.navigateToDashboardIfLoggedIn();
        this.init(new Registration());
    }
    
    init(model: Registration){
        this.initFormGroup(model);
        let confirmationPasswordFormControl = this.formGroup.controls['passwordConfirmation'] as SoftFormControl;
        let passwordFormControl = this.formGroup.controls['password'] as SoftFormControl;
        confirmationPasswordFormControl.validator = confirmationPassword(confirmationPasswordFormControl, passwordFormControl);
    }

    register() {
        let isFormGroupValid: boolean = this.checkFormGroupValidity();
        if (isFormGroupValid == false) return;
        // const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '';
        // this.authService.login(this.model.password, this.model.email).subscribe(()=>{
        //       this.router.navigate(['/']);
        //   });
    }

    onGoogleSignIn(){
        
    }

    goToRegistrationPage(){
        
    }

    ngOnDestroy(): void {
        this.subscription?.unsubscribe();
    }
}
