import { Mensaje } from './mensaje';

export interface ResponseSaludo {
  saludo: string;
  estadoTransaccion: boolean;
  mensaje?: Mensaje;
}
