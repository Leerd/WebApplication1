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
var Observable_1 = require("rxjs/Observable");
require("rxjs/Rx");
var http_1 = require("@angular/http");
var angular_redux_request_options_1 = require("./angular-redux-request.options");
var loader_service_1 = require("./loader.service");
var HttpService = /** @class */ (function (_super) {
    __extends(HttpService, _super);
    function HttpService(backend, defaultOptions, loaderService) {
        var _this = _super.call(this, backend, defaultOptions) || this;
        _this.loaderService = loaderService;
        return _this;
    }
    HttpService.prototype.get = function (url, options) {
        var _this = this;
        this.showLoader();
        return _super.prototype.get.call(this, url, this.requestOptions(options))
            .catch(this.onCatch)
            .do(function (res) {
            _this.onSuccess(res);
        }, function (error) {
            _this.onError(error);
        })
            .finally(function () {
            _this.onEnd();
        });
    };
    HttpService.prototype.post = function (url, body, options) {
        var _this = this;
        this.showLoader();
        return _super.prototype.post.call(this, url, body, this.requestOptions(options))
            .catch(this.onCatch)
            .do(function (res) {
            _this.onSuccess(res);
        }, function (error) {
            _this.onError(error);
        })
            .finally(function () {
            _this.onEnd();
        });
    };
    HttpService.prototype.requestOptions = function (options) {
        if (options == null) {
            options = new angular_redux_request_options_1.AngularReduxRequestOptions();
        }
        if (options.headers == null) {
            options.headers = new http_1.Headers();
        }
        return options;
    };
    HttpService.prototype.onCatch = function (error, caught) {
        return Observable_1.Observable.throw(error);
    };
    HttpService.prototype.onSuccess = function (res) {
        console.log('Request successful');
    };
    HttpService.prototype.onError = function (res) {
        console.log('Error, status code: ' + res.status);
    };
    HttpService.prototype.onEnd = function () {
        this.hideLoader();
    };
    HttpService.prototype.showLoader = function () {
        this.loaderService.show();
    };
    HttpService.prototype.hideLoader = function () {
        this.loaderService.hide();
    };
    HttpService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.XHRBackend,
            angular_redux_request_options_1.AngularReduxRequestOptions,
            loader_service_1.LoaderService])
    ], HttpService);
    return HttpService;
}(http_1.Http));
exports.HttpService = HttpService;
//# sourceMappingURL=transort.service.js.map