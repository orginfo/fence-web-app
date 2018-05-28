import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { RegionService } from '../../services/region.service';
import { RegionOfType2 } from '../../models/region-of-type-2';

interface Colors {
    readonly name: string,
    readonly value: string,
}

@Component({
  selector: 'app-region-of-type-2',
  templateUrl: './region-of-type-2.component.html',
  styleUrls: ['./region-of-type-2.component.css']
})
export class RegionOfType2Component implements OnInit {
  regionForm: FormGroup;
  thicknesses: number[] = [0.4, 0.45, 0.5, 0.55, 0.6, 0.65, 0.7];

  projectId: number;
  regionId: number;
  edit: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private regionService: RegionService,
    private activatedRoute: ActivatedRoute
  ) {
    this.createForm();

    //TODO: projectId считается всегда доступным.
    this.projectId = +activatedRoute.snapshot.paramMap.has('projectId');
    const edit: boolean = activatedRoute.snapshot.paramMap.has('regionId') &&
        activatedRoute.snapshot.paramMap.has('projectId');
    this.edit = edit;
    console.log(`edit: ${edit}`); //TODO: убрать
    if (edit) {
      this.regionId = +activatedRoute.snapshot.paramMap.get('regionId');
      regionService.getRegion(this.projectId, this.regionId).
        subscribe(region => this.rebuildForm(region));
    }
  }

  rebuildForm(region: any) {
    this.regionForm.reset(region);
  }

  createForm() {
    this.regionForm = this.formBuilder.group({
      length: ['', Validators.required ],
      thickness: ['', Validators.required ],
    });
  }

  onSubmit() {
    if (this.edit) {
      this.regionService.updateRegion(this.projectId, 2, this.regionId, this.regionForm.value).
        subscribe(response => {console.log(response)});
    } else {
      this.regionService.addRegion(this.projectId, 2, this.regionForm.value).
        subscribe(response => {console.log(response)});
    }
  }

  ngOnInit() {
  }

}
