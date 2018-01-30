import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourDetailsComponent } from './tour-details.component';
import { RoutingModule } from "../../routing/routing.module";

describe('TourDetailsComponent', () => {
  let component: TourDetailsComponent;
  let fixture: ComponentFixture<TourDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
