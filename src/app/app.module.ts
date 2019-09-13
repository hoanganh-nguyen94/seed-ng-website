import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {RouterModule} from '@angular/router';
import {HuskyComponent} from './husky/husky.component';

@NgModule({
  declarations: [
      AppComponent,
      HomeComponent,
      HuskyComponent
  ],
  imports: [
      BrowserModule.withServerTransition({appId: 'serverApp'}),
      RouterModule.forRoot([
          {path: '', component: HomeComponent, pathMatch: 'full'},
          {path: 'husky', component: HuskyComponent, pathMatch: 'full'},
          {path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule'},
          {path: 'lazy/nested', loadChildren: './lazy/lazy.module#LazyModule'}
      ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
