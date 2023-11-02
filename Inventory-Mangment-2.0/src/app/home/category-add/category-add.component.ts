import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/Services/product.service';
import { LoaderService } from 'src/app/loader/loader.service';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.scss']
})
export class CategoryAddComponent {
 

  addProductMessage: string | undefined;
  sending : boolean = false;

  constructor( private product:ProductService , private route: Router, private loderService: LoaderService){}

  ngOnInit(): void {
  }

  submit(data: any) {
    this.product.addProduct(data).subscribe((result) => {
      this.sending = true;
      this.loderService.show();
      console.log(result)
      setTimeout(() => {
        if(result){
          setTimeout(()=> {
            this.addProductMessage="Brand Added Sucessful"
          },100)
          console.log(this.addProductMessage)
          this.loderService.show();
          this.route.navigate(['home/category']);
          this.loderService.hide();
  
         }
         else{
          this.addProductMessage="Somthing is wrwong "
         }
         this.sending=false
      },2000)
   })
  }

} 
