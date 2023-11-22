import { CanActivateFn, Router } from '@angular/router';
import {ActivatedRouteSnapshot,CanActivate , RouterStateSnapshot, UrlTree} from "@angular/router";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService} from './auth.service';

@Injectable({
  providedIn:'root'
})

export class AuthGuard implements CanActivate {
  
  constructor(private authService: AuthService, private route: Router) {}
  permissions: any;
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):Observable<boolean|UrlTree> | Promise<boolean | UrlTree> | boolean|UrlTree {
   
      if(localStorage.getItem('myToken')){
        this.route.navigate(["dashboard"])
        return false
      }
      
      
       return true

      // return this.authService.isUserLoggedIn;
 
}
 
}
