import { Component, Input, input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-error',
  imports: [],
  templateUrl: './form-error.component.html',
  styleUrl: './form-error.component.css',
})
export class FormErrorComponent {
  control = input<FormControl | undefined>();
  @Input() nombre: string = '';
}
