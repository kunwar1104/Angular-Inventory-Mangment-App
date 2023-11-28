import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar-demo',
  templateUrl: './sidebar-demo.component.html',
  styleUrls: ['./sidebar-demo.component.scss']
})
export class SidebarDemoComponent {
  // sidenavWidth: number = 0;
  isSidebarOpen: boolean = false ;


  // // haal ani jarur nahi
  // openNav() {
  //   this.isSidebarOpen = true;
  // }

  // closeNav() {
  //   this.isSidebarOpen = false;

  // }
  isResponsive: boolean = false;

  toggleResponsive() {
    this.isResponsive = !this.isResponsive

    // if(this.isResponsive){
    //   this.sidenavWidth = 250;
    // }else{
    //   this.sidenavWidth = 0;

    // }
  }
}
