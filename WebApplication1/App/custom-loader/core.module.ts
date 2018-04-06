import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XHRBackend, RequestOptions } from '@angular/http';
import { LoaderComponent } from './loader/loader';
import { LoaderService } from './loader.service';
import { CustomHttpService } from './custom-http.service';
import { httpServiceFactory } from './http-service.factory';
import { MatProgressBarModule } from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        MatProgressBarModule,
    ],
    exports: [
        LoaderComponent
    ],
    declarations: [
        LoaderComponent
    ],
    providers: [
        LoaderService,
        {
            provide: CustomHttpService,
            useFactory: httpServiceFactory,
            deps: [XHRBackend, RequestOptions, LoaderService]
        }
    ]
})

export class CoreModule { }