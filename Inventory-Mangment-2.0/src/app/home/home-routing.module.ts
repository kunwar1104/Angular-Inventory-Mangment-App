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
import { DemoSidbarComponent } from './demo-sidbar/demo-sidbar.component';
import { homeGuard } from '../Services/home.guard';
import { NewSidebarComponent } from './new-sidebar/new-sidebar.component';

  console.log("home module is here")
const routes: Routes = [
  
  {path: '',
   component: HomeComponent,
   canActivate : [homeGuard],

   children:[
       
   {path: 'dashboard', component: Welcome1Component,
   canActivate : [homeGuard]

  },
   {path: 'product-add', component: AddProductComponent,
   canActivate : [homeGuard]

  },
   {path: 'brand', component: BrandComponent,
   canActivate : [homeGuard]

  },
   {path: 'brand/:id', component: BrandUpdateComponent,
   canActivate : [homeGuard]

  },
   {path: 'category', component: CategoryComponent,
   canActivate : [homeGuard]

  },
   {path: 'category/:id', component: CatagoryUpdateComponent,
   canActivate : [homeGuard]

  },
   {path: 'produts', component: ProdutsListComponent,
   canActivate : [homeGuard]

   },
   {path: 'brand-add', component: BrandAddComponent,
   canActivate : [homeGuard]

   },
   {path: 'category-add', component: CategoryAddComponent,
   canActivate : [homeGuard]
     
   },
   {
    path: 'produt/:id', component : ProdutUpdateComponent,
    canActivate : [homeGuard]

   },
   
   {
    path: 'home/demo-sidbar', component : DemoSidbarComponent,
   },
   {
    path: 'new-sidebar', component : NewSidebarComponent
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
