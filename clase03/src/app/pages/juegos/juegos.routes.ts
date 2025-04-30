import { Routes } from '@angular/router';
import { AhorcadoComponent } from '../ahorcado/ahorcado.component';
import { PreguntadosComponent } from '../preguntados/preguntados.component';

const routes: Routes = [
  { path: 'ahorcado', component: AhorcadoComponent }, // juegos/ahorcado
  { path: 'preguntados', component: PreguntadosComponent }, //juegos/preguntados
];

export { routes };
