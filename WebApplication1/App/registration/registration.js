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
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var auth_services_1 = require("../services/auth.services");
var auth_guard_service_1 = require("../services/auth-guard.service");
var paths_service_1 = require("../services/paths.service");
var registration_data_1 = require("../models/interface/registration-data");
var html_element_type_enum_1 = require("../models/interface/enum/html-element-type-enum");
var registration_request_1 = require("../models/dto/requests/registration-request");
var validators_1 = require("../validators/validators");
require("./registration.css");
var material_1 = require("@angular/material");
var Registration = /** @class */ (function () {
    function Registration(authServise, router, authGuard, pathsService, formBuilder) {
        this.authServise = authServise;
        this.router = router;
        this.authGuard = authGuard;
        this.pathsService = pathsService;
        this.formBuilder = formBuilder;
        var self = this;
        self.registrationData = new registration_data_1.RegistrationData();
        self.registretionForm;
        self.passwordConfirm;
    }
    Registration.prototype.ngOnInit = function () {
        var self = this;
        self.registretionForm = self.formBuilder.group({
            'login': new forms_1.FormControl('', [forms_1.Validators.required]),
            'email': new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.pattern("[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}")]),
            'passwordFirst': new forms_1.FormControl('', forms_1.Validators.required),
            'passwordConfirm': new forms_1.FormControl('', [validators_1.matchOtherValidator('passwordFirst')]),
            'phone': new forms_1.FormControl('+7', forms_1.Validators.required),
            'name': new forms_1.FormControl('', forms_1.Validators.required),
            'surName': new forms_1.FormControl('', forms_1.Validators.required)
        });
    };
    Registration.prototype.displayPassword = function (el) {
        if (el.type == html_element_type_enum_1.HtmlElementTypeEnum.Password) {
            el.type = html_element_type_enum_1.HtmlElementTypeEnum.Text;
        }
        else {
            el.type = html_element_type_enum_1.HtmlElementTypeEnum.Password;
        }
    };
    Registration.prototype.registration = function (stepper) {
        var self = this;
        self.busy = self.authServise.regitration(new registration_request_1.RegistrationRequest(self.registrationData)).then(function (resp) {
            if (resp.isSuccess)
                self.stepper.next();
        });
        debugger;
    };
    __decorate([
        core_1.ViewChild('stepper'),
        __metadata("design:type", material_1.MatStepper)
    ], Registration.prototype, "stepper", void 0);
    Registration = __decorate([
        core_1.Component({
            selector: 'registration',
            template: require('./registration.html')
        }),
        __metadata("design:paramtypes", [auth_services_1.AuthService, router_1.Router, auth_guard_service_1.AuthGuard, paths_service_1.PathsService, forms_1.FormBuilder])
    ], Registration);
    return Registration;
}());
exports.Registration = Registration;
//# sourceMappingURL=registration.js.map