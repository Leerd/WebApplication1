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
var registration_eroors_1 = require("../models/interface/registration-eroors");
var confirm_account_request_1 = require("../models/dto/requests/confirm-account-request");
var Observable_1 = require("rxjs/Observable");
var data_storage_service_1 = require("../services/data-storage.service");
var confirm_account_errors_1 = require("../models/interface/confirm-account-errors");
var games_service_1 = require("../services/games.service");
var Registration = /** @class */ (function () {
    function Registration(authServise, router, authGuard, pathsService, formBuilder, dataStorageService, gamesService) {
        this.authServise = authServise;
        this.router = router;
        this.authGuard = authGuard;
        this.pathsService = pathsService;
        this.formBuilder = formBuilder;
        this.dataStorageService = dataStorageService;
        this.gamesService = gamesService;
        this.displayedColumns = ['position', 'name', 'weight', 'check'];
        this.dataSource = ELEMENT_DATA;
        var self = this;
        self.registrationData = new registration_data_1.RegistrationData();
        self.registrationErrors = new registration_eroors_1.RegistrationErrors();
        self.registretionForm;
        self.passwordConfirm;
        self.confirmAccountErrors = new confirm_account_errors_1.ConfirmAccountErrors();
        self.codeConfirm;
        self.timer;
    }
    Registration.prototype.ngOnInit = function () {
        var self = this;
        self.registretionForm = self.formBuilder.group({
            'login': new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.pattern("[a-zA-Z_]{3,15}")]),
            'email': new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.pattern("[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}")]),
            'passwordFirst': new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.pattern("[a-zA-Z_]{6,}")]),
            'passwordConfirm': new forms_1.FormControl('', [validators_1.matchOtherValidator('passwordFirst')]),
            'phone': new forms_1.FormControl('', [forms_1.Validators.required]),
            'name': new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.pattern("[a-zA-Zа-яА-Я]{2,}")]),
            'surName': new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.pattern("[a-zA-Zа-яА-Я]{2,}")])
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
        self.registrationErrors.resetParams();
        self.authServise.regitration(new registration_request_1.RegistrationRequest(self.registrationData)).then(function (resp) {
            if (resp.isSuccess) {
                self.startTimer();
                return self.stepper.next();
            }
            self.registrationErrors = new registration_eroors_1.RegistrationErrors(resp);
        });
    };
    Registration.prototype.confirmAccount = function () {
        var self = this;
        self.authServise.confirmAccount(new confirm_account_request_1.ConfirmAccountRequest(self.codeConfirm)).then(function (resp) {
            if (resp.isSuccess) {
                self.stepper.next();
                return self.gamesService.getAllGames();
            }
            self.confirmAccountErrors = new confirm_account_errors_1.ConfirmAccountErrors(resp);
        });
    };
    Registration.prototype.startTimer = function () {
        var self = this;
        self.timer = Observable_1.Observable.timer(0, 1000)
            .take(self.dataStorageService.maxTimerValue)
            .map(function () { return --self.dataStorageService.maxTimerValue; });
    };
    Registration.prototype.newCode = function () {
        var self = this;
        self.dataStorageService.reloadTimer();
        self.startTimer();
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
        __metadata("design:paramtypes", [auth_services_1.AuthService, router_1.Router, auth_guard_service_1.AuthGuard, paths_service_1.PathsService, forms_1.FormBuilder, data_storage_service_1.DataStorageService, games_service_1.GamesService])
    ], Registration);
    return Registration;
}());
exports.Registration = Registration;
var TableBasicExample = /** @class */ (function () {
    function TableBasicExample() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = ELEMENT_DATA;
    }
    return TableBasicExample;
}());
exports.TableBasicExample = TableBasicExample;
var ELEMENT_DATA = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
    { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
    { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
    { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
    { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
    { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
    { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
    { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
    { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
    { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
];
//# sourceMappingURL=registration.js.map