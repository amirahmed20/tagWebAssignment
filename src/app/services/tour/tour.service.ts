import { Injectable } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { CommonService } from "../shared/common.service";

@Injectable()
export class TourService {
    private data: any;
    private str: string;
    private _url:string="https://my-json-server.typicode.com/tagdevteam/AssignmentApi/tours";    
    constructor(public http: Http,
                public commonService: CommonService) {
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json() || 'Server error');
    }

    getAll() {
        return this.http.get(this._url)
                  .map((response)=>response.json());
        
    }    
}