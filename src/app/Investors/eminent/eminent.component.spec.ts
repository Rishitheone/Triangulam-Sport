import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EminentComponent } from './eminent.component';

describe('EminentComponent', () => {
  let component: EminentComponent;
  let fixture: ComponentFixture<EminentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EminentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EminentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
