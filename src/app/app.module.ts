import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PokemonListComponent } from './views/body/pokemon-list/pokemon-list.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { CardsComponent } from './views/body/cards/cards.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './views/footer/footer.component';
import { PokemonService } from './services/pokemon.service';
import { HeaderComponent } from './views/header/header.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ButtonPokemonComponent } from './views/body/button-pokemon/button-pokemon.component';
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipeService } from './services/pipe.service';
import { LoginComponent } from './views/login/login.component';
import { RegistroComponent } from './views/registro/registro.component';
import { UsuarioService } from './services/usuario.service';
// import { AngularFireModule } from '@angular/fire/compat'
// import { AngularFireAuthModule } from '@angular/fire/compat/auth'
import { environment } from './environments/environment';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { RecuperarPasswordComponent } from './views/recuperar-password/recuperar-password.component';
import { MensajeRecuperarPasswordComponent } from './views/mensaje-recuperar-password/mensaje-recuperar-password.component';


@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    CardsComponent,
    FooterComponent,
    HeaderComponent,
    ButtonPokemonComponent,
    LoginComponent,
    RegistroComponent,
    RecuperarPasswordComponent,
    MensajeRecuperarPasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // AngularFireModule.initializeApp(environment.firebase),
    // AngularFireAuthModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTabsModule,
    MatCardModule,
    HttpClientModule,
    MatDialogModule,
    InfiniteScrollModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [PokemonService, PipeService, UsuarioService],
  bootstrap: [AppComponent, LoginComponent],
})
export class AppModule {}
