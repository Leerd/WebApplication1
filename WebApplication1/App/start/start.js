"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_service_1 = require("../services/user.service");
var get_user_data_1 = require("../models/dto/requests/get-user-data");
require("./start.css");
var Start = /** @class */ (function () {
    function Start(userService) {
        this.userService = userService;
    }
    Start.prototype.test = function () {
        debugger;
        var self = this;
        var e = new get_user_data_1.GetUserDataRequest();
        self.userService.getUserData(new get_user_data_1.GetUserDataRequest()).then(function (resp) {
            resp.isSuccessVerify;
            debugger;
        });
    };
    Start = __decorate([
        core_1.Component({
            selector: 'start',
            template: require('./start.html'),
        }),
        __metadata("design:paramtypes", [user_service_1.UserService])
    ], Start);
    return Start;
}());
exports.Start = Start;
//# sourceMappingURL=start.js.map