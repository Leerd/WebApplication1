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


@Component({
    selector: 'registration',
    template: require('./registration.html')
})

export class Registration implements OnInit {
    private registrationData: RegistrationData;
    private passwordConfirm: string;
    private registretionForm: FormGroup;
    private busy: Promise<any>;

    @ViewChild('stepper') stepper: MatStepper;

    constructor(private authServise: AuthService, private router: Router, private authGuard: AuthGuard, private pathsService: PathsService, private formBuilder: FormBuilder) {
        const self = this;

        self.registrationData = new RegistrationData();
        self.registretionForm;
        self.passwordConfirm;
    }

    public ngOnInit(): void {
        const self = this;

        self.registretionForm = self.formBuilder.group({
            'login': new FormControl('', [Validators.required]),
            'email': new FormControl('', [Validators.required, Validators.pattern("[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}")]),
            'passwordFirst': new FormControl('', Validators.required),
            'passwordConfirm': new FormControl('', [matchOtherValidator('passwordFirst')]),
            'phone': new FormControl('+7', Validators.required),
            'name': new FormControl('', Validators.required),
            'surName': new FormControl('', Validators.required)
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
        self.busy = self.authServise.regitration(new RegistrationRequest(self.registrationData)).then(resp => {
            if (resp.isSuccess)
                self.stepper.next();
        });

        debugger;
    }
}