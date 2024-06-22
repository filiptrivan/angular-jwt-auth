import { Component, Input, OnInit } from '@angular/core';
import { BaseControl } from '../base-control';

@Component({
    selector: 'soft-password',
    templateUrl: './soft-password.component.html',
    styles: []
})
export class SoftPasswordComponent extends BaseControl implements OnInit {

    constructor() { 
        super();
    }

    override ngOnInit(){

        super.ngOnInit();
    }

}
