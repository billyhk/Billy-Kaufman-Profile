import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsContentComponent } from './projects-content/projects-content.component';

const routes: Routes = [{
    path: '',
    component: ProjectsContentComponent
    }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
