import { Component, OnInit } from '@angular/core';
import * as I from '../../interfaces';
import { NetService } from '../../services/net.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NewUserValidators } from './newUser.validators';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
    usersList: Array<I.User>;
    form = new FormGroup({
        name: new FormControl('', Validators.required),
        username: new FormControl('', Validators.required),
        email: new FormControl('', [
            Validators.required,
            Validators.email,
            NewUserValidators.cannotContainSpace
        ]),
        phone: new FormControl()
    });
    name = this.form.get('name');
    username = this.form.get('username');
    email = this.form.get('email');
    phone = this.form.get('phone');
    constructor(private netService: NetService) { }

    ngOnInit() {
        this.netService.getUsers().subscribe(
            data => {
                this.usersList = data;
            }, error => console.log(error)
        );
    }

}
