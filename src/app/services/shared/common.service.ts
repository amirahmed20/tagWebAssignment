import { Injectable } from '@angular/core';

@Injectable()
export class CommonService {
  selectedTour: any;
  tourId: any;

  constructor() {
  }

  getTour() {
  }

  setTourId(route) {
    if (!this.tourId) {
      route.parent.params.subscribe(params => {
        this.tourId = params['id'];
      }); 
    }
  }
}
