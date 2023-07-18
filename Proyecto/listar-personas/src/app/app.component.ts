import { Component, OnInit } from '@angular/core';
import { Persona } from './persona.model';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  titulo = 'listado de Personas';

  constructor() { }

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyB4vt3EaGk6de7bmBG-bab9-AzsRJB9yi0",
      authDomain: "listado-personas-9254a.firebaseapp.com"
    })
  }
}
