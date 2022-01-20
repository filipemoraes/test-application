import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsWithdrawalWidgetComponent } from './cards-withdrawal-widget.component';

describe('CardsWithdrawalWidgetComponent', () => {
  let component: CardsWithdrawalWidgetComponent;
  let fixture: ComponentFixture<CardsWithdrawalWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsWithdrawalWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsWithdrawalWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
