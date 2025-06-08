import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCasepaperComponent } from './add-casepaper.component';

describe('AddCasepaperComponent', () => {
  let component: AddCasepaperComponent;
  let fixture: ComponentFixture<AddCasepaperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddCasepaperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCasepaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
