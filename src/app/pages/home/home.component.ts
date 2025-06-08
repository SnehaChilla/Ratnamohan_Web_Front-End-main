import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private router: Router) {}

  addPatient() {
    this.router.navigate(['/createpatient']);
  }

  bookApt() {
    alert('Select patient from all Patients');
  }

  allPatients() {}

  allApts() {
    this.router.navigate(['/allAppointments']);
  }
}
