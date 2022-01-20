import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsListWidgetComponent } from './cards-list-widget.component';

describe('CardsListWidgetComponent', () => {
  let component: CardsListWidgetComponent;
  let fixture: ComponentFixture<CardsListWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsListWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsListWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
