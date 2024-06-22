import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: '',
    template: '',
    styles: []
})
export class SoftFormControl extends FormControl {
    public label: string;

    constructor(formControl: FormControl) {
        super(formControl, {updateOn: 'blur'});
     }

    ngOnInit(){
    }
    
    setLabel(name: string){
        this.label = name;
    }
}
