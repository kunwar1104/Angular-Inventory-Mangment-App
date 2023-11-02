import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { Welcome1Component } from './welcome1/welcome1.component';
import { BrandComponent } from './brand/brand.component';
import { AddProductComponent } from './add-product/add-product.component';
import { CategoryComponent } from './category/category.component';
import { ProdutsListComponent } from './produts-list/produts-list.component';
import { BrandUpdateComponent } from './brand-update/brand-update.component';
import { CatagoryUpdateComponent } from './catagory-update/catagory-update.component';
import { AuthGuard } from '../Services/auth.guard';
import { BrandAddComponent } from './brand-add/brand-add.component';
import { CategoryAddComponent } from './category-add/category-add.component';
import { ProdutUpdateComponent } from './produt-update/produt-update.component';

  console.log("home module is here")
const routes: Routes = [
  
  {path: '',
   component: HomeComponent,
   children:[
       
   {path: 'home/welcome1', component: Welcome1Component,
   canActivate: [AuthGuard]  
  },
   {path: 'home/add-product', component: AddProductComponent,
    canActivate: [AuthGuard]   
  },
   {path: 'home/brand', component: BrandComponent,
   canActivate: [AuthGuard]  
  },
   {path: 'home/brand-update/:id', component: BrandUpdateComponent,
   canActivate: [AuthGuard]  
  },
   {path: 'home/category', component: CategoryComponent,
   canActivate: [AuthGuard]  
  },
   {path: 'home/category-update/:id', component: CatagoryUpdateComponent,
   canActivate: [AuthGuard]  
  },
   {path: 'home/produts-list', component: ProdutsListComponent,
   canActivate: [AuthGuard]  
   },
   {path: 'home/brand-add', component: BrandAddComponent,
   canActivate: [AuthGuard]  
   },
   {path: 'home/category-add', component: CategoryAddComponent,
   canActivate: [AuthGuard]  
   },
   {
    path: 'home/produt-update/:id', component : ProdutUpdateComponent,
    canActivate: [AuthGuard]
   }
   

   ]
},

] 

@NgModule({
  declarations: [],
  imports: [
   
  RouterModule.forChild(routes)
  ],
  exports: [RouterModule]

})
export class HomeRoutingModule { }
