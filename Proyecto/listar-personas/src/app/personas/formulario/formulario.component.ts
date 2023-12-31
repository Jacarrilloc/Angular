import { Component, ElementRef, OnInit} from '@angular/core';
import { Persona } from '../../persona.model';
import { LoggingService } from '../../LoggingService.service';
import { PersonasService } from '../../personas.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  nombreInput: string;
  apellidoInput: string;
  index: number;
  modoEdicion: number;

  constructor(private loggingService: LoggingService,
    private personaService: PersonasService,
    private router: Router,
    private route: ActivatedRoute){
      this.personaService.saludar.subscribe(
        (indice: number) => alert("El indice es: " + (indice+1))
      );
  }

  ngOnInit() {
    this.index = this.route.snapshot.params['id'];
    this.modoEdicion = +this.route.snapshot.queryParams['modoEdicion'];
    if(this.modoEdicion != null && this.modoEdicion ===1 ){
      let persona: Persona = this.personaService.encontrarPersona(this.index);
      this.nombreInput = persona.nombre;
      this.apellidoInput = persona.apellido;
    }
  }

  onGuardarPersona(){
    let persona1 = new Persona(this.nombreInput,this.apellidoInput);
    if(this.modoEdicion != null && this.modoEdicion ===1){
      this.personaService.modificarPersonas(this.index,persona1);
    }else{
    this.personaService.agregarPersona(persona1);
  }
  this.router.navigate(['personas']);
  }

  eliminarPersona(){
    if(this.index != null){
      this.personaService.eliminarPersona(this.index)
    }
    this.router.navigate(['personas']);
  }

}
