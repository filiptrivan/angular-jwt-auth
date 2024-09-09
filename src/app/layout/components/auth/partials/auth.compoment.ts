import { Component, EventEmitter, Output } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { GoogleButtonComponent } from "./google-button.component";
import { CommonModule } from "@angular/common";
import { environment } from "src/environments/environment";
import { LayoutService } from "src/app/layout/service/app.layout.service";
import { AuthService } from "src/app/core/services/auth.service";
import { GoogleSigninButtonModule } from "@abacritt/angularx-social-login";
import { ExternalProvider } from "src/app/business/entities/generated/external-provider.generated";

@Component({
  selector: 'auth',
  templateUrl: './auth.component.html',
  styles: [],
  imports: [
    CommonModule,
    ButtonModule,
    GoogleButtonComponent,
    GoogleSigninButtonModule,
  ],
  standalone: true,
})
export class AuthComponent {
    hasGoogleAuth: boolean = environment.googleAuth;
    companyName: string = environment.companyName;
    
    constructor(public layoutService: LayoutService, private authService: AuthService) {}

    onGoogleSignIn(googleWrapper: any){
      googleWrapper.click();
    }

  }

