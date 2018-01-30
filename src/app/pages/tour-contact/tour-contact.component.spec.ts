import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourContactComponent } from './tour-contact.component';

describe('TourContactComponent', () => {
  let component: TourContactComponent;
  let fixture: ComponentFixture<TourContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
