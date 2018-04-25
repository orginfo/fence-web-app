import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionOfType1Component } from './region-of-type-1.component';

describe('RegionOfType1Component', () => {
  let component: RegionOfType1Component;
  let fixture: ComponentFixture<RegionOfType1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegionOfType1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionOfType1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
