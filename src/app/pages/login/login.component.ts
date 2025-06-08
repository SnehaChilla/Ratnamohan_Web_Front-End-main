import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInIt(){
    if (this.auth.isLoggedIn()) {
      const role = this.auth.getRole();
      if (role === 'doctor') {
        this.router.navigate(['/doctor']);
      } else if (role === 'compounder') {
        this.router.navigate(['/compounder']);
      }
    }
  }

  onLogin() {
    this.auth.login(this.email, this.password).subscribe({
      next: (res) => {
        console.log(res);
        localStorage.setItem('role', res.role); // example: 'doctor' or 'compounder'
        this.auth.setToken(res.token, res.role);
        if (res.role === 'doctor') {
          this.router.navigate(['/doctor']);
        } else if (res.role === 'compounder') {
          this.router.navigate(['/compounder']);
        }
      },
      error: () => {
        alert('Invalid Credentials');
      }
    });
  }
}
