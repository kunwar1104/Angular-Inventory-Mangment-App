import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Chart } from 'chart.js/auto';
import { Unsubscribable } from 'rxjs';
import { AuthService } from 'src/app/Services/auth.service';
import { User, product } from 'src/app/dataType';

@Component({
  selector: 'app-sidbar',
  templateUrl: './sidbar.component.html',
  styleUrls: ['./sidbar.component.scss']
})
export class SidbarComponent {

  title = 'ng-chart';
  chart: any = [];
  menuType: string = 'user';
  usersName : any 
  userData: any;

  constructor(private authService: AuthService , private route: Router ) {
    this.authService.getPofileToken().subscribe((res) => {
      console.log("UserName",res );
      this.usersName= res.username ;
      
    })
  }

  ngOnInit(): void {

    const xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
    const yValues = [55, 49, 44, 24, 15];
    const barColors = ["red", "green","blue","orange","brown"];

  this.chart = new Chart("canvas", {
    type: "bar",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues
      }]
    },
  });
}
 
//  userName1() {
//    if(localStorage.getItem('userDetail')){
//     let userStore = localStorage.getItem('userDetail');
    // let userData = userStore && JSON.parse(userStore)[0].subscribe((result : string | undefined) => {
//       // this.userData.usersName =result
//       // console.log("User Name",result)
//     })
//    } 
//    this.authService.usersName.subscribe((result: string | undefined) => {
//     this.usersName = result
//     console.log("User Name = ",result)
//    })
//  }
   

// userName() {
//   this.authService.getPofileToken().subscribe((res) => {
//     console.log("UserName",res );
//     if(res){
//       res = JSON.parse(res)[0];
//       this.usersName = res

//     }

//   })
// }

  doLogOut() {
    this.authService.logout()
    this.route.navigate(['login'])
  }
}
