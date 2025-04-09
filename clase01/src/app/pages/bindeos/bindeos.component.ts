import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bindeos',
  imports: [FormsModule],
  templateUrl: './bindeos.component.html',
  styleUrl: './bindeos.component.css'
})
export class BindeosComponent {
  title: string = 'Labo IV';
  urlImagen: string = "https://upload.wikimedia.org/wikipedia/commons/6/67/UTN_logo.jpg";
  edad: number | undefined; // sin valor por defecto, es undefined
  objeto: any; // any = cualquier cosa

  cambiarTitle(title: string) {
    this.title = title;
  }
}

// Typescript = Javascript tipado: string, number, boolean, object, null, undefined, Persona, etc.

// variable: tipo de dato