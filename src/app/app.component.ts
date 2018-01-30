import { Component,OnInit } from '@angular/core';
import { TourService} from "./services/services";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[TourService]
})
export class AppComponent implements OnInit  {
  
  tours=[];

  title = 'app';

  constructor(private _tourService: TourService){}
  ngOnInit()
  {   
    this.tours=[];
    console.log(this.title);
    this._tourService.getAll()
    .subscribe(
      (data: any) => {
          this.tours = data;
          console.log(this.tours) ;
      },
      err => console.log(err), // error
      () => console.log('getUserStatus Complete') // complete
  );

}
}