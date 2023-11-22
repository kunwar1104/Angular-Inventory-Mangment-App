import { Component } from '@angular/core';
import { BrandList, product } from '../../dataType';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../Services/product.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { data } from 'jquery';

@Component({
  selector: 'app-brand-update',
  templateUrl: './brand-update.component.html',
  styleUrls: ['./brand-update.component.scss']
})
export class BrandUpdateComponent {
  updatedMessage: string | undefined
  productData:   any;
  
  constructor(
                 private route: ActivatedRoute, 
                 private product: ProductService,
                 private router:Router,
                 private fb : FormBuilder  ) { }

  ngOnInit(): void {  
     
    let productId = this.route.snapshot.paramMap.get('id')
    console.log("productId =", productId);
    productId && this.product.getBrand(productId).subscribe((data) => {
      console.log("data",data)
      this.productData = data
      
    })
  }

  // submit(data: any) {

  // }
  submit(data: any) {
    // console.log('submit =',data);
    if (this.productData) {
      data.id = this.productData.id;
    }

    this.product.updateBrand(data).subscribe((result) => {
      if (result) {
        this.updatedMessage = "Updated successful"
        console.log(this.updatedMessage)
      }
     
      console.log(data)
    })
    setTimeout(() => {
      this.updatedMessage = undefined
    }, 3000)
    this.router.navigate(['brand'])
  }

  
}
