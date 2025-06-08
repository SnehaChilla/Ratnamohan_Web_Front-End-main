import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TprChartComponent } from './tpr-chart.component';

describe('TprChartComponent', () => {
  let component: TprChartComponent;
  let fixture: ComponentFixture<TprChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TprChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TprChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
