import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    private agreementNotSubmitted;

    constructor(private router: Router) { }

    onSubmit(loginForm) {
      if (loginForm.valid) {
          this.router.navigate(['/user-list']);
      }
      else console.log('unvalid');
    }

    onBtnSubmit(loginForm) {
        this.agreementNotSubmitted = !loginForm.controls.agreement.valid;
    }

}
