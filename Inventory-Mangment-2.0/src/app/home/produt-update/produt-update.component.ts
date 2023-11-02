import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/Services/product.service';
import { product } from 'src/app/dataType';
import { LoaderService } from 'src/app/loader/loader.service';

@Component({
  selector: 'app-produt-update',
  templateUrl: './produt-update.component.html',
  styleUrls: ['./produt-update.component.scss']
})
export class ProdutUpdateComponent {

    updatedMessage: string | undefined
    sending : boolean = false;
    productData: product | undefined;

    constructor(
      private route: ActivatedRoute, 
      private product: ProductService,
      private router:Router,
      private loaderService: LoaderService,
       ) 
      { }

      private showLoader(): void {
        this.loaderService.show();
      }
    
      private hideLoader(): void {
        this.loaderService.hide();
      }

      ngOnInit(): void {
        let productId = this.route.snapshot.paramMap.get('id')
        console.log("productId =", productId);
         this.showLoader();
        productId && this.product.getProduct(productId).subscribe((data) => {
         this.hideLoader() 
          console.log("catagory update = ",data)
          this.productData = data
        })
      }

    submit(data : product) {
      console.log('submit =',data);
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
        this.updatedMessage = 'Updated successful'
      }, 3000)
      this.router.navigate(['home/produt-list'])
    }
}
