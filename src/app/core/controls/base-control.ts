import {
    Component, Input,
  } from '@angular/core';
import { getTranslatedLabel } from 'src/app/business/services/business/translated-labels.generated';
import { AbstractControl } from '@angular/forms';
import { SoftFormControl } from '../components/soft-form-control/soft-form-control';
  
  @Component({
    selector: 'base-form',
    template: '',
    styles: [],
  })
  export class BaseControl {
    @Input() control: SoftFormControl; // FT: if you name it formControl: https://stackoverflow.com/a/54755671/21209982
    @Input() disabled: boolean = false;

    validationErrorMessage: string;
    
    ngOnInit(){
        if(this.disabled == true){
            this.control.disable();
        }
    }

    getTranslatedLabel(): string{
        return getTranslatedLabel(this.control.label);
    }

    getValidationErrrorMessages(){
        if(this.control.errors && this.control.dirty){
            // FT: it should always be one error message for single form control, 
            // also i don't need to reassign it to null because it will be shown only when control.valid == false
            this.validationErrorMessage = this.control.errors['_'];
        }
        
        return this.validationErrorMessage;
    }
  }