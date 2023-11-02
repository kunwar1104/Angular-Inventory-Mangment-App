import { Component, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoaderService } from '../loader/loader.service';
import { LoaderState } from './loader';
import { MatProgressSpinnerModule, ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { ThemePalette } from '@angular/material/core';


@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  // standalone: true,
  encapsulation: ViewEncapsulation.ShadowDom,
  // imports: [MatProgressSpinnerModule]
})
export class LoaderComponent {

  show : boolean = false;
 

  private subscription: Subscription | any;

  constructor(public loaderService:LoaderService) {}

  ngOnInit(): void {
    this.subscription = this.loaderService.loaderState
         .subscribe((state: LoaderState) => {
          this.show = state.show;
          console.log('show loader', this.loaderService.show)
         });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
 
  

  loder(){
    this.loaderService.show()

    setTimeout(() => {
      this.loaderService.hide()

    },1000)

  }

}
