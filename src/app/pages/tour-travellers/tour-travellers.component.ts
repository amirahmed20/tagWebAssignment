import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ActivatedRoute } from '@angular/router';

import { CommonService } from "../../services/services";

@Component({
  selector: 'app-tour-travellers',
  templateUrl: './tour-travellers.component.html',
  styleUrls: ['./tour-travellers.component.css']
})

export class TourTravellersComponent implements OnInit {
  selectedTraveller: any;

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
    let traveller = this.commonService.getTour();
    if (traveller) {
    }
  }

  travellerClicked(event, traveller) {
    this.selectedTraveller = traveller; 
  }
}
