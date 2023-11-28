import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AddProductComponent } from './add-product/add-product.component';
import { LoginComponent } from './login/login.component';
import { AlertComponent } from 'ngx-bootstrap/alert';
import { LoaderComponent } from './loader/loader.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './Services/auth.guard';
import { homeGuard } from './Services/home.guard';
import { SidebarDemoComponent } from './sidebar-demo/sidebar.component';


const routes: Routes = [
  {path: '', redirectTo:'login', pathMatch: 'full'
  },
  {
    path: 'login', component: LoginComponent,
    canActivate : [AuthGuard]
  },  
  {
    path: '',
   loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
  
  },
  {
    path: 'notifiction/alert', component: AlertComponent
  },  
  {
    path: 'loader', component: LoaderComponent
  },  
  {
    path: 'demo-sidebar', component : SidebarDemoComponent
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
  }













];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
