import { Mensaje } from './mensaje';
import { Area } from './area';

export interface ResponseArea {
  areas: Area[] ;
  estadoTransaccion: boolean;
  mensaje?: Mensaje;
}
