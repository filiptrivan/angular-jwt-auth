import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Action, SoftDataTableComponent } from './soft-data-table.component';
import { ApiService } from 'src/app/business/services/api/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { LOCALE_ID } from '@angular/core';
import { of } from 'rxjs';
import { Table, TableLazyLoadEvent, TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

class MockApiService {
    loadListForGrid(controllerName: string, objectName: string, event: any) {}
    exportListToExcel(controllerName: string, objectName: string, event: any) {}
  }
  
  class MockRouter {
    navigate(commands: any[], extras?: any) {}
  }
  
  class MockDialogService {
    open(component: any, config: any) {
      return {
        onClose: of(true)
      };
    }
  }

describe('SoftDataTableComponent', () => {
  let component: SoftDataTableComponent;
  let fixture: ComponentFixture<SoftDataTableComponent>;
  let apiService: ApiService;
  let router: Router;
  let dialogService: DialogService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SoftDataTableComponent ],
      imports: [
        TableModule,
        DialogModule,
        ButtonModule,
      ],
      providers: [
        { provide: ApiService, useClass: MockApiService },
        { provide: Router, useClass: MockRouter },
        { provide: DialogService, useClass: MockDialogService },
        { provide: LOCALE_ID, useValue: 'en-US' },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: (key: string) => {
                  return {
                    id: '1'
                  };
                }
              }
            }
          }
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftDataTableComponent);
    component = fixture.componentInstance;
    apiService = TestBed.inject(ApiService);
    router = TestBed.inject(Router);
    dialogService = TestBed.inject(DialogService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get column header width', () => {
    expect(component.getColHeaderWidth('text')).toBe('min-width: 12rem;');
    expect(component.getColHeaderWidth('date')).toBe('min-width: 10rem;');
    expect(component.getColHeaderWidth('multiselect')).toBe('min-width: 12rem;');
    expect(component.getColHeaderWidth('boolean')).toBe('min-width: 8rem;');
    expect(component.getColHeaderWidth('numeric')).toBe('min-width: 12rem;');
    expect(component.getColHeaderWidth('unknown')).toBe('width: 0rem;');
  });

  it('should delete object and reload data', () => {
    spyOn(component, 'onLazyLoad');
    component.lastLazyLoadEvent = { first: 0, rows: 10 };
    component.deleteObject(1);
    expect(component.onLazyLoad).toHaveBeenCalledWith(component.lastLazyLoadEvent);
  });

  it('should return class for action', () => {
    const action: Action = { name: 'Details' };
    expect(component.getClassForAction(action)).toBe('pi pi-reply text-lg cursor-pointer');
  });

  it('should export list to excel', () => {
    spyOn(apiService, 'exportListToExcel');
    component.exportListToExcel();
    expect(apiService.exportListToExcel).toHaveBeenCalledWith(component.controllerName, component.objectName, component.lastLazyLoadEvent);
  });

  it('should clear table', () => {
    const table: Table = jasmine.createSpyObj('Table', ['clear']);
    component.clear(table);
    expect(table.clear).toHaveBeenCalled();
  });
});