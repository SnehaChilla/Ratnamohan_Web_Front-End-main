import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sammatilettter',
  standalone: true,
  imports: [],
  templateUrl: './sammatilettter.component.html',
  styleUrl: './sammatilettter.component.css'
})
export class SammatilettterComponent {

  @ViewChild('canvas', { static: false }) canvas!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D;
  private drawing = false;

  ngAfterViewInit() {
    this.ctx = this.canvas.nativeElement.getContext('2d')!;
    this.ctx.strokeStyle = 'black';
    this.ctx.lineWidth = 2;

    // Set canvas size
    this.canvas.nativeElement.width = 400;
    this.canvas.nativeElement.height = 200;
  }

  startDrawing(event: MouseEvent | TouchEvent) {
    this.drawing = true;
    this.draw(event);
  }

  stopDrawing() {
    this.drawing = false;
    this.ctx.beginPath(); // Reset path
  }

  draw(event: MouseEvent | TouchEvent) {
    if (!this.drawing) return;

    const canvas = this.canvas.nativeElement;
    const rect = canvas.getBoundingClientRect();
    const clientX = (event as MouseEvent).clientX ?? (event as TouchEvent).touches[0].clientX;
    const clientY = (event as MouseEvent).clientY ?? (event as TouchEvent).touches[0].clientY;

    const x = clientX - rect.left;
    const y = clientY - rect.top;

    this.ctx.lineTo(x, y);
    this.ctx.stroke();
    this.ctx.beginPath();
    this.ctx.moveTo(x, y);
  }

  clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
  }

  saveSignature() {
    const dataURL = this.canvas.nativeElement.toDataURL('image/png');
    console.log('Signature Data URL:', dataURL);
  }

}
