import { Injectable } from '@angular/core';
import * as I from '../interfaces';
import { NetService } from './net.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userList: Array<I.User>;

  constructor(private netService: NetService) {
    this.netService.getUsers().subscribe(
      data => {
        this.userList = data;
      }, error => console.log(error)
    );
  }

  

}
