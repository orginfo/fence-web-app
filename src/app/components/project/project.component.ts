import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  projectForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private projectService: ProjectService,
  ) {
    this.createForm();
  }

  createForm() {
    this.projectForm = this.formBuilder.group({
      nr: ['', Validators.required ],
      contractDate: ['', Validators.required ],
      installDate: ['', Validators.required ],
      address: ['', Validators.required ],
      comment: ['']
    });
  }

  onSubmit() {
      this.projectService.addProject(this.projectForm.value).
        subscribe(response => {console.log(response)});
  }

  ngOnInit() {
  }

}
