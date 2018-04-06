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
var Subject_1 = require("rxjs/Subject");
var RequestEventEmitter = /** @class */ (function (_super) {
    __extends(RequestEventEmitter, _super);
    function RequestEventEmitter() {
        return _super.call(this) || this;
    }
    RequestEventEmitter.prototype.emit = function (value) { _super.prototype.next.call(this, value); };
    return RequestEventEmitter;
}(Subject_1.Subject));
exports.RequestEventEmitter = RequestEventEmitter;
var ResponseEventEmitter = /** @class */ (function (_super) {
    __extends(ResponseEventEmitter, _super);
    function ResponseEventEmitter() {
        return _super.call(this) || this;
    }
    ResponseEventEmitter.prototype.emit = function (value) { _super.prototype.next.call(this, value); };
    return ResponseEventEmitter;
}(Subject_1.Subject));
exports.ResponseEventEmitter = ResponseEventEmitter;
//# sourceMappingURL=emitter.js.map