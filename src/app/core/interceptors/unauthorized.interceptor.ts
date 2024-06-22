import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { SoftMessageService } from '../services/soft-message.service';

@Injectable({
  providedIn: 'root',
})
export class UnauthorizedInterceptor implements HttpInterceptor {
  constructor(
    private authService: AuthService,
    private router: Router,
    private messageService: SoftMessageService,
  ) {}

  private handleAuthError(err: HttpErrorResponse): Observable<any> {
    if (!environment.production) {
      console.error(err);
    }
    // if (err.status == 404) {
    //   this.messageService.warningMessage(
    //     $localize`:@@NotFoundTitle:Not found.`,
    //     $localize`:@@NotFoundDetails:The requested resource was not found please try again.`
    //   );
    //   // TODO: vidi kako da resis ovo jer 404 moze da bude i kad ide na pogresnu stranicu i kad ne pronadje korisnika
    //   // this.router.navigate(['not-found'], {
    //   //   queryParams: { returnUrl: this.router.routerState.snapshot.url },
    //   // });
    //   if (!environment.production) {
    //     console.error(err);
    //   }
    //   return of(err.message);
    // }
    if (err.status == 404) {
      // TODO: vidi kako da resis ovo jer 404 moze da bude i kad ide na pogresnu stranicu i kad ne pronadje korisnika
      this.messageService.warningMessage(
        $localize`:@@NotFoundTitle:Not found.`,
        $localize`:@@NotFoundDetails:The requested resource was not found please try again.`
      );
      return of(err.message);
    } else if (err.status == 403) {
      this.messageService.warningMessage(
        $localize`:@@PermissionErrorTitle:Permission error.`,
        $localize`:@@PermissionErrorDetails:You don't have permission for this operation.`
      );
      return of(err.message);
    } else if (err.status == 401) {
      this.messageService.warningMessage(
        $localize`:@@SessionExpiredTitle:Session expired. Log in to continue.`,
        $localize`:@@SessionExpiredDetails:Your session has expired because of inactivity. To continue, please log in again.`
      );
      this.logout(err);
    } else if (err.status == 400) {
      this.messageService.warningMessage(
        $localize`:@@BadRequestTitle:Bad request.`,
        $localize`:@@BadRequestDetails:Sorry, we couldn't fulfill your request. Please ensure all fields are correctly filled and try again.`
      );
      return of(err.message);
    } else if (err.status == 0) {
      this.messageService.warningMessage(
        $localize`:@@ServerLostConnectionTitle:Connection lost.`,
        $localize`:@@ServerLostConnectionDetails:Connection lost. Please check your internet connection. If the issue persists, contact our support team.`
      );
      this.logout(err);
    } else if (err.error?.exception?.startsWith("Soft.Generator.Shared.SoftExceptions.BusinessException:")){
      this.messageService.warningMessage(
        $localize`:@@Warning:Warning.`,
        err.error.message
      );
      return of(err.message);
    }
    else {
      this.messageService.errorMessage(
        $localize`:@@UnexpectedErrorTitle:Something went wrong.`,
        $localize`:@@UnexpectedErrorDetails:Our team has been notified, and we're working to fix the issue. Please try again later.`
      );
      return of(err.message);
    }

    return throwError(err);
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((err) => {
        return this.handleAuthError(err);
      })
    );
  }

  logout(err: HttpErrorResponse){
    this.authService.clearLocalStorage();
    this.router.navigate(['auth/login'], {
      // queryParams: { returnUrl: this.router.routerState.snapshot.url },
    });
    
    return of(err.message);
  }
}
