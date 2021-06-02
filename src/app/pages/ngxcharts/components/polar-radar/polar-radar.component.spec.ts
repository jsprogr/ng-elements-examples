import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolarRadarComponent } from './polar-radar.component';

describe('PolarRadarComponent', () => {
  let component: PolarRadarComponent;
  let fixture: ComponentFixture<PolarRadarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolarRadarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolarRadarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
