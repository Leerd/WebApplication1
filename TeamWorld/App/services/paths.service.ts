import { Injectable } from '@angular/core';

import { Router } from '@angular/router';

@Injectable()

export class PathsService {

    constructor(private router: Router) { }

    public toAutorization() {
        const self = this;
        self.router.navigate(['autorization']);
    }

    public toBackOffice() {
        const self = this;
        self.router.navigate(['backOffice']);
    }

    public toRegistration() {
        const self = this;
        self.router.navigate(['registration']);
    }
}