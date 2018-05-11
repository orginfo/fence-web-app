import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-region-of-type-2',
  templateUrl: './region-of-type-2.component.html',
  styleUrls: ['./region-of-type-2.component.css']
})
export class RegionOfType2Component implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required ],
    });
  }

  ngOnInit() {
  }

}
