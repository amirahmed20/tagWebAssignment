
import { Injectable } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { CommonService } from "../shared/common.service";

@Injectable()
export class TourService {
    private data: any;
    str: string = 'https://my-json-server.typicode.com/tagdevteam/AssignmentApi/';

    constructor(public http: Http,
        public commonService: CommonService) {
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json() || 'Server error');
    }

    getAll() {
        return this.http.get(`${this.str}/tours`)
            .map((response) => response.json());

    }
}

