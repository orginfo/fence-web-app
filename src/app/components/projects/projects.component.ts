import { Component, OnInit } from '@angular/core';

import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    console.log(this.projectService.getAllProjects());
  }

}
