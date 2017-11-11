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
        this.tabs.push('newTab');
        // console.log('clicked');
        // console.log('clicked');
    }

    changeTabName(newtabname) {
        this.tabs[this.activetab] = newtabname;
    }
}
