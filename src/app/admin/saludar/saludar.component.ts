import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { Idioma, Accion } from '@/admin/models';

import { SaludarService } from '@/admin/services/saludar.service';

@Component({
  selector: 'app-saludar',
  templateUrl: './saludar.component.html',
  styleUrls: ['./saludar.component.scss'],
})
export class SaludarComponent implements OnInit {
  public saludoRegistro = new FormGroup({
    nombres: new FormControl('', [
      Validators.required,
      Validators.maxLength(50),
    ]),
    tipoidioma: new FormControl('', Validators.required),
  });

  idiomas: Idioma[] = [];

  acciones: Accion[] = [];

  mensajeSaludo = '';

  constructor(private service: SaludarService) {
    this.getAllIdiomas();
    this.getAllAccionesBoton();
  }

  ngOnInit(): void {}

  getAllIdiomas() {
    this.service.getAllIdiomas().subscribe((result) => {
      this.idiomas = result.idiomas;
    });
  }

  getAllAccionesBoton() {
    this.service.getAllAccionesBoton().subscribe((result) => {
      this.acciones = result.acionesBotones;
    });
  }

  public hasError = (controlName: string, errorName: string) => {
    if (this.saludoRegistro.touched) {
      return this.saludoRegistro.controls[controlName].hasError(errorName);
    }
    return false;
  };

  saludar(boton: any) {
    if (this.saludoRegistro.valid) {

      const nombres = this.saludoRegistro.controls['nombres'].value;
      const tipoIdioma = this.saludoRegistro.controls['tipoidioma'].value;
      const accionBoton = boton.srcElement.attributes.id.value;

      this.service
        .getSaludo(nombres, tipoIdioma, accionBoton)
        .subscribe((result) => {
          this.mensajeSaludo = result.saludo;
          console.log(result);
        });
    }
  }

  limpiar(){
    this.mensajeSaludo='';
  }
}
