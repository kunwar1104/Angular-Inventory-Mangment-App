import { Component, ViewChild } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';
import { product } from 'src/app/dataType';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { LoaderService } from 'src/app/loader/loader.service';

@Component({
  selector: 'app-produts-list',
  templateUrl: './produts-list.component.html',
  styleUrls: ['./produts-list.component.scss']
})
export class ProdutsListComponent {
  productlist: undefined | product[];
  productMessage: undefined | string;
  sellerData: any;

  @ViewChild(MatPaginator) paginator! : MatPaginator
  @ViewChild(MatSort) sort! : MatSort
  
  dataSource : [] | any
  displayedColumns: string[] = [ 'name', 'image', 'category',   'price', 'description','action'];
  
  constructor (private product: ProductService,private loaderService: LoaderService) {}

  private showLoader(): void {
    this.loaderService.show();
  }

  private hideLoader(): void {
    this.loaderService.hide();
  }
  ngOnInit(): void { 
    // this.loaderService.show();
    this.list()      ;
  };

  deleteProduct(id: number){
    console.log("ID for delete =",id)
    this.loaderService.show();
    this.product.deleteProduct(id).subscribe((result) => {
      this.loaderService.hide();
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

   confirmDelete( id:number) {
    console.log(id)
    if(window.confirm('Are sure you want to delete this item ?')){
      this.deleteProduct(id)
     }
  };
   
   sellerUserName() {
    if(localStorage.getItem('seller')){
      let sellerStore = localStorage.getItem('seller');
      let sellerData = sellerStore && JSON.parse(sellerStore)[0].subscribe((result: any)  => {
        // this.sellerData.sellerName =  result
      });
    }
  }

  Filterchange( event : Event) {
    const filValue = (event.target as HTMLInputElement).value
    this.dataSource.filter= filValue
  }

}
