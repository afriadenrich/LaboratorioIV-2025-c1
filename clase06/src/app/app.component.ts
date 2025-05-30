import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StorageService } from './services/storage.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  storage = inject(StorageService);

  archivoNgModel? = null;
  archivoOnChange? = null;

  ngOnInit() {
    // this.storage.crearBucket();
  }

  subir() {
    // ESTO NO SIRVE. NOS DA UN FAKE PATH
    //console.log(this.archivoNgModel);
    //this.storage.guardar(this.archivoNgModel);

    if (this.archivoOnChange) {
      this.storage.guardar(this.archivoOnChange);
    }
  }

  onCambioDeArchivo(event: any) {
    const archivo = event.target.files[0];
    console.log(archivo);
    this.archivoOnChange = archivo;
  }
}
