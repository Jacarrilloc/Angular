import { Component } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {

  nombre: string = 'Julian'
  apellido: string = 'Carrillo'
  edad: number = 23

  /*getEdad(): number{
    return this.edad;
  }*/
  
}
