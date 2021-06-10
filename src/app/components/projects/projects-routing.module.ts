import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectsComponent } from './projects.component';
import { ProjectsListingComponent } from './projects-listing/projects-listing.component';
import { ProjectsDetailsComponent } from './projects-details/projects-details.component';
import { CreateProjectComponent } from './create-project/create-project.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent,
    children: [
      {
        path: '',
        component: ProjectsListingComponent
      },
      {
        path: 'projects-listing',
        component: ProjectsListingComponent
      },
      {
        path: 'projects-details',
        component: ProjectsDetailsComponent
      },
      {
        path: 'create-project',
        component: CreateProjectComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
