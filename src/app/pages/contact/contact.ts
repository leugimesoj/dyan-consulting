import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
interface FormularioContacto {
  nombre: string;
  correo: string;
  empresa: string;
  mensaje: string;
}
@Component({
  standalone: true,
  imports: [CommonModule, FormsModule, TranslatePipe],
  selector: 'app-contact',
  styleUrl: './contact.css',
  templateUrl: './contact.html',
})
export class Contact {
  private translate = inject(TranslateService);
  formulario: FormularioContacto = {
    nombre: '',
    correo: '',
    empresa: '',
    mensaje: '',
  };

  enviando = false;
  mensajeEstado = '';
  errorEnvio = false;

  async enviarMensaje(contactForm: NgForm): Promise<void> {
    if (contactForm.invalid || this.enviando) {
      contactForm.control.markAllAsTouched();
      return;
    }

    this.enviando = true;
    this.errorEnvio = false;
    this.mensajeEstado = '';

    try {
      const respuesta = await fetch('https://formsubmit.co/ajax/miguepumas2010@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          nombre: this.formulario.nombre,
          correo: this.formulario.correo,
          empresa: this.formulario.empresa || 'No especificada',
          mensaje: this.formulario.mensaje,
          _subject: 'Nueva solicitud de contacto - DyAN Consulting',
        }),
      });

      const resultado = await respuesta.json();

      if (!respuesta.ok || resultado.success === false) {
        throw new Error('No se pudo enviar el formulario');
      }

      this.mensajeEstado = 'CONTACT.FORM.SUCCESS';
      contactForm.resetForm();
      this.formulario = {
        nombre: '',
        correo: '',
        empresa: '',
        mensaje: '',
      };
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      this.errorEnvio = true;
      this.mensajeEstado = 'No se pudo enviar el mensaje. Inténtalo nuevamente.';
    } finally {
      this.enviando = false;
    }
  }
  irAlFormulario(event: Event): void {
    event.preventDefault();

    document.getElementById('formulario')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
}
