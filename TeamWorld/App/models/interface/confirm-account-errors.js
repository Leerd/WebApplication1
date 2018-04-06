"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ConfirmAccountErrors = /** @class */ (function () {
    function ConfirmAccountErrors(confirmAccountResp) {
        this.isTimeEnd = confirmAccountResp && confirmAccountResp.isTimeEnd || false;
        this.isErrorCode = confirmAccountResp && confirmAccountResp.isErrorCode || false;
        this.isSuccess = confirmAccountResp && confirmAccountResp.isSuccess || false;
    }
    return ConfirmAccountErrors;
}());
exports.ConfirmAccountErrors = ConfirmAccountErrors;
//# sourceMappingURL=confirm-account-errors.js.map