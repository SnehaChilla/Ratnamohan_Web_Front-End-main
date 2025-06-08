import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-compounder',
  standalone: true,
  imports: [],
  templateUrl: './compounder.component.html',
  styleUrl: './compounder.component.css'
})
export class CompounderComponent {

  constructor(public auth: AuthService) {}

  logout() {
    this.auth.logout();
  }

}
