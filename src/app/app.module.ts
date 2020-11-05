import {BrowserModule, Title} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {RouterModule} from '@angular/router';
import {HuskyComponent} from './husky/husky.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {GoogleTagManagerModule} from 'angular-google-tag-manager';

@NgModule({
  declarations: [
      AppComponent,
      HomeComponent,
      HuskyComponent
  ],
  imports: [
      BrowserModule.withServerTransition({appId: 'serverApp'}),
      GoogleTagManagerModule.forRoot({
          id: 'GTM-WGDVM9P'
      }),

      ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
      RouterModule.forRoot([
          {path: '', component: HomeComponent, pathMatch: 'full'},
          {path: 'husky', component: HuskyComponent, pathMatch: 'full'},
          {path: 'lazy', loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule)},
          {path: 'lazy/nested', loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule)}
      ]),
  ],
    providers: [
        Title
    ],
  bootstrap: [AppComponent]
})
export class AppModule {}
