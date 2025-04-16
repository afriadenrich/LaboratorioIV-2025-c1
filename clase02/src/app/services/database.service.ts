import { inject, Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { Auto } from '../classes/auto';
import { SupabaseService } from './supabase.service';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  sb = inject(SupabaseService);
  tablaAutos;
  constructor() {

    
    this.tablaAutos = this.sb.supabase.from("autos");
    console.log(this.sb.supabase);

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
    const {data, error, count , status, statusText } = await this.sb.supabase.from("autos").select("*").lt("precio", 1000)

    const autos = data as Auto[];
    console.log(data, error, count, status, statusText);
    return autos;
  }
  
  async crear(auto: Auto){
    const {data, error, count, status, statusText } = await this.sb.supabase.from("autos").insert(auto);
    console.log(data, error, count, status, statusText);
  }
  
  async modificar(auto: Auto){
    // UPDATE ... WHERE id = n;
    const { data, error, count, status, statusText} = 
    await this.sb.supabase.from("autos").update(auto).eq("id", auto.id); 
    console.log(data, error, count, status, statusText);
  }
  
  
  async eliminar(id?: number){
    if(id === undefined) return;
    
    const { data, error, count, status, statusText} = 
    await this.sb.supabase.from("autos").delete().eq("id", id);
    console.log(data, error, count, status, statusText);
  }

}

/*
Los servicios son de instancia única
*/


