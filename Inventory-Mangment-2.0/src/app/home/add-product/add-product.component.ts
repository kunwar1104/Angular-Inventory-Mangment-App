import { Component } from '@angular/core';
import { ProductService } from '../../Services/product.service';
import { product } from '../../dataType';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/loader/loader.service';
import { AbstractControl, FormBuilder, Validators, FormGroup, FormControl, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { data } from 'jquery';
import { CategoryList } from './../../dataType';

function alphabetOnly(control: FormControl): { [key: string]: any } | null {
  const valid = /^[a-zA-Z]*$/.test(control.value);
  return valid ? null : { alphabetOnly: true };
}

function numberOnly (control : FormControl ): { [key: string] : any } | null {
  const valid = /^[0-9]*$/.test(control.value);
  return valid ? null : { numberOnly: true}; 
}

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {

  addProductMessage: string | undefined
  sending : boolean = false;
  addProduct!: FormGroup<any> | any ;
  // namePattern = /^[a-zA-Z]+$/ ;
  // numberOnly = /^[0-9]+$/ ;
  brands: string[] = []
  categoryListData : any;
  brandListData : any;

  constructor( private product:ProductService ,
               private route: Router, 
               private loderService: LoaderService,
               private fb : FormBuilder,
 ){}

  public imageTypeValidator(control: AbstractControl): ValidationErrors | any {
    const file = control.value;
      console.log(file)
      if (!file) {
        return null;
      };
        let ext = file.substring(file.lastIndexOf('.') + 1);
        console.log(ext)
        const allowedTypes = ['jpeg', 'png', 'gif', 'jpg'];
        if (!allowedTypes.includes(ext)) {
        return {invalidFileType:true};
        };
    }

   
    ngOnInit(): void {

// data comes from "category Api" for showing on form  
      this.product.catagoryList().subscribe((result) => {
        this.categoryListData = result   
        console.log("categoryListData = ",result)
         
      } )

// data comes from "Brand Api" for showing on form  
      this.product.brandList().subscribe((result) => {
        this.brandListData = result
        console.log("brandListData =", this.brandListData )
      })


    this.addProduct = new FormGroup({
      name: new FormControl ('', [Validators.required,alphabetOnly ]),
      brand: new FormControl ('', [Validators.required, alphabetOnly ]  ), //this.nameValidator()
      price: new FormControl ('',[Validators.required, numberOnly  ]), 
      category: new FormControl  ('',[Validators.required,]  ),
      color: new FormControl ('',[Validators.required, alphabetOnly]),
      description : new FormControl ('', [Validators.required]),
      // image : new FormControl (null, [Validators.required , this.imageTypeValidator    ]),
      image:new FormControl (null, [Validators.required])
      });
    }
    

    submit(_addProduct: any) {
      console.log("add Product data = ",this.addProduct.value)
    if(this.addProduct.valid){
      const formData = this.addProduct.value
      console.log("formData =",formData)
      JSON.stringify(formData)

        this.product.addProduct(formData).subscribe((result) => {
          this.sending=true;
          this.loderService.show()
             console.log(result)
             if(result){
             this.addProductMessage="Product Added Sucessful"
                // this.loderService.show()
                this.route.navigate(['/produts'])
                // this.loderService.hide()
             }
             else{
              this.addProductMessage="Somthing is wrwong "
             }
             this.sending=false
        });
      }
      // }, 1000)
      
  
      // setTimeout(() => {
        // this.addProductMessage=undefined
        // this.loderService.show()
      // }, 3000);
    }
    
    validateImageSize(control: FormControl<any>){

       const file = control.value; 
       const maxSizeKB = 15;
       const fileSizeKb = file.size /1024;
       console.log("fileSizeKb", fileSizeKb)
       if(fileSizeKb > maxSizeKB ){
        
        return {invalidImageSize: true}  
       }
       return undefined;
       
      
    };

   

    // validateImageType(control: FormControl)    {
    //   const allowdFormates = ['jpeg', 'png', 'gif', 'jpg' ];
       
    //   const file = control.value;
    //    if(file) {
    //      const extension = file.split('.').pop().toLowerCase();
    //      if (!allowdFormates.includes(extension)) {
    //       return { validateImageType: true};
    //      }
    //      console.log(extension)

    //    } 
    //    return false

      // const  file = control.value; 
      // let ext = file.substring(file.lastIndexOf('.')+1)
      // console.log(ext)
      //  if(!allowdFormates.includes(ext)){
      //     return {invalidImageType: true};
      //  }
      //  return undefined;
//     }

   
}
