import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegistroComponent } from './pages/registro/registro.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RegistroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'clase05';
}
