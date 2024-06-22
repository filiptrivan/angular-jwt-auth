import { Component, Input, OnInit } from '@angular/core';
import { BaseControl } from '../base-control';

@Component({
    selector: 'soft-checkbox',
    templateUrl: './soft-checkbox.component.html',
    styles: []
})
export class SoftCheckboxComponent extends BaseControl implements OnInit {

    constructor() {
        super();
     }

     override ngOnInit(){
        super.ngOnInit();
    }
}
