import { Injectable } from "@angular/core";
import { LoggingService } from "./LoggingService.service";
import { Persona } from "./persona.model";

@Injectable()
export class PersonasService{
    personas: Persona[] = [new Persona("Julian","Carrillo"), new Persona("Juan","Perez"), new Persona("Karla","Lara")];

    constructor(private LoggingService: LoggingService){

    }

    agregarPersona(persona: Persona){
      this.LoggingService.enviarMensajeAConsola("Agregamos: " + persona.nombre)
        this.personas.push(persona);
      }
}