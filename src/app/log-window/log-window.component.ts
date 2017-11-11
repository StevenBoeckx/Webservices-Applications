import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-log-window',
    templateUrl: './log-window.component.html',
    styleUrls: ['./log-window.component.css']
})
export class LogWindowComponent implements OnInit {
    tabs = ['Log1'];
    activetab = 0;


    constructor() {
    }

    ngOnInit() {
    }

    ontabclicked(index) {
        this.activetab = index;
        //console.log(index);

    }

    addtab() {
        this.tabs.push('Log' + (this.tabs.length + 1) as string );
        this.activetab = this.tabs.length - 1;
        // console.log('clicked');
        // console.log('clicked');
    }


    Isactive(currentindex) {
        if (this.activetab === currentindex) {
            return true;
        } else {
            return false;
        }
    }
}
