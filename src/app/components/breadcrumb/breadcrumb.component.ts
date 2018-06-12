import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

import { map, filter } from 'rxjs/operators';

import { BreadcrumbItem } from './breadcrumb-item';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {
  items: BreadcrumbItem[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map((route) => {
        while (route.firstChild) route = route.firstChild;
        return route;
      }),
      filter((route) => route.outlet === 'primary')
    ).subscribe(activatedRoute => this.updateBreadcrumb(activatedRoute));
  }

  updateBreadcrumb(activatedRoute: ActivatedRoute): void {
    let path: string = activatedRoute.routeConfig.path;

    if (path == "projects") {
      this.items = [
        {name: "Projects", routerLink: null}
      ];
    } else if (path == "projects/:projectId/regions") {
      this.items = [
        {name: "Projects", routerLink: "/projects"},
        {name: activatedRoute.snapshot.paramMap.get("projectId"), routerLink: null},
        {name: "Regions", routerLink: null},
      ];
    } else if (path.search(new RegExp("^projects/:projectId/new-region-of-type-\\d$")) == 0) {
      let projectId: string = activatedRoute.snapshot.paramMap.get("projectId");
      this.items = [
        {name: "Projects", routerLink: "/projects"},
        {name: projectId, routerLink: null},
        {name: "Regions", routerLink: `/projects/${projectId}/regions`},
        {name: "New region", routerLink: null},
      ];
    } else if (path.search(new RegExp("^projects/:projectId/regions-of-type-\\d/:regionId$")) == 0) {
      let projectId: string = activatedRoute.snapshot.paramMap.get("projectId");
      this.items = [
        {name: "Projects", routerLink: "/projects"},
        {name: projectId, routerLink: null},
        {name: "Regions", routerLink: `/projects/${projectId}/regions`},
        {name: activatedRoute.snapshot.paramMap.get("regionId"), routerLink: null},
      ];
    } else if (path == "new-project") {
      this.items = [
        {name: "Projects", routerLink: "/projects"},
        {name: "New project", routerLink: null},
      ];
    }
  }
}
