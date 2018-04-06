import { BaseRequest } from '../base/base-request';

export class ConfirmAccountRequest extends BaseRequest {
    code: string;
    constructor(code: string) {
        super();

        this.code = code;
    }
}