import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartFilterExampleComponent } from './chart-filter-example.component';

describe('ChartFilterExampleComponent', () => {
  let component: ChartFilterExampleComponent;
  let fixture: ComponentFixture<ChartFilterExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartFilterExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartFilterExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
