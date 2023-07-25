import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'control-clientes';

}

export const enviroments = {
    production: false;
    firestore:{
      apiKey: "AIzaSyChT0uTORDxiw_4VIqeJl3AHh3bnGXBdxU",
    authDomain: "control-clientes-c0162.firebaseapp.com",
    projectId: "control-clientes-c0162",
    storageBucket: "control-clientes-c0162.appspot.com",
    messagingSenderId: "13249087232"
    }
}
