import { Component, OnInit } from '@angular/core';
import { Persona } from './persona.model';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import { LoginService } from './login/login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  titulo = 'listado de Personas';

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyB4vt3EaGk6de7bmBG-bab9-AzsRJB9yi0",
      authDomain: "listado-personas-9254a.firebaseapp.com"
    })
  }

  isAutenticado(){
    return this.loginService.isAutenticado();
  }

  salir(){
    this.loginService.logout();
  }
}
