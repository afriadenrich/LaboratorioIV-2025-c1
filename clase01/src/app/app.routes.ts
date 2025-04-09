import { Routes } from '@angular/router';
import { BindeosComponent } from './pages/bindeos/bindeos.component';
import { LoginComponent } from './pages/login/login.component';
import { BienvenidaComponent } from './pages/bienvenida/bienvenida.component';
import { ErrorComponent } from './pages/error/error.component';

export const routes: Routes = [{
    path: "bindeos", 
    component: BindeosComponent,
    title: "Bindeos"
}, {
    path: "login",
    component: LoginComponent,
    title: "Login"
},
{
    path: "bienvenida",
    component: BienvenidaComponent
},
{
    path: "",
    redirectTo: "bienvenida",
    pathMatch: "full"
}, 
{
    path: "**", // Cualquier ruta
    component: ErrorComponent
    // SIEMPRE AL FINAL! ÓRDEN!
}];


