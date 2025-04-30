import { Injectable } from '@angular/core';
import { createClient } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
supabase;

  constructor() {
    this.supabase = createClient(
      "https://kgwdhjvbrefggbpxzzji.supabase.co",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtnd2RoanZicmVmZ2dicHh6emppIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ4MDQwMjYsImV4cCI6MjA2MDM4MDAyNn0.70j1FH8gdnkCtWISleulRV0zDso2FwFMN7oF09E_TsA"
    );

  }

  async traerTodos() {
    // SELECT * FROM mensajes -> id, mensaje, created_at, id_usuario
    // const { data } = await this.supabase.from("mensajes").select("*")

    // SELECT * FROM mensajes JOIN usuarios WHERE usuarios.id = mensajes.id
    const { data, error } = await this.supabase.from("mensajes")
    .select("id, mensaje, created_at, usuarios (id, nombre, correo)");
    console.log(data, error);
    return data as any[];
  }

  async guardarMensaje(mensaje: string, id_usuario: number) {
    const {data} = await this.supabase.from("mensajes").insert({
      mensaje: mensaje, id_usuario: id_usuario
    })
  }
}
