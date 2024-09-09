import { Injectable, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of, Subject, Subscription } from 'rxjs';
import { map, tap, delay, finalize } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { LoginResult } from 'src/app/business/entities/generated/login-result.generated';
import { User } from 'src/app/business/entities/generated/user.generated';
import { SocialAuthService, SocialUser } from "@abacritt/angularx-social-login";
import { GoogleLoginProvider } from "@abacritt/angularx-social-login";
import { ExternalProvider } from 'src/app/business/entities/generated/external-provider.generated';
import { Login } from 'src/app/business/entities/generated/login.generated';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnDestroy {
  private readonly apiUrl = environment.apiUrl;
  private timer?: Subscription;
  private _user = new BehaviorSubject<User | null>(null);
  user$ = this._user.asObservable();

  // Google auth
  private authChangeSub = new Subject<boolean>();
  private extAuthChangeSub = new Subject<SocialUser>();
  public authChanged = this.authChangeSub.asObservable();
  public extAuthChanged = this.extAuthChangeSub.asObservable();
  
  constructor(
    private router: Router,
    private http: HttpClient,
    private route: ActivatedRoute,
    private externalAuthService: SocialAuthService
  ) {
    window.addEventListener('storage', this.storageEventListener.bind(this));

    // Google auth
    this.externalAuthService.authState.subscribe((user) => {
      const externalAuth: ExternalProvider = {
        provider: user.provider,
        idToken: user.idToken
      }
      this.loginExternal(externalAuth).subscribe(()=>{
        this.router.navigate(['/']);
      });
      this.extAuthChangeSub.next(user);
    })
  }

  private storageEventListener(event: StorageEvent) {
    if (event.storageArea === localStorage) {
      if (event.key === 'logout-event') {
        this.stopTokenTimer();
        this._user.next(null);
      }
      if (event.key === 'login-event') {
        this.stopTokenTimer();
        this.http
          .get<User>(`${this.apiUrl}/Auth/GetCurrentUser`)
          .subscribe((user: User) => { // TODO FT: send everything that user has with token
            this._user.next({
              roles: user.roles,
              email: user.email
            });
          });
      }
    }
  }

  login(body: Login): Observable<LoginResult> {
    let loginResultObservable = this.http.post<LoginResult>(`${this.apiUrl}/Auth/Login`, body)
    return this.handleLoginResult(loginResultObservable);
  }

  loginExternal(body: ExternalProvider): Observable<LoginResult> {
    console.log("object")
    let loginResultObservable = this.http.post<LoginResult>(`${this.apiUrl}/Auth/LoginExternal`, body);
    return this.handleLoginResult(loginResultObservable);
  }

  handleLoginResult(loginResultObservable: Observable<LoginResult>){
    return loginResultObservable.pipe(
        map((loginResult: LoginResult) => {
          this._user.next({
            email: loginResult.email,
            roles: loginResult.roles
          });
          this.setLocalStorage(loginResult);
          this.startTokenTimer();
          return loginResult;
        })
      );
  }

  logout() {
    this.http
      .post(`${this.apiUrl}/Auth/Logout`, {})
      .pipe(
        finalize(() => {
          this.clearLocalStorage();
          this._user.next(null);
          this.stopTokenTimer();
          this.router.navigate(['auth/login']);
        })
      )
      .subscribe();
  }

  refreshToken(): Observable<LoginResult | null> {
    const refreshToken = localStorage.getItem('refresh_token');
    if (!refreshToken) {
      this.clearLocalStorage();
      return of(null);
    }

    return this.http
      .post<LoginResult>(`${this.apiUrl}/Auth/RefreshToken`, { refreshToken })
      .pipe(
        map((loginResult) => {
          this._user.next({
            email: loginResult.email,
            roles: loginResult.roles
          });
          this.setLocalStorage(loginResult);
          this.startTokenTimer();
          return loginResult;
        })
      );
  }

  setLocalStorage(x: LoginResult) {
    localStorage.setItem('access_token', x.accessToken);
    localStorage.setItem('refresh_token', x.refreshToken);
    localStorage.setItem('login-event', 'login' + Math.random());
  }

  clearLocalStorage() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.setItem('logout-event', 'logout' + Math.random());
  }

  isUserAuthenticated(){
    
  }

  private getTokenRemainingTime() {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      return 0;
    }
    const jwtToken = JSON.parse(atob(accessToken.split('.')[1]));
    const expires = new Date(jwtToken.exp * 1000);
    return expires.getTime() - Date.now();
  }

  private startTokenTimer() {
    const timeout = this.getTokenRemainingTime();
    this.timer = of(true)
      .pipe(
        delay(timeout),
        tap({
          next: () => this.refreshToken().subscribe(),
        })
      )
      .subscribe();
  }

  private stopTokenTimer() {
    this.timer?.unsubscribe();
  }

  navigateToDashboardIfLoggedIn() {
    let url = this.route.snapshot.url[0]?.path ?? window.location.pathname
    return this.user$.subscribe((x) => {
      if (url === 'auth/login') {
        const accessToken = localStorage.getItem('access_token');
        const refreshToken = localStorage.getItem('refresh_token');
        if (x && accessToken && refreshToken) {
          // const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '';
          this.router.navigate(['/']);
        }
      }
    });
  }

  logoutGoogle = () => {
    this.externalAuthService.signOut();
  }

  ngOnDestroy(): void {
    window.removeEventListener('storage', this.storageEventListener.bind(this));
  }
}
