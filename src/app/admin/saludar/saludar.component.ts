import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';

import {Idioma } from '@/admin/models';


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
    ])
  });

  idioma: Idioma[] = [
    { idIdioma : '1', descripcionIdioma : 'Español'},
    { idIdioma : '2', descripcionIdioma : 'Ingles'}
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

}
