import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    private agreementNotSubmitted;

    constructor() { }

    ngOnInit() {
    }

    onSubmit(loginForm) {
      if (loginForm.valid) {
          console.log(loginForm);
      }
      else console.log(loginForm.controls.agreement);
    }

    onBtnSubmit(loginForm) {
        this.agreementNotSubmitted = !loginForm.controls.agreement.valid;
    }

}
