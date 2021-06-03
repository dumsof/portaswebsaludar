import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';

import {Idioma, Accion } from '@/admin/models';


@Component({
  selector: 'app-saludar',
  templateUrl: './saludar.component.html',
  styleUrls: ['./saludar.component.scss']
})
export class SaludarComponent implements OnInit {


  public saludoRegistro = new FormGroup({

    nombres: new FormControl('', [
      Validators.required,
      Validators.maxLength(50),
    ]),
    gender: new FormControl('',  Validators.required),
  });

  idiomas: Idioma[] = [
    { idIdioma : '1', descripcionIdioma : 'Español'},
    { idIdioma : '2', descripcionIdioma : 'Ingles'}
  ];

  acciones: Accion[] = [
    { idAccion : '1', descripcionAccion : 'Saludar'},
    { idAccion : '2', descripcionAccion : 'Nombre'},
    { idAccion : '3', descripcionAccion : 'Despedirse'}
  ];


  constructor() { }

  ngOnInit(): void {
  }

  public hasError = (controlName: string, errorName: string) => {
    if (this.saludoRegistro.touched) {
      return this.saludoRegistro.controls[controlName].hasError(errorName);
    }
    return false;
  };

  saludar(boton: any){

    if (this.saludoRegistro.valid) {
      console.log(this.saludoRegistro.value);
    }

    console.log(boton.srcElement.attributes.id);
  }

}
