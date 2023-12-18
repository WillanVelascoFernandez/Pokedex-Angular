import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SHA256 } from 'crypto-js';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent {
  username: string = '';
  password: string = '';
  confirm_password: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    const encryptedPassword = SHA256(this.password).toString();
    const hashedPassword = SHA256('1234').toString();
    if (this.username === 'willan' && encryptedPassword === hashedPassword) {
      this.router.navigate(['/lista']);
    } else {
      this.router.navigate(['/login']);
    }
  }
}
