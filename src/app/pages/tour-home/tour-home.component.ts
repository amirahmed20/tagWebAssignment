import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { CommonService } from '../../services/services'
import { fadeInContent } from '@angular/material';

@Component({
  selector: 'app-tour-home',
  templateUrl: './tour-home.component.html',
  styleUrls: ['./tour-home.component.css']
})
export class TourHomeComponent implements OnInit {
  loading = false;
  selectedTour: any;  
  tourId: any;

    constructor(private commonService: CommonService) { 
    }

    ngOnInit() {
    }
}
