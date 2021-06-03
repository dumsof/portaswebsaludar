import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'environments/environment';

import { ResponseIdioma, ResponseAccionBoton, ResponseSaludo } from '@/admin/models';

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
    nombres: string,
    idioma: string,
    accion: string
  ): Observable<ResponseSaludo> {
    const requestGetSaludo = {
      idIdioma: idioma,
      idAccion: accion,
      nombre: nombres,
    };

    console.log(requestGetSaludo);
    return this.http
      .post<ResponseSaludo>(
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
