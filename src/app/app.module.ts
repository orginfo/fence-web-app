import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';


import { AppComponent } from './app.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectService } from './services/project.service';
import { RegionTypeService } from './services/region-type.service';
import { RegionsComponent } from './components/regions/regions.component';
import { RegionOfType1Component } from './components/region-of-type-1/region-of-type-1.component';
import { RegionCreationComponent } from './components/region-creation/region-creation.component';


@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    RegionsComponent,
    RegionOfType1Component,
    RegionCreationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'projects', component: ProjectsComponent },
      { path: 'projects/:projectId/regions', component: RegionsComponent },
      { path: 'projects/:projectId/regions-of-type-1/:regionId', component: RegionOfType1Component },
      { path: 'projects/:projectId/new-region-of-type-1', component: RegionOfType1Component },
    ])
  ],
  providers: [ProjectService, RegionTypeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
