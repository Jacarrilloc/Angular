import { Component, ElementRef} from '@angular/core';
import { Persona } from '../../persona.model';
import { LoggingService } from '../../LoggingService.service';
import { PersonasService } from '../../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  nombreInput: string;
  apellidoInput: string;


  constructor(private loggingService: LoggingService,
    private personaService: PersonasService){
      this.personaService.saludar.subscribe(
        (indice: number) => alert("El indice es: " + (indice+1))
      );
  }

  onAgregarPersona(){
    let persona1 = new Persona(this.nombreInput,this.apellidoInput);
    //this.loggingService.enviarMensajeAConsola("Enviamos persona con Nombre: " + persona1.nombre)
    this.personaService.agregarPersona(persona1);
  }

}