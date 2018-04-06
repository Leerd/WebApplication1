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
var base_response_1 = require("../base/base-response");
var AuthResponse = /** @class */ (function (_super) {
    __extends(AuthResponse, _super);
    function AuthResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AuthResponse;
}(base_response_1.BaseResponse));
exports.AuthResponse = AuthResponse;
//# sourceMappingURL=auth-response.js.map