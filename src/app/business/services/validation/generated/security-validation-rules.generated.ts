import { ValidationErrors } from '@angular/forms';
import { SoftFormControl, SoftValidatorFn } from 'src/app/core/components/soft-form-control/soft-form-control';
import { validatePrecisionScale } from '../../../../core/services/helper-functions';

export function getValidatorSecurity(formControl: SoftFormControl, className: string): SoftValidatorFn {
    switch(formControl.label + className){

        case 'namePermission':
            return namePermissionValidator(formControl);
        case 'descriptionPermission':
            return descriptionPermissionValidator(formControl);

        case 'passwordLogin':
            return passwordLoginValidator(formControl);
        case 'emailLogin':
            return emailLoginValidator(formControl);
        case 'ipAddressLogin':
            return ipAddressLoginValidator(formControl);
        case 'isSuccessfulLogin':
            return isSuccessfulLoginValidator(formControl);
        case 'isExternalLogin':
            return isExternalLoginValidator(formControl);

        case 'nameRole':
            return nameRoleValidator(formControl);
        case 'descriptionRole':
            return descriptionRoleValidator(formControl);

        case 'passwordUser':
            return passwordUserValidator(formControl);
        case 'emailUser':
            return emailUserValidator(formControl);
        case 'isDisabledUser':
            return isDisabledUserValidator(formControl);
        case 'hasLoggedInWithExternalProviderUser':
            return hasLoggedInWithExternalProviderUserValidator(formControl);



        case 'emailRegistration':
            return emailRegistrationValidator(formControl);
        case 'passwordRegistration':
            return passwordRegistrationValidator(formControl);
        case 'passwordConfirmationRegistration':
            return passwordConfirmationRegistrationValidator(formControl);




        default:
            return null;
    }
}


export function namePermissionValidator(control: SoftFormControl): SoftValidatorFn {
    const validator: SoftValidatorFn = (): ValidationErrors | null => {
        const value = control.value;

        const notEmptyRule = typeof value !== 'undefined' && value !== '';
        const min = 0;
        const max = 255;
        const stringLengthRule = value?.length >= min && value?.length <= max;

        const nameValid = notEmptyRule && stringLengthRule;

        return nameValid ? null : { _ : $localize`:@@NotEmptyLength:The field is mandatory and must have a minimum of ${min} and a maximum of ${max} characters.` };
    };
    validator.hasNotEmptyRule = true;
    return validator;
}

export function descriptionPermissionValidator(control: SoftFormControl): SoftValidatorFn {
    const validator: SoftValidatorFn = (): ValidationErrors | null => {
        const value = control.value;

        const min = 0;
        const max = 1000;
        const stringLengthRule = value?.length >= min && value?.length <= max;

        const descriptionValid = stringLengthRule;

        return descriptionValid ? null : { _ : $localize`:@@Length:The field must have a minimum of ${min} and a maximum of ${max} characters.` };
    };
    
    return validator;
}


export function passwordLoginValidator(control: SoftFormControl): SoftValidatorFn {
    const validator: SoftValidatorFn = (): ValidationErrors | null => {
        const value = control.value;

        const notEmptyRule = typeof value !== 'undefined' && value !== '';

        const passwordValid = notEmptyRule;

        return passwordValid ? null : { _ : $localize`:@@NotEmpty:The field is mandatory.` };
    };
    validator.hasNotEmptyRule = true;
    return validator;
}

export function emailLoginValidator(control: SoftFormControl): SoftValidatorFn {
    const validator: SoftValidatorFn = (): ValidationErrors | null => {
        const value = control.value;

        const notEmptyRule = typeof value !== 'undefined' && value !== '';

        const emailValid = notEmptyRule;

        return emailValid ? null : { _ : $localize`:@@NotEmpty:The field is mandatory.` };
    };
    validator.hasNotEmptyRule = true;
    return validator;
}

export function ipAddressLoginValidator(control: SoftFormControl): SoftValidatorFn {
    const validator: SoftValidatorFn = (): ValidationErrors | null => {
        const value = control.value;

        const notEmptyRule = typeof value !== 'undefined' && value !== '';
        const min = 0;
        const max = 45;
        const stringLengthRule = value?.length >= min && value?.length <= max;

        const ipAddressValid = notEmptyRule && stringLengthRule;

        return ipAddressValid ? null : { _ : $localize`:@@NotEmptyLength:The field is mandatory and must have a minimum of ${min} and a maximum of ${max} characters.` };
    };
    validator.hasNotEmptyRule = true;
    return validator;
}

export function isSuccessfulLoginValidator(control: SoftFormControl): SoftValidatorFn {
    const validator: SoftValidatorFn = (): ValidationErrors | null => {
        const value = control.value;

        const notEmptyRule = typeof value !== 'undefined' && value !== '';

        const isSuccessfulValid = notEmptyRule;

        return isSuccessfulValid ? null : { _ : $localize`:@@NotEmpty:The field is mandatory.` };
    };
    validator.hasNotEmptyRule = true;
    return validator;
}

export function isExternalLoginValidator(control: SoftFormControl): SoftValidatorFn {
    const validator: SoftValidatorFn = (): ValidationErrors | null => {
        const value = control.value;

        const notEmptyRule = typeof value !== 'undefined' && value !== '';

        const isExternalValid = notEmptyRule;

        return isExternalValid ? null : { _ : $localize`:@@NotEmpty:The field is mandatory.` };
    };
    validator.hasNotEmptyRule = true;
    return validator;
}


export function nameRoleValidator(control: SoftFormControl): SoftValidatorFn {
    const validator: SoftValidatorFn = (): ValidationErrors | null => {
        const value = control.value;

        const notEmptyRule = typeof value !== 'undefined' && value !== '';
        const min = 0;
        const max = 255;
        const stringLengthRule = value?.length >= min && value?.length <= max;

        const nameValid = notEmptyRule && stringLengthRule;

        return nameValid ? null : { _ : $localize`:@@NotEmptyLength:The field is mandatory and must have a minimum of ${min} and a maximum of ${max} characters.` };
    };
    validator.hasNotEmptyRule = true;
    return validator;
}

export function descriptionRoleValidator(control: SoftFormControl): SoftValidatorFn {
    const validator: SoftValidatorFn = (): ValidationErrors | null => {
        const value = control.value;

        const min = 0;
        const max = 1000;
        const stringLengthRule = value?.length >= min && value?.length <= max;

        const descriptionValid = stringLengthRule;

        return descriptionValid ? null : { _ : $localize`:@@Length:The field must have a minimum of ${min} and a maximum of ${max} characters.` };
    };
    
    return validator;
}


export function passwordUserValidator(control: SoftFormControl): SoftValidatorFn {
    const validator: SoftValidatorFn = (): ValidationErrors | null => {
        const value = control.value;

        const notEmptyRule = typeof value !== 'undefined' && value !== '';
        const min = 6;
        const max = 20;
        const stringLengthRule = value?.length >= min && value?.length <= max;

        const passwordValid = notEmptyRule && stringLengthRule;

        return passwordValid ? null : { _ : $localize`:@@NotEmptyLength:The field is mandatory and must have a minimum of ${min} and a maximum of ${max} characters.` };
    };
    validator.hasNotEmptyRule = true;
    return validator;
}

export function emailUserValidator(control: SoftFormControl): SoftValidatorFn {
    const validator: SoftValidatorFn = (): ValidationErrors | null => {
        const value = control.value;

        const notEmptyRule = typeof value !== 'undefined' && value !== '';
        const min = 0;
        const max = 70;
        const stringLengthRule = value?.length >= min && value?.length <= max;
        const emailAddressRule = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

        const emailValid = notEmptyRule && stringLengthRule && emailAddressRule;

        return emailValid ? null : { _ : $localize`:@@NotEmptyLengthEmailAddress:The field is mandatory, must have a minimum of ${min} and a maximum of ${max} characters and must be a valid email address.` };
    };
    validator.hasNotEmptyRule = true;
    return validator;
}

export function isDisabledUserValidator(control: SoftFormControl): SoftValidatorFn {
    const validator: SoftValidatorFn = (): ValidationErrors | null => {
        const value = control.value;

        const notEmptyRule = typeof value !== 'undefined' && value !== '';

        const isDisabledValid = notEmptyRule;

        return isDisabledValid ? null : { _ : $localize`:@@NotEmpty:The field is mandatory.` };
    };
    validator.hasNotEmptyRule = true;
    return validator;
}

export function hasLoggedInWithExternalProviderUserValidator(control: SoftFormControl): SoftValidatorFn {
    const validator: SoftValidatorFn = (): ValidationErrors | null => {
        const value = control.value;

        const notEmptyRule = typeof value !== 'undefined' && value !== '';

        const hasLoggedInWithExternalProviderValid = notEmptyRule;

        return hasLoggedInWithExternalProviderValid ? null : { _ : $localize`:@@NotEmpty:The field is mandatory.` };
    };
    validator.hasNotEmptyRule = true;
    return validator;
}




export function emailRegistrationValidator(control: SoftFormControl): SoftValidatorFn {
    const validator: SoftValidatorFn = (): ValidationErrors | null => {
        const value = control.value;

        const notEmptyRule = typeof value !== 'undefined' && value !== '';
        const min = 5;
        const max = 75;
        const stringLengthRule = value?.length >= min && value?.length <= max;
        const emailAddressRule = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

        const emailValid = notEmptyRule && stringLengthRule && emailAddressRule;

        return emailValid ? null : { _ : $localize`:@@NotEmptyLengthEmailAddress:The field is mandatory, must have a minimum of ${min} and a maximum of ${max} characters and must be a valid email address.` };
    };
    validator.hasNotEmptyRule = true;
    return validator;
}

export function passwordRegistrationValidator(control: SoftFormControl): SoftValidatorFn {
    const validator: SoftValidatorFn = (): ValidationErrors | null => {
        const value = control.value;

        const notEmptyRule = typeof value !== 'undefined' && value !== '';
        const min = 6;
        const max = 20;
        const stringLengthRule = value?.length >= min && value?.length <= max;

        const passwordValid = notEmptyRule && stringLengthRule;

        return passwordValid ? null : { _ : $localize`:@@NotEmptyLength:The field is mandatory and must have a minimum of ${min} and a maximum of ${max} characters.` };
    };
    validator.hasNotEmptyRule = true;
    return validator;
}

export function passwordConfirmationRegistrationValidator(control: SoftFormControl): SoftValidatorFn {
    const validator: SoftValidatorFn = (): ValidationErrors | null => {
        const value = control.value;

        const notEmptyRule = typeof value !== 'undefined' && value !== '';

        const passwordConfirmationValid = notEmptyRule;

        return passwordConfirmationValid ? null : { _ : $localize`:@@NotEmpty:The field is mandatory.` };
    };
    validator.hasNotEmptyRule = true;
    return validator;
}






