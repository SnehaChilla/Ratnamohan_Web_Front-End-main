import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tpr-chart',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './tpr-chart.component.html',
  styleUrl: './tpr-chart.component.css'
})
export class TprChartComponent {
  columns: string[] = ['Date & Time', 'Temp', 'Pulse', 'R.R.', 'Spo2', 'B.P.', 'Input', 'Urine Output', 'Stool', 'I V Fluids', 'Feeding', 'Aspiration', 'Condition'];
  rows: any[] = [{ values: new Array(this.columns.length).fill('') }];
  cell:any;
  addRow() {
    this.rows.push({ values: new Array(this.columns.length).fill('') });
  }

  addColumn() {
    const newColumn = `Column ${this.columns.length + 1}`;
    this.columns.push(newColumn);
    this.rows.forEach(row => row.values.push(''));
  }



  removeRow(index: number) {
    if (this.rows.length > 1) {
      this.rows.splice(index, 1);
    }
  }


  collectData() {
    let tableData = this.rows.map(row => {
      let rowData: any = {};
      this.columns.forEach((col, index) => {
        rowData[col] = row.values[index];
      });
      return rowData;
    });

    console.log('Collected Table Data:', tableData);
    return tableData;
  }
}
