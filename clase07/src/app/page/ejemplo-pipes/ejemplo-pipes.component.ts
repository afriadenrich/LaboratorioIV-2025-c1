import {
  AsyncPipe,
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { Component } from '@angular/core';
import { TextoLargoPipe } from '../../pipes/texto-largo.pipe';

@Component({
  selector: 'app-ejemplo-pipes',
  imports: [
    UpperCasePipe,
    TitleCasePipe,
    CurrencyPipe,
    DatePipe,
    DecimalPipe,
    TextoLargoPipe,
  ],
  templateUrl: './ejemplo-pipes.component.html',
  styleUrl: './ejemplo-pipes.component.css',
})
export class EjemploPipesComponent {
  title = 'clase07';
  numero = 123.12;
  fecha = Date.now();
  nombre = 'agus';
  saludo = '';

  ejemplo1 = 'Hola';
  ejemplo2 = 'Agustin Friadenrich';
  ejemplo3 = 'Érase una vez una clase muy aburrida';
  ejemplo4 = 'Érasen unas veces unas clases muy aburridas';
}
