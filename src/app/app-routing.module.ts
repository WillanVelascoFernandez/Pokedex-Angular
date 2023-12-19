import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonListComponent } from './views/body/pokemon-list/pokemon-list.component';
import { LoginComponent } from './views/login/login.component';
import { RegistroComponent } from './views/registro/registro.component';
import { FormsModule } from '@angular/forms';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { RecuperarPasswordComponent } from './views/recuperar-password/recuperar-password.component';


const routes: Routes = [
  {
    path: 'lista',
    component: PokemonListComponent,
    ...canActivate(() => redirectUnauthorizedTo(['/login'])),
  },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'recuperar', component: RecuperarPasswordComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
