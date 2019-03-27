import { Component, OnInit } from '@angular/core';
import * as I from '../../interfaces';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  private usersList: Array<I.User>;

  constructor(private userService: UserService) { }

  ngOnInit() {
  //   this.userService.getUsers().subscribe(
  //     data => {
  //       console.log(data);
  //     }, error => console.log(error)
  // );
  }

}
