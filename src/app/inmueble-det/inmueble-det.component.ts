import { Component, Input, OnInit } from '@angular/core';
import { InmuebleService } from '../_servicio/inmueble.service';
import { InmuebleLargo } from '../_modelo/inmueble';

@Component({
  selector: 'app-inmueble-det',
  standalone: true,
  imports: [],
  templateUrl: './inmueble-det.component.html',
  styleUrl: './inmueble-det.component.css'
})
export class InmuebleDetComponent  {

  @Input()
  id:string='';

  constructor(private inmuebleServicio:InmuebleService){}

  descrip:InmuebleLargo []= [];

  ngOnInit(): void {
    this.descrip = this.inmuebleServicio.obtenerarrayidlargo();
  
  }

}
