import { Injectable } from '@angular/core';

import { CanActivate, Router } from '@angular/router';

import { AuthService } from './auth.services';
import { PathsService } from './paths.service';

import { AuthRequest } from '../models/dto/requests/auth-request';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private authService: AuthService, private pathsService: PathsService) { }

    public canActivate(): boolean {
        const self = this;

        if (localStorage.getItem('token')) {
            return true;
        }

        self.router.navigate(['']);
        return false;
    }

    public logout(): void {
        localStorage.removeItem('token');
    }

    public logIn(request: AuthRequest): Promise<any> {
        const self = this;

        return self.authService.loginIn(request).then(resp => {
            localStorage.setItem('token', resp.token);
        })
    }

    public logOut(request: AuthRequest) {
        const self = this;

        localStorage.removeItem('token'); 
        self.pathsService.toAutorization();
    }

    public checkAuth() {
        const self = this;

        if (localStorage.getItem('token')) {
            return self.pathsService.toBackOffice();
        }

        return self.pathsService.toAutorization();
    }
}