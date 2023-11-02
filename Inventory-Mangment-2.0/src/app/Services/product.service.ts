import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from '../dataType';
import { Observable, map } from 'rxjs';
import { LoaderService } from '../loader/loader.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 

  constructor(private http : HttpClient, private loaderService: LoaderService) { }

  private showLoader(): void {
    this.loaderService.show();
  }

  private hideLoader(): void {
    this.loaderService.hide();
  }

  addProduct(data: product) {
    this.showLoader();
    return this.http.post('http://localhost:3000/products',data).pipe(map((response: any) => {
      this.hideLoader()  
      console.log(response)
      return response || {}

    }))
    
  }
  productList() {
    this.showLoader()
    return this.http.get<product[]>('http://localhost:3000/products').pipe(map((response: any) => {
      this.hideLoader()  
      console.log(response)
      return response || {}
      
    }))
  }
  deleteProduct(id: number) {
    return this.http.delete(`http://localhost:3000/products/${id}`);
  }
  getProduct(id: string){
    return this.http.get<product>(`http://localhost:3000/products/${id}`);
  }
  updateProduct(product: product) {
    this.showLoader()
    return this.http.put<product>(`http://localhost:3000/products/${product.id}`, product).pipe(map((response: any) => {
      this.hideLoader()  
      console.log(response)
      return response || {}
    }))
  }
  
  // Brand
  brandList() {
    return this.http.get<product[]>('http://localhost:3000/products');
  }

// Catagory
  catagoryList() {
    return this.http.get<product[]>('http://localhost:3000/products');
  }
  updateCatagory(product: product) {
    return this.http.put<product>(`http://localhost:3000/products/${product.id}`, product)
  }

  
  
}
