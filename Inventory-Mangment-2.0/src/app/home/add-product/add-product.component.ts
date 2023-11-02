import { Component } from '@angular/core';
import { ProductService } from '../../Services/product.service';
import { product } from '../../dataType';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/loader/loader.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {

  addProductMessage: string | undefined
  sending : boolean = false;


  constructor( private product:ProductService , private route: Router, private loderService: LoaderService){}
     
    ngOnInit(): void {
    }
  
    submit(data: product) {
      setTimeout(() => {
        this.product.addProduct(data).subscribe((result) => {
          this.sending=true;
          this.loderService.show()
             console.log(result)
             if(result){
             this.addProductMessage="Product Added Sucessful"
              // setTimeout(() => {
                this.loderService.show()
                this.route.navigate(['home/produts-list'])
                this.loderService.hide()
              // }, 1000)
             
             }
             else{
              this.addProductMessage="Somthing is wrwong "
             }
             this.sending=false
        });
      }, 1000)
      
  
      // setTimeout(() => {
        this.addProductMessage=undefined
        // this.loderService.show()
      // }, 3000);
    }

}
