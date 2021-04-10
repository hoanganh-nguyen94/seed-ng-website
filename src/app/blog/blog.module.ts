import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import {ScullyContentModule} from "@scullyio/ng-lib";


@NgModule({
  declarations: [
    BlogComponent
  ],
    imports: [
        CommonModule,
        BlogRoutingModule,
        ScullyContentModule,
    ]
})
export class BlogModule { }
