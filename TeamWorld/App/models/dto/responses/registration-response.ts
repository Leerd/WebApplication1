import { BaseResponse } from '../base/base-response';

export class RegistrationResponse extends BaseResponse {
    isLoginBusy: boolean;
    isPhoneBusy: boolean;
    isEmailBusy: boolean;
}