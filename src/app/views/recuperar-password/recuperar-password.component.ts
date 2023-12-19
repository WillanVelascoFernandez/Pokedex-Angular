import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SHA256 } from 'crypto-js';
import { UsuarioService } from '../../services/usuario.service';
@Component({
  selector: 'app-recuperar-password',
  templateUrl: './recuperar-password.component.html',
  styleUrls: ['./recuperar-password.component.css'],
})
export class RecuperarPasswordComponent implements OnInit {
  formRecuperar: FormGroup;

  constructor(private usuarioService: UsuarioService, private router: Router) {
    this.formRecuperar = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    this.usuarioService
      .forgotPassword(this.formRecuperar.value)
      .then((response) => {
        console.log(response);
        // alert('Revise su bandeja de entrada de su correo');
        this.router.navigate(['/mensaje_email']);
      })
      .catch((error) => {
        console.log(error);
        alert('Correo invalido o no encontrado');
      });
  }

  onClick() {
    this.usuarioService
      .loginWithGoogle()
      .then((response) => {
        console.log(response);
        this.router.navigate(['/lista']);
      })
      .catch((error) => console.log(error));
  }
}
