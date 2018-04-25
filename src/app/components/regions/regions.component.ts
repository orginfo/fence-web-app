import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProjectService } from '../../services/project.service';
import { ApiRegion } from '../../models/apiregion';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css']
})
export class RegionsComponent implements OnInit {
  regions: ApiRegion[];

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService
  ) { }

  getProjectRegions(): void {
    const id = +this.route.snapshot.paramMap.get('projectId');
    this.projectService.getProjectRegions(id)
    .subscribe(regions => this.regions = regions);
  }

  ngOnInit() {
    this.getProjectRegions();
  }

}
