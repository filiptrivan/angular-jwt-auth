import { Component, Input, OnInit } from '@angular/core';
import { BaseControl } from '../base-control';

@Component({
    selector: 'soft-textbox',
    templateUrl: './soft-textbox.component.html',
    styles: []
})
export class SoftTextboxComponent extends BaseControl implements OnInit {

    constructor() { 
        super();
    }

    override ngOnInit(){

        super.ngOnInit();
    }

}
