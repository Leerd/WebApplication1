"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RegistrationErrors = /** @class */ (function () {
    function RegistrationErrors(registrationResp) {
        this.isLoginBusy = registrationResp && registrationResp.isLoginBusy || false;
        this.isPhoneBusy = registrationResp && registrationResp.isPhoneBusy || false;
        this.isEmailBusy = registrationResp && registrationResp.isEmailBusy || false;
        this.isSuccess = registrationResp && registrationResp.isSuccess || false;
    }
    RegistrationErrors.prototype.resetParams = function () {
        this.isLoginBusy = false;
        this.isPhoneBusy = false;
        this.isEmailBusy = false;
        this.isSuccess = false;
    };
    return RegistrationErrors;
}());
exports.RegistrationErrors = RegistrationErrors;
//# sourceMappingURL=registration-eroors.js.map