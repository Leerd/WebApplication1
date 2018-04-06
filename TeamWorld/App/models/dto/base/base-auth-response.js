"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BaseAuthResponse = /** @class */ (function () {
    function BaseAuthResponse() {
    }
    Object.defineProperty(BaseAuthResponse.prototype, "isSuccessVerify", {
        get: function () {
            return this._isSuccessVerify;
        },
        set: function (isSuccess) {
            debugger;
            this._isSuccessVerify = isSuccess;
        },
        enumerable: true,
        configurable: true
    });
    return BaseAuthResponse;
}());
exports.BaseAuthResponse = BaseAuthResponse;
//# sourceMappingURL=base-auth-response.js.map