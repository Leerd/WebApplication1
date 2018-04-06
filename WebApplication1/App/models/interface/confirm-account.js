"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ConfirmAccount = /** @class */ (function () {
    function ConfirmAccount(confirmAccountResp) {
        this.isTimeEnd = confirmAccountResp && confirmAccountResp.isTimeEnd || false;
        this.isErrorCode = confirmAccountResp && confirmAccountResp.isErrorCode || false;
        this.isSuccess = confirmAccountResp && confirmAccountResp.isSuccess || false;
    }
    return ConfirmAccount;
}());
exports.ConfirmAccount = ConfirmAccount;
//# sourceMappingURL=confirm-account.js.map