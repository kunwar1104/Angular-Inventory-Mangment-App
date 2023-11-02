import { Component, OnInit, ViewChild, numberAttribute } from '@angular/core';
import { product } from '../../dataType';
import { ProductService } from '../../Services/product.service';
import { ADTSettings } from 'angular-datatables/src/models/settings';
import { Subject } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  
})

export class CategoryComponent implements OnInit {

  constructor (private product: ProductService, public dialog: MatDialog) {}
  
  productlist!: product[];
  productMessage: undefined | string;

  maxSize = 5;
  bigTotalItems = 175;
  bigCurrentPage = 1;
  dtOptions: DataTables.Settings = {};
  dtTrigger!: Subject<ADTSettings>;

  // <!-- anugular material ui -->
  name: string | undefined;
  id: number | undefined;
  image: string | undefined;
  symbol: string | undefined;

  displayedColumns: string[] = [ 'name', 'image', 'category',  'action'];
  dataSource : [] | any

  @ViewChild(MatPaginator) paginator! : MatPaginator
  @ViewChild(MatSort) sort! : MatSort
  


  ngOnInit(): void { 
    this.list();     
    this.dtOptions = {
      pagingType: 'full_numbers',

    };
  };

   // on click ask for delete confirmation 
   confirmDelete( id:number) {
    console.log(id)
    if(window.confirm('Are sure you want to delete this item ?')){
      this.deleteProduct(id)
     }
  };

  deleteProduct( id : number){

    // this.confirmDelete()
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
        this.productlist = result ;

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
   
   sellerUserName() {
    if(localStorage.getItem('seller')){
      let sellerStore = localStorage.getItem('seller');
      let sellerData = sellerStore && JSON.parse(sellerStore)[0].subscribe((result: string | undefined)  => {
        // this.sellerData.sellerName =  result
      });
    }
  }
}



