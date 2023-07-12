import { EventEmitter, Injectable } from "@angular/core";
import { LoggingService } from "./LoggingService.service";
import { Persona } from "./persona.model";
import { DataServices } from "./data.services";

@Injectable()
export class PersonasService{
    personas: Persona[] = [];

    saludar = new EventEmitter<number>();

    constructor(private LoggingService: LoggingService,
      private dataServices: DataServices
      ){

    }

    obtenerPersonas(){
      return this.dataServices.cargarPersonas();
    }

    setPersonas(personas: Persona[]){
      this.personas = personas;
    }

    agregarPersona(persona: Persona){
      this.LoggingService.enviarMensajeAConsola("Agregamos: " + persona.nombre)
      if(this.personas == null){
        this.personas = [];
      }
        this.personas.push(persona);
        this.dataServices.guardarPersonas(this.personas);
      }

      encontrarPersona(index: number){
        let persona: Persona = this.personas[index];
        return persona;
      }

      modificarPersonas(index: number, persona: Persona){
        let persona1 = this.personas[index];
        persona1.nombre = persona.nombre;
        persona1.apellido = persona.apellido;
        this.dataServices.modificarPersona(index,persona);
      }

      eliminarPersona(index: number){
        this.personas.splice(index,1);
        this.dataServices.eliminarPersona(index);
        //se vuelven a guardar el arreglo para regenerar Indices
        this.modificarPersona()
      }

      modificarPersona(){
        if(this.personas != null){
          this.dataServices.guardarPersonas(this.personas);
        }
      }
}