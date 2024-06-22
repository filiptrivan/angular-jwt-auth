import { BaseService } from './../../../core/services/base-service';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiGeneratedService } from './api.service.generated';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { TableResult } from 'src/app/core/entities/table-result';
import * as FileSaver from 'file-saver';
import { TableLazyLoadEvent } from 'primeng/table';
import { User } from '../../entities/generated/user.generated';

@Injectable()
export class ApiService extends ApiGeneratedService {

    constructor(protected override http: HttpClient, private baseService: BaseService) {
        super(http);
    }
    
    public loadListForGrid(controllerName: string, methodPartName: string, body: TableLazyLoadEvent): Observable<TableResult> {
        return this.http.post<TableResult>(`${environment.apiUrl}/${controllerName}/Load${methodPartName}ListForTable`, body, environment.httpOptions);
    }

    public exportListToExcel(controllerName: string, methodPartName: string, body: TableLazyLoadEvent) {
        return this.exportListToExcelObservable(controllerName, methodPartName, body).subscribe(res => {
            let fileName = this.baseService.getFileNameFromContentDisposition(res, "ExcelExport.xlsx");
            FileSaver.saveAs(res.body, decodeURIComponent(fileName));
        });
    }

    public exportListToExcelObservable(controllerName: string, methodPartName: string, body: TableLazyLoadEvent) {
        return this.http.post(`${environment.apiUrl}/${controllerName}/Export${methodPartName}ListToExcel`, body, { observe: 'response', responseType: 'blob' });
    }

    public getCurrentUser(): Observable<User> {
        return this.http.get<User>(environment.apiUrl + '/User/GetCurrentUser');
    }

    public getCurrentUserNotAuth(): Observable<User> {
        return this.http.get<User>(environment.apiUrl + '/User/GetCurrentUserNotAuth');
    }

    public deleteItemFromGrid(controllerName: string, methodPartName: string, id: number): Observable<any> {
        return this.http.delete(`${environment.apiUrl}/${controllerName}/Delete${methodPartName}?id=${id}`);
    }
}