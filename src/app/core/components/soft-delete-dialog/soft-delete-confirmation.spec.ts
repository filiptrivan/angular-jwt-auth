import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ApiService } from 'src/app/business/services/api/api.service';
import { SoftDeleteConfirmationComponent } from './soft-delete-confirmation.component';
import { ConfirmationService } from 'primeng/api';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('SoftDeleteConfirmationComponent', () => {
  let component: SoftDeleteConfirmationComponent;
  let fixture: ComponentFixture<SoftDeleteConfirmationComponent>;
  let mockApiService: jasmine.SpyObj<ApiService>;
  let mockRef: jasmine.SpyObj<DynamicDialogRef>;
  let mockConfig: DynamicDialogConfig;

  beforeEach(async () => {
    mockApiService = jasmine.createSpyObj('ApiService', ['deleteItemFromGrid']);
    mockRef = jasmine.createSpyObj('DynamicDialogRef', ['close']);
    mockConfig = {
      data: {
        controllerName: 'testController',
        methodPartName: 'testMethod',
        id: 1
      }
    };

    await TestBed.configureTestingModule({
      declarations: [ SoftDeleteConfirmationComponent ],
      providers: [
        { provide: ApiService, useValue: mockApiService },
        { provide: DynamicDialogRef, useValue: mockRef },
        { provide: DynamicDialogConfig, useValue: mockConfig },
        ConfirmationService
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftDeleteConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('accept', () => {
    it('should call apiService.deleteItemFromGrid and close the dialog with true on success', () => {
      mockApiService.deleteItemFromGrid.and.returnValue(of(null));
      
      component.accept();
      
      expect(mockApiService.deleteItemFromGrid).toHaveBeenCalledWith('testController', 'testMethod', 1);
      expect(mockRef.close).toHaveBeenCalledWith(true);
    });

    it('should call apiService.deleteItemFromGrid and close the dialog with false on error', () => {
      mockApiService.deleteItemFromGrid.and.returnValue(throwError(() => new Error('Delete failed')));
      
      component.accept();
      
      expect(mockApiService.deleteItemFromGrid).toHaveBeenCalledWith('testController', 'testMethod', 1);
      expect(mockRef.close).toHaveBeenCalledWith(false);
    });
  });

  describe('reject', () => {
    it('should close the dialog without any arguments', () => {
      component.reject();
      
      expect(mockRef.close).toHaveBeenCalled();
    });
  });
});