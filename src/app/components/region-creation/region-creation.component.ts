import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { RegionTypeService } from '../../services/region-type.service';
import { Region } from './region';
import { ApiRegionType } from '../../models/api-region-type';

@Component({
  selector: 'app-region-creation',
  templateUrl: './region-creation.component.html',
  styleUrls: ['./region-creation.component.css']
})
export class RegionCreationComponent implements OnInit {
  model: Region = new Region(0);
  submitted: boolean = false;
  types: ApiRegionType[];
  @Input() projectId: number;

  constructor(
    private regionTypeService: RegionTypeService,
    private router: Router
  ) { }

  getRegionTypes(): void {
    this.regionTypeService.getRegionTypes()
      .subscribe(regionTypes => this.types = regionTypes);
  }

  ngOnInit() {
    this.getRegionTypes();
  }

  onSubmit(): void {
    this.submitted = true;
    this.router.navigate([`/projects/${this.projectId}/new-region-of-type-${this.model.type}`]);
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}
