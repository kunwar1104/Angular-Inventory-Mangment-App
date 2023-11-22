import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';
import { BrandList, product } from 'src/app/dataType';
import { HttpClient } from '@angular/common/http';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { LoaderService } from 'src/app/loader/loader.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { MatDialog,  MatDialogRef,
         MatDialogActions, MatDialogClose,
         MatDialogTitle, MatDialogContent, matDialogAnimations, } from '@angular/material/dialog'; 



@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent implements OnInit {

  productlist: any | BrandList[];
  productMessage: undefined | string;
  sending:boolean = false;
  dataSource : [] | any
  displayedColumns: string[] = [ 'brand', 'description','action'];
  modalRef?: BsModalRef;
  message?: string ; 
  template!: TemplateRef<any>; 


@ViewChild(MatPaginator) paginator! : MatPaginator
@ViewChild(MatSort) sort! : MatSort
  
  constructor (private product: ProductService,
               private http: HttpClient,
               private loaderService: LoaderService,
               private modalService: BsModalService,
               public dialog : MatDialog,
  )  {}

private showLoader(): void {
  this.loaderService.show();
}

private hideLoader(): void {
  this.loaderService.hide();
}             


  ngOnInit(): void { 
    // this.showLoader()
    this.list();     
    console.log("List = ",this.list )
    };

    // openDilog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    //   this.dialog.open(DialogAnimationsExampleDialog, {
    //     width: '250px',
    //     enterAnimationDuration,
    //     exitAnimationDuration,
    //   });
    // }
  
  
  confirmDelete( id:number) {
    console.log(id)
    if(
      window.confirm('Are sure you want to delete this item ?')
    
      ){
      this.deleteProduct(id)
     }
  };

  deleteProduct(id: number){
    console.log("ID for delete =",id)
    this.product.deleteBrand(id).subscribe((result) => {
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
    this.product.brandList().subscribe((result) =>{   // the delete some product than updated page may show 
      console.log("list result =",result)
      if(result){
        this.productlist = result 
         // angular material ui 
         this.dataSource= new MatTableDataSource<BrandList>(this.productlist)
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

// @Component({
//   selector: 'brand-modal',
//   templateUrl: 'brand-modal.html',
//   standalone: true ,

// })
// export class DialogAnimationsExampleDialog {

//   productlist: any | product[];
//   productMessage: undefined | string;
//   sending:boolean = false;
//   dataSource : [] | any
//   displayedColumns: string[] = [ 'name', 'action'];
//   modalRef?: BsModalRef;
//   message?: string ; 
//   template!: TemplateRef<any>; 


//   @ViewChild(MatPaginator) paginator! : MatPaginator
//   @ViewChild(MatSort) sort! : MatSort

//   constructor(public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>,
//               private product: ProductService,
//               private http: HttpClient,
//               public dialog : MatDialog,
//               ) {}

//   
    
//   
//   deleteProduct(id: number){
//     console.log("ID for delete =",id)
//     this.product.deleteProduct(id).subscribe((result) => {
//       console.log(result)
//       if(result) {
//       //  this.productMessage= "Product is deleted";   
//        this.list()  
//       }
//     })
//         setTimeout(() => {
//           this.productMessage= undefined
//         },3000)
//    }

//    openDilog(enterAnimationDuration: string, exitAnimationDuration: string): void {
//     this.dialog.open(DialogAnimationsExampleDialog, {
//       width: '250px',
//       enterAnimationDuration,
//       exitAnimationDuration,
//     });
//   }
// }