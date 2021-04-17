import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BlogRoutingModule} from './blog-routing.module';
import {BlogComponent} from './blog.component';
import {ScullyContentModule} from '@scullyio/ng-lib';
import {MatGridListModule} from '@angular/material/grid-list';
import {BlogBoxComponent} from './blog-box/blog-box.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    BlogComponent,
    BlogBoxComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    ScullyContentModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
  ]
})
export class BlogModule { }
