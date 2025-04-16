import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  supabase: SupabaseClient<any, "public", any>;
  
  constructor() { 

    this.supabase = createClient(
      "https://kgwdhjvbrefggbpxzzji.supabase.co",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtnd2RoanZicmVmZ2dicHh6emppIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ4MDQwMjYsImV4cCI6MjA2MDM4MDAyNn0.70j1FH8gdnkCtWISleulRV0zDso2FwFMN7oF09E_TsA"
    );
  }
}
