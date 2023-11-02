import { Component } from '@angular/core';
import { product } from '../../dataType';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../Services/product.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-brand-update',
  templateUrl: './brand-update.component.html',
  styleUrls: ['./brand-update.component.scss']
})
export class BrandUpdateComponent {
  updatedMessage: string | undefined
  productData!:  product;
  // productlist: product[] | undefined;
  
  brandUpdate!: FormGroup<any>;
  category! : string | Validators

  constructor(
                 private route: ActivatedRoute, 
                 private product: ProductService,
                 private router:Router,
                 private fb : FormBuilder  ) { }

  ngOnInit(): void {  
     
    //  this.brandUpdate = this.fb.group({
    //   name: ['' , Validators.required],
    //   brand: ['' , Validators.required]

    //  })

    let productId = this.route.snapshot.paramMap.get('id')
    console.log("productId =", productId);
    productId && this.product.getProduct(productId).subscribe((data) => {
      console.log(data)
      this.productData = data
    })
  }

  submit(data: any) {
    // console.log('submit =',data);
    if (this.productData) {
      data.id = this.productData.id;
    }

    this.product.updateProduct(data).subscribe((result) => {
      if (result) {
        this.updatedMessage = "Updated successful"
        console.log(this.updatedMessage)
      }
     
      console.log(data)
    })
    setTimeout(() => {
      this.updatedMessage = undefined
    }, 3000)
    this.router.navigate(['home/brand'])
  }

  
}
