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
var base_request_1 = require("../base/base-request");
var GetUserDataRequest = /** @class */ (function (_super) {
    __extends(GetUserDataRequest, _super);
    function GetUserDataRequest() {
        return _super.call(this, localStorage.getItem('token')) || this;
    }
    return GetUserDataRequest;
}(base_request_1.BaseRequest));
exports.GetUserDataRequest = GetUserDataRequest;
//# sourceMappingURL=get-user-data.js.map