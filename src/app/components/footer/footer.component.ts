import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  constructor(private formBuilder: FormBuilder) {}

  formulario: FormGroup = this.formBuilder.group({
    nombre: ['', Validators.required],
    correo: ['', [Validators.required, Validators.email]],
    telefono: ['', Validators.required],
    empresa: ['', Validators.required],
    mensaje: ['', Validators.required],
  });

  onSubmit() {
    if (this.formulario.valid) {
      console.log(this.formulario.value);
      // Aquí puedes enviar los datos del formulario a tu servidor o API
    } else {
      console.log('Formulario no válido');
    }
  }
}
