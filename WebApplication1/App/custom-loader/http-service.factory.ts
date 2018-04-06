import { XHRBackend } from '@angular/http';
import { LoaderService } from './loader.service';
import { CustomHttpService } from './custom-http.service';
import { AngularReduxRequestOptions } from './angular-redux-request.options';

function httpServiceFactory(backend: XHRBackend, options: AngularReduxRequestOptions, loaderService: LoaderService) {
    return new CustomHttpService(backend, options, loaderService);
}

export { httpServiceFactory };