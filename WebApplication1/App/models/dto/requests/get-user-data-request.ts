import { BaseRequest } from '../base/base-request';

export class GetUserDataRequest extends BaseRequest {

    constructor() {
        super(localStorage.getItem('token'));
    }
}