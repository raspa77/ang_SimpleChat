import { Validator, AbstractControl, ValidationErrors, NG_VALIDATORS, ValidatorFn } from '@angular/forms';
import { Directive, Input } from '@angular/core';
   
@Directive({
    selector: '[passwordCheck]',
    providers: [{provide: NG_VALIDATORS, useExisting: PasswordCheckDirective, multi: true}]
})

export class PasswordCheckDirective implements Validator {
    @Input() passwordCheck: string;

    validate(control: AbstractControl): ValidationErrors {
        let validator : ValidatorFn = passwordCheck(this.passwordCheck);
        //                        ? operatore ternario, se vero 1 altrimenti 2  (1:2)
        return this.passwordCheck ? validator(control) : null;
    }    
    registerOnValidatorChange?(fn: () => void): void {
        // throw new Error("Method not implemented.");
    }
}

function passwordCheck(type: string): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
        let check: (v:string) => string;
        if (type === 'simple') {
            check = simpleCheck;
        } else if (type === 'complex') {
            check = complexCheck;
        }
        let message = check(control.value);
        console.log(message);
        //             ? operatore ternario, se vero 1 altrimenti 2  (1:2)
        return message ? {'passwordCheck': message} : null;
    }
}

function simpleCheck(value: string): string {
    var lowercase = /[a-z]/.test(value);
    var uppercase = /[A-Z]/.test(value);
    var result = lowercase && uppercase;
    //            ? operatore ternario, se vero 1 altrimenti 2  (1:2)
    return result ? null : 'The password must contain upper and lower case letters';
}
    
function complexCheck(value: string): string {
    var message = simpleCheck(value);
    var numeric = /[0-9]/.test(value);
    var notalphanumeric = /[^a-zA-Z0-9]/.test(value);
    var result = numeric && notalphanumeric;
    if (message) {
        message = message ? `${message} and` : 'The password';
    }
    if (!result) message = `${message} must contain at least one number and a special character`;
    return message ? message : null;
}