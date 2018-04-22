import { Component, OnInit } from '@angular/core';

import { ProjectService } from '../../services/project.service';
import { ApiProject } from '../../models/apiproject';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: ApiProject[];

  constructor(private projectService: ProjectService) { }

  getAllProjects(): void {
    this.projectService.getAllProjects()
    .subscribe(projects => this.projects = projects);
  }

  ngOnInit() {
    this.getAllProjects();
  }

}
