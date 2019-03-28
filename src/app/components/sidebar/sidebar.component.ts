import { Component, OnInit, Input } from '@angular/core'
import * as I from '../../interfaces';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
    @Input('usersList') usersList: Array<I.User>;

    constructor() { }

    ngOnInit() {
    }

}
