import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ScullyLibModule} from '@scullyio/ng-lib';
import {RouterModule, Routes} from "@angular/router";

const appRoutes: Routes = [
    {path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
    {path: 'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule)}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes),
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}
