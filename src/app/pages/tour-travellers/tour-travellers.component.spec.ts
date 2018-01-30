import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourTravellersComponent } from './tour-travellers.component';
import { RoutingModule } from "../../routing/routing.module";

describe('TourTravellersComponent', () => {
  let component: TourTravellersComponent;
  let fixture: ComponentFixture<TourTravellersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourTravellersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourTravellersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
