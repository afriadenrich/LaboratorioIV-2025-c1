import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DatabaseService } from './services/database.service';
import { Auto } from './classes/auto';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'clase02';
  databaseService = inject(DatabaseService);
  auth = inject(AuthService);
  
  constructor(){
    this.databaseService.listar();
    let auto = new Auto("VW", "Toyota", 500);
    auto.id = 1; 
    // this.databaseService.crear(auto);
   // this.databaseService.modificar(auto);
   this.databaseService.eliminar(3);
  }
}
