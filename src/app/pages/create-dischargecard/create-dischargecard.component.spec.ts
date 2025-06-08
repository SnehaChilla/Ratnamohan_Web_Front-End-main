import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDischargecardComponent } from './create-dischargecard.component';

describe('CreateDischargecardComponent', () => {
  let component: CreateDischargecardComponent;
  let fixture: ComponentFixture<CreateDischargecardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateDischargecardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateDischargecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
