import { Auth } from '../../interface/auth';

export class AuthRequest {
    login: string;
    passpord: string;

    constructor(authData: Auth) {
        this.login = authData.login;
        this.passpord = authData.passpord;
    }
}