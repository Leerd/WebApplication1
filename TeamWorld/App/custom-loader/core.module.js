"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var http_1 = require("@angular/http");
var loader_1 = require("./loader/loader");
var loader_service_1 = require("./loader.service");
var custom_http_service_1 = require("./custom-http.service");
var http_service_factory_1 = require("./http-service.factory");
var material_1 = require("@angular/material");
var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                material_1.MatProgressBarModule,
            ],
            exports: [
                loader_1.LoaderComponent
            ],
            declarations: [
                loader_1.LoaderComponent
            ],
            providers: [
                loader_service_1.LoaderService,
                {
                    provide: custom_http_service_1.CustomHttpService,
                    useFactory: http_service_factory_1.httpServiceFactory,
                    deps: [http_1.XHRBackend, http_1.RequestOptions, loader_service_1.LoaderService]
                }
            ]
        })
    ], CoreModule);
    return CoreModule;
}());
exports.CoreModule = CoreModule;
//# sourceMappingURL=core.module.js.map