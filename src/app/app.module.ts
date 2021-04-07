import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ScullyLibModule} from '@scullyio/ng-lib';
import {RouterModule, Routes} from "@angular/router";

const appRoutes: Routes = [];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        ScullyLibModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
