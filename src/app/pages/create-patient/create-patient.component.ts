import { Component } from '@angular/core';
import { PatientService } from '../../services/patient.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-patient',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-patient.component.html',
  styleUrl: './create-patient.component.css',
})
export class CreatePatientComponent {


  date = new Date();
  patient = {
    name: '',
    gender: '',
    DOB: '',
    age: '',
    mobile: '',
    bloodGroup: '',
    email: '',
    address: '',
    city: '',
    referredBy: '',
    createdBy: '',
    createdDate: ''
  };

  constructor(private patientService: PatientService) {}

  submit() {
    console.log(this.patient);
    // Fill createdBy and createdDate here
    const role = localStorage.getItem('role') || 'unknown';  // get role
    this.patient.createdBy = role;  // set createdBy as role
     this.patient.createdDate = new Date().toISOString().slice(0, 19).replace('T', ' ');
    // example: "2025-04-28 14:55:30"

    this.patientService.addPatient(this.patient).subscribe({

      next: (res) => {
        console.log(res);
        alert('Patient added successfully!');
        // reset form if needed
      },
      error: (err) => {
        console.error('Error adding patient', err);
        alert('Error adding patient');
      }
    });
  }
}
