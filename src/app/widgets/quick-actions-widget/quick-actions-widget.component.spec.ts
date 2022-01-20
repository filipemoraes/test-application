import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickActionsWidgetComponent } from './quick-actions-widget.component';

describe('QuickActionsWidgetComponent', () => {
  let component: QuickActionsWidgetComponent;
  let fixture: ComponentFixture<QuickActionsWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuickActionsWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickActionsWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
