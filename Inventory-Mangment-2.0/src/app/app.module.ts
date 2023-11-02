import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import {AlertModule} from 'ngx-bootstrap/alert'
import { NgToastModule } from 'ng-angular-popup';
import { NotificationComponent } from './notifications/notification/notification.component';
import {ModalModule } from 'ngx-bootstrap/modal';
import { LoaderComponent } from './loader/loader.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';



@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        NotificationComponent,
        LoaderComponent

      
        
    ],
    providers: [],
    
    bootstrap: [AppComponent],
    imports: [  
    CommonModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        RouterModule,
        DataTablesModule,
        BrowserAnimationsModule,
        NgxPaginationModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        AlertModule,
        NgToastModule,
        MatProgressSpinnerModule,
        ModalModule.forRoot(),
        PaginationModule.forRoot(),
        // AuthlayoutRoutingModule
       
      
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
    // exports: [ FormsModule,   ]
})
export class AppModule { }
