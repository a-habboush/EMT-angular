import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountReqCardComponent } from './count-req-card.component';

describe('CountReqCardComponent', () => {
  let component: CountReqCardComponent;
  let fixture: ComponentFixture<CountReqCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountReqCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountReqCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
