import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveDenyButtonsComponent } from './approve-deny-buttons.component';

describe('ApproveDenyButtonsComponent', () => {
  let component: ApproveDenyButtonsComponent;
  let fixture: ComponentFixture<ApproveDenyButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApproveDenyButtonsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApproveDenyButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
