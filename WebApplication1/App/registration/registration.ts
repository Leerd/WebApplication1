import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.services';
import { AuthGuard } from '../services/auth-guard.service';
import { PathsService } from '../services/paths.service';

import { RegistrationData } from '../models/interface/registration-data';
import { HtmlElementTypeEnum } from '../models/interface/enum/html-element-type-enum';

import { RegistrationRequest } from '../models/dto/requests/registration-request';

import { matchOtherValidator } from '../validators/validators';

import './registration.css'
import { MatStepper } from '@angular/material';
import { RegistrationErrors } from '../models/interface/registration-eroors';
import { ConfirmAccountRequest } from '../models/dto/requests/confirm-account-request';
import { Observable } from 'rxjs/Observable';
import { DataStorageService } from '../services/data-storage.service';
import { Subscription } from 'rxjs';
import { ConfirmAccountErrors } from '../models/interface/confirm-account-errors';
import { GamesService } from '../services/games.service';


@Component({
    selector: 'registration',
    template: require('./registration.html')
})

export class Registration implements OnInit {
    private registrationData: RegistrationData;
    private registrationErrors: RegistrationErrors;
    private passwordConfirm: string;
    private registretionForm: FormGroup;

    private confirmAccountErrors: ConfirmAccountErrors;
    private codeConfirm: string;
    private timer;
    private count;

    private displayedColumns = ['position', 'name', 'weight', 'check'];
    private dataSource = ELEMENT_DATA;

    @ViewChild('stepper') stepper: MatStepper;

    constructor(private authServise: AuthService, private router: Router, private authGuard: AuthGuard, private pathsService: PathsService, private formBuilder: FormBuilder, private dataStorageService: DataStorageService, private gamesService: GamesService) {
        const self = this;

        self.registrationData = new RegistrationData();
        self.registrationErrors = new RegistrationErrors();
        self.registretionForm;
        self.passwordConfirm;

        self.confirmAccountErrors = new ConfirmAccountErrors();
        self.codeConfirm;
        self.timer;
    }

    public ngOnInit(): void {
        const self = this;

        self.registretionForm = self.formBuilder.group({
            'login': new FormControl('', [Validators.required, Validators.pattern("[a-zA-Z_]{3,15}")]),
            'email': new FormControl('', [Validators.required, Validators.pattern("[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}")]),
            'passwordFirst': new FormControl('', [Validators.required, Validators.pattern("[a-zA-Z_]{6,}")]),
            'passwordConfirm': new FormControl('', [matchOtherValidator('passwordFirst')]),
            'phone': new FormControl('', [Validators.required]),
            'name': new FormControl('', [Validators.required, Validators.pattern("[a-zA-Zа-яА-Я]{2,}")]),
            'surName': new FormControl('', [Validators.required, Validators.pattern("[a-zA-Zа-яА-Я]{2,}")])
        });
    }

    private displayPassword(el: HTMLInputElement): void {
        if (el.type == HtmlElementTypeEnum.Password) {
            el.type = HtmlElementTypeEnum.Text
        } else {
            el.type = HtmlElementTypeEnum.Password
        }
    }

    private registration(stepper: MatStepper): void {
        const self = this;
        self.registrationErrors.resetParams();

        self.authServise.regitration(new RegistrationRequest(self.registrationData)).then(resp => {
            if (resp.isSuccess) {
                self.startTimer();
                return self.stepper.next();
            }

            self.registrationErrors = new RegistrationErrors(resp);
        });
    }

    private confirmAccount(): void {
        const self = this;

        self.authServise.confirmAccount(new ConfirmAccountRequest(self.codeConfirm)).then(resp => {
            if (resp.isSuccess) {

                self.stepper.next();
                return self.gamesService.getAllGames();
            }

            self.confirmAccountErrors = new ConfirmAccountErrors(resp);
        });
    }

    private startTimer(): void {
        const self = this;
        self.timer = Observable.timer(0, 1000)
            .take(self.dataStorageService.maxTimerValue)
            .map(() => --self.dataStorageService.maxTimerValue)
    }

    private newCode(): void {
        const self = this;
        self.dataStorageService.reloadTimer();
        self.startTimer();
    }
}

export class TableBasicExample {
    displayedColumns = ['position', 'name', 'weight', 'symbol'];
    dataSource = ELEMENT_DATA;
}

export interface Element {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}

const ELEMENT_DATA: Element[] = [
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