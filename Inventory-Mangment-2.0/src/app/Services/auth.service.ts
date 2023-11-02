import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, map, throwError } from 'rxjs';
import {HttpClient ,HttpErrorResponse} from "@angular/common/http"
import { Login } from '../dataType';
import { Response } from 'express';
import { LoaderService } from '../loader/loader.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isUserLoggedIn = new BehaviorSubject<boolean>(false);
  isLoginError = new EventEmitter<boolean>(false); // jo data pass na thay to error show kare
  isGetProfile = new BehaviorSubject<boolean>(false);
  isgetPofileToken = new BehaviorSubject<boolean>(false);
  isgetApiProfileType = new BehaviorSubject<boolean>(false);

  public url : string = 'http://localhost:3001';
  usersName: any;
 
  constructor(
     private http: HttpClient ,
     private loaderService: LoaderService
     ) { }

  private showLoader(): void {
    this.loaderService.show();
  }

  private hideLoader(): void {
    this.loaderService.hide();
  }

  public get token() {
    return this.token
  }

  public set token(myToken: string) {
    this.token = myToken
    // this.token = getToken
  }


  ngOnInit(): void {
   console.log("Get Profile Token =", this.getPofileToken())
  }

 // Login api call 
  userLogin(data: Login) {
    // console.log("data =",data)
    this.showLoader()

    return this.http.post(`${this.url}/login`,data)
    .pipe(map((res)=>{
      console.log(res)
      this.hideLoader()
        return res || {}
    }))
  }

  // For login get token from localStorage
  getToken(): string | null {
    return localStorage.getItem('myToken')
  }

  // here we get token for login
  getUser() {
    let headers = { headers : {  
      
    Authorization: 'Bearer ' + localStorage.getItem('myToken')
    }
  }
  }

  // For login
  getProfile(req: Request, res: Response): Promise<void> {
    console.log(req, res)
    return new Promise((resolve, reject) => {
  })
 }
// ---------------------------------Api Get Profile && Token verification--------------------------------------------


//   here we get token for Get-Profile from Api
  getPofileToken() {
    // console.log("getPofileToken =",this.getPofileToken)
    let headers ={
        headers : {
           Authorization: 'Bearer ' + localStorage.getItem('myToken')
      },
    }
      this.showLoader()
      return this.http.get(`${this.url}/get-profile`, headers)
      .pipe(map ( (response: any) => {
         this.hideLoader()
        // console.log(response)
          return response || {}
        
      }))
}

  getApiProfileType(req: Request, res: Response): Promise<void> {
    console.log(req, res)
    return new Promise((resolve, reject) => {
  })
 }

// Api get 
 verifyToken(data: any){
  // console.log("verifyToken =",this.verifyToken)
  const apiToken = this.getToken();
  console.log("apiToken =",apiToken)
    if (apiToken){
    this.isgetPofileToken.next(true);
    console.log('Api Token is True =',this.isgetPofileToken)

    return true;
    }
      else{
      this.isgetPofileToken.next(false);
      console.log('Api Token is false =',this.isgetPofileToken)

      return false; 
      }
  }
// -------------------------------------   LogOut   ------------------------------------------------------------
  logout(): void {
    const token = localStorage.getItem('myToken')
    if(token) {
      localStorage.removeItem('myToken')
      alert('Loged Out')
    }
    else{
      alert('Please Login First')
    }
  }





    //  Error
  handelError(error: HttpErrorResponse){
    let msg = '';
    if(error.error instanceof ErrorEvent  ) {
      // client side error
      msg = error.error.message
    }else{
      // server side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
}
