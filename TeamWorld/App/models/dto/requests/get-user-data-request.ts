import { BaseAuthRequest } from '../base/base-auth-request';

export class GetUserDataRequest extends BaseAuthRequest {

    constructor() {
        super(localStorage.getItem('token'));
    }
}