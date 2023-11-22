import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BrandList, CategoryList, product } from '../dataType';
import { Observable, map } from 'rxjs';
import { LoaderService } from '../loader/loader.service';
import { data } from 'jquery';



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

//Update Product  
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
    return this.http.get<BrandList[]>('http://localhost:3000/brands');
  }
  addBrand(data: BrandList) {
    return this.http.post('http://localhost:3000/brands',data);
  }
  getBrand(id: string){
    return this.http.get<BrandList>(`http://localhost:3000/brands/${id}`);
  }

  deleteBrand(id: number) {
    return this.http.delete(`http://localhost:3000/brands/${id}`);
  }
//Update Brand  
  updateBrand(product: BrandList) {
    return this.http.patch<BrandList>(`http://localhost:3000/brands/${product.id}`, product)
  }

// Catagory
  catagoryList() {
    return this.http.get<CategoryList[]>('http://localhost:3000/categories');
  }
// Update Category 
  updateCatagory(product: CategoryList) {
    return this.http.patch<CategoryList>(`http://localhost:3000/categories/${product.id}`, product)
  }
  addCategory(data: CategoryList) {
    return this.http.post('http://localhost:3000/categories',data);
  }
  getCategory(id: string){
    return this.http.get<CategoryList>(`http://localhost:3000/categories/${id}`);
  }
  deleteCategory(id: number) {
    return this.http.delete(`http://localhost:3000/categories/${id}`);
  }
  
  
}
