import { ActivatedRoute, Router } from '@angular/router';
import { SoftMessageService } from '../../../../core/services/soft-message.service';
import { AuthService } from './../../../../core/services/auth.service';
import { ChangeDetectorRef, Component, KeyValueDiffers, OnInit } from '@angular/core';
import { LayoutService } from '../../../../layout/service/app.layout.service';
import { BaseForm } from '../../../../core/components/base-form/base-form';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Login } from 'src/app/business/entities/generated/login.generated';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
})
export class LoginComponent extends BaseForm<Login> implements OnInit {
    companyName: string = environment.companyName;
    usersCanRegister: boolean = environment.usersCanRegister;
    private subscription: Subscription | null = null;

    constructor(
      protected override differs: KeyValueDiffers,
      protected override http: HttpClient,
      protected override messageService: SoftMessageService, 
      protected override changeDetectorRef: ChangeDetectorRef,
      public layoutService: LayoutService, 
      private authService: AuthService, 
      private softMessageService: SoftMessageService, 
      private router: Router, 
      private route: ActivatedRoute) { 
      super(differs, http, messageService, changeDetectorRef);
    }

    ngOnInit(){
        this.subscription = this.authService.navigateToDashboardIfLoggedIn();
        this.init(new Login());
    }
    
    init(model: Login){
        this.initFormGroup(model);
    }

    login() {
        let isFormGroupValid: boolean = this.checkFormGroupValidity();
        if (isFormGroupValid == false) return;
        // const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '';
        this.authService.login(this.model).subscribe(()=>{
            this.router.navigate(['/']);
        });
    }

    ngOnDestroy(): void {
        this.subscription?.unsubscribe();
    }
}
