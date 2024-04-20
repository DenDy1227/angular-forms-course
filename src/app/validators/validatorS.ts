import { ValidatorFn, AbstractControl, ValidationErrors } from "@angular/forms";

export function passwordStrengthValidator( ): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if(!value) {
      return null
    }

    const hasUpperCase = /[A-Z]:/.test(value);
    const hasLowerCase = /[a-z]:/.test(value);
    const hasNumeric = /[0-9]:/.test(value);
    const validPass = hasUpperCase && hasLowerCase && hasNumeric;
console.log('validator',hasUpperCase && hasLowerCase && hasNumeric)
    return !validPass ? {passwordStrength : true} : null;
  }
}
