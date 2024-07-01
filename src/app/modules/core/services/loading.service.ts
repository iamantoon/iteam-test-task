import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  loadingRequestCount = 0;

  constructor(private spinnerService: NgxSpinnerService){}

  loading(){
    this.loadingRequestCount++;
    this.spinnerService.show(undefined, {
      type: 'square-jelly-box',
      bdColor: 'rgba(255, 255, 255, 0)',
      color: 'rgb(63, 81, 181)'
    });
  }

  idle(){
    this.loadingRequestCount--;
    if (this.loadingRequestCount <= 0){
      this.loadingRequestCount = 0;
      this.spinnerService.hide();
    }
  }
}