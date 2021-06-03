import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D3rtComponent } from './d3rt.component';

describe('D3rtComponent', () => {
  let component: D3rtComponent;
  let fixture: ComponentFixture<D3rtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D3rtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D3rtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
