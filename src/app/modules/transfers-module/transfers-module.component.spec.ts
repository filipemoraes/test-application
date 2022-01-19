import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransfersModuleComponent } from './transfers-module.component';

describe('TransfersModuleComponent', () => {
  let component: TransfersModuleComponent;
  let fixture: ComponentFixture<TransfersModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransfersModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransfersModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
