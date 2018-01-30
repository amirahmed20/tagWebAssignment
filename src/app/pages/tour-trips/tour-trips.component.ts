import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as _ from 'lodash'; 

import { CommonService } from "../../services/services";
import { fadeInContent } from '@angular/material';

@Component({
  selector: 'app-tour-trips',
  templateUrl: './tour-trips.component.html',
  styleUrls: ['./tour-trips.component.css']
})
export class TourTripsComponent implements OnInit {
  selectedTrip: any;           
  trips: any;

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
    if (this.commonService.getTour()) {
    }
  }

  serviceClicked(event, service) {
    this.selectedTrip = service;
  }
}
