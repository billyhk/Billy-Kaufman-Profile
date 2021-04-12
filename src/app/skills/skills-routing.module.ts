import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillsContentComponent } from './skills-content/skills-content.component';

const routes: Routes = [{
    path: '',
    component: SkillsContentComponent
    }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkillsRoutingModule { }
