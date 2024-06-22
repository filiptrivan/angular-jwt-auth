import { AuthService } from './../core/services/auth.service';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from "./service/app.layout.service";
import { User } from '../business/entities/generated/user.generated';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {
    currentUser: User;
    items!: MenuItem[];

    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;

    @ViewChild('topbarprofiledropdownmenubutton') topbarProfileDropdownMenuButton!: ElementRef;

    constructor(public layoutService: LayoutService, private elRef: ElementRef, private authService: AuthService) { }

  ngOnInit(){
    this.authService.user$.subscribe(res => {
      this.currentUser = res;
    });
  }
    
  logout()
  {
    this.authService.logout();
  }

  onDocumentClick(event: any) {
    if (
      !this.menu.nativeElement.contains(event.target) 
    ) {
      if (this.layoutService.state.profileDropdownSidebarVisible == true) {
        this.layoutService.state.profileDropdownSidebarVisible = false;
      }
    }
  }
}
