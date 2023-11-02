import { Component, Sanitizer, SecurityContext } from '@angular/core';
import { Login } from '../dataType';
import { AuthService } from '../Services/auth.service';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { NotificationService } from '../notifications/notification.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { LoaderService } from './../loader/loader.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  apiResponse: any={}
  router: any;
  data: Login | undefined;
  sending: boolean = false

  message: string | undefined
  loginMessage: boolean = true;
  show: boolean =false;
  
  // alerts: any = [{
  //   type: 'success',
  //   msg: `<strong>Success!</strong> You are successfully Login.`,
  //   timeout: 5000
  // },]

  constructor(  private authService: AuthService, private route: Router,
                private sanitizer: DomSanitizer,
                private notificationService : NotificationService ,
                private modalService: BsModalService,
                private loaderService: LoaderService
    
    ) { }

    private showLoder(): void{
     this.loaderService.show()
    }

    private hideLoder(): void{
      this.loaderService.hide()
     }

  public set token(myToken: string) {
    this.token = myToken
  }

  public get token() {
    return this.token
  }

  ngOnInit(): void {
    console.log("login compnent is here")
   
  }
 

  login(data: Login): void {
    // this.sending = true;
    console.log('b')
    this.loaderService.show()
    console.log("c?;;;;;;;;;;;;")
    
    setTimeout(() => {
      if (data) {
        this.showLoder()
        this.authService.userLogin(data).subscribe((response) => {
          console.log(response)
          this.apiResponse = response
          this.hideLoder()
         setTimeout(() => {
          if (this.apiResponse.token) {
            this.notificationService.showNotification('Login successful', 'success', true, 1000)
            this.sending = true;
            localStorage.setItem('myToken', this.apiResponse.token)
            console.log('token',this.apiResponse.token, this.apiResponse.id)
            setTimeout(() => {
                // this.showLoder()
                this.route.navigate(['/home/welcome1'])
                // this.hideLoder()
              },1500)
           
          }else {   
            this.sending = true;
            this.notificationService.showNotification('Login failed', 'failed', true, 2000)
          }
         }, 1000)
        });
      } 
     }, 1000)  
    
  }
}




