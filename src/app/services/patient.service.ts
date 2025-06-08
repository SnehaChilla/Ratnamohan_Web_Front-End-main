import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private baseUrl = 'http://localhost:5000/api'; // your Node.js server URL

  constructor(private http: HttpClient) {}

  addPatient(patientData: any) {
    console.log(patientData);
    return this.http.post("http://localhost:5000/api/patients", patientData);
  }}
