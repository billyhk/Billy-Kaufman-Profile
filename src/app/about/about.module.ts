import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutContentComponent } from './about-content/about-content.component';
import { AboutComponent } from './about.component';


@NgModule({
  declarations: [
    AboutContentComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
