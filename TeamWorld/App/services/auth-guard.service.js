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
var auth_services_1 = require("./auth.services");
var paths_service_1 = require("./paths.service");
var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, authService, pathsService) {
        this.router = router;
        this.authService = authService;
        this.pathsService = pathsService;
    }
    AuthGuard.prototype.canActivate = function () {
        var self = this;
        if (localStorage.getItem('token')) {
            return true;
        }
        self.router.navigate(['']);
        return false;
    };
    AuthGuard.prototype.logout = function () {
        localStorage.removeItem('token');
    };
    AuthGuard.prototype.logIn = function (request) {
        var self = this;
        return self.authService.loginIn(request).then(function (resp) {
            localStorage.setItem('token', resp.token);
        });
    };
    AuthGuard.prototype.logOut = function (request) {
        var self = this;
        localStorage.removeItem('token');
        self.pathsService.toAutorization();
    };
    AuthGuard.prototype.checkAuth = function () {
        var self = this;
        if (localStorage.getItem('token')) {
            return self.pathsService.toBackOffice();
        }
        return self.pathsService.toAutorization();
    };
    AuthGuard = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.Router, auth_services_1.AuthService, paths_service_1.PathsService])
    ], AuthGuard);
    return AuthGuard;
}());
exports.AuthGuard = AuthGuard;
//# sourceMappingURL=auth-guard.service.js.map