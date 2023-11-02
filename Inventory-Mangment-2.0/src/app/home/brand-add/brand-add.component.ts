import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/Services/product.service';
import { product } from 'src/app/dataType';
import { LoaderService } from 'src/app/loader/loader.service';

@Component({
  selector: 'app-brand-add',
  templateUrl: './brand-add.component.html',
  styleUrls: ['./brand-add.component.scss']
})
export class BrandAddComponent {
  addProductMessage: string | undefined;
  sending : boolean = false;

  constructor( private product:ProductService , private route: Router, private loderService: LoaderService){}

  ngOnInit(): void {
  }


  submit(data: product){
   this.product.addProduct(data).subscribe((result) => {
      this.sending = true;
      this.loderService.show();
      console.log(result)
      setTimeout(() => {
        if(result){
          setTimeout(()=> {
            this.addProductMessage="Brand Added Sucessful"
          },500)
          console.log(this.addProductMessage)
          this.loderService.show();
          this.route.navigate(['home/brand']);
          this.loderService.hide();
  
         }
         else{
          this.addProductMessage="Somthing is wrwong "
         }
         this.sending=false
      },1500)
   })
  }
}
