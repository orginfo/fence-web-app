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

  constructor(
    private formBuilder: FormBuilder,
    private regionService: RegionService,
    private activatedRoute: ActivatedRoute
  ) {
    this.createForm();

    const edit: boolean = activatedRoute.snapshot.paramMap.has('regionId') &&
        activatedRoute.snapshot.paramMap.has('projectId');
    if (edit) {
      let projectId = +activatedRoute.snapshot.paramMap.has('projectId')
      let regionId = +activatedRoute.snapshot.paramMap.get('regionId');
      regionService.getRegion(projectId, regionId).
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
    //TODO: изменить не учтено.
    const projectId = +this.activatedRoute.snapshot.paramMap.get('projectId');
    this.regionService.addRegion(projectId, 2, this.regionForm.value).
      subscribe(response => {console.log(response)});
  }

  ngOnInit() {
  }

}
