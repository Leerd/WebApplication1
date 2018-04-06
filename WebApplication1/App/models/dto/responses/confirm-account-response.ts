import { BaseResponse } from '../base/base-response';

export class ConfirmAccountResponse extends BaseResponse {
    isTimeEnd: boolean;
    isErrorCode: boolean;
}