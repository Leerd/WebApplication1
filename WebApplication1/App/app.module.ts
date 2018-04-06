import { NgModule } from '@angular/core';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule, RequestOptions, XHRBackend } from '@angular/http';
import { MatCardModule, MatInputModule, MatCheckboxModule, MatStepperModule, MatProgressBarModule } from '@angular/material';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TransportService } from './services/transort.service';
import { AuthService } from './services/auth.services';
import { AuthGuard } from './services/auth-guard.service';
import { PathsService } from './services/paths.service';
import { UserService } from './services/user.service';

import { App } from './app';
import { Start } from './start/start';
import { Autorization } from './autorization/autorization';
import { Registration } from './registration/registration';
import { LoaderService } from './custom-loader/loader.service';
import { httpServiceFactory } from './custom-loader/http-service.factory';
import { CustomHttpService } from './custom-loader/custom-http.service';
import { CoreModule } from './custom-loader/core.module';

const appRoutes: Routes = [
    { path: 'autorization', component: Autorization },
    { path: 'registration', component: Registration },
    {
        path: 'backOffice',
        canActivate: [AuthGuard],
        component: Start,
        children: [
            {
                path: '',
                canActivateChild: [AuthGuard],
                children: [

                ]
            }
        ]
    },
    { path: '**', redirectTo: 'autorization' }
];

@NgModule({
    imports: [BrowserModule,
        MatCardModule,
        MatInputModule,
        MatCheckboxModule,
        MatStepperModule,
        MatIconModule,
        MatProgressBarModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpModule,
        ReactiveFormsModule,
        CoreModule,
        RouterModule.forRoot(appRoutes, { useHash: true })],
    declarations: [App, Start, Autorization, Registration],
    providers: [TransportService,
        AuthService,
        AuthGuard,
        PathsService,
        UserService,
        MatIconRegistry,
        LoaderService,
        {
            provide: CustomHttpService,
            useFactory: httpServiceFactory,
            deps: [XHRBackend, RequestOptions, LoaderService]
        }],
    bootstrap: [App]
})

export class AppModule { }