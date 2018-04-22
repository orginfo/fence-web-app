import { Injectable } from '@angular/core';

@Injectable()
export class ProjectService {

  constructor() { }

  getAllProjects(): string {
    return "AllProjects";
  }

}
