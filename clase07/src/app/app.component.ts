import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EjemploPipesComponent } from './page/ejemplo-pipes/ejemplo-pipes.component';
import { EjemploDirectivasComponent } from './page/ejemplo-directivas/ejemplo-directivas.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EjemploPipesComponent, EjemploDirectivasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
