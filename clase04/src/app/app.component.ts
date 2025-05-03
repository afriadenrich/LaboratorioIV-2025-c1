import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpService } from './services/http.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'clase04';
  httpService = inject(HttpService);
  datos = signal({url: "", title: ""});

  ngOnInit(){
    const observable = this.httpService.traerDatosNasa(this.traerFechaDeHoyEnString());
    // yyyy-MM-dd

    const subscripcion = observable.subscribe((datos) => {
      console.log(datos);
      this.datos.set(datos);
      subscripcion.unsubscribe();
    })
      
  }

  traerOtraFecha(){
    const observable = this.httpService.traerDatosNasa("2022-12-18");

    const subsiasdasdoa = observable.subscribe((data) => {
      this.datos.set(data);
      subsiasdasdoa.unsubscribe();
    })
  }

  traerFechaDeHoyEnString(){
    const date = new Date();
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed
    const year = date.getFullYear();
    console.log(`${year}-${month}-${day}`);
    return `${year}-${month}-${day}`;
  }
}
