import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'environments/environment';
import {
  Respuesta,
  Empleado,
  ResponseTipoDocumento,
  ResponseArea,
  ResponseSubArea,
  ResponseEmpleado,
} from '@/admin/models';

@Injectable({
  providedIn: 'root',
})
export class EmpleadoService {
  constructor(private http: HttpClient) {}

  addEmpleado(empleado: Empleado): Observable<Respuesta> {
    const employe = {
      idEmpleado: Number(empleado.idEmpleado),
      idTipoDocumento: empleado.idTipoDocumento,
      documento: empleado.documento,
      nombres: empleado.nombres,
      apellidos: empleado.apellidos,
      idArea: empleado.idArea,
      idSubArea: empleado.idSubArea,
    };

    if (employe.idEmpleado === 0) {
      console.log('empleado nuevo');
      return this.http
        .post<Respuesta>(
          `${environment.apiUrl}/Empleado/CrearEmpleado`,
          employe
        )
        .pipe(
          map((respuesta) => {
            console.log(respuesta);
            return respuesta;
          })
        );
    }

    return this.http
      .post<Respuesta>(
        `${environment.apiUrl}/Empleado/ActualizarEmpleado`,
        employe
      )
      .pipe(
        map((respuesta) => {
          console.log(respuesta);
          return respuesta;
        })
      );
  }

  getTipoDocumentos(): Observable<ResponseTipoDocumento> {
    return this.http
      .get<ResponseTipoDocumento>(
        `${environment.apiUrl}/TiposDocumento/ObtenerTodosTiposDocumentos`
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
