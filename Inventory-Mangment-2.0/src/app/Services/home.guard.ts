import { CanActivateFn, Router } from '@angular/router';
import {ActivatedRouteSnapshot,CanActivate , RouterStateSnapshot, UrlTree} from "@angular/router";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService} from './auth.service';
// import { AuthService } from 'src/app/Services/auth.service';



@Injectable({
  providedIn:'root'
})
// const homeGuard: CanActivateFn = (route, state) => {
  // return true;
// };
// 
export  class homeGuard implements CanActivate {
   
  constructor ( private route: Router,
                private auth: AuthService ) {}
  permissions: any;

  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable <boolean | UrlTree>  | Promise<boolean | UrlTree> | boolean | UrlTree {
       
      // const token = localStorage.getItem('access_token');

      // if (!token) {
      //   // User is not authenticated, redirect to login page
      //    this.route.navigate(['']);
      //   return false
      // }
  
      if(!localStorage.getItem('myToken') ){
        this.route.navigate(["login"])
         return false;
      }
      return true

  }
}
