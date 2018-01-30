import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToursComponent } from './tours.component';
import { RoutingModule } from "../../routing/routing.module";

describe('ToursComponent', () => {
  let component: ToursComponent;
  let fixture: ComponentFixture<ToursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('true is true', () => expect(false).toBe(true));
});
