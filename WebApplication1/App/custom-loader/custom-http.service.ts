import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import {
    Http,
    RequestOptions,
    RequestOptionsArgs,
    Response,
    Request,
    Headers,
    XHRBackend,
    BaseRequestOptions
} from '@angular/http';

import { LoaderService } from './loader.service';

@Injectable()
export class CustomHttpService extends Http {

    constructor(backend: XHRBackend, defaultOptions: BaseRequestOptions, private loaderService: LoaderService) {
        super(backend, defaultOptions);
    }

    get(url: string, options?: RequestOptionsArgs): Observable<any> {
        const self = this;
        self.showLoader();

        return super.get(url, self.requestOptions(options))
            .finally(() => {
                self.hideLoader();
            });

    }

    post(url: string, body: any, options?: RequestOptionsArgs): Observable<any> {
        const self = this;
        self.showLoader();

        return super.post(url, body, self.requestOptions(options))
            .finally(() => {
                self.hideLoader();
            });
    }

    private requestOptions(options?: RequestOptionsArgs): RequestOptionsArgs {

        if (options == null) {
            options = new BaseRequestOptions();
        }

        if (options.headers == null) {
            options.headers = new Headers();
        }

        return options;
    }

    private showLoader(): void {
        const self = this;
        self.loaderService.show();
    }

    private hideLoader(): void {
        const self = this;
        self.loaderService.hide();
    }
}