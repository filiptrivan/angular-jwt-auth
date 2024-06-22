import { Component, Input } from "@angular/core";
import { Router } from '@angular/router';
import { Location } from "@angular/common";

@Component({
  selector: 'soft-return-button',
  templateUrl: './soft-return-button.component.html',
  styles: [],
})
export class SoftReturnButtonComponent {
  @Input() navigateUrl: string;

  constructor(private router: Router, private location: Location) {}

  onReturn(){
    if(this.navigateUrl == undefined){
        this.location.back();
    }else{
        this.router.navigate([this.navigateUrl]);
    }
  }
}