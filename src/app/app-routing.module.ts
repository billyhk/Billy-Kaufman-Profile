import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [  
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
	data: {animation: 'home'} 
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then(m => m.AboutModule),
	data: {animation: 'about'} 
  },{
    path: 'skills',
    loadChildren: () => import('./skills/skills.module').then(m => m.SkillsModule),
		data: {animation: 'skills'} 
  },
  {
    path: 'projects',
    loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule),
		data: {animation: 'projects'} 
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule),
		data: {animation: 'contact'} 
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  // { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
