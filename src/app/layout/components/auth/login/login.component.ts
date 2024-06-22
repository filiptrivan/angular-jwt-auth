import { ActivatedRoute, Router } from '@angular/router';
import { SoftMessageService } from '../../../../core/services/soft-message.service';
import { AuthService } from './../../../../core/services/auth.service';
import { ChangeDetectorRef, Component, KeyValueDiffers, OnInit } from '@angular/core';
import { LayoutService } from '../../../../layout/service/app.layout.service';
import { BaseForm } from '../../../../core/components/base-form/base-form';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Login } from 'src/app/business/entities/generated/login.generated';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class LoginComponent extends BaseForm<Login> implements OnInit {
    private subscription: Subscription | null = null;
    valCheck: string[] = ['remember'];

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
        let url = this.route.snapshot.url[0]?.path ?? window.location.pathname
        this.subscription = this.authService.user$.subscribe((x) => {
            if (url === 'auth/login') {
              const accessToken = localStorage.getItem('access_token');
              const refreshToken = localStorage.getItem('refresh_token');
              if (x && accessToken && refreshToken) {
                // const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '';
                this.router.navigate(['/']);
              }
            }
          });
        this.init(new Login());
    }
    
    init(model: Login){
        this.initFormGroup(model);
    }

    login() {
      if (this.objectForm.invalid) {
        Object.keys(this.objectForm.controls).forEach(key => {
          this.objectForm.controls[key].markAsDirty();
        });
        this.messageService.warningMessage(
          $localize`:@@YouHaveSomeInvalidFieldsTitle:You have some invalid fields`, 
          $localize`:@@YouHaveSomeInvalidFieldsDescription:Some of the fields on the form are not valid, please check which ones and try again.`
        );
  
        return;
      }
        // const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '';
        this.authService
          .login(this.model.password, this.model.username)
          .subscribe(()=>{
              this.router.navigate(['/']);
          });
      }

    ngOnDestroy(): void {
        this.subscription?.unsubscribe();
      }
}
