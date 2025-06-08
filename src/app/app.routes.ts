import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AddCasepaperComponent } from './pages/add-casepaper/add-casepaper.component';
import { AddPrescriptionComponent } from './pages/add-prescription/add-prescription.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { AllappointmentsComponent } from './pages/allappointments/allappointments.component';
import { AllpatientsComponent } from './pages/allpatients/allpatients.component';
import { AppointmentDetailsComponent } from './pages/appointment-details/appointment-details.component';
import { BookAppointmentComponent } from './pages/book-appointment/book-appointment.component';
import { CompounderComponent } from './pages/compounder/compounder.component';
import { DoctorComponent } from './pages/doctor/doctor.component';
import { DoctorRegistrationComponent } from './pages/doctor-registration/doctor-registration.component';
import { CreateDischargecardComponent } from './pages/create-dischargecard/create-dischargecard.component';
import { CreatePatientComponent } from './pages/create-patient/create-patient.component';
import { EditAppointmentComponent } from './pages/edit-appointment/edit-appointment.component';
import { EditPrescriptionComponent } from './pages/edit-prescription/edit-prescription.component';
import { EditpatientComponent } from './pages/editpatient/editpatient.component';
import { PatientdetailsComponent } from './pages/patientdetails/patientdetails.component';
import { SammatilettterComponent } from './pages/sammatilettter/sammatilettter.component';
import { TprChartComponent } from './pages/tpr-chart/tpr-chart.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './auth.guard';
import { AccessDeniedComponent } from './pages/access-denied/access-denied.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },

  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'addCasepaper',
    component: AddCasepaperComponent,
  },
  {
    path: 'addPrescription',
    component: AddPrescriptionComponent,
  },
  {
    path: 'allAppointments',
    component: AllappointmentsComponent,
  },
  {
    path: 'allPatients',
    component: AllpatientsComponent,
  },
  {
    path: 'appointmentDetails',
    component: AppointmentDetailsComponent,
  },
  {
    path: 'bookappointment',
    component: BookAppointmentComponent,
  },
  { path: 'doctor', component: DoctorComponent, canActivate: [AuthGuard], data: { expectedRole: 'doctor' } },
  { path: 'compounder', component: CompounderComponent, canActivate: [AuthGuard], data: { expectedRole: 'compounder' } },
  { path: 'access-denied', component: AccessDeniedComponent },
  {
    path: 'doctorregistration',
    component: DoctorRegistrationComponent,
  },
  {
    path: 'discharge',
    component: CreateDischargecardComponent,
  },
  {
    path: 'createpatient',
    component: CreatePatientComponent,
  },
  {
    path: 'editappointment',
    component: EditAppointmentComponent,
  },
  {
    path: 'editprescription',
    component: EditPrescriptionComponent,
  },
  {
    path: 'editpatient',
    component: EditpatientComponent,
  },
  {
    path: 'patientdetails',
    component: PatientdetailsComponent,
  },
  {
    path: 'sammati',
    component: SammatilettterComponent,
  },
  {
    path: 'tpr',
    component: TprChartComponent,
  },

  {
    path: 'home',
    component: HomeComponent, canActivate: [AuthGuard], data: { expectedRole: 'compounder'}
  },
];
