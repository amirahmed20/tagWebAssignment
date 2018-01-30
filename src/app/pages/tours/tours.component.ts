import { Component, OnInit } from '@angular/core';

import { TourService, CommonService } from '../../services/services';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.css']
})
export class ToursComponent implements OnInit {
  tours: any;
  selectedTour: any;

  constructor(
      private tourService: TourService,
      private commonService: CommonService)
  { }

  ngOnInit() {
    if (!localStorage.getItem('tours')) {
        this.getTours();
    } else {
        this.tours = JSON.parse(localStorage.getItem('tours'));
    }

    if (this.tours) {
        this.selectedTour = this.tours[0];
    }
  }

  getTours() {
  }

  tourClicked(tour) {
    this.selectedTour = tour;
  }
}
