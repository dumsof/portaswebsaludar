import { Mensaje } from './mensaje';
import { Empleado } from './empleado';

export interface ResponseEmpleado {
  empleados: Empleado[];
  cantidadPaginas: number;
  estadoTransaccion: boolean;
  mensaje?: Mensaje;
}
