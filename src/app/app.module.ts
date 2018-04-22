import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";


import { AppComponent } from './app.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectService } from './services/project.service';


@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'projects', component: ProjectsComponent }
    ])
  ],
  providers: [ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
