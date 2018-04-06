import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { LoaderService, LoaderState } from '../loader.service';

import './loader.css'

@Component({
    selector: 'angular-loader',
    template: `
<div [class.loader-hidden]="!show">
    <div class="loader-overlay">
        <div>
            <mat-progress-bar mode="indeterminate"></mat-progress-bar>
            <div class="diasbled"></div>
        </div>
    </div>
</div>
    `
})
export class LoaderComponent implements OnInit {

    show = false;

    private subscription: Subscription;

    constructor(private loaderService: LoaderService) { }

    ngOnInit() {
        this.subscription = this.loaderService.loaderState
            .subscribe((state: LoaderState) => {
                this.show = state.show;
            });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}