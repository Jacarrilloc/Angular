import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona.model';
import { LoggingService } from '../LoggingService.service';
import { PersonasService } from '../personas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  personas: Persona[] = [];

  constructor(private loggingService:  LoggingService,
    private personaService: PersonasService,
    private router: Router){

  }
  ngOnInit(): void {
    this.personaService.obtenerPersonas()
    .subscribe(
      personas => {
        //Cargamos los datos de la base de datos al arreglo de personas local 
        this.personas = Object.values(personas);
        this.personaService.setPersonas(this.personas);
      }
    );
  }

  agregar(){
    this.router.navigate(['personas/agregar'])
  }

}
