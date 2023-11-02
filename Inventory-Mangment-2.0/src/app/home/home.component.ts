import { Component } from '@angular/core';
import { Chart } from 'chart.js/auto';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  chart: any = [];
  
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
    // options: {
    //   legend: {display: false},
    //   title: {
    //     display: true,
    //     text: "World Wine Production 2018"
    //   }
    // }
  });
}

}
