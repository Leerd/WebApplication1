import { ConfirmAccountResponse } from "../dto/responses/confirm-account-response";

export class ConfirmAccountErrors {
    isTimeEnd: boolean;
    isErrorCode: boolean;
    isSuccess: boolean;

    constructor(confirmAccountResp?: ConfirmAccountResponse) {
        this.isTimeEnd = confirmAccountResp && confirmAccountResp.isTimeEnd || false;
        this.isErrorCode = confirmAccountResp && confirmAccountResp.isErrorCode || false;
        this.isSuccess = confirmAccountResp && confirmAccountResp.isSuccess || false;
    }
}