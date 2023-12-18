import { Component, OnInit } from '@angular/core';
import { PipeService } from 'src/app/services/pipe.service';
import { debounceTime, Subject } from 'rxjs';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  searchValue = '';
  filtroDebounce = new Subject<string>();

  constructor(
    private readonly pipeService: PipeService,
    private usuarioService: UsuarioService,
    private router: Router
  ) {
    this.filtroDebounce.pipe(debounceTime(200)).subscribe((value) => {
      this.pipeService.SendMessage(value);
    });
  }
  ngOnInit(): void {}

  onFilterClick() {
    this.filtroDebounce.next(this.searchValue);
  }

  onClick() {
    this.usuarioService
      .logout()
      .then(() => {
        this.router.navigate(['/login']);
      })
      .catch((error) => console.log(error));
  }
}
