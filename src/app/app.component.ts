import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { InmuebleListaComponent } from './inmueble-lista/inmueble-lista.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,InmuebleListaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'abril22';
}
