import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-new-sidebar',
  templateUrl: './new-sidebar.component.html',
  styleUrls: ['./new-sidebar.component.scss']
})
export class NewSidebarComponent {
 // sidenavWidth: number = 0;
 isSidebarOpen: boolean = false ;
 usersName : any 
 isResponsive: boolean = false;

 constructor (private auth: AuthService, private route: Router ) {
  this.auth.getPofileToken().subscribe((res) => {
    console.log("UserName",res );
    this.usersName= res.username ;     
    })
}

 toggleResponsive() {
   this.isResponsive = !this.isResponsive

   // if(this.isResponsive){
   //   this.sidenavWidth = 250;
   // }else{
   //   this.sidenavWidth = 0;

   // }
 }
 doLogOut() {
  this.auth.logout()
  this.route.navigate(['login'])
}
}
