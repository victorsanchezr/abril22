import { Component, Input, OnInit } from '@angular/core';

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

}
