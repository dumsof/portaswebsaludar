import { Mensaje } from './mensaje';
import { Accion } from './accion';

export interface ResponseAccionBoton {
  acionesBotones: Accion[];
  estadoTransaccion: boolean;
  mensaje?: Mensaje;
}
