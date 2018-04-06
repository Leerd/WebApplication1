import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { TransportService } from '../services/transort.service'

import { GetUserDataRequest } from '../models/dto/requests/get-user-data-request';
import { GetUserDataResponse } from '../models/dto/responses/get-user-data-response';

@Injectable()

export class UserService {

    constructor(private transportServise: TransportService) {
    }

    public getUserData(request: GetUserDataRequest){
        const self = this;

        return self.transportServise.postData('api/User/GetUserData', request)
    }

}