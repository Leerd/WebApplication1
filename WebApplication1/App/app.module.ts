import { NgModule } from '@angular/core';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { MatCardModule, MatInputModule, MatCheckboxModule, MatStepperModule } from '@angular/material';
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
        BrowserAnimationsModule,
        FormsModule,
        HttpModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes, { useHash: true })],
    declarations: [App, Start, Autorization, Registration],
    providers: [TransportService, AuthService, AuthGuard, PathsService, UserService, MatIconRegistry],
    bootstrap: [App]
})

export class AppModule { }