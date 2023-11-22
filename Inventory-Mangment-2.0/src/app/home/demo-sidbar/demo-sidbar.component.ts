import { Component } from '@angular/core';
import { Chart } from 'chart.js';
// import { AuthGuard } from 'src/app/Services/auth.guard';
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-demo-sidbar',
  templateUrl: './demo-sidbar.component.html',
  styleUrls: ['./demo-sidbar.component.scss']
})
export class DemoSidbarComponent {

  usersName : any 

  constructor (private auth: AuthService, private route: Router ) {
    this.auth.getPofileToken().subscribe((res) => {
      console.log("UserName",res );
      this.usersName= res.username ;     
      })
}

 

 doLogOut() {
  this.auth.logout()
  this.route.navigate(['login'])
}
}
