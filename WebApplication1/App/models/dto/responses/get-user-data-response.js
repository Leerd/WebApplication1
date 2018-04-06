"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var base_auth_response_1 = require("../base/base-auth-response");
var GetUserDataResponse = /** @class */ (function (_super) {
    __extends(GetUserDataResponse, _super);
    function GetUserDataResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return GetUserDataResponse;
}(base_auth_response_1.BaseAuthResponse));
exports.GetUserDataResponse = GetUserDataResponse;
//# sourceMappingURL=get-user-data-response.js.map