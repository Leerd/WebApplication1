import { RegistrationResponse } from "../dto/responses/registration-response";

export class RegistrationErrors {
    isLoginBusy: boolean;
    isPhoneBusy: boolean;
    isEmailBusy: boolean;
    isSuccess: boolean;

    constructor(registrationResp?: RegistrationResponse) {
        this.isLoginBusy = registrationResp && registrationResp.isLoginBusy || false;
        this.isPhoneBusy = registrationResp && registrationResp.isPhoneBusy || false;
        this.isEmailBusy = registrationResp && registrationResp.isEmailBusy || false;
        this.isSuccess = registrationResp && registrationResp.isSuccess || false;
    }

    public resetParams() {
        this.isLoginBusy = false;
        this.isPhoneBusy = false;
        this.isEmailBusy = false;
        this.isSuccess = false;
    }
}