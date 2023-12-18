import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SHA256 } from 'crypto-js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    const encryptedPassword = SHA256(this.password).toString();
    const hashedPassword = SHA256('1234').toString();
    if (this.email === 'willan' && encryptedPassword === hashedPassword) {
      this.router.navigate(['/lista']);
    } else {
      this.router.navigate(['/login']);
    }
  }
}
