import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SammatilettterComponent } from './sammatilettter.component';

describe('SammatilettterComponent', () => {
  let component: SammatilettterComponent;
  let fixture: ComponentFixture<SammatilettterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SammatilettterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SammatilettterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
