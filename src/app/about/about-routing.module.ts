import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutContentComponent } from './about-content/about-content.component';

const routes: Routes = [  {
    path: '',
    component: AboutContentComponent
    }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
