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
var http_1 = require("@angular/http");
var paths_service_1 = require("./paths.service");
require("rxjs/add/operator/toPromise");
require("rxjs/add/operator/map");
var TransportService = /** @class */ (function () {
    function TransportService(http, pathsService) {
        this.http = http;
        this.pathsService = pathsService;
    }
    TransportService.prototype.postData = function (url, request) {
        var self = this;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        if ((localStorage.getItem('token')))
            headers.append('X-Auth-Token', (localStorage.getItem('token')));
        return self.http.post(url, JSON.stringify(request), { headers: headers })
            .map(function (res) { return (res.json()); })
            .toPromise()
            .catch(function (error) { return self.errorHandler(error.json()); });
    };
    TransportService.prototype.getData = function (url) {
        var self = this;
        return self.http.get(url).map(function (res) { return res.json(); })
            .toPromise();
    };
    TransportService.prototype.errorHandler = function (error) {
        var self = this;
        if (!error.isSuccessVerify) {
            localStorage.removeItem('token');
            self.pathsService.toAutorization();
        }
    };
    TransportService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http, paths_service_1.PathsService])
    ], TransportService);
    return TransportService;
}());
exports.TransportService = TransportService;
//# sourceMappingURL=transort.service.js.map