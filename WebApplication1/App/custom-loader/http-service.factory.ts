import { XHRBackend, BaseRequestOptions } from '@angular/http';
import { LoaderService } from './loader.service';
import { CustomHttpService } from './custom-http.service';

function httpServiceFactory(backend: XHRBackend, options: BaseRequestOptions, loaderService: LoaderService) {
    return new CustomHttpService(backend, options, loaderService);
}

export { httpServiceFactory };