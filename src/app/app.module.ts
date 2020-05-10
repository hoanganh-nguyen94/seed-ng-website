import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {SpaceshipFullComponent} from './spaceship/full/spaceship-full.component';
import {SpaceshipFrameComponent} from './spaceship/frame/spaceship-frame.component';

@NgModule({
  declarations: [
    AppComponent,
    SpaceshipFullComponent,
    SpaceshipFrameComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
