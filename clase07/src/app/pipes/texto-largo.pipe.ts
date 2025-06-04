import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textoLargo',
})
export class TextoLargoPipe implements PipeTransform {
  transform(
    value: string,
    cantidadDeCaracteres: number = 12,
    cantidadDePuntos: number = 3
  ): string {
    // Hola
    // Agustin Friadenrich
    // Érase una vez una clase muy aburrida

    if (value.length <= cantidadDeCaracteres) {
      return value;
    }

    const recortado =
      value.slice(0, cantidadDeCaracteres).trim() +
      '.'.repeat(cantidadDePuntos);

    return recortado;
    // Hola
    // Agustin Fria...
    // Érase una ve...
  }
}
