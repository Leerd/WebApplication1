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
var router_1 = require("@angular/router");
var auth_services_1 = require("../services/auth.services");
var auth_guard_service_1 = require("../services/auth-guard.service");
var paths_service_1 = require("../services/paths.service");
var auth_1 = require("../models/interface/auth");
require("./autorization.css");
var Autorization = /** @class */ (function () {
    function Autorization(authServise, router, authGuard, pathsService) {
        this.authServise = authServise;
        this.router = router;
        this.authGuard = authGuard;
        this.pathsService = pathsService;
        var self = this;
        self.authData = new auth_1.Auth();
    }
    Autorization.prototype.ngOnInit = function () {
        var self = this;
        self.authGuard.checkAuth();
    };
    Autorization.prototype.auth = function () {
        var self = this;
        self.authGuard.logIn(self.authData).then(function (resp) {
            self.pathsService.toBackOffice();
        });
    };
    Autorization.prototype.registration = function () {
        var self = this;
        self.pathsService.toRegistration();
    };
    Autorization = __decorate([
        core_1.Component({
            selector: 'autorization',
            template: require('./autorization.html')
        }),
        __metadata("design:paramtypes", [auth_services_1.AuthService, router_1.Router, auth_guard_service_1.AuthGuard, paths_service_1.PathsService])
    ], Autorization);
    return Autorization;
}());
exports.Autorization = Autorization;
//# sourceMappingURL=autorization.js.map