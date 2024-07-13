import { ValidationErrors, ValidatorFn } from '@angular/forms';
import { SoftFormControl } from 'src/app/core/components/soft-form-control/soft-form-control';
import { validatePrecisionScale } from '../../../core/services/helper-functions';

export function getValidator(formControl: SoftFormControl, typeName: string): ValidatorFn {
    switch(formControl.label + typeName){
        case 'usernameLogin':
            return usernameLoginValidator(formControl);
        case 'ipAddressLogin':
            return ipAddressLoginValidator(formControl);
        case 'isSuccessfulLogin':
            return isSuccessfulLoginValidator(formControl);
        case 'passwordLogin':
            return passwordLoginValidator(formControl);

        case 'usernameUser':
            return usernameUserValidator(formControl);
        case 'emailUser':
            return emailUserValidator(formControl);
        case 'passwordUser':
            return passwordUserValidator(formControl);
        case 'isDisabledUser':
            return isDisabledUserValidator(formControl);

        case 'nameRole':
            return nameRoleValidator(formControl);
        case 'descriptionRole':
            return descriptionRoleValidator(formControl);

        case 'namePermission':
            return namePermissionValidator(formControl);
        case 'descriptionPermission':
            return descriptionPermissionValidator(formControl);

        default:
            return null;
    }
}

export function usernameLoginValidator(control: SoftFormControl): ValidatorFn {
    return (): ValidationErrors | null => {
        const value = control.value;

        const notEmptyRule = typeof value !== 'undefined' && value !== '';

        const usernameValid = notEmptyRule;

        return usernameValid ? null : { _ : $localize`:@@NotEmpty:The field is mandatory.` };
    };
}

export function ipAddressLoginValidator(control: SoftFormControl): ValidatorFn {
    return (): ValidationErrors | null => {
        const value = control.value;

        const notEmptyRule = typeof value !== 'undefined' && value !== '';
        const min = 0;
        const max = 45;
        const stringLengthRule = value?.length >= min && value?.length <= max;

        const ipAddressValid = notEmptyRule && stringLengthRule;

        return ipAddressValid ? null : { _ : $localize`:@@NotEmptyLength:The field is mandatory and must have a minimum of ${min} and a maximum of ${max} characters.` };
    };
}

export function isSuccessfulLoginValidator(control: SoftFormControl): ValidatorFn {
    return (): ValidationErrors | null => {
        const value = control.value;

        const notEmptyRule = typeof value !== 'undefined' && value !== '';

        const isSuccessfulValid = notEmptyRule;

        return isSuccessfulValid ? null : { _ : $localize`:@@NotEmpty:The field is mandatory.` };
    };
}

export function passwordLoginValidator(control: SoftFormControl): ValidatorFn {
    return (): ValidationErrors | null => {
        const value = control.value;

        const notEmptyRule = typeof value !== 'undefined' && value !== '';

        const passwordValid = notEmptyRule;

        return passwordValid ? null : { _ : $localize`:@@NotEmpty:The field is mandatory.` };
    };
}


export function usernameUserValidator(control: SoftFormControl): ValidatorFn {
    return (): ValidationErrors | null => {
        const value = control.value;

        const notEmptyRule = typeof value !== 'undefined' && value !== '';
        const min = 2;
        const max = 70;
        const stringLengthRule = value?.length >= min && value?.length <= max;
        const notHaveWhiteSpaceRule = !/\\s/.test(value);

        const usernameValid = notEmptyRule && stringLengthRule && notHaveWhiteSpaceRule;

        return usernameValid ? null : { _ : $localize`:@@NotEmptyLengthNotHaveWhiteSpace:The field is mandatory, must have a minimum of ${min} and a maximum of ${max} characters and must not contain whitespace.` };
    };
}

export function emailUserValidator(control: SoftFormControl): ValidatorFn {
    return (): ValidationErrors | null => {
        const value = control.value;

        const notEmptyRule = typeof value !== 'undefined' && value !== '';
        const min = 5;
        const max = 70;
        const stringLengthRule = value?.length >= min && value?.length <= max;
        const emailAddressRule = /^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$/.test(value);

        const emailValid = notEmptyRule && stringLengthRule && emailAddressRule;

        return emailValid ? null : { _ : $localize`:@@NotEmptyLengthEmailAddress:The field is mandatory, must have a minimum of ${min} and a maximum of ${max} characters and must be a valid email address.` };
    };
}

export function passwordUserValidator(control: SoftFormControl): ValidatorFn {
    return (): ValidationErrors | null => {
        const value = control.value;

        const min = 6;
        const max = 20;
        const stringLengthRule = value?.length >= min && value?.length <= max;

        const passwordValid = stringLengthRule;

        return passwordValid ? null : { _ : $localize`:@@Length:The field must have a minimum of ${min} and a maximum of ${max} characters.` };
    };
}

export function isDisabledUserValidator(control: SoftFormControl): ValidatorFn {
    return (): ValidationErrors | null => {
        const value = control.value;

        const notEmptyRule = typeof value !== 'undefined' && value !== '';

        const isDisabledValid = notEmptyRule;

        return isDisabledValid ? null : { _ : $localize`:@@NotEmpty:The field is mandatory.` };
    };
}


export function nameRoleValidator(control: SoftFormControl): ValidatorFn {
    return (): ValidationErrors | null => {
        const value = control.value;

        const notEmptyRule = typeof value !== 'undefined' && value !== '';
        const min = 0;
        const max = 255;
        const stringLengthRule = value?.length >= min && value?.length <= max;

        const nameValid = notEmptyRule && stringLengthRule;

        return nameValid ? null : { _ : $localize`:@@NotEmptyLength:The field is mandatory and must have a minimum of ${min} and a maximum of ${max} characters.` };
    };
}

export function descriptionRoleValidator(control: SoftFormControl): ValidatorFn {
    return (): ValidationErrors | null => {
        const value = control.value;

        const min = 0;
        const max = 1000;
        const stringLengthRule = value?.length >= min && value?.length <= max;

        const descriptionValid = stringLengthRule;

        return descriptionValid ? null : { _ : $localize`:@@Length:The field must have a minimum of ${min} and a maximum of ${max} characters.` };
    };
}


export function namePermissionValidator(control: SoftFormControl): ValidatorFn {
    return (): ValidationErrors | null => {
        const value = control.value;

        const notEmptyRule = typeof value !== 'undefined' && value !== '';
        const min = 0;
        const max = 255;
        const stringLengthRule = value?.length >= min && value?.length <= max;

        const nameValid = notEmptyRule && stringLengthRule;

        return nameValid ? null : { _ : $localize`:@@NotEmptyLength:The field is mandatory and must have a minimum of ${min} and a maximum of ${max} characters.` };
    };
}

export function descriptionPermissionValidator(control: SoftFormControl): ValidatorFn {
    return (): ValidationErrors | null => {
        const value = control.value;

        const min = 0;
        const max = 1000;
        const stringLengthRule = value?.length >= min && value?.length <= max;

        const descriptionValid = stringLengthRule;

        return descriptionValid ? null : { _ : $localize`:@@Length:The field must have a minimum of ${min} and a maximum of ${max} characters.` };
    };
}



