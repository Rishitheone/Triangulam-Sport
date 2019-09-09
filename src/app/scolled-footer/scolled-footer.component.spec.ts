import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScolledFooterComponent } from './scolled-footer.component';

describe('ScolledFooterComponent', () => {
  let component: ScolledFooterComponent;
  let fixture: ComponentFixture<ScolledFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScolledFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScolledFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
