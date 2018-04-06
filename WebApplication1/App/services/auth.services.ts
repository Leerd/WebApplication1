import { Injectable } from '@angular/core';

import { TransportService } from '../services/transort.service'

import { AuthRequest } from '../models/dto/requests/auth-request';
import { AuthResponse } from '../models/dto/responses/auth-response';

import { RegistrationRequest } from '../models/dto/requests/registration-request';
import { RegistrationResponse } from '../models/dto/responses/registration-response';

import { ConfirmAccountRequest } from '../models/dto/requests/confirm-account-request';
import { ConfirmAccountResponse } from '../models/dto/responses/confirm-account-response';

@Injectable()

export class AuthService {

    constructor(private transportServise: TransportService) {
    }

    public loginIn(request: AuthRequest): Promise<AuthResponse> {
        const self = this;
        return self.transportServise.postData('api/Auth/LoginIn', request)
    }

    public regitration(request: RegistrationRequest): Promise<RegistrationResponse> {
        const self = this;
        return self.transportServise.postData('api/Auth/Registration', request)
    }

    public confirmAccount(request: ConfirmAccountRequest): Promise<ConfirmAccountResponse> {
        const self = this;
        return self.transportServise.postData('api/Auth/ConfirmAccount', request)
    }

}