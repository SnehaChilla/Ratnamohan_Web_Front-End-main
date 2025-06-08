import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompounderComponent } from './compounder.component';

describe('CompounderComponent', () => {
  let component: CompounderComponent;
  let fixture: ComponentFixture<CompounderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompounderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompounderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
