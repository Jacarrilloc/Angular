import { EventEmitter, Injectable } from "@angular/core";
import { LoggingService } from "./LoggingService.service";
import { Persona } from "./persona.model";

@Injectable()
export class PersonasService{
    personas: Persona[] = [new Persona("Julian","Carrillo"), new Persona("Juan","Perez"), new Persona("Karla","Lara")];

    constructor(private LoggingService: LoggingService){

    }

    saludar = new EventEmitter<number>();

    agregarPersona(persona: Persona){
      this.LoggingService.enviarMensajeAConsola("Agregamos: " + persona.nombre)
        this.personas.push(persona);
      }

      encontrarPersona(index: number){
        let persona: Persona = this.personas[index];
        return persona;
      }

      modificarPersonas(index: number, persona: Persona){
        let persona1 = this.personas[index];
        persona1.nombre = persona.nombre;
        persona1.apellido = persona.apellido;
      }

      eliminarPersona(index: number){
        this.personas.splice(index,1);
      }
}