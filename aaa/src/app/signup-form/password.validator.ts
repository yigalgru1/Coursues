

import { AbstractControl, ValidationErrors } from '@angular/forms';


export class PasswordValidator {
    static oldPasswordValidator(control: AbstractControl): Promise<ValidationErrors | null> {

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value !== '123') {
                    resolve({ oldPasswordValidator: true });
                }
                else {
                    resolve(null);
                }
            }, 2000);
        });
    }
    static newPasswordValidator(control: AbstractControl): Promise<ValidationErrors | null> {

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value !== 'abc') {
                    resolve({ newPasswordValidator: true });
                }
                else {
                    resolve(null);
                }
            }, 2000);
        });
    }

    static passwordShouldMatch(control: AbstractControl) {
        let newpass = control.get('newPassword');
        let confpass = control.get('confirmPassword');

        if (newpass.value !== confpass.value) {
            return { passwordShouldMatch: true };
        }
        return null;
    }

}
