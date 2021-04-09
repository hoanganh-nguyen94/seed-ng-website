import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ScullyLibModule} from '@scullyio/ng-lib';
import {RouterModule, Routes} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ScullyLibModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
