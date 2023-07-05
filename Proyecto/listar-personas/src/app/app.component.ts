import { Component } from '@angular/core';
import { Persona } from './persona.model';
import { LoggingService } from './LoggingService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'listado de Personas';
  personas: Persona[] = [new Persona("Julian","Carrillo"), new Persona("Juan","Perez"), new Persona("Karla","Lara")];

  constructor(private loggingService:  LoggingService){

  }

  personaAgregada(persona: Persona){
    this.loggingService.enviarMensajeAConsola("Agregamos al arreglo: " + persona.nombre);
    this.personas.push(persona);
  }

}
