import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'environments/environment';

import {
  ResponseIdioma,
  ResponseAccionBoton,

  ResponseArea,
  ResponseSubArea,
  ResponseEmpleado,
} from '@/admin/models';

@Injectable({
  providedIn: 'root',
})
export class SaludarService {
  constructor(private http: HttpClient) {}



  getAllIdiomas(): Observable<ResponseIdioma> {
    return this.http
      .get<ResponseIdioma>(
        `${environment.apiUrl}/Idioma/ObtenerTodosIdioma`
      )
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

  getAreas(): Observable<ResponseArea> {
    return this.http
      .get<ResponseArea>(`${environment.apiUrl}/Area/ObtenerTodasAreas`)
      .pipe(
        map((respuesta) => {
          return respuesta;
        })
      );
  }

  getSubAreas(idAreas: number): Observable<ResponseSubArea> {
    const requestArea = {
      idArea: idAreas,
    };
    return this.http
      .post<ResponseSubArea>(
        `${environment.apiUrl}/SubArea/ObtenerTodasSubAreas`,
        requestArea
      )
      .pipe(
        map((respuesta) => {
          return respuesta;
        })
      );
  }

  getTodosEmpleados(page: number, cantidadRegistroXpagina: number): Observable<ResponseEmpleado> {
    const requestEmpleado = {
      pagina: page,
      cantidadRegistroXPagina: cantidadRegistroXpagina,
    };
    return this.http
      .post<ResponseEmpleado>(
        `${environment.apiUrl}/Empleado/ObtenerTodosEmpleado`,
        requestEmpleado
      )
      .pipe(
        map((respuesta) => {
          return respuesta;
        })
      );
  }
  borrarEmpleado(idEmpleadoBorrar: number): Observable<ResponseEmpleado> {
    const requestBorrarEmpleado = {
      idEmpleado: idEmpleadoBorrar,
    };
    return this.http
      .post<ResponseEmpleado>(
        `${environment.apiUrl}/Empleado/BorrarEmpleado`,
        requestBorrarEmpleado
      )
      .pipe(
        map((respuesta) => {
          return respuesta;
        })
      );
  }
}
