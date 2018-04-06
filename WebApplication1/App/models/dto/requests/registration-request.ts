import { BaseRequest } from '../base/base-request';
import { RegistrationData } from '../../interface/registration-data';

export class RegistrationRequest {
    login: string;
    name: string;
    surName: string;
    email: string;
    passpord: string;
    phone: string;

    constructor(registrationData: RegistrationData) {
        this.login = registrationData.login;
        this.name = registrationData.name;
        this.surName = registrationData.surName;
        this.email = registrationData.email;
        this.passpord = registrationData.passpord;
        this.phone = registrationData.phone;
    }
}