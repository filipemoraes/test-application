import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsNavigationWidgetComponent } from './cards-navigation-widget.component';

describe('CardsNavigationWidgetComponent', () => {
  let component: CardsNavigationWidgetComponent;
  let fixture: ComponentFixture<CardsNavigationWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsNavigationWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsNavigationWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
