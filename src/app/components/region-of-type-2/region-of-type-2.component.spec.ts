import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionOfType2Component } from './region-of-type-2.component';

describe('RegionOfType2Component', () => {
  let component: RegionOfType2Component;
  let fixture: ComponentFixture<RegionOfType2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegionOfType2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionOfType2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
