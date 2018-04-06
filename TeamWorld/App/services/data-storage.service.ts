import { Injectable } from '@angular/core';

import { Router } from '@angular/router';

@Injectable()

export class DataStorageService {
    maxTimerValue: number;
    constructor() {
        const self = this;

        self.maxTimerValue = 300; //seconds
    }

    public reloadTimer() {
        const self = this;
        self.maxTimerValue = 300;
    }
}