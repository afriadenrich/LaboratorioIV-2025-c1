import { Component, inject, signal } from '@angular/core';
import { DatabaseService } from '../../services/database.service';
import { Auto } from '../../classes/auto';

@Component({
  selector: 'app-listado',
  imports: [],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {
  db = inject(DatabaseService);
  // autos: Auto[] = [];
  autos = signal<Auto[]>([]); // señal que indica cuando se cambia el valor un elemento.
  hayAutos: boolean = false;

  ngOnInit(){
    this.db.listar().then((autos: Auto[]) => {
      this.autos.set(autos);
    });
  }

  eliminar(id?: number){
    this.db.eliminar(id);
  }
}
