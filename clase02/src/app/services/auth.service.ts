import { inject, Injectable } from '@angular/core';
import { SupabaseService } from './supabase.service';
import { User } from '@supabase/supabase-js';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  sb = inject(SupabaseService);
  router = inject(Router);

  usuarioActual: User | null = null;

  constructor() { 
    // Saber si el usuario está logueado o no.
    this.sb.supabase.auth.onAuthStateChange((event, session) => {
      console.log(event, session);

      if(session === null) { // Se cierra sesión o no hay sesión
        this.usuarioActual = null;
        // Redirigir al login
        this.router.navigateByUrl("/login");
      } else { // si hay sesión
        this.usuarioActual = session.user;
        // Redirigir al home
        this.router.navigateByUrl("/");
      }
    });
  }

  // Crear una cuenta
  async crearCuenta(correo: string, contraseña: string){
   const { data, error } = await this.sb.supabase.auth.signUp({
      email: correo,
      password: contraseña 
    });

    // console.log(data, error);
  }
  
  // Iniciar sesión
  async iniciarSesion(correo: string, contraseña: string){
    const { data, error } = await this.sb.supabase.auth.signInWithPassword({
       email: correo,
       password: contraseña 
     });
 
    //  console.log(data, error);
   }
  

  // Cerrar sesión
  async cerrarSesion(){
    const { error} = await this.sb.supabase.auth.signOut();
    // console.log(error);
  }


}
