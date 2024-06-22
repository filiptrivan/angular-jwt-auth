import {
  ChangeDetectorRef,
  Component,
  KeyValueChanges,
  KeyValueDiffer,
  KeyValueDiffers,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BaseEntity } from '../../entities/base-entity';
import { SoftFormControl } from '../soft-form-control/soft-form-control';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { SoftMessageService } from '../../services/soft-message.service';
import { getTranslatedClassName } from 'src/app/business/services/business/translated-labels.generated copy';
import { getValidator } from 'src/app/business/services/business/validation-rules.generated';

@Component({
  selector: 'base-form',
  template: '',
  styles: [],
})
export class BaseForm<T extends BaseEntity> { 
  objectForm: FormGroup;
  model: T;
  modelId: number;
  controlNamesFromHtml: string[] = [];
  detailsTitle: string;

  private modelDiffer: KeyValueDiffer<string, any>;

  constructor(
    protected differs: KeyValueDiffers, 
    protected http: HttpClient, 
    protected messageService: SoftMessageService, 
    protected changeDetectorRef: ChangeDetectorRef,
    ) {
  }

  initFormGroup(model: T) {
    this.model = model;
    this.detailsTitle = getTranslatedClassName(this.model.typeName);

    this.objectForm = new FormGroup({});

    Object.keys(this.model).forEach((key) => {
      let formControl: SoftFormControl = new SoftFormControl(this.model[key]);
      formControl.setLabel(key);
      // formControl.addValidators(getValidator(formControl, this.model.typeName));
      this.objectForm.addControl(key, formControl);
    });

    // both directions
    Object.keys(this.objectForm.controls).forEach(key => {
      this.objectForm.controls[key].valueChanges.subscribe(value => {
        this.model[key] = value;
      })
    });
    
    this.modelDiffer = this.differs.find(this.model).create();
  }

  subscribeFormToModelChanges(objectForm: FormGroup, model: T) {
    // both directions
    Object.keys(objectForm.controls).forEach((key) => {
      objectForm.controls[key].setValue(model[key]);
    });
  }

  modelChanged(changes: KeyValueChanges<string, any>) {
    // https://stackoverflow.com/questions/46330070/angular-4-how-to-watch-an-object-for-changes
    this.subscribeFormToModelChanges(this.objectForm, this.model);
  }

  ngDoCheck(): void {
    const changes = this.modelDiffer?.diff(this.model);
    if (changes) {
      this.modelChanged(changes);
    }
  }

  ngAfterViewInit() {
    if(this.objectForm){ // FT: this.objectForm isn't already initialized here because it's waiting for api call to finish
        Object.keys(this.objectForm.controls).forEach((key) => {
          if (this.controlNamesFromHtml.some((x) => x == key)) {
            // FT: ako se kontrola ne nalazi u htmlu izbaci iz objectForm, jer moze da se desi da joj dodas neki validator koji ti kasnije nece dozvoliti da submitujes formu a mozda to ne zelis
            this.objectForm.controls[key].setValidators(getValidator(<SoftFormControl>this.objectForm.controls[key], this.model.typeName));
            this.objectForm.controls[key].updateValueAndValidity();
          }
        });
    }
  }

  ngAfterViewChecked(): void {
    this.changeDetectorRef.detectChanges();
  }

  control(formControlName: string) {
    let formControl: SoftFormControl = this.objectForm.controls[
      formControlName
    ] as SoftFormControl;
    if (formControl == null && environment.production == false)
      console.error(
        `formControl with specified name: '${formControlName}' does not exist in DTO.`
      );
    this.controlNamesFromHtml.push(formControlName);

    return formControl;
  }

  beforeSaveHook(){}
  afterSaveHook(){}
  afterSaveRequestHook(){}

  onSave(){
    this.beforeSaveHook();
    if (this.objectForm.invalid) {
      this.objectForm.markAsDirty();
      this.messageService.warningMessage(
      $localize`:@@YouHaveSomeInvalidFieldsTitle:You have some invalid fields`, 
      $localize`:@@YouHaveSomeInvalidFieldsDescription:Some of the fields on the form are not valid, please check which ones and try again.`
      );

      return;
    }
    this.http.put<T>(environment.apiUrl + `/${this.model.typeName}/Save${this.model.typeName}`, this.model, environment.httpOptions).subscribe(res => {
      Object.assign(this.model, res)
      // this.model = res; // FT: we lose typeName like this and everything that res doesn't have but this.model has
      this.afterSaveHook();
    });
    this.afterSaveRequestHook();
  }
}
