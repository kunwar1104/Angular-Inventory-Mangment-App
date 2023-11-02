import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';
import { product } from 'src/app/dataType';
import { HttpClient } from '@angular/common/http';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { LoaderService } from 'src/app/loader/loader.service';


@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent implements OnInit {

  productlist: any | product[];
  productMessage: undefined | string;
  sending:boolean = false;

//   

dataSource : [] | any
displayedColumns: string[] = [ 'image','name','category', 'action'];


@ViewChild(MatPaginator) paginator! : MatPaginator
@ViewChild(MatSort) sort! : MatSort
  
  constructor (private product: ProductService,
               private http: HttpClient,
               private loaderService: LoaderService  
  )  {}

  private showLoader(): void {
    this.loaderService.show();
  }

  private hideLoader(): void {
    this.loaderService.hide();
  }             


  ngOnInit(): void { 
    this.showLoader()
    this.list();     
     };

  
  confirmDelete( id:number) {
    console.log(id)
    if(window.confirm('Are sure you want to delete this item ?')){
      this.deleteProduct(id)
     }
  };

  deleteProduct(id: number){
    console.log("ID for delete =",id)
    this.product.deleteProduct(id).subscribe((result) => {
      console.log(result)
      if(result) {
       this.productMessage= "Product is deleted";
       
       this.list()  
      }
    })
    setTimeout(() => {
      this.productMessage= undefined
    },3000)
   }

   list() {                                             // here we make this function for refrash the page after 
    this.product.productList().subscribe((result) =>{   // the delete some product than updated page may show 
      console.log("list result =",result)
      if(result){
        this.productlist = result 

         // angular material ui 
         this.dataSource= new MatTableDataSource<product>(this.productlist)
         this.dataSource.paginator = this.paginator;
        
         this.dataSource.sort = this.sort;
      }
    })           
   }

    Filterchange( event : Event) {
  const filValue = (event.target as HTMLInputElement).value
  this.dataSource.filter= filValue
}
   
}