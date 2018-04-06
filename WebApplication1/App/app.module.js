"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var material_1 = require("@angular/material");
var icon_1 = require("@angular/material/icon");
var animations_1 = require("@angular/platform-browser/animations");
var transort_service_1 = require("./services/transort.service");
var auth_services_1 = require("./services/auth.services");
var auth_guard_service_1 = require("./services/auth-guard.service");
var paths_service_1 = require("./services/paths.service");
var user_service_1 = require("./services/user.service");
var app_1 = require("./app");
var start_1 = require("./start/start");
var autorization_1 = require("./autorization/autorization");
var registration_1 = require("./registration/registration");
var appRoutes = [
    { path: 'autorization', component: autorization_1.Autorization },
    { path: 'registration', component: registration_1.Registration },
    {
        path: 'backOffice',
        canActivate: [auth_guard_service_1.AuthGuard],
        component: start_1.Start,
        children: [
            {
                path: '',
                canActivateChild: [auth_guard_service_1.AuthGuard],
                children: []
            }
        ]
    },
    { path: '**', redirectTo: 'autorization' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule,
                material_1.MatCardModule,
                material_1.MatInputModule,
                material_1.MatCheckboxModule,
                material_1.MatStepperModule,
                icon_1.MatIconModule,
                animations_1.BrowserAnimationsModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                forms_1.ReactiveFormsModule,
                router_1.RouterModule.forRoot(appRoutes, { useHash: true })],
            declarations: [app_1.App, start_1.Start, autorization_1.Autorization, registration_1.Registration],
            providers: [transort_service_1.TransportService, auth_services_1.AuthService, auth_guard_service_1.AuthGuard, paths_service_1.PathsService, user_service_1.UserService, icon_1.MatIconRegistry],
            bootstrap: [app_1.App]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map