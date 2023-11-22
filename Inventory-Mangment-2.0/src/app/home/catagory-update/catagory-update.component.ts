import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/Services/product.service';
import { product } from 'src/app/dataType';

@Component({
  selector: 'app-catagory-update',
  templateUrl: './catagory-update.component.html',
  styleUrls: ['./catagory-update.component.scss']
})
export class CatagoryUpdateComponent {
  updatedMessage: string | undefined
  productData:  any;
  sending : boolean = false;
  category : any;
  description: any;
  


  constructor(private route: ActivatedRoute, private product: ProductService, private router:Router,) { }

  ngOnInit(): void {
    let productId: any  = this.route.snapshot.paramMap.get('id')
    console.log("productId =", productId);
    productId && this.product.getCategory(productId).subscribe((data) => {
      console.log("catagory update = ",data)

      this.productData = data
      
    })
  }

  submit(data: any) {
    console.log('submit =',data);
    if (this.productData) {
      data.id = this.productData.id;
    }

    
    this.product.updateCatagory(data).subscribe((result) => {
      if (result) {
        this.updatedMessage = "Updated successful"
        console.log(this.updatedMessage)
      }
      console.log(data)
    })
    setTimeout(() => {
      this.updatedMessage = 'Updated successful'
    }, 3000)
    this.router.navigate(['category'])
  }
}
