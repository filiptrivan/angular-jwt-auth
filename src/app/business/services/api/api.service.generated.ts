import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../../entities/generated/user.generated';

@Injectable()
export class ApiGeneratedService {
    
    constructor(protected http: HttpClient) {}

    public getUser(id:number): Observable<User> {
        return this.http.get<User>(environment.apiUrl + `/User/GetUser?id=${id}`);
    }

    public saveUser(dto: User): Observable<User> {
        return this.http.put<User>(environment.apiUrl + `/User/SaveUser`, dto, environment.httpOptions);
    }
}