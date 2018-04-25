import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectService } from './services/project.service';
import { RegionsComponent } from './components/regions/regions.component';


@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    RegionsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'projects', component: ProjectsComponent },
      { path: 'projects/:projectId/regions', component: RegionsComponent },
    ])
  ],
  providers: [ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
