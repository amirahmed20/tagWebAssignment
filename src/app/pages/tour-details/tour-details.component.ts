import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Router, RouterModule, ActivatedRoute, ParamMap } from '@angular/router';
import { BrowserModule } from "@angular/platform-browser";

import { TourService, CommonService } from "../../services/services";

@Component({
  selector: 'app-tour-details',
  templateUrl: './tour-details.component.html',
  styleUrls: ['./tour-details.component.css']
})
export class TourDetailsComponent implements OnInit {
  selectedTour: any;
  tourId: any;

  constructor(
    private route: ActivatedRoute,
    private commonService: CommonService) 
    {
      this.commonService.setTourId(this.route);
    }

  ngOnInit() {
    this.getTour();
  }

  getTour() {
    this.selectedTour = this.commonService.getTour(); 
  }
}
