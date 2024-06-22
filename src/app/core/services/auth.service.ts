import { SoftMessageService } from './soft-message.service';
import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of, Subscription } from 'rxjs';
import { map, tap, delay, finalize } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { LoginResult } from 'src/app/business/entities/generated/login-result.generated';
import { User } from 'src/app/business/entities/generated/user.generated';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnDestroy {
  private readonly apiUrl = environment.apiUrl;
  private timer?: Subscription;
  private _user = new BehaviorSubject<User | null>(null);
  user$ = this._user.asObservable();

  constructor(
    private router: Router,
    private http: HttpClient,
    private softMessageService: SoftMessageService
  ) {
    window.addEventListener('storage', this.storageEventListener.bind(this));
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
          .get<User>(`${this.apiUrl}/User/GetCurrentUser`)
          .subscribe((user: User) => { // TODO FT: send everything that user has with token
            this._user.next({
              username: user.username,
              roles: user.roles,
              email: user.email,
              pipedProperties: []
            });
          });
      }
    }
  }

  ngOnDestroy(): void {
    window.removeEventListener('storage', this.storageEventListener.bind(this));
  }

  login(password: string, username?: string, email?: string) {
    // TODO FT: izbaci ovo i implementiraj fluent validation
    // if (username == '' && email == '') {
    //   this.softMessageService.warningMessage(
    //     'Wrong password, username or email.',
    //     'Authentication error.'
    //   );
    //   return null;
    // } else 
    
    return this.http
      .post<LoginResult>(`${this.apiUrl}/Auth/Login`, {
        username,
        email,
        password,
      })
      .pipe(
        map((loginResult: LoginResult) => {
          this._user.next({
            username: loginResult.username,
            email: loginResult.email,
            roles: loginResult.roles,
            pipedProperties: []
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
            username: loginResult.username,
            email: loginResult.email,
            roles: loginResult.roles,
            pipedProperties: []
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
}
