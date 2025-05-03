import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  httpClient = inject(HttpClient);
datos: any;

  constructor() {
    const observable = this.httpClient.get<any>("https://goweather.xyz/weather/"+"Avellaneda");

    observable.subscribe((respuesta) => {
      console.log(respuesta);
      // Cuando llega la respuesta, me interesa dejar de estar subscrito
    });

    // Altertaniva 1 - Desubscribirnos en la callback
    const subscripcion = observable.subscribe((res) => {
      console.log("Con unsubscribe", res);
      subscripcion.unsubscribe();
    })

    // Alternativa 2 - No usar subscribe
    observable.forEach((respuesta) => {
      console.log("FOREACH", respuesta);
    })

    // Alternativa 2.1
    // observable.pipe() ...

    this.hacerUnPost()
   }

   traerDatosNasa(date: string) {
    const observable = this.httpClient.get<any>("https://api.nasa.gov/planetary/apod?api_key=4T9ByHIFiKfOBKc4cJHb8NiC5xLpcgdesalkrKU0&date=" + date);

    return observable;
   }

   // Dónde hago la susbscripcion??


   hacerUnPost(){
    const observable = this.httpClient.post("url", {clave: "valor"}, {
      headers: { Accept: "*", Authorization: "eyj..." },
    });

    observable.subscribe();
   }
  /*
  async traerConFetch() {
   const peticion = await fetch("url...", {
      method: "POST"
    });

    const respuestaParseada = await peticion.json();
  }
    */
}
