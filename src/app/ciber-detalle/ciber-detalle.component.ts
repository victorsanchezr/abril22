import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ciber-detalle',
  standalone: true,
  imports: [],
  templateUrl: './ciber-detalle.component.html',
  styleUrl: './ciber-detalle.component.css'
})
export class CiberDetalleComponent {
  @Input()
  id:string = '';


  descrip = [
    {id:'1',nombre:'Expliación Hacking Etico'},
    {id:'2',nombre:'Expliación Legislacion de seguridad en Europa'},
    {id:'3',nombre:'Expliación ¿Como evitar que te Hackeen la cuenta?'},
    {id:'4',nombre:'Expliación ¿Que es phising?'},



  ]

}
