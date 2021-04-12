import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsContentComponent } from './projects-content/projects-content.component';
import { ProjectsComponent } from './projects.component';
import { MaterialModule } from '../material.module';


@NgModule({
  declarations: [
    ProjectsContentComponent,
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ProjectsRoutingModule
  ]
})
export class ProjectsModule { }
