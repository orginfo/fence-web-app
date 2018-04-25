import { Component, OnInit } from '@angular/core';

import { ProjectService } from '../../services/project.service';
import { ApiRegion } from '../../models/apiregion';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css']
})
export class RegionsComponent implements OnInit {
  regions: ApiRegion[];

  constructor(private projectService: ProjectService) { }

  getProjectRegions(): void {
    this.projectService.getProjectRegions()
    .subscribe(regions => this.regions = regions);
  }

  ngOnInit() {
    this.getProjectRegions();
  }

}
