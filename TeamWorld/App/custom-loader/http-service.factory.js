"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var custom_http_service_1 = require("./custom-http.service");
function httpServiceFactory(backend, options, loaderService) {
    return new custom_http_service_1.CustomHttpService(backend, options, loaderService);
}
exports.httpServiceFactory = httpServiceFactory;
//# sourceMappingURL=http-service.factory.js.map