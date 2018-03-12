import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { Start } from './start/start';

const appRoutes: Routes = [
    { path: '', component: Start },
];

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(appRoutes)],
    declarations: [Start],
    providers: [],
    bootstrap: [Start]
})

export class AppModule { }