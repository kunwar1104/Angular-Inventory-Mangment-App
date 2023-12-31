import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/Services/product.service';
import { product } from 'src/app/dataType';
import { LoaderService } from 'src/app/loader/loader.service';
import { CategoryList } from './../../dataType';
import { data } from 'jquery';

function alphabetOnly(control: FormControl): { [key: string]: any } | null {
  const valid = /^[a-zA-Z ]*$/.test(control.value);
  return valid ? null : { alphabetOnly: true };
}

function numberOnly (control : FormControl ): { [key: string] : any } | null {
  const valid = /^[0-9]*$/.test(control.value);
  return valid ? null : { numberOnly: true}; 
}

@Component({
  selector: 'app-produt-update',
  templateUrl: './produt-update.component.html',
  styleUrls: ['./produt-update.component.scss']
})
export class ProdutUpdateComponent {

    updatedMessage: string | undefined;
    sending : boolean = false;
    productData!:  product;
    category!: any;
    incorrectFileType:boolean = true;
    addProduct: FormGroup<any> | any ;
    CategoryListData: any;
    brandListData: any;
    data: any;
    adata: any;
    productId: any;
    
    constructor(
      private route: ActivatedRoute, 
      private product: ProductService,
      private router:Router,
      private loaderService: LoaderService, ) 
      { }

      private showLoader(): void {
        this.loaderService.show();
      }
    
      private hideLoader(): void {
        this.loaderService.hide();
      }

      ngOnInit(): void {
        
  
        this.product.catagoryList().subscribe((result) =>  {
          console.log("catagoryList = ",result)
          this.CategoryListData = result
        })

        this.product.brandList().subscribe((result ) => {
          console.log("Brand list =",result)
          this.brandListData = result
        })

        this.addProduct = new FormGroup({
          name: new FormControl('', [Validators.required,  ]),
          brand: new FormControl('',[Validators.required , alphabetOnly ]),
          price: new FormControl('',[Validators.required,  numberOnly ]), 
          category: new FormControl('',[Validators.required, alphabetOnly  ]),
          color: new FormControl('',[Validators.required, alphabetOnly  ]),
          description: new FormControl('',[Validators.required,  ]),
         // image : new FormControl (null, [Validators.required , this.imageTypeValidator    ]),
          image:new FormControl (null, [Validators.required]),
          // id: new FormControl ('')
        })

         this.productId = this.route.snapshot.paramMap.get('id')
        console.log("productId =", this.productId);
         this.showLoader();
           this.product.getProduct(this.productId).subscribe((data) => {
         this.hideLoader() 
          console.log("Product update = ",data)

        this.addProduct.patchValue({
          name: data.name,
          brand: data.brand,
          price: data.price,
          category: data.category,
          color: data.color,
          description: data.description,
          image: data.image,
          // id: data.id,
        });
            console.log("after patchValue",this.addProduct.value)
        })
      }

    submit(data: any) {
      
      console.log("data = ",data)
      // if (this.addProduct) {
      //   // data = JSON.stringify(data)
      //   console.log("data after converted to json format = ",data)
      //   // this.addProduct.id = this.adata
      //   // console.log("id",this.adata)
      //   data.id = this.addProduct.value.id;
      //   console.log("id ==",this.addProduct.value.id)
      //   // data = this.ndata;
      // }
      console.log(data)
      this.product.updateProduct(data,this.productId ).subscribe((result) => {
        if (result) {
          console.log("Produt List =",result)
          this.updatedMessage = "Updated successful"
          console.log(this.updatedMessage)
        }
        console.log(data)
      })
      setTimeout(() => {
        this.updatedMessage = undefined
      }, 3000)
      this.router.navigate(['/produts'])
    }

  //   validateImageSize(control: FormControl<any>){

  //     const file = control.value; 
  //     console.log(file)
  //     const maxSizeKB = 15;
  //     const fileSizeKb = file.size /1024;
  //     console.log("fileSizeKb", fileSizeKb)
  //     if(fileSizeKb > maxSizeKB ){
  //      return {invalidImageSize: true}
  //     }
  //     return undefined;     
  //  };


   validateImageType(event: any):void  {
    // console.log('event', event.target.value)
    // return (control: AbstractControl):{ [key:string]:boolean} |null => {
      const allowedTypes  = ['jpeg', 'png', 'gif', 'jpg' ];

      const file = event.target.files[0];
      console.log(file);
      //  let ext = file.substring(('.'))
      let index = file.name.lastIndexOf('.') + 1 ;
      console.log(index)
      let ext = file.name.substring(index)
      console.log(ext)
      console.log(allowedTypes.includes(ext))
      if (!allowedTypes.includes(ext)) {

      this.incorrectFileType = true
      }
   }

   
  
}






