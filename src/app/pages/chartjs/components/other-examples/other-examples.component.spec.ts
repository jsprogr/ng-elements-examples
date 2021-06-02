import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherExamplesComponent } from './other-examples.component';

describe('OtherExamplesComponent', () => {
  let component: OtherExamplesComponent;
  let fixture: ComponentFixture<OtherExamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherExamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
