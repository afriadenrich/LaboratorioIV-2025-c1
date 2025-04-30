import { Routes } from '@angular/router';
// import { HomeComponent } from './pages/home/home.component';
// import { LoginComponent } from './pages/login/login.component';
import { JuegosComponent } from './pages/juegos/juegos.component';
import { ChatComponent } from './pages/chat/chat.component';
import { logueadoGuard } from './guards/logueado.guard';
// import { AhorcadoComponent } from './pages/ahorcado/ahorcado.component';
// import { PreguntadosComponent } from './pages/preguntados/preguntados.component';

// Ruteo Hijo -> Mostrar una ruta y sus hijas
// Los componentes no se carguen todos juntos - Lazy loading
// Denegar o permitir la navegación a ciertas rutas
export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then(
        (archivo) => archivo.HomeComponent
      ),
      canActivate: [logueadoGuard]
    },
    {
      path: 'login',
      loadComponent: () =>
        import('./pages/login/login.component').then(
          (archivo) => archivo.LoginComponent
        ),
      },
      {
        title: 'Juegos',
        component: JuegosComponent,
        path: 'juegos', //juegos/ruta-hija
        loadChildren: () => import("./pages/juegos/juegos.routes").then((archivo) => archivo.routes),
        canActivateChild: [logueadoGuard]
  },
  //   {
  //     title: 'Juegos',
  //     component: JuegosComponent,
  //     path: 'juegos', //juegos/ruta-hija
  //     children: [
  //       { path: 'ahorcado', component: AhorcadoComponent }, // juegos/ahorcado
  //       { path: 'preguntados', component: PreguntadosComponent }, //juegos/preguntados
  //     ],
  //   },
  //   {
  //     path: 'juegos',
  //     children: [
  //       { path: 'ahorcado', component: AhorcadoComponent }, // juegos/ahorcado
  //       { path: 'preguntados', component: PreguntadosComponent }, //juegos/preguntados
  //     ],
  //   },
  { path: 'chat', component: ChatComponent, canActivate: [logueadoGuard] },
  { path: '**', pathMatch: 'full', component: JuegosComponent },
];

// () => { console.log("x")  }

// () => return console.log("x")
