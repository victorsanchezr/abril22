import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { InmuebleService } from '../_servicio/inmueble.service';
import { Inmueble } from '../_modelo/inmueble';


@Component({
  selector: 'app-inmueble-lista',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './inmueble-lista.component.html',
  styleUrl: './inmueble-lista.component.css'
})
export class InmuebleListaComponent {
  inmuebleid:Inmueble [] = [];


  constructor(private inmuebleServicio:InmuebleService){}


  ngOnInit(): void {
    this.inmuebleid = this.inmuebleServicio.obtenerarrayid();
  
  }

  




}
