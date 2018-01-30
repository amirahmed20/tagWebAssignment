import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourTripsComponent } from './tour-trips.component';

describe('TourTripsComponent', () => {
  let component: TourTripsComponent;
  let fixture: ComponentFixture<TourTripsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourTripsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourTripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
