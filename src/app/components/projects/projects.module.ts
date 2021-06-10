import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { ProjectsListingComponent } from './projects-listing/projects-listing.component';
import { ProjectsDetailsComponent } from './projects-details/projects-details.component';
import { CreateProjectComponent } from './create-project/create-project.component';


@NgModule({
  declarations: [ProjectsComponent, ProjectsListingComponent, ProjectsDetailsComponent, CreateProjectComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule
  ]
})
export class ProjectsModule { }
