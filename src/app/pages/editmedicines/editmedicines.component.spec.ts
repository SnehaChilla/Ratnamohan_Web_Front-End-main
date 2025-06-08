import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditmedicinesComponent } from './editmedicines.component';

describe('EditmedicinesComponent', () => {
  let component: EditmedicinesComponent;
  let fixture: ComponentFixture<EditmedicinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditmedicinesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditmedicinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
