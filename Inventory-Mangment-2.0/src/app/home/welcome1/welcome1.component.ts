import { Component, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';
import { AuthService } from 'src/app/Services/auth.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { perodic } from 'src/app/dataType';


@Component({
  selector: 'app-welcome1',
  templateUrl: './welcome1.component.html',
  styleUrls: ['./welcome1.component.scss']
})
export class Welcome1Component {
  chart: any = [];
  userLogedin: any;
  ELEMENT_DATA :any;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource: MatTableDataSource<any> | any
 
  @ViewChild(MatPaginator) paginator! : MatPaginator
  @ViewChild(MatSort) sort! : MatSort
  
  constructor ( public auth: AuthService ) {
    this.auth.getPofileToken().subscribe( ( res)=> {
      // console.log("response",res);
      this.userLogedin = res  
      console.log("getProfile",this.userLogedin)
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
  // this.dataSource = new MatTableDataSource(this.perodicData);
  // this.dataSource= new MatTableDataSource<perodic>(this.perodicData)
        //  this.dataSource.paginator = this.paginator;
        
        //  this.dataSource.sort = this.sort;
};

// Filterchange( event : Event) {
//   const filValue = (event.target as HTMLInputElement).value
//   this.dataSource.filter= filValue
// }

;
 

 perodicData = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    // {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    // {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    // {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    // {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    // {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
 ];

 perodicData1 = [
  // {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  //   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  //   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    // {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    // {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 1, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 2, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 3, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 4, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 5, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
 ]

 perodicData2 = [
  // {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  //   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 1, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 2, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 3, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 4, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 5, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    // {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    // {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    // {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
 ]
}
