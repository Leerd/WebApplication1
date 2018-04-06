import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { PathsService } from './paths.service';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map'
import { CustomHttpService } from '../custom-loader/custom-http.service';

@Injectable()

export class TransportService {
    constructor(private http: Http, private pathsService: PathsService, private customHttpService: CustomHttpService) { }

    public postData(url: string, request): Promise<any> {
        const self = this;

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        if ((localStorage.getItem('token')))
            headers.append('X-Auth-Token', (localStorage.getItem('token')));

        return self.customHttpService.post(url, JSON.stringify(request), { headers: headers })
            .map((res: Response) => (res.json()))
            .toPromise()
            .catch((error: Response) => self.errorHandler(error.json()))

    }

    public getData(url): Promise<any> {
        const self = this;

        return self.http.get(url).map(res => res.json())
            .toPromise();
    }

    private errorHandler(error) {
        const self = this;

        if (!error.isSuccessVerify) {
            localStorage.removeItem('token')
            self.pathsService.toAutorization();
        }
    }

}