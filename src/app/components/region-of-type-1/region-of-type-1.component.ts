import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-region-of-type-no1',
  templateUrl: './region-of-type-1.component.html',
  styleUrls: ['./region-of-type-1.component.css']
})
export class RegionOfType1Component implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const edit: boolean = this.route.snapshot.paramMap.has('regionId');
    console.log(`need edit region ${edit}`);
  }

}
