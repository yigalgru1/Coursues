import { PasswordValidator } from './password.validator';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {

  form = new FormGroup({
    oldPassword: new FormControl('',
      Validators.required,
      PasswordValidator.oldPasswordValidator),
    newPassword: new FormControl('',
      Validators.required,
      PasswordValidator.newPasswordValidator),
    confirmPassword: new FormControl('',
      Validators.required,
      PasswordValidator.newPasswordValidator),
  });

  get oldPassword() {
    return this.form.get('oldPassword');
  }
  get newPassword() {
    return this.form.get('newPassword');
  }
  get confirmPassword() {
    return this.form.get('confirmPassword');
  }

}
