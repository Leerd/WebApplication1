import { Component } from '@angular/core';

import { UserService } from '../services/user.service';

import { GetUserDataRequest } from '../models/dto/requests/get-user-data';

import './start.css';

@Component({
    selector: 'start',
    template: require('./start.html'),
    // style: [require('./start.css')]
})

export class Start {

    constructor(private userService: UserService) { }

    private test() {
        debugger
        const self = this;
        var e = new GetUserDataRequest();
        self.userService.getUserData(new GetUserDataRequest()).then(resp => {
            resp.isSuccessVerify;
            debugger;
        });
    }
}