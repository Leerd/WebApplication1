import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.services';
import { AuthGuard } from '../services/auth-guard.service';
import { PathsService } from '../services/paths.service';

import { Auth } from '../models/interface/auth';

import { AuthRequest } from '../models/dto/requests/auth-request';

import './autorization.css'

@Component({
    selector: 'autorization',
    template: require('./autorization.html')
})

export class Autorization implements OnInit {

    private authData: Auth;

    constructor(private authServise: AuthService, private router: Router, private authGuard: AuthGuard, private pathsService: PathsService) {
        const self = this;

        self.authData = new Auth();
    }

    public ngOnInit() {
        const self = this;

        self.authGuard.checkAuth();
    }

    private auth(): void {
        const self = this;

        self.authGuard.logIn(self.authData).then(resp => {
            self.pathsService.toBackOffice();
        });
    }

    private registration(): void {
        const self = this;

        self.pathsService.toRegistration();
    }
}