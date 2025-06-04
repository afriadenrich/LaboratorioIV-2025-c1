import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { HighlightDirective } from '../../directives/highlight.directive';

@Component({
  selector: 'app-ejemplo-directivas',
  imports: [NgClass, NgStyle, HighlightDirective],
  templateUrl: './ejemplo-directivas.component.html',
  styleUrl: './ejemplo-directivas.component.css',
})
export class EjemploDirectivasComponent {
  subrayar = true;
  error = true;
  verde = true;

  clases = 'verde sub';
}
