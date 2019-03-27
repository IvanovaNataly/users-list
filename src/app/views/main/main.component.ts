import { Component, OnInit } from '@angular/core';
import * as I from '../../interfaces';
import { NetService } from '../../services/net.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  private usersList: Array<I.User>;

  constructor(private netService: NetService) { }

  ngOnInit() {
    this.netService.getUsers().subscribe(
      data => {
        this.usersList = data;
        console.log(this.usersList);
      }, error => console.log(error)
    );
  }

}
