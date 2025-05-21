import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import Swal from 'sweetalert2';
import { FormErrorComponent } from "../../copmonents/form-error/form-error.component";

@Component({
  selector: 'app-registro',
  imports: [FormsModule, ReactiveFormsModule, FormErrorComponent],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css',
})
export class RegistroComponent {
  // nombre = new FormControl('---', {
  //   nonNullable: true,
  //   validators: [
  //     Validators.minLength(3),
  //     Validators.maxLength(10),
  //     Validators.required,
  //   ],
  // });
  dni = new FormControl('', {
    validators: [
      Validators.required,
      Validators.minLength(7),
      Validators.maxLength(8),
      Validators.pattern(/^[0-9]+$/),
    ],
  });

  formulario = new FormGroup({
    nombre: new FormControl('', {
      validators: [
        Validators.minLength(3),
        Validators.maxLength(10),
        Validators.required,
      ],
    }),
    apellido: new FormControl('', {
      validators: [Validators.required, Validators.maxLength(15)],
    }),
    dni: this.dni,
    fechaNacimiento: new FormControl(null, { validators: [Validators.required, this.validarMayorDeEdad, this.validarEdad(18)]})
  });

  validarEdad(edad: number){
    return (control: AbstractControl) : ValidationErrors | null => {
      // control.value = 2025-05-01
      const fecha = new Date(control.value);
      const fechaActual = new Date();
  
      if(fechaActual.getFullYear() - fecha.getFullYear() >= edad) {
        // Si es true, todo ok!!!
        return null;
      } else {
        return { mayor: true };
      }
    }
  }

  validarMayorDeEdad(control: AbstractControl) : ValidationErrors | null {
    // control.value = 2025-05-01
    const fecha = new Date(control.value);
    const fechaActual = new Date();

    if(fechaActual.getFullYear() - fecha.getFullYear() >= 18) {
      // Si es true, todo ok!!!
      return null;
    } else {
      return { mayor: true };
    }
  }

  ngOnInit() {
    // this.formulario.valueChanges.subscribe((valor) => {
    //   console.log(valor);
    // });
    this.formulario.statusChanges.subscribe((valor) => {
      console.log(valor);
      console.log(this.formulario.controls.fechaNacimiento);
    });
  }

  enviar() {
    if (this.formulario.valid) {
      Swal.fire('Todo ok', '', 'success');
    } else {
      Swal.fire('Falló', '', 'error');
    }

    // if (this.formulario.invalid) {
    //   console.log('No es válido');
    // } else {
    //   console.log('Puedo enviar');
    // }
  }
}
