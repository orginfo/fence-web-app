import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {
  projectId: number;
  regionId: number;
  path: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.router.events
      .filter((event) => event instanceof NavigationEnd)
      .map(() => this.activatedRoute)
      .map((route) => {
        while (route.firstChild) route = route.firstChild;
        return route;
      })
      .filter((route) => route.outlet === 'primary')
      .subscribe(activatedRoute => this.buildBreadcrumb(activatedRoute))
  }

  buildBreadcrumb(activatedRoute: ActivatedRoute): void {
    this.projectId = +activatedRoute.snapshot.paramMap.get("projectId");
    this.regionId = +activatedRoute.snapshot.paramMap.get("regionId");
    this.path = activatedRoute.routeConfig.path;
  }

}
