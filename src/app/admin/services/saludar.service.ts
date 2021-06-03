import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'environments/environment';

import { ResponseIdioma, ResponseAccionBoton } from '@/admin/models';

@Injectable({
  providedIn: 'root',
})
export class SaludarService {
  constructor(private http: HttpClient) {}

  getAllIdiomas(): Observable<ResponseIdioma> {
    return this.http
      .get<ResponseIdioma>(`${environment.apiUrl}/Idioma/ObtenerTodosIdioma`)
      .pipe(
        map((respuesta) => {
          return respuesta;
        })
      );
  }

  getAllAccionesBoton(): Observable<ResponseAccionBoton> {
    return this.http
      .get<ResponseAccionBoton>(
        `${environment.apiUrl}/Accion/ObtenerTodasAccionesBoton`
      )
      .pipe(
        map((respuesta) => {
          return respuesta;
        })
      );
  }

  getSaludo(
    idioma: string,
    accion: string,
    nombres: string
  ): Observable<string> {
    const requestGetSaludo = {
      idIdioma: idioma,
      idAccion: accion,
      nombre: nombres,
    };
    return this.http
      .post<string>(
        `${environment.apiUrl}/Saludo/ObtenerSaludoIdioma`,
        requestGetSaludo
      )
      .pipe(
        map((respuesta) => {
          return respuesta;
        })
      );
  }
}
