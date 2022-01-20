import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsPaymentsWidgetComponent } from './cards-payments-widget.component';

describe('CardsPaymentsWidgetComponent', () => {
  let component: CardsPaymentsWidgetComponent;
  let fixture: ComponentFixture<CardsPaymentsWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsPaymentsWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsPaymentsWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
