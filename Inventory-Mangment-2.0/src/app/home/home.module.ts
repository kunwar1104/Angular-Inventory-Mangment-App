import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CatagoryUpdateComponent } from './catagory-update/catagory-update.component';
import { CategoryComponent } from './category/category.component';
import { LoaderComponent } from '../loader/loader.component';
import { SidbarComponent } from './sidbar/sidbar.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { Welcome1Component } from './welcome1/welcome1.component';
import { HomeRoutingModule } from './home-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrandComponent } from './brand/brand.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProdutsListComponent } from './produts-list/produts-list.component';
import { BrandUpdateComponent } from './brand-update/brand-update.component';
import { DataTablesModule } from 'angular-datatables'; 
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { NgToastModule } from 'ng-angular-popup';
import { BrandAddComponent } from './brand-add/brand-add.component';
import { CategoryAddComponent } from './category-add/category-add.component';
import { ProdutUpdateComponent } from './produt-update/produt-update.component';

@NgModule({
  declarations: [
    HomeComponent,
    SidbarComponent,
    Welcome1Component,
    BrandComponent,
    BrandUpdateComponent,
    CategoryComponent,
    CatagoryUpdateComponent,
    AddProductComponent,
    ProdutsListComponent,
    BrandAddComponent,
    CategoryAddComponent,
    ProdutUpdateComponent,
    // LoaderComponent
    
  ],
 

  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HomeRoutingModule,
    RouterModule,
    HttpClientModule,
    NgxPaginationModule,
    DataTablesModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    NgToastModule,
    PaginationModule.forRoot(),
  ]
})

export class HomeModule { }
