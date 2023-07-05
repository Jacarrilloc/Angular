import { Persona } from "./persona.model";

export class PersonasService{
    personas: Persona[] = [new Persona("Julian","Carrillo"), new Persona("Juan","Perez"), new Persona("Karla","Lara")];

    agregarPersona(persona: Persona){
        this.personas.push(persona);
      }
}