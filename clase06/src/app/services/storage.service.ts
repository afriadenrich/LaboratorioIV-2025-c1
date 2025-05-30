import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(
      'https://kgwdhjvbrefggbpxzzji.supabase.co',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtnd2RoanZicmVmZ2dicHh6emppIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ4MDQwMjYsImV4cCI6MjA2MDM4MDAyNn0.70j1FH8gdnkCtWISleulRV0zDso2FwFMN7oF09E_TsA'
    );

    this.descargar('trenes/tren2.jpg');
  }

  // async crearBucket() {
  //   const { data, error } = await this.supabase.storage.createBucket('prueba', {
  //     public: true,
  //     fileSizeLimit: '10MB',
  //     allowedMimeTypes: ['image/png', 'image/jpeg', 'image/gif'],
  //   });
  //   console.log(data, error);
  // }

  async guardar(archivo: any) {
    const { data, error } = await this.supabase.storage
      .from('labo')
      .upload('trenes/' + archivo.name, archivo);
    console.log(data);

    const url = this.supabase.storage.from('labo').getPublicUrl(data!.path);

    console.log(url);
    const usuario = {
      nombre: 'Agus',
      foto: url.data.publicUrl,
    };
  }

  async descargar(path: string) {
    const { data, error } = await this.supabase.storage
      .from('labo')
      .download(path);

    console.log(data, error);
  }
}
