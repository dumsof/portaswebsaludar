import { Mensaje } from './mensaje';
export interface Respuesta {
    estadoTransaccion: boolean;
    mensaje?: Mensaje;
}

