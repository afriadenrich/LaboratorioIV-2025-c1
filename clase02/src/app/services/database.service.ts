import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { Auto } from '../classes/auto';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  supabase: SupabaseClient<any, "public", any>;
  tablaAutos;
  constructor() {

    this.supabase = createClient(
      "https://kgwdhjvbrefggbpxzzji.supabase.co",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtnd2RoanZicmVmZ2dicHh6emppIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ4MDQwMjYsImV4cCI6MjA2MDM4MDAyNn0.70j1FH8gdnkCtWISleulRV0zDso2FwFMN7oF09E_TsA"
    );
    this.tablaAutos = this.supabase.from("autos");
    console.log(this.supabase);

  }

  async listar(){
    // SELECT * FROM autos
    // SELECT marca, precio FROM autos WHERE precio < 1000
    // lt = less than <
    // gt = greater than >
    // gte y lte = equal >= o <=
    // eq = equal ===
    // limit 
    // offest 
    const {data, error, count , status, statusText } = await this.supabase.from("autos").select("*").lt("precio", 1000)

    const autos = data as Auto[];
    console.log(data, error, count, status, statusText);
    return autos;
  }
  
  async crear(auto: Auto){
    const {data, error, count, status, statusText } = await this.supabase.from("autos").insert(auto);
    console.log(data, error, count, status, statusText);
  }
  
  async modificar(auto: Auto){
    // UPDATE ... WHERE id = n;
    const { data, error, count, status, statusText} = 
    await this.supabase.from("autos").update(auto).eq("id", auto.id); 
    console.log(data, error, count, status, statusText);
  }
  
  
  async eliminar(id: number){
    const { data, error, count, status, statusText} = 
    await this.supabase.from("autos").delete().eq("id", id);
    console.log(data, error, count, status, statusText);
  }

}

/*
Los servicios son de instancia única
*/


