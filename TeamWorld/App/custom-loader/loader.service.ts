﻿import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()

export class LoaderService {

    private loaderSubject = new Subject<LoaderState>();

    public loaderState = this.loaderSubject.asObservable();

    constructor() { }

    show() {
        this.loaderSubject.next(<LoaderState>{ show: true });
    }

    hide() {
        this.loaderSubject.next(<LoaderState>{ show: false });
    }
}

export interface LoaderState {
    show: boolean;
}