import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AddProductComponent } from './add-product/add-product.component';
import { LoginComponent } from './login/login.component';
import { AlertComponent } from 'ngx-bootstrap/alert';
import { LoaderComponent } from './loader/loader.component';


const routes: Routes = [
  {path: '', redirectTo:'login', pathMatch: 'full'},
{path: 'login', component: LoginComponent},  
{ path: '',
  // component: HomeComponent,
  loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
},
{path: 'notifiction/alert', component: AlertComponent},  
{path: 'loader', component: LoaderComponent},  













];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
