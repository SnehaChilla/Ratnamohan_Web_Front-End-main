import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompounderRegistrationComponent } from './compounder-registration.component';

describe('CompounderRegistrationComponent', () => {
  let component: CompounderRegistrationComponent;
  let fixture: ComponentFixture<CompounderRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompounderRegistrationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompounderRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
