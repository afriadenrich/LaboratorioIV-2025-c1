import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  auth = inject(AuthService);

  loguearse(){
    this.auth.iniciarSesion("a.friadenrich@sistemas-utnfra.com.ar", "123456");
    // this.auth.iniciarSesion("a.friadenrich@sistemas-utnfra.com.ar", "123456");
  }
}
