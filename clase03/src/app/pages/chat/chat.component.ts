import { Component, inject, signal } from '@angular/core';
import { SupabaseService } from '../../services/supabase.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat',
  imports: [FormsModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css',
})
export class ChatComponent {
  supabaseService = inject(SupabaseService);
  mensajes = signal<any>([]);
  mensaje = "";

  constructor() {
    this.supabaseService.traerTodos().then((data) => {
      this.mensajes.set([...data]);
    });
  }

  ngOnInit() {
    // schema-db-changes -> schema public
    // table-db-changes -> tabla mensajes
    const canal = this.supabaseService.supabase.channel('table-db-changes');
    canal.on(
      'postgres_changes',
      {
        // event: * (todos), INSERT, UPDATE, DELETE
        event: 'INSERT',
        schema: 'public',
        table: 'mensajes',
      },
      async (cambios: any) => {
        console.log(cambios);
        const {data} = await this.supabaseService.supabase.from("usuarios").select("nombre").eq("id", cambios.new["id_usuario"]);
        cambios.new.usuarios = { nombre: data![0].nombre}
        
        this.mensajes.update((valor_anterior) => {
          valor_anterior.push(cambios.new);
          return valor_anterior;
        })
      }
    );
    canal.subscribe();
  }

  enviar() {
    this.supabaseService.guardarMensaje(this.mensaje, 2);
  }
}
