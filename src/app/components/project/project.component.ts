import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Observable, Subject } from 'rxjs';
import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { ProjectService } from '../../services/project.service';
import { ClientService } from '../../services/client.service';
import { ApiClient } from '../../models/apiclient';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  projectForm: FormGroup;
  clients: Observable<ApiClient[]>;
  private searchTerms = new Subject<string>();

  get contractDate() { return this.projectForm.get('contractDate'); }
  get isContractDateInvalid(): boolean {
    //TODO: вызывается дважды
    let date = this.contractDate;
    return date.invalid && (date.dirty || date.touched);
  }

  constructor(
    private formBuilder: FormBuilder,
    private projectService: ProjectService,
    private clientService: ClientService,
  ) {
    this.createForm();
  }

  search(term: string): void {
    this.projectForm.patchValue({clientId: ""});
    this.searchTerms.next(term);
  }

  createForm() {
    this.projectForm = this.formBuilder.group({
      clientId: ['', Validators.required ],
      nr: ['', Validators.required ],
      contractDate: ['', [Validators.required, Validators.pattern("\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z")]],
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
      this.clients = this.searchTerms.pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap(term => this.clientService.searchClients(term)),
      );
  }

}
