import { Injectable } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { CommonService } from "../shared/common.service";

@Injectable()
export class TourService {
    private data: any;
    private str: string;

    constructor(public http: Http,
                public commonService: CommonService) {
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json() || 'Server error');
    }

    getAll() {
        
    }    
}
